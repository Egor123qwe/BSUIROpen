const FooterButton = document.getElementById("FooterButton");
const FooterButton1 = document.getElementById("FooterButton1");
const FooterButton2 = document.getElementById("FooterButton2");
const FooterButton3 = document.getElementById("FooterButton3");
const body = document.querySelector("body");
const footerMenu = document.querySelector(".footer-menu");

const MainLogoImg = document.getElementById("MainLogoImg");
const MainLogoItem = document.getElementById("MainLogoItem");

const NavButtons = document.querySelectorAll("button:not(.burger-button)");

const SCROLL_DELAY = 500;
const MOUSE_MAX_DELTA = 300;

function HideBlock2(i) {
    setTimeout(() => sections[i].hidden = true, 500);
}

const sections = [section1, section2, section3, section4]
let section = 0;
for (var i = 0; i < 4; i++) {
    if (section == i) {
        sections[i].hidden = false
        ChangeClass('HidenSection', 'ShowSection', sections[i])
        ChangeClass('NoSelectedButton', 'SelectedButton', NavButtons[i])
    }
    else {
        sections[i].hidden = true
        ChangeClass('ShowSection', 'HidenSection', sections[i])
        ChangeClass('SelectedButton', 'NoSelectedButton', NavButtons[i])
    }
}
let isCanScroll = true;
let mouseScrolledDelta = 0;
let touchStartPosition = 0;

function ChangeClass(last, cur, elem) {
    elem.classList.remove(last);
    elem.classList.add(cur);
}

function updateFrame(section) {
    if (section == 1 || section == 2) {
        ChangeClass('YelowBackground', 'BlueBackground', document.body);
        ChangeClass("YelowBackground", "BlueBackground", body);

        // ChangeClass('TextToGreen', 'TextToYelow', FooterButton1)
        // ChangeClass('TextToGreen', 'TextToYelow', FooterButton2)
        // ChangeClass('TextToGreen', 'TextToYelow', FooterButton3)

        footerMenu.classList.add("inverted");
    }
    else {
        ChangeClass('BlueBackground', 'YelowBackground', document.body)
        ChangeClass("BlueBackground", "YelowBackground", body);

        // ChangeClass('TextToYelow', 'TextToGreen', FooterButton1)
        // ChangeClass('TextToYelow', 'TextToGreen', FooterButton2)
        // ChangeClass('TextToYelow', 'TextToGreen', FooterButton3)

        footerMenu.classList.remove("inverted");
    }
    if (section > 0) {
        if (document.body.offsetWidth < 900) {
            // ChangeClass('ShowItem1', 'HideItem1', Content_sect1)
        }
        ChangeClass('Hiden', 'Show', MainLogoImg)
        ChangeClass('ShowItem1', 'HideItem1', MainLogoItem)
    }
    else {
        // ChangeClass('HideItem1', 'ShowItem1', Content_sect1)
        ChangeClass('Show', 'Hiden', MainLogoImg)
        ChangeClass('HideItem1', 'ShowItem1', MainLogoItem)
    }
    for (var i = 0; i < 4; i++) {
        if (section == i) {
            sections[i].hidden = false

            ChangeClass('HidenSection', 'ShowSection', sections[i])
            ChangeClass('NoSelectedButton', 'SelectedButton', NavButtons[i])
        }
        else {
            HideBlock2(i)
            ChangeClass('ShowSection', 'HidenSection', sections[i])
            ChangeClass('SelectedButton', 'NoSelectedButton', NavButtons[i])
        }
    }
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

NavButtons[0].addEventListener("click", function (event) {
    section = 0;
    updateFrame(section)
});
NavButtons[1].addEventListener("click", function (event) {
    section = 1;
    updateFrame(section)
});
NavButtons[2].addEventListener("click", function (event) {
    section = 2;
    updateFrame(section)
});
NavButtons[3].addEventListener("click", function (event) {
    section = 3;
    updateFrame(section)
});