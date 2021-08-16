function onMenuLinkClick(evt) {
    if (!evt.target.classList.contains("hamburger__link")) {
        return;
    }
    document.getElementById("menu__toggle").checked = false;
}
const menu = document.querySelector(".hamburger");
menu.addEventListener("click", onMenuLinkClick);