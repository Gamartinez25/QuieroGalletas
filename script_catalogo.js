document.addEventListener('DOMContentLoaded', () => {
    fetch('productos.json') // Asegúrate de que 'productos.json' esté en la misma carpeta
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            const productGrid = document.getElementById('productGrid');
            products.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <div class="image-container">
                        <img src="${product.imagen_src}" alt="${product.nombre}">
                    </div>
                    <div class="content">
                        <h2 class="product-name">${product.nombre}</h2>
                        <p class="product-price">$${product.precio.toFixed(2)}</p>
                        <p class="product-description">${product.descripcion}</p>
                    </div>
                `;
                productGrid.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
            const productGrid = document.getElementById('productGrid');
            productGrid.innerHTML = '<p>Lo sentimos, no pudimos cargar los productos en este momento.</p>';
        });
});