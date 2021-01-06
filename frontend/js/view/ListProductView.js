class ListProductView {
    render(listProduct) {
        const length = listProduct.length;
        const product = document.getElementById("product");
        for(let i = 0; i < length; i++) {
            let card = document.createElement("div");
            card.classList.add("card");
            card.classList.add("col-md-5");
            card.classList.add("m-3");
            let lien = document.createElement("a");
            lien.classList.add("stretched-link");
            lien.href = "produit.html" + "?id="+ listProduct[i]._id;
            let image = document.createElement("img");
            image.src = listProduct[i].imageUrl;
            image.classList.add("card-img-top");
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            let cardTitle = document.createElement("h2");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = listProduct[i].name;
            let cardDescription = document.createElement("p");
            cardDescription.classList.add("card-text");
            cardDescription.textContent = listProduct[i].description;
            let cardPrice = document.createElement("p");
            cardPrice.classList.add("card-text");
            cardPrice.textContent = listProduct[i].price/100 +"€";
            card.append(image);
            card.append(cardBody);
            cardBody.append(cardTitle);
            cardBody.append(cardDescription);
            cardBody.append(cardPrice);
            card.append(lien);
            product.append(card);
        }
    } 
}