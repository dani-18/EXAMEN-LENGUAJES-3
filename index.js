fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            const productosContainer = document.getElementById("productos-container");

            json.forEach(producto => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "col-md-6", "mb-4");

                const cardContent = `
                    <div class="card tarjeta-ropa slit-in-vertical">
                        <img src="${producto.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.description}</p>
                            <p class="card-text">Precio: ${producto.price}€</p>
                            <button type="button" class="btn btn-primary">Agregar al Carrito</button>
                        </div>
                    </div>
                `;

                card.innerHTML = cardContent;
                productosContainer.appendChild(card);
            });
        });