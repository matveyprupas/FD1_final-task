function burgerMenu () {
    let top = document.querySelector("header.header").clientHeight;
    document.body.classList.toggle("-burger-activated");
    document.querySelector("nav.header__nav").style.top = `${top}px`;
}

function openList() {
    document.body.classList.toggle("-list-activated");
}

function openForm() {
    let top = document.querySelector("header.header").clientHeight;
    document.body.classList.toggle("-form-opened");
    document.querySelector(".form").style.top = `${top}px`;
}

function hiddenLabel(el) {
    // console.log(el.classList);
    el.previousElementSibling.classList.toggle("-is-hidden");
}