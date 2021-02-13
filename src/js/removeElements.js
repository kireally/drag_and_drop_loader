import {imageArea} from './dropArea.js'

//remove tags and notes
 export const removeElements = () => {
    imageArea.innerHTML = ''

    document.querySelector('.list-of-nodes__main').innerHTML = ''
}

