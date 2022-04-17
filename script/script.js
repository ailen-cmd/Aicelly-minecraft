document.querySelectorAll('a.hashlink').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)

        const ScrollTarget = document.getElementById(href)

        const topOffset = 100
        const elementPosition = ScrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})