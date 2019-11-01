let allSwitches = document.querySelectorAll(".switch");
let allSliders = document.querySelectorAll(".slider");
let bodyBgColors = ['#849d8f', '#8996a6', '#9d8b84'];
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
        document.body.style = `background-color: ${bodyBgColors[sliderIndex]}`;
    });
}

let launchToggleSliders = function (switchesList, slidersList) {
    for (let i = 0; i < switchesList.length; i++) {
        toggleSliders(switchesList, switchesList[i], slidersList);
    }
}

launchToggleSliders(allSwitches, allSliders);