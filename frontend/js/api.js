const product = document.getElementById("product");
console.log(product);

const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);
        const length = response.length;
        for(i = 0; i < length; i++) {
            let card = document.createElement("div");
            card.classList.add("card");
            let image = document.createElement("img");
            image.src = response[i].imageUrl;
            image.classList.add("card-img-top");
            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            let cardTitle = document.createElement("h2");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = response[i].name;
            let cardDescription = document.createElement("p");
            cardDescription.classList.add("card-text");
            cardDescription.textContent = response[i].description;
            let cardPrice = document.createElement("p");
            cardPrice.classList.add("card-text");
            cardPrice.textContent = response[i].price;
            card.append(image);
            card.append(cardBody);
            cardBody.append(cardTitle);
            cardBody.append(cardDescription);
            cardBody.append(cardPrice);
            product.append(card);
        }
    }
};
request.open("GET", "http://localhost:3000/api/teddies")
request.send();