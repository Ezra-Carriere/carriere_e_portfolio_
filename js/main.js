(() => {
const navToggle = document.querySelector('#nav-toggle');
const dropdown = document.querySelector('#dropdown');

dropdown.style.display = 'none';

navToggle.addEventListener('click', function() {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(event) {
    if (!navToggle.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
})();

(() => {
const modal = document.querySelector('#image-modal');
const modalImage = document.querySelector('#carousel-image');
const closeModal = document.querySelector('.close');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let currentImageIndex = 0;

const images = {
    "Billy Beer": ["images/BillyBeerGallery.png", "images/BillyBeerGallery2.png", "images/BillyBeerGallery3.png"],
    "London Manga Shop": ["images/LMSGallery.png", "images/LMSGallery2.png", "images/LMSGallery3.png"],
    "QU4TRO": ["images/QuatroGallery.png", "images/QuatroGallery2.png"],
    "QUENCH": ["images/QuenchGallery.png", "images/QuenchGallery2.png"],
    "Hotel Room Render": ["images/Render1Gallery.png", "images/Render1Gallery2.png"],
    "Fanshawe Styleguide": ["images/FanshaweSGGallery.png", "images/FanshaweSGGallery2.png"]
};

document.addEventListener('click', function(event) {
    const workTitle = event.target.closest('.work-title');
    if (workTitle) {
        const workName = workTitle.textContent.trim();
        if (images[workName]) {
            currentImageIndex = 0;
            showModal(images[workName]);
        }
    }

    if (event.target === closeModal) {
        closeModalWindow();
    }

    if (event.target === prevButton) {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateCarousel();
        }
    }


    if (event.target === nextButton) {
        if (currentImageIndex < images[Object.keys(images)[currentImageIndex]].length - 1) {
            currentImageIndex++;
            updateCarousel();
        }
    }

    if (event.target === modal) {
        closeModalWindow();
    }
});

function showModal(imageArray) {
    modal.style.display = 'block';
    updateCarousel(imageArray);
}

function updateCarousel(imageArray) {
    modalImage.src = imageArray[currentImageIndex];
}

function closeModalWindow() {
    modal.style.display = 'none';
}
})();



