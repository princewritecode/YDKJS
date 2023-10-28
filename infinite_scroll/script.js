// Unsplash API
const imageContainer = document.getElementById('image-container');
const count = 30;
const apiKey = 'sXfnDMLtzgEG-VYruxKt6hwhoa0kh5Z01GOesbyw_m0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let ready = false;
let imageLoaded = 0;
let totalImages = 0;
let photosArray = [];


// check if all images were loaded
function imageLoaded() {
    console.log('image is loaded');
    imageLoaded++;
    console.log(imagesLoaded);
    if (imageLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log('ready =', ready);
    }
}
// helper function to set attributes on dom elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
};

// create elements for links and photos add to dom
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log('total images', totalImages);
    photosArray.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        // create image for photo
        console.log(item);
        const img = document.createElement('img');
        // img.setAttribute('src', photo.links.download);
        // img.setAttribute('alt', photo.alt_description
        // );
        // img.setAttribute('title', photo.alt_description
        // );
        setAttributes(item, { href: photo.links.html, target: "_blank" });
        setAttributes(img, { src: photo.links.download, alt: photo.alt_description, title: photo.alt_description });
        // event listener check when each is finished loading
        img.addEventListener('load', imageLoaded);
        // put <img> inside <a> then put both inside image container element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}
// get photos from unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();
    }
    catch (error) {
        // catch error here
    }
}
// check to see if scrollin near bottom page ,  load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
});
// on load
getPhotos();