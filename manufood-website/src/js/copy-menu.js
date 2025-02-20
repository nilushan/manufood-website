document.addEventListener('DOMContentLoaded', function() {
    const copyMenuBtn = document.querySelector('.copy-menu-btn');
    if (copyMenuBtn) {
        copyMenuBtn.addEventListener('click', function() {
            let menuText = '';
            const menuItems = document.querySelector('.menu-items');
            const lists = menuItems.querySelectorAll('ul');

            for (let i = 0; i < lists.length; i++) {
                const items = lists[i].querySelectorAll('li');
                items.forEach(item => {
                    const name = item.querySelector('.item-name').textContent;
                    const price = item.querySelector('.item-price').textContent;
                    const quantity = item.querySelector('.quantity-input').value;

                    if (parseInt(quantity) > 0) {
                        menuText += `  ${name} - ${price} - Qty: ${quantity}\n`;
                    }
                });
            }

            navigator.clipboard.writeText(menuText)
                .then(() => {
                    alert('Menu copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy menu: ', err);
                    alert('Failed to copy menu. Please try again.');
                });
        });
    }
});