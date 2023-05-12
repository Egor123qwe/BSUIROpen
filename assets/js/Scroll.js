const body = document.querySelector("body");
const background_img = document.querySelector(".main_page_img");

//Кнопки и секции (общие на странице)
const sectionsStyles = ["ShowItem", "HideItem"];
const sections = 
    [ document.querySelector(".main_page_text"), 
      document.querySelector(".about_olimpiad"), 
      document.querySelector(".stages"),  
      document.querySelector(".schedule")
    ];
const nav_btns = document.getElementsByClassName("nav-button");
const nav_btnsStyles = ["select_btn", "none_select_btn"];

//Кнопки и секции (у 3-ей секции)
const subSectionsStyles = ["ShowItem_sec3", "HideItem_sec3"];
const subSection = 
    [ document.querySelector(".stages-section-1"), 
      document.querySelector(".stages-section-2"), 
      document.querySelector(".stages-section-3")
    ];
const section_menu_btns = document.getElementsByClassName("stages-menu-item");
const section_menu_btnsStyles = ["stages-menu-selected", "stages-menu-no_selected"];


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

function ChangeSection(section, sections, btns, buttonsStyles, sectionStyles) {
    for (let i = 0; i < sections.length; i++) {
        ChangeClass(sections[i], sectionStyles[0], sectionStyles[1]);
        ChangeClass(btns[i], buttonsStyles[0], buttonsStyles[1]);
    }
    ChangeClass(sections[section], sectionStyles[1], sectionStyles[0]);
    ChangeClass(btns[section], buttonsStyles[1], buttonsStyles[0]);
}

function updateFrame(section) {
    if (section == 0 || section == 3) {
        ChangeClass(body, "green-background", "yellow-background");
    }
    else {
        ChangeClass(body, "yellow-background", "green-background");
    }
    if (section == 0) ChangeClass(background_img, "background_img_hide", "background_img_show");
    else ChangeClass(background_img, "background_img_show", "background_img_hide");
    ChangeSection(section, sections, nav_btns, nav_btnsStyles, sectionsStyles);

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

for (let i = 0; i < 3; i++) {
    section_menu_btns[i].onclick = function(e) {
        ChangeSection(i, subSection, section_menu_btns, section_menu_btnsStyles, subSectionsStyles);
    }
}