class ProductCartView {
    render() {
        this.renderOneProductChoice();
        this.DeleteOneProductInCart();
        this.confirmSending(); 
    }

    renderProductCart(productChoice, locationInArray) {
        let content = `
        <div class="col-2">
            <img src="${productChoice.imageUrl}" alt="ours en peluche ${productChoice.name}" height="100" />
        </div>

        <div class="col-9">
            <h2>${productChoice.name}</h2> 

            <p>Couleur: ${productChoice.colors}</p>

            <button class="btn" type="submit" id="delete-${locationInArray}">supprimer</button>           
        </div>

        <div class="col-1">
            <p>${productChoice.price/100}€</p>
        </div>`;
        
        return content;
    }

    DeleteOneProductInCart() {
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
        for (let i = 0; i < array.length; i++) {        
        cart.innerHTML += this.renderProductCart(array[i], i);
        }
    }

    send(contact,productSent) {
        let controller = new Controller;
        controller.renderformAndProductChoice(contact,productSent);
    }

    confirmSending() {
        let button = document.getElementById("send-server");
        button.addEventListener("click", function(event){
            event.preventDefault();
            let view = new ProductCartView;
            let contact = view.takeContactFormContent();
            let productSent = view.takeProcuctCart();
            view.send(contact,productSent);
        });
    }

    takeContactFormContent() {

        let contact = {
            firstname: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value
        }
        return contact;
    }

    takeProcuctCart() {
        let productSent = [];
        let array = JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < array.length; i++) {        
            productSent.push(array[i]._id);
        }
        return productSent;
    }
}