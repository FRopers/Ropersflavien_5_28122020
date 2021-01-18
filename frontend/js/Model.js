class Model {
    static ajaxGet(apiUrl) {
        return new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 200) { 
                        let content = JSON.parse(xhr.responseText)
                        resolve(content);
                    } else {
                        reject(xhr);
                    } 
                }
            }
            xhr.open('GET', apiUrl, true);
            xhr.send();
        });
    }

    static ajaxPost(apiUrl, contact, products) {
        return new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", apiUrl, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify({contact, products}));
            xhr.onreadystatechange = function() {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 201) { 
                        let content = (xhr.responseText)
                        resolve(content);
                    } else {
                        reject(xhr);
                    } 
                }
            }
        });
    }
}