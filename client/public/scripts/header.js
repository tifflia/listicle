const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'Party Games'

const headerCaption = document.createElement('p')
headerCaption.className = 'header-caption'
headerCaption.textContent = 'Archiving board games that are reliably great for parties.'

headerLeft.appendChild(headerTitle)
headerLeft.appendChild(headerCaption)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'All Games'
// redirects window to the root page
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)