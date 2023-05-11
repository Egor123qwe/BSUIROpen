const MainLogo = document.getElementById('NavbarImage');
const NavButtonsBlock = document.getElementById('NavButtonsBlock');
const Wrapper = document.getElementById('wrapper');
const Section = document.getElementsByTagName('section');
const nav = document.getElementById('nav');

const HederNavBar1 = document.getElementById('HederNavBar1');
const HederNavBar2 = document.getElementById('HederNavBar2');
const HederNavBar3 = document.getElementById('HederNavBar3');

const Star1 = document.getElementById('starHead1');
const Star2 = document.getElementById('starHead2');
const Star3 = document.getElementById('starHead3');

const Sect1_3 = document.getElementById('Sect1_3');
const Sect2_3 = document.getElementById('Sect2_3');
const Sect3_3 = document.getElementById('Sect3_3');

const Content_sect1 = document.getElementById('Content_sect1');


const ChoosenHederNavBar = 0;

const HederNavBar = [HederNavBar1, HederNavBar2, HederNavBar3];

let SectOfSect3 = 0;

function HideBlock1(i) {
    setTimeout(() => SecionsOfSect3[i].hidden = true, 500);
}

const SecionsOfSect3 = [Sect1_3, Sect2_3, Sect3_3]

function UpdateSec3(SectOfSect3) {
    for(var i = 0; i < 3; i++) {
        if (SectOfSect3 == i) { 
            SecionsOfSect3[i].hidden = false
            ChangeClass('HideItemSect3', 'ShowItemSect3', SecionsOfSect3[i]);
        }
        else {
            HideBlock1(i)
            ChangeClass('ShowItemSect3', 'HideItemSect3', SecionsOfSect3[i]);
        }
    }
}

setTimeout(resize, 100);

function resize() {
    ChangeClass('HideItem1', 'ShowItem1', Star1);
    ChangeClass('ShowItem1', 'HideItem1', Star2);
    ChangeClass('ShowItem1', 'HideItem1', Star3);
    UpdateSec3(SectOfSect3)
    NavButtonsBlock.style.width =  MainLogo.offsetWidth * 0.85 + 'px';
    nav.style.width =  MainLogo.offsetWidth * 0.85 + 'px';
    for (var i = 0; i < 4; i++) {
        if (Wrapper.offsetWidth > 900) {
            sections[i].style.width = (Wrapper.offsetWidth - MainLogo.offsetWidth) * 0.7
        }
    }
    ChangeElements(Wrapper.offsetWidth)
}

window.onresize = resize;



HederNavBar1.addEventListener("click", function(event) {
    SectOfSect3 = 0;
    ChangeClass('NoCooseElem', 'CooseElem', HederNavBar1);
    ChangeClass('CooseElem', 'NoCooseElem', HederNavBar2);
    ChangeClass('CooseElem', 'NoCooseElem', HederNavBar3);

    ChangeClass('HideItem1', 'ShowItem1', Star1);
    ChangeClass('ShowItem1', 'HideItem1', Star2);
    ChangeClass('ShowItem1', 'HideItem1', Star3);
    UpdateSec3(SectOfSect3)
});
HederNavBar2.addEventListener("click", function(event) {
    SectOfSect3 = 1;
    ChangeClass('NoCooseElem', 'CooseElem', HederNavBar2);
    ChangeClass('CooseElem', 'NoCooseElem', HederNavBar3);
    ChangeClass('CooseElem', 'NoCooseElem', HederNavBar1);

    ChangeClass('HideItem1', 'ShowItem1', Star2);
    ChangeClass('ShowItem1', 'HideItem1', Star3);
    ChangeClass('ShowItem1', 'HideItem1', Star1);
    UpdateSec3(SectOfSect3)
});
HederNavBar3.addEventListener("click", function(event) {
    SectOfSect3 = 2;
    ChangeClass('NoCooseElem', 'CooseElem', HederNavBar3);
    ChangeClass('CooseElem', 'NoCooseElem', HederNavBar1);
    ChangeClass('CooseElem', 'NoCooseElem', HederNavBar2);

    ChangeClass('HideItem1', 'ShowItem1', Star3);
    ChangeClass('ShowItem1', 'HideItem1', Star1);
    ChangeClass('ShowItem1', 'HideItem1', Star2);
    UpdateSec3(SectOfSect3)
});

