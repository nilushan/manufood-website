document.addEventListener('DOMContentLoaded', function() {
    const copyMenuBtn = document.querySelector('.copy-menu-btn');
    
    if (copyMenuBtn) {
        copyMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            let menuText = '';
            let totalCost = 0;
            const menuItemContainers = document.querySelectorAll('.menu-item-with-image');

            menuItemContainers.forEach(container => {
                const nameElement = container.querySelector('.item-name');
                const priceElement = container.querySelector('.item-price');
                const quantityElement = container.querySelector('.quantity-input');

                if (nameElement && priceElement && quantityElement) {
                    const name = nameElement.textContent.trim();
                    const priceText = priceElement.textContent.trim();
                    const quantity = parseInt(quantityElement.value) || 0;

                    if (quantity > 0) {
                        // Extract numeric price (remove $ symbol)
                        const unitPrice = parseFloat(priceText.replace('$', '')) || 0;
                        const itemTotal = unitPrice * quantity;
                        totalCost += itemTotal;

                        menuText += `${name} - ${priceText} x ${quantity} = $${itemTotal.toFixed(2)}\n`;
                    }
                }
            });

            if (menuText.trim() === '') {
                alert('Please select at least one item with quantity greater than 0.');
                return;
            }

            // Add total cost
            menuText += `\nTOTAL: $${totalCost.toFixed(2)}`;
            // menuText += `\n\nPlease confirm this order. Thank you!`;

            // Try to copy to clipboard
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(menuText)
                    .then(() => {
                        alert('Order copied! Please paste it in your message.');
                    })
                    .catch(err => {
                        console.error('Clipboard failed:', err);
                        // Fallback method
                        fallbackCopyTextToClipboard(menuText);
                    });
            } else {
                // Fallback for older browsers
                fallbackCopyTextToClipboard(menuText);
            }
        });
    }

    // Fallback copy method for older browsers
    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                alert('Order copied! Please paste it in your message.');
            } else {
                alert('Failed to copy. Please manually copy your order.');
            }
        } catch (err) {
            alert('Copy not supported. Please manually copy your order.');
        }
        
        document.body.removeChild(textArea);
    }
});