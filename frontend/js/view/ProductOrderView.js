class ProductOrderView {
    /* Affiche l'id et le prix total dans le message de validation de commande et vide le localStorage */
    render(order) {
        this.renderOrderId(order);
        this.renderFinalPrice(order);
        localStorage.removeItem('cart');
        localStorage.removeItem('products');
        localStorage.removeItem('contact');
    }

    /* Calcul le prix total et l'affiche */S
    renderFinalPrice(order) {
        let content = document.getElementById("order-price");
        let finalPrice = 0;
        for (let i = 0; i < order.products.length; i++) {
            finalPrice += order.products[i].price; 
        }
        content.textContent = finalPrice/100;
    }

    /* Récupère l'id de commande et l'affiche */
    renderOrderId(order) {
        let orderConfirm = document.getElementById("order-confirmation");
        orderConfirm.innerHTML = order.orderId;
    }
}