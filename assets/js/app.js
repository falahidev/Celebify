
const close = document.getElementById('close')
const hamburger = document.getElementById('hamburger');
const navlink = document.getElementById('navlink');
const dotPlayer = document.getElementsByClassName('dot-player');
const dotPlayerVideo = document.getElementById('dotVideo');
const musicBox = document.getElementsByClassName('music')[0];
const musicBoxCloseButton = document.getElementsByClassName('musicCloseBtn')[0];
const dotsDiv = document.getElementsByClassName('slider-dots');
const dots = document.getElementsByClassName('dot');
const rightCard = document.getElementsByClassName('right-card');
const leftCard = document.getElementsByClassName('left-card');
const tabCards = document.getElementById('tab');
const rowArticles = document.getElementsByClassName('row-article');

var cardIndex = 0;
var cardCustomIndex = 0;
var isAutoSlide = true;
var tabButtonIsBlock = true;
var rowArticlesCount = rowArticles.length / 3;


ShrinkHeader();
ChangeMobileLogo();
SlideImage();

if (dotPlayer[0] != null || dotPlayer[0] != undefined) {
    dotPlayer[0].addEventListener('click', ShowPlayer);
    
    dotPlayerVideo.addEventListener('pause', () => {
    
        if (dotPlayerVideo.style.display == "block") {
            
            document.body.style.overflow = "hidden";
            musicBox.style.animation = "openMusic 0.5s forwards";
        
            setTimeout(() => {
    
                dotPlayer[0].remove();
    
            }, 2000);
    
        }
    
    });
    
}
hamburger.addEventListener('click', OpenMenu);
close.addEventListener('click', CloseMenu);
tab.addEventListener('click', NextSlide);
window.addEventListener('resize', CloseMenu);
window.addEventListener('scroll', ShrinkHeader);

if (musicBoxCloseButton != undefined) {
    musicBoxCloseButton.addEventListener('click', () => {

        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
        musicBox.style.animation = "closeMusic 1s forwards";
    
    });
}

NProgress.done();


function CardsMouseOverEvent() {
    console.log('Over');
    var matches = window.matchMedia('(max-width: 900px)').matches;

    if (!matches) {

        if (!tabButtonIsBlock) {
            tabCards.style.display = 'flex';
            tabCards.style.animation = 'tabSideIn 0.5s linear forwards';
            tabButtonIsBlock = true;
        }
 
        
    }
    
}

function CardsMouseOutEvent() {
    var matches = window.matchMedia('(max-width: 900px)').matches;

    if (!matches) {

        if (tabButtonIsBlock) {
            tabCards.style.display = 'flex';
            tabCards.style.animation = 'tabSideOut 0.9s forwards';
        }

    }
    
    tabButtonIsBlock = false;
}

function ShowPlayer() {
    scroll(0,0);

    document.body.style.overflow = 'hidden';
    dotPlayer[0].style.animation = 'dotPlayerOn 1s forwards';
    dotPlayerVideo.style.animation = 'dotPlayerOn 1s forwards';
    dotPlayerVideo.style.display = "block";

    dotPlayerVideo.play();
}

function SlideImage() {
    var i;

    const rightCard = document.getElementsByClassName('right-card');
    var cardCount = rightCard.length;

    if (isAutoSlide) {

        for (i = 0; i < cardCount; i++) {
        
            if (rightCard[i].style.display == 'block') {
                rightCard[i].style.visibility = "hidden";
                rightCard[i].style.display = "none";

            }
    
        }

        for (var j = 0; j < dots.length; j++) {

            if (dots[j].classList.contains('active')) {
                dots[j].classList.remove('active');
            }

        }
    
        cardIndex++;
    
        if (cardIndex > cardCount) {
            cardIndex = 1;
        }
    
        let image = rightCard[cardIndex - 1].dataset.image;
        rightCard[cardIndex - 1].style.animation = '1.3s slideInFromRight forwards';
        rightCard[cardIndex - 1].style.backgroundImage = "url('" + image + "')";
        rightCard[cardIndex - 1].style.visibility = "visible";
        rightCard[cardIndex - 1].style.display = "block";

        dots[5 - cardIndex].classList.add('active');

    
        setTimeout(SlideImage, 6000);

    } else {

        for (i = 0; i < cardCount; i++) {
        
            if (rightCard[i].style.display == 'block') {
                rightCard[i].style.visibility = "hidden";
                rightCard[i].style.display = "none";

            }
    
            
        }

        for (var j = 0; j < dots.length; j++) {

            if (dots[j].classList.contains('active')) {
                dots[j].classList.remove('active');
            }

        }

        cardIndex++;


        if (cardIndex > cardCount) {
            cardIndex = 1;
        }



        let image = rightCard[cardIndex - 1].dataset.image;
        rightCard[cardIndex - 1].style.animation = '1.3s slideInFromRight forwards';
        rightCard[cardIndex - 1].style.backgroundImage = "url('" + image + "')";
        rightCard[cardIndex - 1].style.visibility = "visible";
        rightCard[cardIndex - 1].style.display = "block";



        isAutoSlide = true;

    }

}

function NextSlide() {
    isAutoSlide = false;
    SlideImage();
}

function ShrinkHeader() {
    const header = document.getElementsByTagName('header')[0];
    var scrollTop = document.body.scrollTop;
    var deviceWidth = window.matchMedia('(max-width: 900px)').matches;

    if (!deviceWidth) {

        if (scrollTop > 50 || document.documentElement.scrollTop > 50) {
        
            header.style.background = "white";
            header.style.padding = "8px 70px";
            header.style.boxShadow = "0 0 15px rgba(0,0,0,0.1)";
    
        } else {
    
            header.style.background = "transparent";
            header.style.padding = "10px 70px";
            header.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
    
    
        }

    }

    if (deviceWidth == true) {

        if (scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
            header.style.background = "white";
            header.style.boxShadow = "0 0 15px rgba(0,0,0,0.1)";
    
        } else {
    
            header.style.background = "transparent";
            header.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
    
    
        }

    }
}

function OpenMenu() {
    navlink.style.top = "0";
    navlink.style.right = "-50px";
    
    close.style.display = "block";
    close.style.right = "50px";

}

function CloseMenu() {
    navlink.style.top = "0";
    navlink.style.right = "-100%";
    
    close.style.display = "none";
    close.style.right = "-50px";

    ChangeMobileLogo();
}

function ChangeMobileLogo() {
    var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (deviceWidth <= 900) {

        document.getElementById('imgLogo').src = "assets/image/mobile-header-logo.svg";

    } else {

        document.getElementById('imgLogo').src = "assets/image/header-logo.svg";

    }
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}