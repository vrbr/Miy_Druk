const body = document.querySelector('body');
const connection = document.querySelector('.popup-connection');
const inputs = connection.querySelectorAll('.input-connection');
const buttonFeatures = document.querySelector('.button__popup-connection');
const buttonConnection = connection.querySelector('.popup-connection__button-close');
const loginContainer = connection.querySelector('.login-container');
const btn = connection.querySelector('.btn');

function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == '') {
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})

buttonFeatures.addEventListener('click', () => {
    body.classList.add('no-scroll');
    connection.classList.add('is-active');
})

buttonConnection.addEventListener('click', () => {
    body.classList.remove('no-scroll');
    connection.classList.remove('is-active');
});

btn.addEventListener('click', () => {
    loginContainer.classList.remove('is-active');
});