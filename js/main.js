let allSwitches = document.querySelectorAll(".switch");
let allSliders = document.querySelectorAll(".slider");
let bodyBgColors = ['#849d8f', '#8996a6', '#9d8b84'];

let overlayPopup = document.querySelector(".overlay");
let modalPopup = document.querySelector(".modal-feedback");
let openPopupButton = document.querySelector(".contact-map-button");
let closePopupButton = document.querySelector(".feedback-close-button");

let mainBody = document.querySelector(".main-body"); //IE11 support

// Sliders switch

let toggleSliders = function (allSwitches, switchElement, allSliders) {
    switchElement.addEventListener("click", function (evt) {
        evt.preventDefault();
        for (let i = 0; i < allSwitches.length; i++) {
            allSwitches[i].classList.remove("active");
            allSliders[i].classList.remove("active");
        }
        let switchesArray = Array.prototype.slice.call(allSwitches);
        let sliderIndex = switchesArray.indexOf(switchElement);
        switchElement.classList.add("active");
        allSliders[sliderIndex].classList.add("active");
        // document.body.style = `background-color: ${bodyBgColors[sliderIndex]}`;
        mainBody.style.setProperty('background-color', bodyBgColors[sliderIndex]); //IE11 support
    });
}

let launchToggleSliders = function (switchesList, slidersList) {
    for (let i = 0; i < switchesList.length; i++) {
        toggleSliders(switchesList, switchesList[i], slidersList);
    }
}

launchToggleSliders(allSwitches, allSliders);

// feedback popup

if (modalPopup) {
    openPopupButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlayPopup.classList.add("overlay--show");
        modalPopup.classList.add("modal-feedback--show");
    })

    closePopupButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlayPopup.classList.remove("overlay--show");
    })

    overlayPopup.addEventListener("click", function () {
        overlayPopup.classList.remove("overlay--show");
    });
    modalPopup.addEventListener("click", function (evt) {
        evt.stopPropagation();
    });
}
