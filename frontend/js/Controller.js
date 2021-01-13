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

    renderformAndProductChoice(contact, productSent) {
        let model = new Model;
        model.ajaxPost("http://localhost:3000/api/teddies/", contact, productSent)
        
    }
}
