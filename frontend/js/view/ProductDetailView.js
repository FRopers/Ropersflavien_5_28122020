class ProductDetailView {
    render(productChoice) {
        const product_selector = document.getElementById("product_selector");
        product_selector.innerHTML += this.renderChoiceProduct(productChoice);
    }

    renderChoiceProduct(productChoice) {
        let content = `
        <div class="card col">
            <img src="${productChoice.imageUrl}" alt="ours en peluche ${productChoice.name}" class="card-img-top" />
    
            <div class="card-body">
                <h2 class="card-title">${productChoice.name}</h2> 
    
                <p class="card-text">${productChoice.description}</p>
    
                <p class="card-text">${productChoice.price/100}€</p>
            </div>
        </div>`;
        
        return content;
    }
}