const panels = document.querySelectorAll('.panel');

// removeclick()

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeclick()
        panel.classList.add('active')
    })
})

const removeclick = (panel) => {
    panels.forEach((panel) => {
        panel.classList.remove("active")
})}