const backgroundImg = document.querySelector('.background-img');
const stages = document.querySelector('.stages');
const footer = document.querySelector('footer');

function resize() {
    backgroundImg.style.height = stages.offsetHeight + footer.offsetHeight + 90 + 'px';
}

resize();

window.onresize = resize;