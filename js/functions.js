//! _________________________________________________________

function updateIndicatorActive(targetSlide) {
    let currentIndicator = carousel.querySelector('.special-indicators li.active'),
        targetIndicator = carousel.querySelector(`[data-indicator='${targetSlide.dataset.slide}']`);

    currentIndicator.classList.remove('active');
    targetIndicator.classList.add('active');

    currentIndicator.firstElementChild.style.width = `0%`;
    progressIndicatorWidth = 0;
    counter = 0;
}

//! _________________________________________________________

function updateSlide(currentSlide, targetSlide) {

    currentSlide.classList.remove('active');
    targetSlide.classList.add('active');

    updateIndicatorActive(targetSlide);
}

//! _________________________________________________________

function changeSlideByIndicator(that) {
    if (!(that.classList.contains('active'))) {

        let currentSlide = carousel.querySelector('.special-carousel-item.active'),
            targetSlide = carousel.querySelector(`[data-slide='${that.dataset.indicator}']`);

        updateSlide(currentSlide, targetSlide);
    }
}

//! _________________________________________________________

function updateProgressIndicator() {

    let currentIndicator = carousel.querySelector('.special-indicators li.active'),
        currentSlide = carousel.querySelector(`[data-slide='${currentIndicator.dataset.indicator}']`);

    autoPlayDuration = currentSlide.dataset.duration ?? autoPlayDefaultDuration;

    progressIndicatorWidth += (intervalTime / (autoPlayDuration / intervalTime));
    currentIndicator.firstElementChild.style.width = `${progressIndicatorWidth}%`;

    counter += intervalTime;
    if (counter == autoPlayDuration) {
        btnNextCarousel.click();
    }
}

//! _________________________________________________________

function openPopup(popupName) {
    let popup = document.querySelector(`.popup[data-popup-name="${popupName}"]`);

    // let popupBox = popup.querySelector('.box');
    // popupBox.addEventListener('click', function (e) {
    //     e.stopPropagation();
    // });

    popup.classList.add('active');
    popup.scrollTo(0, 0);

    setTimeout(function () {
        popup.classList.add('show');
    }, 1);
}

//! _________________________________________________________

function closePopup() {
    let popup = document.querySelector(`.popup.active`);

    popup.classList.remove('show');

    setTimeout(function () {
        popup.classList.remove('active');
    }, 700);
}

//! _________________________________________________________

function checkNavOnScroll() {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');

    } else {
        navbar.classList.remove('scrolled');
    }
}

//! _________________________________________________________

function checkToActiveLink(section) {

    let sectionOffsetTop = section.offsetTop - 10,
        sectionHeight = section.offsetHeight,
        sectionOffsetBottom = sectionOffsetTop + sectionHeight;

    if (scrollY > sectionOffsetTop && scrollY < sectionOffsetBottom) {

        let prevLinks = document.querySelectorAll('.links ul li a.link-item.active'),
            currentLinks = document.querySelectorAll(`.links ul li a.link-item[href="#${section.id}"]`);

        prevLinks.forEach(function (prevLink) {
            prevLink.classList.remove('active');

            if (prevLink.previousElementSibling?.classList.contains('square')) {
                prevLink.previousElementSibling.classList.add('d-none');
            }
        });

        currentLinks.forEach(function (currentLink) {
            currentLink.classList.add('active');

            if (currentLink.previousElementSibling?.classList.contains('square')) {
                currentLink.previousElementSibling.classList.remove('d-none');
            }
        });
    }
}

//! _________________________________________________________

function addMeal(category, index) {

    return `
        <div class="meal row mx-0 align-items-center" data-meal-category="${category[index].type}" style="transition-delay : ${+((index * 0.3).toFixed(1))}s;">
            <div class="col-4 col-md-5 col-lg-3 center">
                <div class="image center">
                    <img src="images/${category[index].images[0]}" class="img-fluid" alt="${category[index].name}">

                    <div class="layout center fs-4 text-black">
                        <i class="fa-regular fa-square-plus" onclick="showPopupMeal(${category[index].id})"></i>
                    </div>
                </div>
            </div>

            <div class="col-8 col-md-7 col-lg-9">
                <div class="description text-light">
                    <div class=" d-flex flex-column
                                flex-sm-row align-items-sm-center
                                flex-md-column align-items-md-start
                                flex-lg-row align-items-lg-center
                                column-gap-3">

                        <h5 class="meal-name main-color">${category[index].name}</h5>
                        <div class="separator d-none d-sm-block d-md-none d-lg-block"></div>
                        <h5 class="meal-price main-color">$${category[index].price.toFixed(2)}</h5>
                    </div>
                    <p class="s-text-color mb-0">${category[index].miniDescription}</p>
                </div>
            </div>
        </div>
    `;
}

