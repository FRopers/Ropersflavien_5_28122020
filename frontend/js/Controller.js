class Controller {
    async lancerPageListeProduit() {
        let listProduct = await Model.ajaxGet("http://localhost:3000/api/teddies");
        let view = new ListProductView;
        view.render(listProduct);
    }

    async lancerPageDetailProduit() {
        let searchParams = new URLSearchParams(window.location.search);
        let id = searchParams.get("id");
        let choiceProduct = await Model.ajaxGet("http://localhost:3000/api/teddies/" + id);
        let view = new DetailProductView;
        view.render(choiceProduct);
    }
}
