class ProductDetailView {
    /* Affiche le produit sélectionné*/
    render(productChoice) {
        let product_selector = document.getElementById("product_selector");
        product_selector.innerHTML += this.renderChoiceProduct(productChoice);
        this.renderColorProduct(productChoice);
        this.createCartArrayInLocalStorage();
        this.sendPoductChoice(productChoice);
    }

    /* Génère la structure HTML du produit sélectionné */
    renderChoiceProduct(productChoice) {
        let content = `
        <div class="card col-10 col-md-8 no-padding mx-auto">
            <img src="${productChoice.imageUrl}" alt="ours en peluche ${productChoice.name}" class="card-img-top" />
    
            <div class="card-body">
                <h1 class="h2 card-title">${productChoice.name}</h1> 
    
                <p class="card-text">${productChoice.description}</p>

                <label for="color-select" name="color">Choisissez une couleur:</label>

                <select name="color" id="color-select">
                </select>

                <p class="card-text h5 my-2">${productChoice.price/100}€</p>

                <button class="btn btn-primary mt-2" type="submit" id="send-cart">Ajouter au panier</button>
            </div>
        </div>`;

        return content;
    }

    /* Récupère les couleurs du produit, génère une liste déroulante et y insère les couleurs */ 
    renderColorProduct(productChoice) {
        let color = productChoice.colors;
        let list = document.getElementById("color-select");
        for (let i = 0; i < productChoice.colors.length; i++) {
            let content =`
            <option value="${color[i]}">${color[i]}</option>`;
            list.innerHTML += content;
        }
    }

    /* Création dans le localStorage du tableau servant à stocker les produit ajouté au panier */
    createCartArrayInLocalStorage() {
        if (localStorage.getItem("cart") === null) {
            let array = [];
            localStorage.setItem("cart", JSON.stringify(array));
        }
    }

    /* Envoi les caractéristiques du produit ajouté au panier dans le localStorage*/
    sendPoductChoice(productChoice) {
        let array = JSON.parse(localStorage.getItem("cart"));
        let button = document.getElementById("send-cart");
        button.addEventListener("click", function() {
            let value = document.getElementById("color-select").value;
            productChoice.colors = value;
            array.push(productChoice);
            localStorage.setItem("cart", JSON.stringify(array));
            alert("Ce produit à été ajouté à votre panier");
        });
    }
}
