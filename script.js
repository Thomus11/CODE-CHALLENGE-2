document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const itemInput = document.getElementById("item");
    const priceInput = document.getElementById("price");
    const clearButton = document.querySelector(".btn");
    const box = document.querySelector(".box");

    // Function to add an item to the list
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission (no page reload)

        const itemName = itemInput.value.trim();
        const itemPrice = priceInput.value.trim();

        if (itemName && itemPrice) {
            const listItem = document.createElement("div");
            listItem.className = "list-item";

            // Add item name, price, checkbox, and remove button
            listItem.innerHTML = `
                <input type="checkbox" class="purchased-checkbox">
                <span>${itemName}</span>
                <span>${itemPrice}</span>
                <button class="remove">Remove</button>
            `;

            // Add the list item to the shopping basket
            box.appendChild(listItem);

            // Clear input fields
            itemInput.value = "";
            priceInput.value = "";
        } else {
            alert("Please enter both item name and price!");
        }
    });

    // Function to clear the list
    clearButton.addEventListener("click", () => {
        box.innerHTML = `<button class="btn"> clear list</button>`;
    });

    // Function to handle item interactions
    box.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove")) {
            // Remove the specific item
            e.target.parentElement.remove();
        }
    });

    // Function to toggle purchased state
    box.addEventListener("change", (e) => {
        if (e.target.classList.contains("purchased-checkbox")) {
            const listItem = e.target.parentElement;
            listItem.classList.toggle("purchased");
        }
    });
});

