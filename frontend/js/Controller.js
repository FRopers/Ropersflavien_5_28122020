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
        this.button(productChoice);

    }
    button(productChoice) {
        let button = document.getElementById("send-cart");
        button.addEventListener("click", function(){
            let value = document.getElementById("color-select").value;
            localStorage.setItem("colorChoice", value);
            localStorage.setItem("productChoice", JSON.stringify(productChoice));
            console.log(localStorage); 
            alert("Ce produit à été ajouté à votre panier");
        });
    }
}
