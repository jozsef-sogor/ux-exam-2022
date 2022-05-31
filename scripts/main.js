"use strict"

//NAVIGATION
const hamburgerIcon = document.querySelector("#hamburger-menu");
hamburgerIcon.addEventListener("click", function() {
    const menuContainer = document.querySelector(".navbar__links-container");
    menuContainer.classList.toggle("navbar__links-container--is-open");
})

//TABS
const tabs = Array.from(document.querySelectorAll(".tabs__tab-title"));

function resetActiveTabContents() {
    tabs.forEach(tab => {
        const tabId = tab.dataset.tabid;
        const tabContent = document.querySelector(`#tab-${tabId}`);
        tabContent.style.display = "none";
    })
}

function resetActiveTabs() {
    tabs.forEach(tab => {
        tab.dataset.isactive = "false";
    })
}

function changeActiveTab(tabId) {
    const newActiveTab = document.querySelector(`[data-tabid="${tabId}"]`);
    const newActiveTabContent = document.querySelector(`#tab-${tabId}`);

    resetActiveTabs();
    resetActiveTabContents();

    newActiveTab.dataset.isactive = "true";
    newActiveTabContent.style.display = "block";
}

tabs.forEach(tab => {
    if(tab.dataset.isactive) {
        const activeTabContentId = tab.dataset.tabid;
        document.querySelector(`#tab-${activeTabContentId}`).style.display = "block";
    }
    tab.addEventListener("click", function() {
        changeActiveTab(this.dataset.tabid);
    })
})

//RECIPE TOOLTIP
const tooltips = Array.from(document.querySelectorAll(".tooltip"));
const tooltipContainer = document.querySelector(".tooltip-container");

tooltips.forEach((tooltip) => {
  tooltip.addEventListener("mouseenter", (e) => {

    const tooltipContent = e.target.getAttribute('data-explanation');
    tooltipContainer.classList.add("fade-in");
    tooltipContainer.style.left = `${e.pageX}px`;
    tooltipContainer.style.top = `${e.pageY}px`;
    tooltipContainer.innerText = tooltipContent;

  });

  tooltip.addEventListener("mouseout", (e) => {
    tooltipContainer.classList.remove("fade-in");
  });
});

tooltipContainer.addEventListener('mouseenter', () => {

    tooltipContainer.classList.add("fade-in");

})
tooltipContainer.addEventListener('mouseout', () => {
    
    tooltipContainer.classList.remove("fade-in");

})
