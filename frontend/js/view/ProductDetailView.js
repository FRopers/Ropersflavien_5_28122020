class ProductDetailView {
    render(productChoice) {
        let product_selector = document.getElementById("product_selector");
        product_selector.innerHTML += this.renderChoiceProduct(productChoice);
        this.renderColorProduct(productChoice);
    }

    renderChoiceProduct(productChoice) {
        let content = `
        <div class="card col">
            <img src="${productChoice.imageUrl}" alt="ours en peluche ${productChoice.name}" class="card-img-top" />
    
            <div class="card-body">
                <h2 class="card-title">${productChoice.name}</h2> 
    
                <p class="card-text">${productChoice.description}</p>

                <label for="color-select" name="color">Choisissez une couleur:</label>

                <select name="color" id="color-select">
                </select>

                <p class="card-text">${productChoice.price/100}€</p>

                <button class="btn btn-primary" type="submit" id="send-cart">Ajouter au panier</button>
            </div>
        </div>`;

        return content;
    }

    renderColorProduct(productChoice) {
        let color = productChoice.colors;
        let list = document.getElementById("color-select");
        for (let i = 0; i < productChoice.colors.length; i++) {
            let content =`
            <option value="${color[i]}">${color[i]}</option>`;
            list.innerHTML += content;
        }
    }
}