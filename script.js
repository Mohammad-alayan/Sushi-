        // Add smooth scroll behavior for reservation buttons
        document.querySelectorAll('.reservation-btn').forEach(button => {
            button.addEventListener('click', () => {
                // You can add reservation form logic here
                console.log('Reservation button clicked');
            });
        });
        function toggleMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('active');
        }
        
function loadResponsiveImages() {
    const images = document.querySelectorAll('.grid-img');
    const viewportWidth = window.innerWidth;
    
    images.forEach(img => {
        let size;
        if (viewportWidth <= 480) {
            size = 300;
        } else if (viewportWidth <= 768) {
            size = 400;
        } else {
            size = 500;
        }
        
        img.src = `/placeholder.svg?height=${size}&width=${size}`;
    });
}

window.addEventListener('resize', loadResponsiveImages);
loadResponsiveImages();