const products = {
    featured: [
        { id: 1, name: "Featured Product 1", description: "This is a featured product.", image: "https://via.placeholder.com/200", price: "$50" },
        { id: 2, name: "Featured Product 2", description: "This is another featured product.", image: "https://via.placeholder.com/200", price: "$60" }
    ],
    discount: [
        { id: 3, name: "Discount Product 1", description: "This is a discounted product.", image: "https://via.placeholder.com/200", price: "$30" },
        { id: 4, name: "Discount Product 2", description: "This is another discounted product.", image: "https://via.placeholder.com/200", price: "$40" }
    ],
    new: [
        { id: 5, name: "New Product 1", description: "This is a new product.", image: "https://via.placeholder.com/200", price: "$70" },
        { id: 6, name: "New Product 2", description: "This is another new product.", image: "https://via.placeholder.com/200", price: "$80" }
    ],
    top: [
        { id: 7, name: "Top Product 1", description: "This is a top product.", image: "https://via.placeholder.com/200", price: "$90" },
        { id: 8, name: "Top Product 2", description: "This is another top product.", image: "https://via.placeholder.com/200", price: "$100" }
    ]
};

const featuredContainer = document.getElementById('featured-products');
const discountContainer = document.getElementById('discount-products');
const newContainer = document.getElementById('new-products');
const topContainer = document.getElementById('top-products');

function showProducts() {
    // Featured products
    products.featured.forEach(product => {
        const productElement = createProductElement(product);
        featuredContainer.appendChild(productElement);
    });

    // Discount products
    products.discount.forEach(product => {
        const productElement = createProductElement(product);
        discountContainer.appendChild(productElement);
    });

    // New products
    products.new.forEach(product => {
        const productElement = createProductElement(product);
        newContainer.appendChild(productElement);
    });

    // Top products
    products.top.forEach(product => {
        const productElement = createProductElement(product);
        topContainer.appendChild(productElement);
    });
}


function createProductElement(product) {
    const productItem = document.createElement('div');
    productItem.classList.add('bg-green-500', 'p-6', 'rounded-lg', 'shadow-lg', 'text-center');

    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="mx-auto h-48 w-48 object-contain mb-4">
        <h3 class="text-lg font-medium">${product.name}</h3>
        <p class="text-sm text-gray-600">${product.description}</p>
        <p class="font-semibold text-lg mt-2">${product.price}</p>
    `;
    return productItem;
}



function updateAuthButtons() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        document.getElementById('login-btn').classList.add('hidden');
        document.getElementById('logout-btn').classList.remove('hidden');
    } else {
        document.getElementById('login-btn').classList.remove('hidden');
        document.getElementById('logout-btn').classList.add('hidden');
    }
}

// Initialize page
window.onload = () => {
    showProducts();
    updateAuthButtons();
};
