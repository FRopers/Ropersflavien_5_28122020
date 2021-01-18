class ProductOrderView {
    render() {
        this.renderOrderConfirm();

    }

    renderOrderConfirm() {
        let validatedOrder = JSON.parse(localStorage.getItem("order"));
        let orderConfirm = document.getElementById("order-confirmation");
        orderConfirm.innerHTML = validatedOrder.orderId;
    }

}