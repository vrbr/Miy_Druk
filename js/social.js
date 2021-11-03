const socialBlock = document.querySelector('.social-block');
const socialLabel = socialBlock.querySelector('.social-block__label');
const svgOpen = socialBlock.querySelector('.social-block__label-open');
const svgClose = socialBlock.querySelector('.social-block__label-close');

socialLabel.addEventListener('click', () => {
    svgOpen.classList.toggle('open');
    svgClose.classList.toggle('close');
});