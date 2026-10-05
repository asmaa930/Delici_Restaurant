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
    landingPageDuration = 1500,
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
    popupBtnPrevMeal,
    popupBtnNextMeal,

    // sounds
    cameraSound = new Audio("audios/camera-shutter-sound.mp3"),
    mouseClickSound = new Audio("audios/mouse-click.mp3"),

    // search
    searchInput = document.querySelector("#Search"),
    cancelSearchIcon = document.querySelector(".cancel-search"),
    mealsEmptyState = document.querySelector('.meals-empty-state'),

    // validation
    allRegex = {
        name: /^[A-Za-z\s]+$/,
        phone: /^(02)?01(0|1|2|5)\d{8}$/,

        // num seats 1:15
        seats: /^([1-9]|1[0-5])$/,
        email: /^[A-Za-z_][A-Za-z_\d\.]+@(gmail\.com|yahoo\.(com|org))$/,
    },

    reservationInputs = document.querySelectorAll('.reservation-input'),
    contactInputs = document.querySelectorAll('.contact-input'),
    forms = document.querySelectorAll('form');



checkNavOnScroll();
checkCarouselView();

//Show Category Breakfast
showAllMeals(BreakFast);

//! __________________________________________ Landing_Page __________________________________________

document.addEventListener('DOMContentLoaded', function () {

    setTimeout(function () {
        landingPage.classList.add('hide');

        setTimeout(function () {
            landingPage.classList.add('d-none');
            body.removeAttribute('style');
        }, 500);

    }, landingPageDuration);
});

//! __________________________________________ Next_Carousel __________________________________________

btnNextCarousel.addEventListener('click', function () {
    let currentSlide = carousel.querySelector('.special-carousel-item.active'),
        firstSlide = carouselInner.firstElementChild,
        nextSlide = currentSlide.nextElementSibling ?? firstSlide;

    if (currentSlide.classList.contains('clicked')) return;

    updateSlide(currentSlide, nextSlide);
    playSound(cameraSound);

});

//! __________________________________________ Prev_Carousel __________________________________________

btnPrevCarousel.addEventListener('click', function () {
    let currentSlide = carousel.querySelector('.special-carousel-item.active'),
        lastSlide = carouselInner.lastElementChild,
        prevSlide = currentSlide.previousElementSibling ?? lastSlide;

    if (currentSlide.classList.contains('clicked')) return;

    playSound(cameraSound);
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

    }, landingPageDuration + 200);
}


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
        progressBarWidth = (window.scrollY / maxScrollY) * 100;

    progressBar.style.width = `${progressBarWidth}%`;

    //! ___________ View_Carousel ___________

    checkCarouselView();

});

//! ___________ Navbar_On_Scroll ___________

links.forEach(function (link) {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        if (link.classList.contains('link-sidebar')) {
            closePopup(() => {
                scrollToTargetSection(link);
            });

        } else {
            scrollToTargetSection(link);
        }

    });
});

//! __________________________________________ Keyboard_Control __________________________________________

document.addEventListener('keyup', function (e) {

    //* Works only when carousel is viewed
    if (e.key == 'ArrowRight' && carousel.classList.contains('viewed')) {
        btnNextCarousel.click();

    } else if (e.key == 'ArrowLeft' && carousel.classList.contains('viewed')) {
        btnPrevCarousel.click();

        //* Works only when meal popup is active
    } else if (e.key == 'ArrowRight' && document.querySelector('.popup[data-popup-name="meal"].active')) {
        popupBtnNextMeal.click();

    } else if (e.key == 'ArrowLeft' && document.querySelector('.popup[data-popup-name="meal"].active')) {
        popupBtnPrevMeal.click();

        //* Works only when popup is active
    } else if (e.key == 'Escape' && document.querySelector('.popup.active')) {
        closePopup();
    }
});


//! _______________________________________ Search _______________________________________

searchInput.addEventListener("keyup", function () {

    if (this.value) {
        cancelSearchIcon.classList.remove('d-none');
    } else {
        cancelSearchIcon.classList.add('d-none');
    }

    searchMeal(this.value);
});

cancelSearchIcon.addEventListener("click", function () {
    this.classList.add('d-none');
    searchInput.value = '';
    searchMeal(searchInput.value);
});


//! _______________________________________ Validation _______________________________________

forms.forEach(function (form) {

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let inputs,
            isBookingPopupActive = document.querySelector('.popup[data-popup-name="bookingTable"].active');

        if (isBookingPopupActive) {
            inputs = reservationInputs;

        } else {
            inputs = contactInputs;
        }

        inputs.forEach(function (input) {
            checkInput(input);
        });

        let inValidInput = form.querySelector('.form-control.border-danger');

        if (!inValidInput) {
            form.reset();
            let resetIcon = form.querySelector('.reset i');
            resetIcon.parentElement.classList.add('d-none');
        }

    });
});
