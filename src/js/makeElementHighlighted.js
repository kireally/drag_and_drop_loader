  export const makeTagHighlighted = (element) => {
    element.classList.toggle('highlighted-tag')

    setTimeout(() => {
        element.classList.toggle('highlighted-tag')
    }, 1500)
}


export const makeTextHighlighted = (element) => {
    element.classList.add('highlited-text')

    setTimeout(() => {
        element.classList.remove('highlited-text')
    }, 1500)
}