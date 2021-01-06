class DetailProductView {
    render(choiceProduct) { 
        const product = document.getElementById("product_selector");
        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col");
        card.classList.add("my-3");
        let image = document.createElement("img");
        image.src = choiceProduct.imageUrl;
        image.classList.add("card-img-top");
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = choiceProduct.name;
        let cardDescription = document.createElement("p");
        cardDescription.classList.add("card-text");
        cardDescription.textContent = choiceProduct.description;
        let cardPrice = document.createElement("p");
        cardPrice.classList.add("card-text");
        cardPrice.textContent = choiceProduct.price/100 +"€";
        card.append(image);
        card.append(cardBody);
        cardBody.append(cardTitle);
        cardBody.append(cardDescription);
        cardBody.append(cardPrice);
        product.append(card);
    }    
}