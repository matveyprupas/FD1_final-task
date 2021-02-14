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
    el.previousElementSibling.classList.toggle("-is-hidden");
}

function activeTab(el) {
    if (el.previousElementSibling) {
        el.previousElementSibling.classList.remove("-tab-active");
    }
    if (el.nextElementSibling){
        el.nextElementSibling.classList.remove("-tab-active");
    }
    el.classList.add("-tab-active");
}