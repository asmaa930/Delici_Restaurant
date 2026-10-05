
//! _________________________________________________________

function playSound(sound) {
    sound.currentTime = 0;
    sound.volume = 0.5;
    sound.playbackRate = 1.3;
    sound.play();
}

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
    targetSlide.classList.add('active', 'clicked');

    setTimeout(function () {
        targetSlide.classList.remove('clicked');
    }, 500);

    updateIndicatorActive(targetSlide);
}

//! _________________________________________________________

function changeSlideByIndicator(that) {

    if (that.classList.contains('active')) return;

    let currentSlide = carousel.querySelector('.special-carousel-item.active'),
        targetSlide = carousel.querySelector(`[data-slide='${that.dataset.indicator}']`);

    updateSlide(currentSlide, targetSlide);
    playSound(cameraSound);
}

//! _________________________________________________________

function updateProgressIndicator() {

    let currentIndicator = carousel.querySelector('.special-indicators li.active'),
        currentSlide = carousel.querySelector(`[data-slide='${currentIndicator.dataset.indicator}']`),
        nextSlide = currentSlide.nextElementSibling ?? carouselInner.firstElementChild;

    autoPlayDuration = currentSlide.dataset.duration ?? autoPlayDefaultDuration;

    progressIndicatorWidth += (intervalTime / (autoPlayDuration / intervalTime));
    currentIndicator.firstElementChild.style.width = `${progressIndicatorWidth}%`;

    counter += intervalTime;
    if (counter == autoPlayDuration) {
        updateSlide(currentSlide, nextSlide);
    }
}

//! _________________________________________________________

function openPopup(popupName) {
    let popup = document.querySelector(`.popup[data-popup-name="${popupName}"]`);

    if (popup.classList.contains('show')) {
        popup.classList.remove('show');
    }

    if (popupName == 'bookingTable') {
        let resetIcon = popup.querySelector('form .reset i');
        resetForm(resetIcon);
    }

    popup.classList.add('active', 'clicked');
    popup.scrollTo(0, 0);

    setTimeout(function () {
        popup.classList.remove('clicked');
    }, 600);

    setTimeout(function () {
        popup.classList.add('show');
    }, 1);
}

//! _________________________________________________________

function closePopup(callback) {
    let popup = document.querySelector(`.popup.active`);

    if (popup.classList.contains('clicked')) return;

    popup?.classList.remove('show');

    setTimeout(function () {
        popup?.classList.remove('active');
        callback?.();
    }, 600);
}

//! _________________________________________________________???

