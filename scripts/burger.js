function burgerMenu () {
    let top = document.querySelector("header.header").clientHeight;

    document.body.classList.toggle("-burger-activated");

    document.querySelector("nav.header__nav").style.top = `${top}px`;
}
