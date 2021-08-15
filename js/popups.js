// const body = document.querySelector('body');
// const connection = document.querySelector('.popup-connection');
// const inputs = connection.querySelectorAll('.input-connection');
// const buttonFeatures = document.querySelector('.button__popup-connection');
// const buttonConnection = connection.querySelector('.popup-connection__button-close');
// const form = document.querySelector('.popup-form');
// const buttonCalculate = document.querySelector('.button__popup-calculate');
// const buttonClose = document.querySelector('.button-send');
// const inputsForm = form.querySelectorAll('.input-calculate');

// function focusFunc() {
//     let parent = this.parentNode.parentNode;
//     parent.classList.add('focus');
// }

// function blurFunc() {
//     let parent = this.parentNode.parentNode;
//     if (this.value == '') {
//         parent.classList.remove('focus');
//     }
// }

// inputs.forEach(input => {
//     input.addEventListener('focus', focusFunc);
//     input.addEventListener('blur', blurFunc);
// });

// inputsForm.forEach(inputForm => {
//     inputForm.addEventListener('focus', focusFunc);
//     inputForm.addEventListener('blur', blurFunc);
// });

// buttonFeatures.addEventListener('click', () => {
//     body.classList.add('no-scroll');
//     connection.classList.add('is-active');
// });

// buttonConnection.addEventListener('click', () => {
//     body.classList.remove('no-scroll');
//     connection.classList.remove('is-active');
// });

// buttonCalculate.addEventListener('click', () => {
//     body.classList.add('no-scroll');
//     form.classList.add('is-active');
// });

// buttonClose.addEventListener('click', () => {
//     body.classList.remove('no-scroll');
//     form.classList.remove('is-active');
// });

///////////////////////

// const body = document.querySelector('body');
// const connection = document.querySelector('.popup-connection');
// const inputs = connection.querySelectorAll('.input-connection');
// const buttonFeatures = document.querySelector('.button__popup-connection');
// const buttonFeatures2 = document.querySelector('.button__popup-connection-2');
// const buttonFeatures3 = document.querySelector('.button__popup-connection-3');
// const buttonFeatures4 = document.querySelector('.button__popup-connection-4');
// const buttonFeatures5 = document.querySelector('.button__popup-connection-5');
// const buttonFeatures6 = document.querySelector('.button__popup-connection-6');
// const buttonConnection = connection.querySelector('.popup-connection__button-close');
// const form = document.querySelector('.popup-form');
// const buttonCalculate = document.querySelector('.button__popup-calculate');
// const buttonClose = document.querySelector('.button-send');
// const inputsForm = form.querySelectorAll('.input-calculate');

// buttonFeatures.addEventListener("click", openModal);
// buttonFeatures2.addEventListener("click", openModal);
// buttonFeatures3.addEventListener("click", openModal);
// buttonFeatures4.addEventListener("click", openModal);
// buttonFeatures5.addEventListener("click", openModal);
// buttonFeatures6.addEventListener("click", openModal);

// buttonConnection.addEventListener("click", closeModal);

// function openModal() {
//     body.classList.add('no-scroll');
//     connection.classList.add('is-active');
// }

// function closeModal() {
//     body.classList.remove('no-scroll');
//     connection.classList.remove('is-active');
//   }

document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelectorAll('.button__popup-connection');
    const closeButtons = document.querySelectorAll('.button-close');

    modalButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modalElem = document.querySelector('.popup[data-modal="' + modalId + '"]');
            modalElem.classList.add('is-active');
        });
    closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
           var parentModal = this.closest('.popup');
           parentModal.classList.remove('is-active');
        });
     });
    });
});