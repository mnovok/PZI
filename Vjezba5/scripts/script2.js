{//get all elements that have 'thumbnail' class
const thumbnails = document.querySelectorAll('.thumbnail')

    for (let i = 0; i < thumbnails.length; i++) {
    const thumbnail = thumbnails[i];

    thumbnail.addEventListener('click', handleThumbnailClick);
    }

function selectThumbnail(thumbnail){
//get selected thumbnail
const currentlySelectedThumbnail = document.querySelector('.thumbnail.selected');

//remove class 'selected' from currently selected thumbnail
currentlySelectedThumbnail.classList.remove('selected');

//add class 'selected' to the clicked thumbnail
thumbnail.classList.add('selected');

//get the large image url for the selected thumbnail
const clickedThumbnailLargeImageUrl = thumbnail.getAttribute('data-large-img-url');

//get the large slider image
const sliderImage = document.querySelector('#slider-main-picture-container img');

//set large image path to the new value for the selected thumbnail
sliderImage.setAttribute('src', clickedThumbnailLargeImageUrl);

}

function handleThumbnailClick(event){
const thumbnail = event.currentTarget;

selectThumbnail(thumbnail);
}

//get left arrow icon
const sliderLeftArrow = document.querySelector('.slider-arrow-left');
const sliderRightArrow = document.querySelector('.slider-arrow-right');

//add event listener for click event
sliderLeftArrow.addEventListener('click', handleLeftArrowClick);

sliderRightArrow.addEventListener('click', handleRightArrowClick);

function handleLeftArrowClick(){
//get the selected thumbnail index
const selectedThumbnailIndex = getSelectedThumbnailIndex();

//if error happens exit
if(selectedThumbnailIndex === -1){
return;
}

//index of next selected thumbnail, let the currently selected one
let nextThumbnailIndex = selectedThumbnailIndex -1;

//if the currently selected thumbnail is the first in the thumbnail array
//new selected thumbnail should be the last one in the array
if(selectedThumbnailIndex === 0){
nextThumbnailIndex = thumbnails.length -1;
}

//
selectThumbnail(thumbnails[nextThumbnailIndex]);
}
function handleRightArrowClick(){
//get the selected thumbnail index
const selectedThumbnailIndex = getSelectedThumbnailIndex();

//if error happens exit
if(selectedThumbnailIndex === -1){
return;
}

//index of next selected thumbnail, let the currently selected one
let nextThumbnailIndex = selectedThumbnailIndex +1;

//if the currently selected thumbnail is the last in the thumbnail array
//new selected thumbnail should be the first one in the array
if(selectedThumbnailIndex === thumbnails.length -1){
nextThumbnailIndex = 0;
}

//
selectThumbnail(thumbnails[nextThumbnailIndex]);
}

function getSelectedThumbnailIndex(){
//get selected thumbnail
const currentlySelectedThumbnail = document.querySelector('.thumbnail.selected');

for (let i = 0; i < thumbnails.length; i++) {
if(currentlySelectedThumbnail === thumbnails[i]){
return i;
}
}

return 1;
}

function getSelectedThumbnailIndex(){
//get selected thumbnail
const currentlySelectedThumbnail = document.querySelector('.thumbnail.selected');

for (let i = 0; i < thumbnails.length; i++) {
if(currentlySelectedThumbnail === thumbnails[i]){
return i;
}
}

return -1;
}


function removeSection() {
var elem = document.getElementById('.fa fa-times delete-button');
elem.parentNode.removeChild(elem);
return false;
}

//.parentNode
//.removeChild
}