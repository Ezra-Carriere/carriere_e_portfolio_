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
                currentImageIndex = 0; // Reset to the first image
                currentImageArray = images[workName]; // Update the image array
                showModal(); // Show the modal
            }
        }

        // Close modal
        if (event.target === closeModal) {
            closeModalWindow();
        }

        // Previous button logic
        if (event.target === prevButton && currentImageIndex > 0) {
            currentImageIndex--; // Go to the previous image
            updateCarousel(); // Update the image
        }

        // Next button logic
        if (event.target === nextButton && currentImageIndex < currentImageArray.length - 1) {
            currentImageIndex++; // Go to the next image
            updateCarousel(); // Update the image
        }

        // Close modal if clicking outside of the modal content
        if (event.target === modal) {
            closeModalWindow();
        }
    });

    // Show the modal and load the first image
    function showModal() {
        modal.style.display = 'block'; // Display the modal
        updateCarousel(); // Update the carousel to show the first image
    }

    // Update the image in the modal based on the current index
    function updateCarousel() {
        console.log("Current Image Path:", currentImageArray[currentImageIndex]); // Log to check image path
        modalImage.src = currentImageArray[currentImageIndex]; // Update the image source
    }

    // Close the modal window
    function closeModalWindow() {
        modal.style.display = 'none'; // Hide the modal
    }
}

