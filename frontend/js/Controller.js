class Controller {
    async launchProductListPage() {
        let productList = await Model.ajaxGet("http://localhost:3000/api/teddies");
        let view = new ProductListView;
        view.render(productList);
    }

    async launchProductDetailPage() {
        let searchParams = new URLSearchParams(window.location.search);
        let id = searchParams.get("id");
        let productChoice = await Model.ajaxGet("http://localhost:3000/api/teddies/" + id);
        let view = new ProductDetailView;
        view.render(productChoice);
    }

    launchProductCartPage() {
        let view = new ProductCartView;
        view.render();
    }

    async sendContactAndCart(contact, products) {
        let order = await Model.ajaxPost("http://localhost:3000/api/teddies/order", contact, products)
        return order;
    }
    
    async launchProductOrderPage() {
        let contact = JSON.parse(localStorage.getItem("contact"));
        let products = JSON.parse(localStorage.getItem("products"));
        let order = await this.sendContactAndCart(contact, products);
        order = JSON.parse(order);
        console.log(order);
        let view = new ProductOrderView;
        view.render(order);
    }
}