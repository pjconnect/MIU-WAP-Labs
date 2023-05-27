
let postSettings = function (b) {
    return {
        method: 'POST',
        body: JSON.stringify(b),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    }
};

let deleteSettings = function (b) {
    return {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    }
};

function getSettings() {
    return {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }
    }
}
async function getProductAsync() {
    const response = await fetch("http://localhost:3000/products", getSettings());
    const jsonData = await response.json();
    return jsonData;
}

async function login(username, password) {
    let b = { "username": username, "password": password }
    const response = await fetch("http://localhost:3000/login", postSettings(b));
    const jsonData = await response.json();
    return jsonData;
}

async function postProduct(title, description, price) {
    let b = { "title": title, "description": description, "price": price }
    const response = await fetch("http://localhost:3000/products", postSettings(b));
    const jsonData = await response.json();
    return jsonData;
}

async function addToCartAsync(prod) {
    let b = { "prodId": prod }
    const response = await fetch("http://localhost:3000/cart", postSettings(b));
    const jsonData = await response.json();
    return jsonData;
}

async function getCartAsync() {
    const response = await fetch("http://localhost:3000/cart", getSettings());
    const jsonData = await response.json();
    return jsonData;
}

async function purchaseCart() {
    const response = await fetch("http://localhost:3000/cart/purchase", postSettings());
    const jsonData = await response.json();
    return jsonData;
}

async function deleteCartAsync(prodId) {
    const response = await fetch("http://localhost:3000/cart/"+prodId, deleteSettings());
    const jsonData = await response.json();
    return jsonData;
}


// document.getElementById('btnRegister').addEventListener('click', (event) => {
//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const price = document.getElementById('price').value;
//     data = postProduct(title, description, price);

//     document.getElementById('title').innerHTML = data;
//     document.getElementById('myform').reset();
// });