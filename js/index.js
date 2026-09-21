//! __________________________________________ Global_Variables __________________________________________
let carousel = document.querySelector('.special-carousel'),
    carouselInner = carousel.querySelector('.special-carousel-inner'),
    btnPrevCarousel = carousel.querySelector('.prev'),
    btnNextCarousel = carousel.querySelector('.next'),
    popupBoxes = document.querySelectorAll('.popup .box'),
    navbar = document.querySelector('nav.special-navbar'),
    sections = document.querySelectorAll('header,section'),
    body = document.querySelector('body'),
    landingPage = document.querySelector('.landing-page'),
    landingPageDuration = 3000,
    links = document.querySelectorAll('.links ul li a.link-item'),

    // Dynamic_Update_Carousel
    counter = 0,
    autoPlayDefaultDuration = 6000,
    autoPlayDuration,
    intervalTime = 100,
    progressIndicatorWidth = 0,
    intervalId,

    // Scroll
    oldScrollY = window.scrollY,
    progressBar = document.querySelector('.special-progress .progress-bar'),

    // Menu
    menuSection = document.getElementById('Menu'),
    menuContentWrapper = menuSection.querySelector('.menu-content'),
    AllCategories = [BreakFast, Lunch, Dinner, Drinks];


checkNavOnScroll();
//! __________________________________________ Landing_Page __________________________________________

setTimeout(function () {

    landingPage.classList.add('hide');

    setTimeout(function () {
        landingPage.classList.add('d-none');
        body.removeAttribute('style');
    }, 500);

}, landingPageDuration);

//! __________________________________________ Next_Carousel __________________________________________

btnNextCarousel.addEventListener('click', function () {
    let currentSlide = carousel.querySelector('.special-carousel-item.active'),
        firstSlide = carouselInner.firstElementChild,
        nextSlide = currentSlide.nextElementSibling ?? firstSlide;

    updateSlide(currentSlide, nextSlide);
});

//! __________________________________________ Prev_Carousel __________________________________________

btnPrevCarousel.addEventListener('click', function () {
    let currentSlide = carousel.querySelector('.special-carousel-item.active'),
        lastSlide = carouselInner.lastElementChild,
        prevSlide = currentSlide.previousElementSibling ?? lastSlide;

    updateSlide(currentSlide, prevSlide);
});


//! __________________________________________ Dynamic_Update_Carousel __________________________________________

// dynamic with html 

if (carousel.classList.contains('auto-play')) {
    setTimeout(function () {

        // if page reloaded and no mouseenter & mouseleave yet
        intervalId = setInterval(function () {
            updateProgressIndicator();

        }, intervalTime);

        // ------------------------------
        carousel.addEventListener('mouseenter', function () {
            clearInterval(intervalId);
        });

        // ------------------------------
        carousel.addEventListener('mouseleave', function () {

            intervalId = setInterval(function () {
                updateProgressIndicator();

            }, intervalTime);
        });

    }, landingPageDuration);
}
//landingPageDuration = 3000 >> is time  to remove landing-page

//! __________________________________________ Keyboard_Control __________________________________________

document.addEventListener('keyup', function (e) {
    if (e.key == 'ArrowRight') {
        btnNextCarousel.click();

    } else if (e.key == 'ArrowLeft') {
        btnPrevCarousel.click();

    } else if (e.key == 'Escape' && document.querySelector('.popup.active')) {
        closePopup();
    }
});

//! __________________________________________ stopPropagation __________________________________________

popupBoxes.forEach(function (popupBox) {
    popupBox.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});

//! __________________________________________ scroll __________________________________________

document.addEventListener('scroll', function () {

    //! ___________ Navbar_On_Scroll ___________

    checkNavOnScroll();

    if (window.scrollY > oldScrollY) {
        navbar.classList.add('toTop');

    } else {
        navbar.classList.remove('toTop');
    }

    oldScrollY = window.scrollY;

    sections.forEach(function (section) {
        checkToActiveLink(section);
    });


    //! ___________ Top_Progress_Bar ___________

    let maxScrollY = document.documentElement.scrollHeight - window.innerHeight,
        width = (window.scrollY / maxScrollY) * 100;

    progressBar.style.width = `${width}%`;

});


//! ___________ Navbar_On_Scroll ___________

links.forEach(function (link) {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let targetSection = document.querySelector(`${this.getAttribute('href')}`),
            targetSectionOffsetTop = targetSection.offsetTop;

        window.scrollTo(0, targetSectionOffsetTop);
    });
});

//! __________________________________________ Menu __________________________________________

AllCategories.forEach(function (category) {

    let part_1 = document.querySelector(`.menu-meals[data-category='${category[0].type}'] .row .part1 .item`),
        part_2 = document.querySelector(`.menu-meals[data-category='${category[0].type}'] .row .part2 .item`),
        categoryLength = category.length,
        halfCategoryLength = Math.round(categoryLength / 2);

    part_1.innerHTML = '';
    part_2.innerHTML = '';

    //* ______________________ part_1 ______________________

    for (let i = 0; i < halfCategoryLength; i++) {

        part_1.innerHTML += `
           ${addMeal(category, i)}
        `;
    }

    //* ______________________ part_2 ______________________

    for (let i = halfCategoryLength; i < categoryLength; i++) {

        part_2.innerHTML += `
            ${addMeal(category, i)}
        `;
    }
});
