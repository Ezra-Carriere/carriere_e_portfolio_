export function setupModal() {
    const modal = document.querySelector('#image-modal');
    const modalImage = document.querySelector('#carousel-image');
    const closeModal = document.querySelector('.close');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    let currentImageIndex = 0;
    let currentImageArray = [];

    const images = {
        "Billy Beer": ["images/BillyBeerGallery.png", "images/BillyBeerGallery2.png", "images/BillyBeerGallery3.png"],
        "London Manga Shop": ["images/LMSGallery.png", "images/LMSGallery2.png", "images/LMSGallery3.png"],
        "QU4TRO": ["images/QuatroGallery.png", "images/QuatroGallery2.png"],
        "QUENCH": ["images/QuenchGallery.png", "images/QuenchGallery2.png"],
        "Hotel Room Render": ["images/Render1Gallery.png", "images/Render1Gallery2.png"],
        "Fanshawe Styleguide": ["images/FanshaweSGGallery.png", "images/FanshaweSGGallery2.png"]
    };

    document.addEventListener('click', function (event) {
        const workTitle = event.target.closest('.work-title');
        if (workTitle) {
            const workName = workTitle.textContent.trim();
            if (images[workName]) {
                currentImageIndex = 0; 
                currentImageArray = images[workName]; 
                showModal(); 
            }
        }

        if (event.target === closeModal) {
            closeModalWindow();
        }

        if (event.target === prevButton && currentImageIndex > 0) {
            currentImageIndex--;
            updateCarousel();
        }

        if (event.target === nextButton && currentImageIndex < currentImageArray.length - 1) {
            currentImageIndex++;
        }

        if (event.target === modal) {
            closeModalWindow();
        }
    });

    function showModal() {
        modal.style.display = 'block';
        updateCarousel(); 
    }

    function updateCarousel() {
        console.log("Current Image Path:", currentImageArray[currentImageIndex]);
        modalImage.src = currentImageArray[currentImageIndex];
    }

    function closeModalWindow() {
        modal.style.display = 'none';
    }
}