function scrollToTargetSection(link) {
    let targetSection = document.querySelector(`${link.getAttribute('href')}`),
        targetSectionOffsetTop = targetSection.offsetTop;

    window.scrollTo(0, targetSectionOffsetTop);
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

function checkCarouselView() {
    if (window.scrollY >= carousel.offsetHeight) {
        carousel.classList.remove('viewed');

    } else {
        carousel.classList.add('viewed');
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
            
            <div class="col-4 col-lg-3 center p-0 ">
                <div class="frame center">
                                    
                    <div class="meal-img" style='background-image: url("images/${category[index].images[0]}");'></div>

                    <div class="layout center fs-4 text-black">
                        <i class="fa-regular fa-square-plus" onclick="showPopupMeal(${category[index].id})"></i>
                    </div>
                </div>
            </div>

            <div class="col-8 col-lg-9">
                <div class="description text-light">
                    <div class=" d-flex flex-column
                                flex-sm-row align-items-sm-center
                                flex-md-row align-items-md-center
                                column-gap-3 mb-2">

                        <h5 class="meal-name m-0 main-color">${category[index].name}</h5>
                        <div class="separator d-none d-sm-block d-md-block"></div>
                        <h5 class="meal-price m-0 main-color">$${category[index].price.toFixed(2)}</h5>
                    </div>
                    <p class="s-text-color mb-0" data-bs-toggle="tooltip" data-bs-placement="top"
                    data-bs-custom-class="custom-tooltip"
                    data-bs-title="Tap the + for the full details.">${category[index].description.slice(0, 65)}...</p>
                </div>
            </div>
        </div>
    `;
}

//! _________________________________________________________

function showAllMeals(category) {

    let part_1 = document.querySelector(`.menu-meals .row .part1 .item`),
        part_2 = document.querySelector(`.menu-meals .row .part2 .item`),
        categoryLength = category.length,
        halfCategoryLength = Math.ceil(categoryLength / 2);

    part_1.innerHTML = '';
    part_2.innerHTML = '';

    for (let i = 0; i < categoryLength; i++) {

        if (i < halfCategoryLength) {
            part_1.innerHTML += `${addMeal(category, i)}`;

        } else {
            part_2.innerHTML += `${addMeal(category, i)}`;
        }
    }

    //! __________ ToolTip __________

    //* Reinitialize Tooltips
    //* The meal elements are recreated when searching, so the old tooltip elements
    //* are no longer available. Therefore, the tooltips must be selected and initialized again.

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]'),
        tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

}

//! _________________________________________________________

function updateCategoryActive(currentCategorySelector, isFromAnotherSection = false) {

    let previousCategorySelector = currentCategorySelector.closest('.menu-categories').querySelector('.category.active'),
        currentMealCategory = menuContentWrapper.querySelector('.menu-meals'),
        dataOfCategory = getMealsOfSameType(currentCategorySelector.dataset.category);

    previousCategorySelector.classList.remove('active');
    currentCategorySelector.classList.add('active');

    if (previousCategorySelector != currentCategorySelector || isFromAnotherSection) {

        currentMealCategory.classList.remove('active', 'show');

        showAllMeals(dataOfCategory);

        currentMealCategory.classList.add('active');
        setTimeout(function () {
            currentMealCategory.classList.add('show');
        }, 1);

        mealsEmptyState.classList.add('d-none');
        searchInput.value = '';
        cancelSearchIcon.classList.add('d-none');
    }
}

//! _________________________________________________________????

function searchMeal(searchValue) {

    let currentCategorySelector = searchInput.closest('.content').querySelector('.menu-categories .category.active'),
        currentCategoryType = currentCategorySelector.dataset.category,
        mealsOfSameType = getMealsOfSameType(currentCategoryType),

        filteredMeals = mealsOfSameType.filter((meal) => meal.name.toLowerCase().includes(searchValue.trim().toLowerCase()));

    if (filteredMeals.length) {
        showAllMeals(filteredMeals);
        mealsState('full');

    } else {
        mealsState('empty');
    }
}

//! _________________________________________________________

function mealsState(state) {
    let currentCategory = menuContentWrapper.querySelector('.menu-meals');

    if (state == 'empty') {
        currentCategory.classList.remove('active', 'show');
        mealsEmptyState.classList.remove('d-none');

    } else if (state == 'full') {
        currentCategory.classList.add('active', 'show');
        mealsEmptyState.classList.add('d-none');
    }
}

//! _________________________________________________________

function getMealById(mealId) {
    return allMenu.filter(meal => meal.id == mealId)[0];
}

//! _________________________________________________________

function getMealsOfSameType(type) {
    switch (type) {
        case "BreakFast":
            return BreakFast;
        case "Lunch":
            return Lunch;
        case "Dinner":
            return Dinner;
        case "Drinks":
            return Drinks;
    }
}

//! _________________________________________________________

function addPopupMeal(meal) {

    return `
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
                <div class="meal-image center rounded-3">
                    <img src="images/${meal.images[0]}" class="img-fluid  " alt="${meal.name}">
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
}

//! _________________________________________________________

function showPopupMeal(mealId) {
    let popupMealBox = document.querySelector('.popup[data-popup-name="meal"] .box'),
        meal = getMealById(mealId);

    popupMealBox.innerHTML = addPopupMeal(meal);

    popupBtnPrevMeal = document.querySelector('.popup[data-popup-name="meal"] .box .prev');
    popupBtnNextMeal = document.querySelector('.popup[data-popup-name="meal"] .box .next');

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

    playSound(mouseClickSound);
    updateMealData(targetMeal);
}

//! _________________________________________________________

function goToCategory(typeCategory) {

    let liCategory = document.querySelector(`.menu-categories .category[data-category="${typeCategory}"]`),
        offsetTopMenuSection = document.querySelector("#Menu").offsetTop,
        isFromAnotherSection = true;

    let handleScroll = function () {

        if (window.scrollY >= offsetTopMenuSection - window.innerHeight) {
            updateCategoryActive(liCategory, isFromAnotherSection);

            window.removeEventListener("scroll", handleScroll);
        }
    };

    window.addEventListener("scroll", handleScroll);

    window.scrollTo(0, offsetTopMenuSection + (navbar.offsetHeight * 1.5));
}

//! _________________________________________________________

function isValidDate(inputValue) {

    let inputValueArr = inputValue.split('T'),
        inputDateArr = inputValueArr[0].split('-'),
        inputTimeArr = inputValueArr[1].split(':'),
        inputYear = parseInt(inputDateArr[0]),
        inputMonth = parseInt(inputDateArr[1]),
        inputDay = parseInt(inputDateArr[2]),
        inputHour = parseInt(inputTimeArr[0]),
        inputMinute = parseInt(inputTimeArr[1]),

        currentDate = new Date(),
        currentYear = currentDate.getFullYear(),
        currentMonth = currentDate.getMonth() + 1,
        currentDay = currentDate.getDate(),
        currentHour = currentDate.getHours(),
        currentMinute = currentDate.getMinutes();

    return inputYear == currentYear &&
        inputMonth == currentMonth &&
        inputDay == currentDay &&
        (inputHour > currentHour || (inputHour == currentHour && inputMinute >= currentMinute)) &&
        inputHour >= 7 &&
        (inputHour < 21 || (inputHour == 21 && inputMinute == 0));
}

//! _________________________________________________________

function isValidMsg(inputValue) {
    if (inputValue.length >= 10 && inputValue.length <= 300) {
        return true;

    } else {
        return false;
    }
}

//! _________________________________________________________

function checkInput(input) {

    let inputName = input.name,
        inputValue = input.value.trim(),
        isEmpty = inputValue == "",
        isInValid = true,
        alertInput = input.nextElementSibling,
        alertMsg = "";

    if (inputName == 'datetime' && inputValue) {
        isInValid = !isValidDate(inputValue);

    } else if (inputName == 'message' && inputValue) {
        isInValid = !isValidMsg(inputValue);

    } else if (inputValue) {
        isInValid = !allRegex[inputName]?.test(inputValue);
    }

    // ---------------------------

    if (isInValid && !isEmpty) {

        switch (inputName) {
            case 'name':
                alertMsg = "Enter letters only."; break;
            case 'phone':
                alertMsg = "Enter a valid Egyptian phone number."; break;
            case 'seats':
                alertMsg = "Available seats from 1 to 15"; break;
            case 'datetime':
                alertMsg = "Future time today (7 AM : 9 PM)."; break;
            case 'email':
                alertMsg = "Invalid email address."; break;
            case 'message':
                alertMsg = "Message: 10-300 characters."; break;
        }

    } else if (isEmpty) {
        alertMsg = "This field is required.";
    }

    // ---------------------------

    if (isInValid) {
        alertInput.classList.remove('d-none');
        input.classList.add('border-danger');
        alertInput.textContent = alertMsg;

    } else {
        alertInput.classList.add('d-none');
        input.classList.remove('border-danger');
    };

    if (isInValid || !isEmpty) {
        let form = input.closest('form'),
            resetIcon = form.querySelector('form .reset i');
        resetIcon.parentElement.classList.remove('d-none');
    }

}

//! _________________________________________________________

function resetForm(resetIcon) {
    let form = resetIcon.closest('form'),
        invalidInputs = form.querySelectorAll('.form-control.border-danger');

    invalidInputs.forEach(function (input) {
        input.classList.remove('border-danger');
        input.nextElementSibling.classList.add('d-none');
    });

    form.reset();
    resetIcon.parentElement.classList.add('d-none');
}