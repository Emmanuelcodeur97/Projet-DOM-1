document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const totals = document.querySelectorAll(".total span");

    function updateTotal() {
        let total = 0;
        items.forEach(item => {
            const quantity = parseInt(item.querySelector(".quantity span").textContent);
            const price = parseFloat(item.querySelector(".info p").textContent.split(": ")[1]);
            total += quantity * price;
        });
        totals.forEach(totalElement => {
            totalElement.textContent = total.toFixed(2);
        });
    }

    items.forEach(item => {
        item.querySelector(".quantity .increment").addEventListener("click", function() {
            const quantityElement = item.querySelector(".quantity span");
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });

        item.querySelector(".quantity .decrement").addEventListener("click", function() {
            const quantityElement = item.querySelector(".quantity span");
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });

        item.querySelector(".remove").addEventListener("click", function() {
            item.remove();
            updateTotal();
        });

        item.querySelector(".like").addEventListener("click", function() {
            const heart = item.querySelector(".like");
            heart.classList.toggle("liked");
        });
    });

    updateTotal();
});
