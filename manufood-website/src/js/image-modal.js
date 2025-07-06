document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');

    // Add click event to all menu item images
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('menu-item-img')) {
            openModal(e.target);
        }
    });

    function openModal(img) {
        modal.style.display = 'flex';
        // Force reflow before adding show class for animation
        modal.offsetHeight;
        modal.classList.add('show');
        
        // Get the largest available image from the srcset or fallback to current src
        let largestImageSrc = img.src;
        
        // If the image has a srcset, extract the largest image
        if (img.srcset) {
            const srcsetEntries = img.srcset.split(',').map(entry => {
                const parts = entry.trim().split(' ');
                return {
                    url: parts[0],
                    width: parseInt(parts[1]) || 0
                };
            });
            
            // Find the largest image
            const largest = srcsetEntries.reduce((max, current) => 
                current.width > max.width ? current : max
            );
            
            largestImageSrc = largest.url;
        }
        
        modalImg.src = largestImageSrc;
        modalImg.alt = img.alt;
        modalCaption.textContent = img.alt;
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            // Restore body scroll
            document.body.style.overflow = '';
        }, 300);
    }

    // Close modal when clicking the X
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});