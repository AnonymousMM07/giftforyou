function revealRose() {
    const roseSection = document.getElementById('roseSection')
    const button = document.getElementById('revealButton')

    roseSection.style.opacity = '1'
    roseSection.style.transform = 'scale(1)'
    roseSection.classList.remove('hidden')
    button.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function () {
    const subTextElement = document.getElementById('subText')
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (isMobile) {
        subTextElement.textContent = "Так же работает на компьютере"
    } else {
        subTextElement.textContent = "Так же работает на телефоне"
    }

    subTextElement.style.marginTop = "10px"
    subTextElement.style.fontSize = "1rem"
    subTextElement.style.color = "#d63447"
    subTextElement.style.opacity = "0.8"
})