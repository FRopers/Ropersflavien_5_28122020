class ProductCartView {
    render() {
        let array = JSON.parse(localStorage.getItem("cart"));
        if (array === null || array.length === 0) {
            this.displayEmptyCartMessage();
        }else{
            this.renderOneProductChoice();
            this.CreateDeleteProductButton();
            this.confirmSending(); 
        }
    }

    ////////// panier //////////

    renderProductCart(productChoice, locationInArray) {
        let content = `
        <div class="row mb-3 bg-white rounded">
            <div class="col-3 col-lg-2 no-padding my-auto">
                <img src="${productChoice.imageUrl}" alt="ours en peluche ${productChoice.name}" class="img-cart p-1" />
            </div>

            <div class="col-7 col-lg-9">
                <h2>${productChoice.name}</h2> 

                <p>Couleur:<span class="font-weight-bold"> ${productChoice.colors}</span></p>

                <p class="delete" id="delete-${locationInArray}">supprimer</p>           
            </div>

            <div class="col-2 col-lg-1 font-weight-bold">
                <p class="center h5">${productChoice.price/100}€</p>
            </div>
        </div>`;
        
        return content;
    }

    CreateDeleteProductButton() {
        let array = JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < array.length; i++) {        
         let button = document.getElementById("delete-" + i);
         button.addEventListener("click", function() {
            array.splice(i, 1);           
            localStorage.setItem("cart", JSON.stringify(array));
            document.location.reload();
         });
        }      
    }

    renderOneProductChoice() {
        let array = JSON.parse(localStorage.getItem("cart"));
        let finalPrice = 0;
        let cart = document.getElementById("cart-product");
        for (let i = 0; i < array.length; i++) {        
        cart.innerHTML += this.renderProductCart(array[i], i);
        finalPrice += array[i].price;
        }
        this.renderFinalPrice(finalPrice);
    }

    displayEmptyCartMessage() {
        let message = document.getElementById("cart");
        let content = `
        <div class="col text-center">
            <h1>Votre panier est vide</h1>
        </div>`;
        message.innerHTML = content;
    }

    renderFinalPrice(finalPrice) {
        let price = document.getElementById("final-price");
        let content = `
        <div class="col-10 col-lg-11">
            <h3 class="d-flex align-items-center">Total à régler</h3>
        </div>

        <div class="col-2 col-lg-1 font-weight-bold">
            <p class="center h4">${finalPrice/100}€</p>
        </div>`;

        price.innerHTML = content;
    }

    ////////// Envoi formulaire et panier //////////

    confirmSending() {
        let button = document.getElementById("send-server");
        button.addEventListener("click", function(){
            let contact = this.takeContactFormContent();
            let products = this.takeProcuctCart();
            localStorage.setItem("contact",JSON.stringify(contact));
            localStorage.setItem("products",JSON.stringify(products));
        }.bind(this));
    }

    takeContactFormContent() {

        let contact = {
            firstName: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value
        }
        return contact;
    }

    takeProcuctCart() {
        let products = [];
        let array = JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < array.length; i++) {        
            products.push(array[i]._id);
        }
        return products;
    }
}