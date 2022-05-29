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