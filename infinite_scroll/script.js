// Unsplash API
const imageContainer = document.getElementById('image-container');
const count = 10;
const apiKey = 'sXfnDMLtzgEG-VYruxKt6hwhoa0kh5Z01GOesbyw_m0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let photosArray = [];

// create elements for links and photos add to dom

function displayPhotos() {
    photosArray.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // create image for photo
        console.log(item);
        const img = document.createElement('img');
        img.setAttribute('src', photo.links.download);
        img.setAttribute('alt', photo.alt_description
        );
        img.setAttribute('title', photo.alt_description
        );
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




// on load
getPhotos();