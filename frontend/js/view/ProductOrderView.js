class ProductOrderView {
    render(order) {
        console.log(order);
        let orderConfirm = document.getElementById("order-confirmation");
        orderConfirm.innerHTML = order.orderId;
        this.renderFinalPrice(order);
        localStorage.clear();
    }

    renderFinalPrice(order) {
        let content = document.getElementById("order-price");
        let finalPrice = 0;
        for (let i = 0; i < order.products.length; i++) {
            finalPrice += order.products[i].price; 
        }
        content.textContent = finalPrice/100;
    }
}