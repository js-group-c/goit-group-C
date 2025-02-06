var slider = document.querySelector(
  'div.support-ukr > div.slider-div'
);
var icon = document.getElementById("slider");


slider.addEventListener("click", slide);


function slide() {
    showHide3();
    changeIcon();
}
function changeIcon() {
    if (icon.src.includes("/slider.svg#slider")) {
        icon.src = "../img/blocks/sliderUp.svg#sliderUp";
    } else {
        icon.src = "../img/blocks/slider.svg#slider";
    }
}
function showHide3() {
    if (icon.src.includes("/slider.svg#slider")) {
    var ind1 = document.querySelector("ol.support-list > li:nth-child(1)");
    var ind2 = document.querySelector("ol.support-list > li:nth-child(2)");
    var ind3 = document.querySelector("ol.support-list > li:nth-child(3)");
    ind1.style.display = "none";
    ind2.style.display = "none";
    ind3.style.display = "none";
    var ol = document.querySelector("ol.support-list");
    ol.style.counterSet = "custom 3";
    var ind7 = document.querySelector("ol.support-list > li:nth-child(7)");
    var ind8 = document.querySelector("ol.support-list > li:nth-child(8)");
    var ind9 = document.querySelector("ol.support-list > li:nth-child(9)");
    ind7.style.display = "flex";
    ind8.style.display = "flex";
    ind9.style.display = "flex";
    var last3 = document.querySelectorAll("ol.support-list > li.last3 > a > img ");
    last3.forEach(x=>x.style.position="relative");
    last3.forEach(x=>x.style.top="0px");
    }
    else {
        var ind1 = document.querySelector("ol.support-list > li:nth-child(1)");
        var ind2 = document.querySelector("ol.support-list > li:nth-child(2)");
        var ind3 = document.querySelector("ol.support-list > li:nth-child(3)");
        ind1.style.display = "";
        ind2.style.display = "";
        ind3.style.display = "";
        var ol = document.querySelector("ol.support-list");
        ol.style.counterSet = "custom 1";
        var ind7 = document.querySelector("ol.support-list > li:nth-child(7)");
        var ind8 = document.querySelector("ol.support-list > li:nth-child(8)");
        var ind9 = document.querySelector("ol.support-list > li:nth-child(9)");
        ind7.style.display = "none";
        ind8.style.display = "none";
        ind9.style.display = "none";    
    }

} 