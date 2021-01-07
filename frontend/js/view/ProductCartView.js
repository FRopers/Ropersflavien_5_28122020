class ProductCartView {
    //Phase de test: pb le panier ne conserve pas l'envoie//
    render() {
        let cart = document.getElementById("cart");
        let objet = localStorage.getItem("productChoice");
        let productChoice = JSON.parse(objet);
        let color = localStorage.getItem("colorChoice")
        cart.innerHTML += this.renderChoiceProduct(productChoice,color);
        console.log(localStorage);
    }

    renderChoiceProduct(productChoice,color) {
        let content = `
        <div class="col">
            <img src="${productChoice.imageUrl}" alt="ours en peluche ${productChoice.name}" height="100" />
        </div>

        <div class="col">
            <h2>${productChoice.name}</h2> 

            <p>Couleur: ${color}</p>
    
            <label for="quantity-select">Quantité:</label>

            <select name="color" id="quantity-select">
            </select>
        </div>

        <div class="col">
            <p>${productChoice.price/100}€</p>
        </div>`;
        
        return content;
    }
}