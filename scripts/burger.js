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
    let tabs = document.querySelectorAll("a.main__tab");
    let aboutCar = document.querySelectorAll("div.main__about-car");

    for (let i = 0; i < aboutCar.length; i++) {
        aboutCar[i].classList.add("-main__about-car_hidden");
    }

    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] == el) {
            aboutCar[i].classList.remove("-main__about-car_hidden");
        }
        tabs[i].classList.remove("-tab-active");
    }
    el.classList.add("-tab-active");
}

function todayDate() {
    let today = new Date();
    today = today.getDay();
    if (today == 0) {
        document.querySelector(`.footer__column tr:nth-of-type(7)`).classList.add("today");
        return;
    }
    document.querySelector(`.footer__column tr:nth-of-type(${today})`).classList.add("today");
}
todayDate();