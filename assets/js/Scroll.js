const body = document.querySelector("body");

const section1 = document.querySelector(".main_page");
const section2 = document.querySelector(".about_olimpiad");
const section3 = document.querySelector(".stages");
const section4 = document.querySelector(".schedule");

const nav_btns = document.getElementsByClassName("nav-button");

const sections = [section1, section2, section3, section4]

const SCROLL_DELAY = 500;
const MOUSE_MAX_DELTA = 300;
var section = 0;

let isCanScroll = true;
let mouseScrolledDelta = 0;
let touchStartPosition = 0;

function ChangeClass(el, lastStyle, curStyle) {
    el.classList.remove(lastStyle);
    el.classList.add(curStyle);
}

function ChangeSection(section) {
    for (let i = 0; i < 4; i++) {
        ChangeClass(sections[i], "ShowItem", "HideItem");
        ChangeClass(nav_btns[i], "select_btn", "none_select_btn");
    }
    ChangeClass(sections[section], "HideItem", "ShowItem");
    ChangeClass(nav_btns[section], "none_select_btn", "select_btn");
}

function updateFrame(section) {
    if (section == 0 || section == 3) {
        ChangeClass(body, "green-background", "yellow-background");
    }
    else {
        ChangeClass(body, "yellow-background", "green-background");
    }
    ChangeSection(section);

}

function changeFrame(deltaY) {
    if (deltaY > 0) {
        if (section < 3) {
            ++section;
        }
    }
    if (deltaY <= 0) {
        if (section > 0) {
            --section;
        }
    }

    updateFrame(section);
}

document.addEventListener("wheel", function (event) {
    if (!isCanScroll)
        return;

    mouseScrolledDelta += event.deltaY;

    if (Math.abs(mouseScrolledDelta) < MOUSE_MAX_DELTA)
        return;

    isCanScroll = false;

    changeFrame(mouseScrolledDelta);

    mouseScrolledDelta = 0;

    setTimeout(() => isCanScroll = true, SCROLL_DELAY);
});



document.addEventListener("touchstart", function (event) {
    touchStartPosition = event.changedTouches[0].pageY;
});

document.addEventListener("touchend", function (event) {
    if (!isCanScroll)
        return;

    isCanScroll = false;

    let deltaY = touchStartPosition - event.changedTouches[0].pageY;
    if (Math.abs(deltaY) > 50) changeFrame(deltaY);

    setTimeout(() => isCanScroll = true, SCROLL_DELAY);
});


for (let i = 0; i < 4; i++) {
    nav_btns[i].onclick = function(e) {
        updateFrame(i);
    }
}