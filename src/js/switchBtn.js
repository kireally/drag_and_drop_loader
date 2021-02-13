export const switcher = document.querySelector('.list-of-nodes__switch-btn')

switcher.addEventListener('click', () => {
    switcher.classList.toggle('list-of-nodes__switch-btn--on')
})