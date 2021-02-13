import {removeElements} from './removeElements.js'

const dropAreaElement = document.querySelector('.drop-area');
const inputElement = document.querySelectorAll('.drop-area__input');
const imageArea = document.querySelector('.image-area');


dropAreaElement.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropAreaElement.classList.add('drop-area--highlight');
});

['dragleave', 'dragend'].forEach((eventType) => {
    dropAreaElement.addEventListener(eventType, () => {
    dropAreaElement.classList.remove('drop-area--highlight');
  });
});

dropAreaElement.addEventListener('drop', (e) => {
    e.preventDefault();
    removeElements();

    if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        createImage(e.dataTransfer.files[0]);
    }

    dropAreaElement.classList.remove('drop-area--highlight');
})

function createImage(file) {
    // For image files
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
        reader.onload = () => {
            imageArea.style.background = null;
            imageArea.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
          imageArea.style.background = 'rgba(173,171,171,0.8)';
    }
}

export {dropAreaElement, imageArea, createImage}