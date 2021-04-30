class Controller {
    /* Récupère le tableau des produits et lance la fonction render permettant un affichage des différentes peluches sur la page d'accueil */
    async launchProductListPage() {
        let productList = await Model.ajaxGet("http://localhost:3000/api/teddies");
        let view = new ProductListView;
        view.render(productList);
    }

   /* Récupère l'id du produit sélectionné dans la page d'accueil, lance une requête pour récupérer ses caractéristiques
   et lance la fonction permettant son affichage sur la page produit */
    async launchProductDetailPage() {
        let searchParams = new URLSearchParams(window.location.search);
        let id = searchParams.get("id");
        let productChoice = await Model.ajaxGet("http://localhost:3000/api/teddies/" + id);
        let view = new ProductDetailView;
        view.render(productChoice);
    }

    /* lance la fonction pour afficher le contenu du panier */
    launchProductCartPage() {
        let view = new ProductCartView;
        view.render();
    }

    /* Envoie le contenu du panier et du formulaire puis retourne la réponse du serveur */
    async sendContactAndCart(contact, products) {
        let order = await Model.ajaxPost("http://localhost:3000/api/teddies/order", contact, products)   
        return order;
    }
    
    /* Récupère le contenu du panier et du formulaire dans le localStorage, lance et attend le retour de la fonction sendContactAndCart 
    et lance la page commande avec les informations recueillies */
    async launchProductOrderPage() {
        let contact = JSON.parse(localStorage.getItem("contact"));
        let products = JSON.parse(localStorage.getItem("products"));
        let order = await this.sendContactAndCart(contact, products);
        let view = new ProductOrderView;
        view.render(order);
    }
}