//! _________________________________________________________

function updateCategoryActive(currentCategorySelector) {
    let previousCategorySelector = currentCategorySelector.closest('.menu-categories').querySelector('.category.active');

    previousCategorySelector.classList.remove('active');
    currentCategorySelector.classList.add('active');


    let currentMealCategory = menuContentWrapper.querySelector(`[data-category='${currentCategorySelector.dataset.category}']`),
        previousMealCategory = menuContentWrapper.querySelector(`[data-category='${previousCategorySelector.dataset.category}']`);

    previousMealCategory.classList.remove('active');
    previousMealCategory.classList.remove('show');

    currentMealCategory.classList.add('active');
    setTimeout(function () {
        currentMealCategory.classList.add('show');
    }, 1);
}

//! _________________________________________________________

function getMealById(mealId) {
    return allMenu.filter(meal => meal.id == mealId)[0];
}

//! _________________________________________________________

function getMealsOfSameType(mealType) {
    return allMenu.filter(meal => meal.type == mealType);
}

//! _________________________________________________________

function showPopupMeal(mealId) {
    let popupMealBox = document.querySelector('.popup[data-popup-name="meal"] .box'),
        meal = getMealById(mealId);

    popupMealBox.innerHTML = `
        <div class="close text-light fs-5" onclick="closePopup()">
            <i class="fa-regular fa-circle-xmark"></i>
        </div>

        <div class="title mb-4 text-center">
            <h6 class="main-color">SPECIAL SELECTION</h6>
            <img src="images/separator.svg" class="img-fluid" alt="separator">
            <h2 class="display-6 text-light" id="Meal-Name">${meal.name}</h2>
        </div>

        <div class="content">
            <div class="meal-carousel" data-meal-id="${meal.id}">

                <!--* ---------- Image_Meal ---------- -->
                <div class="meal-image">
                    <img src="images/${meal.images[0]}" class="img-fluid rounded-3 " alt="${meal.name}">
                </div>
                <!--* ---------- Price ---------- -->
                <div class="meal-price px-2 py-1 px-sm-3 py-sm-2 rounded-start">
                    <h5 class="mb-0 fw-bold">$${meal.price.toFixed(2)}</h5>
                </div>
                <!--* ---------- Prev & Next ---------- -->
                <button class="prev center" onclick="switchMeal(this)"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="next center" onclick="switchMeal(this)"><i class="fa-solid fa-chevron-right"></i></button>
            </div>

            <div class="meal-description s-text-color mt-3">
                <p class="mb-0">${meal.description}.</p>
            </div>
        </div>
    `;

    openPopup('meal');
}

//! _________________________________________________________

function updateMealData(meal) {
    let popupMealBox = document.querySelector('.popup[data-popup-name="meal"] .box'),

        popupMealBoxTitle = popupMealBox.querySelector('.title #Meal-Name'),
        popupMealPrice = popupMealBox.querySelector('.meal-price'),
        popupMealImg = popupMealBox.querySelector('.meal-image img'),
        popupMealDescription = popupMealBox.querySelector('.meal-description');

    popupMealBoxTitle.textContent = meal.name;
    popupMealPrice.firstElementChild.textContent = `$${meal.price.toFixed(2)}`;
    popupMealDescription.firstElementChild.textContent = meal.description;

    let popupMealImgSrc = popupMealImg.getAttribute('src'),
        popupMealImgSrcArr = popupMealImgSrc.split('/');

    popupMealImgSrcArr[popupMealImgSrcArr.length - 1] = meal.images[0];

    let popupMealTargetImgSrc = popupMealImgSrcArr.join('/');

    popupMealImg.setAttribute('src', popupMealTargetImgSrc);
    popupMealImg.setAttribute('alt', meal.name);
}

//! _________________________________________________________

function switchMeal(that) {
    let mealCarouselEle = that.closest('.meal-carousel'),
        currentMealId = mealCarouselEle.dataset.mealId,
        currentMeal = getMealById(currentMealId),
        mealType = currentMeal.type,
        mealsOfSameType = getMealsOfSameType(mealType),
        currentMealIndex = mealsOfSameType.indexOf(currentMeal),
        targetMealIndex,
        targetMeal;

    if (that.classList.contains('next')) {
        targetMealIndex = (++currentMealIndex > mealsOfSameType.length - 1) ? 0 : currentMealIndex;

    } else if (that.classList.contains('prev')) {
        targetMealIndex = (--currentMealIndex < 0) ? mealsOfSameType.length - 1 : currentMealIndex;
    }

    targetMeal = mealsOfSameType[targetMealIndex];
    mealCarouselEle.dataset.mealId = targetMeal.id;

    updateMealData(targetMeal);
}