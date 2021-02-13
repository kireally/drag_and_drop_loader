import {makeTextHighlighted, makeTagHighlighted} from './makeElementHighlighted.js'
import {imageArea} from './dropArea.js'

const listOfNodes = document.querySelector('.list-of-nodes__main')
let id = 0


export const addNote = () => {
    const inputField = document.querySelector('.modal-confirm__input')
    const element = document.createElement('p')
    
    element.innerHTML = inputField.value
    element.classList.add(`${id}`)
    listOfNodes.append(element)
    makeTextHighlighted(element)

    element.addEventListener('click', () => {
        const highlitedTag = imageArea.getElementsByClassName(`${element.className}`.match(/\d/g).join(''))
        makeTagHighlighted(highlitedTag[0])
    })
}

export const addTag = (topPosition,leftPosition) => {
    const img = document.createElement('div')
    img.style.top = topPosition + 'px'
    img.style.left = leftPosition + 'px'
    img.classList.add('img-tag')
    img.classList.add(`${id}`)
    id++
    imageArea.append(img)
    makeTagHighlighted(img)

    img.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        const highlitedNote = document.getElementsByClassName(`${img.className}`.match(/\d/g).join('')) 
        makeTextHighlighted(highlitedNote[0])
    })
}