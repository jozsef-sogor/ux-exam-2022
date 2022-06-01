"user strict"

//DETAILED SEARCH TOGGLE
const openButton = document.querySelector("#detailed-search-open");
const closeButton = document.querySelector("#detailed-search-close");
const deatiledSearchContainer = document.querySelector(".recipies-page__detailed-search");

openButton.addEventListener("click", function() {
    deatiledSearchContainer.classList.add("recipies-page__detailed-search--is-open");
})

closeButton.addEventListener("click", function() {
    deatiledSearchContainer.classList.remove("recipies-page__detailed-search--is-open");
})