!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {

    const modalButtons = document.querySelectorAll('.js-open-modal');
    const overlay = document.querySelector('.js-overlay-modal');
    const closeButtons = document.querySelectorAll('.popup-close');
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

    const disableScroll = () => {
        const widthScroll = window.innerWidth - document.body.offsetWidth;
    
        document.body.dbScrollY = window.scrollY;
    
        document.body.style.cssText = `
            position: fixed;
            top: ${-window.scrollY}px;
            left: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            padding-rigth: ${widthScroll}px;
        `;
    };

    const anableScroll = () => {
        document.body.style.cssText = '';
        window.scroll({
            top: document.body.dbScrollY
        })
    };

    modalButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modalElem = document.querySelector('.popup[data-modal="' + modalId + '"]');

            modalElem.classList.add('is-active');
            overlay.classList.add('is-active');
            disableScroll();
        });
    });

    closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            const parentModal = this.closest('.popup');

            parentModal.classList.remove('is-active');
            overlay.classList.remove('is-active');
            anableScroll();
        });
    });

    document.body.addEventListener('keyup', function (e) {
        const key = e.keyCode;

        if (key == 27) {
            document.querySelector('.popup.is-active').classList.remove('is-active');
            document.querySelector('.overlay').classList.remove('is-active');
            anableScroll();
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.popup.is-active').classList.remove('is-active');
        this.classList.remove('is-active');
        anableScroll();
    });

});