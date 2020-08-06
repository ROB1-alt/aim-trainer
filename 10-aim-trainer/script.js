
// Set up
const containerElement = document.querySelector('.aim-trainer')
const scoreElement = containerElement.querySelector('.score')
const actionElement = containerElement.querySelector('.action')
const timerElement = containerElement.querySelector('.timer')
const targetElement = containerElement.querySelector('.target')

let score = 0
let timeLeft = null

// Start a game
const start = () =>
{
    scoreElement.style.display = 'block'
    actionElement.style.display = 'none'
    timerElement.style.display = 'block'
    targetElement.style.display = 'block'

    timeLeft = 6

    score = 0
    scoreElement.textContent = `${score}pts`

    targetElement.style.top = `${Math.random() * 100}%`
    targetElement.style.left = `${Math.random() * 100}%`

    tick()
}

// Tick
const tick = () =>
{
    timeLeft--

    if(timeLeft === 0)
    {
        end()
    }
    else
    {
        timerElement.textContent = `${timeLeft}s`

        window.setTimeout(tick, 1000)
    }
}

// End game
const end = () =>
{
    scoreElement.style.display = 'block'
    actionElement.style.display = 'block'
    timerElement.style.display = 'none'
    targetElement.style.display = 'none'
}

// Hit target
const hit = () =>
{
    score++
    scoreElement.textContent = `${score}pts`

    targetElement.style.top = `${Math.random() * 100}%`
    targetElement.style.left = `${Math.random() * 100}%`
}

actionElement.addEventListener('click', start)
targetElement.addEventListener('mouseenter', hit)