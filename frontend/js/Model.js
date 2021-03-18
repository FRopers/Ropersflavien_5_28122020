class Model {
    /* Récupère le contenu de l'api */
    static ajaxGet(apiUrl) {
        return fetch(apiUrl)
            .then(response => response.json())
            .catch((error) => {
                console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
            });
    }

    /* Envoie le contenu du panier (formulaire et produit) et récupère la réponse de l'api */
    static ajaxPost(apiUrl, contact, products) {
        return fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ contact, products })
        })
        .then(response => response.json())
        .catch((error) => {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
    }
}