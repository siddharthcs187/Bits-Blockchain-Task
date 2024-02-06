const items = [
    { title: 'Product 1', image: 'me.jpg', price: '$19.99' },
    { title: 'ipad 2', image: 'me.jpg', price: '$29.99' },
    { title: 'iphone 2', image: 'me.jpg', price: '$29.99' },
    { title: 'ktele 2', image: 'me.jpg', price: '$29.99' },
    { title: 'watch 2', image: 'me.jpg', price: '$29.99' },
    { title: 'cricket bat 2', image: 'me.jpg', price: '$29.99' },
    { title: 'mac 2', image: 'me.jpg', price: '$29.99' },
];

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    const itemContainer = document.getElementById('itemContainer');
    const searchInput = document.querySelector('.searchInput');

    let filteredItems = items.slice();

    if (items.length > 0) {
        loader.style.display = 'none';

        generateProductCards(filteredItems);

        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            filteredItems = items.filter(item => item.title.toLowerCase().includes(searchTerm));
            generateProductCards(filteredItems);
        });
    } else {
        loader.innerText = 'No items available';
    }
});

function generateProductCards(items) {
    const itemContainer = document.getElementById('itemContainer');
    itemContainer.innerHTML = '';
    items.forEach((item, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => openItemDetails(item.title, item.image, item.price);

        const productImage = document.createElement('div');
        productImage.className = 'product-image';
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        productImage.appendChild(img);

        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        const h2 = document.createElement('h2');
        h2.innerText = item.title;
        const p = document.createElement('p');
        p.innerText = item.price;
        productInfo.appendChild(h2);
        productInfo.appendChild(p);

        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        itemContainer.appendChild(productCard);
    });
}

function showItemDetails(itemId) {
    const itemName = `Item ${itemId}`;
    const imageUrl = `placeholder${itemId}.jpg`;

    document.getElementById('modalTitle').innerText = itemName;
    document.getElementById('modalImage').src = imageUrl;

    document.getElementById('itemDetailsModal').style.display = 'block';
}

function closeItemDetailsModal() {
    document.getElementById('itemDetailsModal').style.display = 'none';
}

function toggleSearch() {
    const searchBar = document.querySelector('.searchBox');
    searchBar.style.width = (searchBar.style.width === '250px') ? '0px' : '250px';
}

function openItemDetails(title, image, price) {
    const itemDetailsUrl = `item-details.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;

    window.open(itemDetailsUrl, '_blank');
}

function closeItemDetails() {
    const itemDetailsContainer = document.querySelector('.item-details');
    itemDetailsContainer.remove();
}
