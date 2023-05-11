const navMenu = document.querySelector(".nav-menu");
const navButton = document.querySelector(".burger-button");

let isNavMenuShowed = false;

navButton.addEventListener("click", function() {
    if (isNavMenuShowed) {
        navMenu.classList.remove("showed");
        navButton.classList.remove("white");
    }
    else {
        navMenu.classList.add("showed");
        navButton.classList.add("white");
    }

    isNavMenuShowed = !isNavMenuShowed;
});