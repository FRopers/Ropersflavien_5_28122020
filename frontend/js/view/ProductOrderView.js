class ProductOrderView {
    render(order) {
        console.log(order);
        let orderConfirm = document.getElementById("order-confirmation");
        orderConfirm.innerHTML = order.orderId;
        this.renderFinalPrice(order);
        this.renderFirstName(order);
        /*localStorage.clear();*/
    }

    renderFinalPrice(order) {
        let content = document.getElementById("order-price");
        let finalPrice = 0;
        for (let i = 0; i < order.products.length; i++) {
            finalPrice += order.products[i].price; 
        }
        content.textContent = finalPrice/100;
    }

    renderFirstName(order) {
        let content = document.getElementById("order-firstname");
        content.textContent = order.contact.firstName;     
    }
}