'use strict'

// Pop Up Close 

const closeBtn = document.querySelector('#close');

const popUp = document.querySelector('.popup');

closeBtn.addEventListener('click', closePopup)

function closePopup() {
    popUp.style.visibility = 'hidden';
}
