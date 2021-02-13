import {dropAreaElement} from './dropArea.js'
import {imageArea} from './dropArea.js'
import {addTag, addNote} from './addElement.js'

const modalConfirm = document.querySelector('.modal-confirm')
const submitBtn = document.querySelector('.modal-confirm__submit-btn')
const cancelBtn = document.querySelector('.modal-confirm__cancel-btn')

let topPosition
let leftPosition


dropAreaElement.addEventListener('drop', () => {
    imageArea.addEventListener('click', (e) => {
        topPosition = e.pageY - 24
        leftPosition = e.pageX - 12

        modalConfirm.style.visibility = 'visible';  
    })    
});

//when we click on 'cancel' in modal,modal close
cancelBtn.addEventListener('click', () => {
  closeModal()
})

//when we click on 'ok' in modal, add note and tag
submitBtn.addEventListener('click', (e) => {
    addNote()
    addTag(topPosition, leftPosition)
    clearInputField()
    closeModal()
})


const closeModal = () => {
    modalConfirm.style.visibility = 'hidden'
}

const clearInputField = () => {
    document.querySelector('.modal-confirm__input').value = ''
}

export {cancelBtn, submitBtn}