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

            topContainer.style.backgroundImage = `url(${game.image})`

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