class ProductListView {
    /* Affiche chaque produits dans la page d'accueil*/
    render(productList) {
        let product = document.getElementById("product");
        for(let i = 0; i < productList.length; i++){
            product.innerHTML += this.renderOneTeddy(productList[i]);
        }

    }

    /* Génère la structure HTML pour afficher les produits */
    renderOneTeddy(currentProduct) {
        let content = `
        <div class="card col-md-5 m-4 text-center hover no-padding">
            <img src="${currentProduct.imageUrl}" alt="ours en peluche ${currentProduct.name}" class="card-img-top img-index"/>
    
            <div class="card-body">
                <h2 class="card-title">${currentProduct.name}</h2> 
    
                <p class="card-text">${currentProduct.description}</p>
    
                <p class="card-text h4">${currentProduct.price/100}€</p>
                
                <a href="produit.html?id=${currentProduct._id}" class="stretched-link"></a>
            </div>
        </div>`;
        
        return content;
    }
}