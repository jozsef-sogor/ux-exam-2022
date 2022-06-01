"use strict"

//RECIPE TOOLTIP
const tooltips = Array.from(document.querySelectorAll(".tooltip"));
const tooltipContainer = document.querySelector(".tooltip-container");

tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseenter", function(e) {
        const tooltipContent = e.target.getAttribute('data-explanation');
        tooltipContainer.classList.add("fade-in");
        tooltipContainer.style.left = `${e.pageX}px`;
        tooltipContainer.style.top = `${e.pageY}px`;
        tooltipContainer.innerText = tooltipContent;
    });

    tooltip.addEventListener("mouseout", function(e) {
        tooltipContainer.classList.remove("fade-in");
    });
});

tooltipContainer.addEventListener('mouseenter', function() {
    tooltipContainer.classList.add("fade-in");
})

tooltipContainer.addEventListener('mouseout', function() { 
    tooltipContainer.classList.remove("fade-in");
})