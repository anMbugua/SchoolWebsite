document.addEventListener('DOMContentLoaded', function() {
    
    /* Smooth Scroll for Navigation Links */
    const smoothScrollLinks = document.querySelectorAll('nav a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scroll({
                top: target.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        });
    });

    /* Modal Gallery */
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex'; // Show the modal
            modalImg.src = this.src; // Set the modal image source to the clicked image
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal when the close button is clicked
    });

    /* Close Modal on Outside Click */
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    /* Animated Text in Header */
    const headerTitle = document.querySelector('header h1');
    headerTitle.classList.add('animate-header');

    /* Scroll to Top Button */
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.id = 'scrollToTop';
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    });

});

/* Animation on Page Load for Header Text */
window.addEventListener('load', function() {
    const headerText = document.querySelector('header h1');
    headerText.classList.add('fade-in');
});
