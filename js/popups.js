document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelectorAll('.button__popup-connection');
    const formButtons = document.querySelectorAll('.button__popup-calculate');
    const closeButtons = document.querySelectorAll('.button-close');
    const closeForm = document.querySelectorAll('.button-send');
    const inputs = document.querySelectorAll('.input-connection');
    const inputsForm = document.querySelectorAll('.input-calculate');

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
    });
    inputsForm.forEach(inputForm => {
        inputForm.addEventListener('focus', focusFunc);
        inputForm.addEventListener('blur', blurFunc);
    });

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

    formButtons.forEach(function(btn){
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modalElem = document.querySelector('.popup[data-modal="' + modalId + '"]');
            modalElem.classList.add('is-active');
        });
        closeForm.forEach(function(btn){
            btn.addEventListener('click', function(e) {
            var parentModal = this.closest('.popup');
            parentModal.classList.remove('is-active');
            });
        });
    });
});