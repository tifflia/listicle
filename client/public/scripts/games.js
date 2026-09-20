const renderGames = async () => {
    const response = await fetch('/games')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')
    if (data) {
        data.map(game => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url("${game.image}")`

            const name = document.createElement('h3')
            name.textContent = game.name
            bottomContainer.appendChild(name)

            const description = document.createElement('p')
            description.textContent = game.shortDescription
            bottomContainer.appendChild(description)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/games/${game.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Games Available 😞'
        mainContent.appendChild(message)
    }
}

renderGames()

// write "Label: value" into an element, with the label in bold
const setDetail = (id, label, value) => {
    const element = document.getElementById(id)
    const boldLabel = document.createElement('strong')
    boldLabel.textContent = `${label}: `
    element.replaceChildren(boldLabel, document.createTextNode(value))
}

const renderGame = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/games')
    const data = await response.json()
    const gameContent = document.getElementById('game-content')
    let game
    // if data isn't null, find the game using ID
    game = data.find(game => game.id === requestedID)
    if (game) {
        document.getElementById('image').src = game.image
        document.getElementById('name').textContent = game.name
        setDetail('players', 'Players', game.minPlayers + '-' + game.maxPlayers)
        setDetail('playingTime', 'Playing Time', game.playingTime)
        setDetail('age', 'Age', game.minAge + '+')
        setDetail('complexity', 'Complexity', game.complexity + ' / 5')
        setDetail('mechanics', 'Mechanics', game.mechanics.join(', '))
        document.getElementById('description').textContent = game.description
        document.title = `${game.name} - Party Games`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Games Available 😞'
        gameContent.appendChild(message)
    }
}

renderGame()