const headerMenu = document.querySelector(".header-menu"); 
const burgerButton = document.querySelector(".burger-button"); 
 
let isNavBarShowed = false; 
 
burgerButton.addEventListener("click", function() { 
    if (isNavBarShowed) { 
        headerMenu.classList.remove("showed");
        burgerButton.classList.remove("white");
    } 
    else { 
        headerMenu.classList.add("showed"); 
        burgerButton.classList.add("white"); 
    } 
 
    isNavBarShowed = !isNavBarShowed; 
});