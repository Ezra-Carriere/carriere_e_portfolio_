document.addEventListener("DOMContentLoaded", function() {
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
});


