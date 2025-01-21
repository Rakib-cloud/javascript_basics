document.addEventListener("DOMContentLoaded", () => {
    fetchCategories(); // Fetch and display categories
    handleMobileNavbarToggle(); // Toggle mobile navbar
});

// Fetch Categories
function fetchCategories() {
    const categoryListContainer = document.getElementById("category-list");

    // Fetch categories from the API
    fetch("https://api.medeasy.health/api/categories/")
        .then(response => response.json())
        .then(data => {
            const categories = data?.categories || [];
            displayCategories(categories);
        })
        .catch(error => {
            console.error("Error fetching categories:", error);
            categoryListContainer.innerHTML = `<p class='text-center text-red-500'>Failed to load categories. Please try again later.</p>`;
        });
}

// Display Categories
function displayCategories(categories) {
    const categoryListContainer = document.getElementById("category-list");

    if (categories.length === 0) {
        categoryListContainer.innerHTML = `<p class='text-center text-gray-600'>No categories found.</p>`;
        return;
    }

    const categoryCards = categories.map(category => {
        return `
            <div class="bg-white shadow rounded-lg p-6 text-center" onclick="fetchCategoryProducts(${category.id})">
                <img src="https://api.medeasy.health/${category.image}" alt="${category.name}" class="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 class="text-xl font-semibold mb-2">${category.name}</h3>
            </div>
        `;
    }).join("");

    categoryListContainer.innerHTML = categoryCards;
}

// Fetch Products for a Category
function fetchCategoryProducts(categoryId) {
    const productListContainer = document.getElementById("product-list");

    // Fetch products for the specific category ID from the API
    fetch(`https://api.medeasy.health/api/patient/category-products/?category_id=${categoryId}&from=1&to=10`)
        .then(response => response.json())
        .then(data => {
            const products = data?.category_products || [];
            displayProducts(products);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            productListContainer.innerHTML = `<p class='text-center text-red-500'>Failed to load products. Please try again later.</p>`;
        });
}

// Display Products
function displayProducts(products) {
    const productListContainer = document.getElementById("product-list");

    if (products.length === 0) {
        productListContainer.innerHTML = `<p class='text-center text-gray-600'>No products available.</p>`;
        return;
    }

    const productCards = products.map(product => {
        return `
            <div class="bg-white shadow rounded-lg p-4 mb-4">
                <img src="https://api.medeasy.health/${product.image}" alt="${product.name}" class="w-full h-32 object-cover mb-2 rounded-md" />
                <h4 class="text-lg font-semibold mb-1">${product.name}</h4>
                <p class="text-gray-600 text-sm">${product.price}</p>
            </div>
        `;
    }).join("");

    productListContainer.innerHTML = productCards;
}

// Toggle Mobile Navbar
function handleMobileNavbarToggle() {
    const toggleButton = document.getElementById("navbar-toggle");
    const mobileNavbar = document.getElementById("mobile-navbar");

    toggleButton.addEventListener("click", () => {
        mobileNavbar.classList.toggle("hidden");
    });
}
