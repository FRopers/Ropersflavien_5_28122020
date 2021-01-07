class ProductListView {
    render(productList) {
        const product = document.getElementById("product");
        for(let i = 0; i < productList.length; i++){
            product.innerHTML += this.renderOneTeddy(productList[i]);
        }

    }

    renderOneTeddy(currentProduct) {
        let content = `
        <div class="card col-md-5 m-3">
            <img src="${currentProduct.imageUrl}" alt="ours en peluche ${currentProduct.name}" class="card-img-top" />
    
            <div class="card-body">
                <h2 class="card-title">${currentProduct.name}</h2> 
    
                <p class="card-text">${currentProduct.description}</p>
    
                <p class="card-text">${currentProduct.price/100}€</p>
                
                <a href="produit.html?id=${currentProduct._id}" class="stretched-link"></a>
            </div>
        </div>`;
        
        return content;
    }
}