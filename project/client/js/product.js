window.addEventListener('load', function () {
    this.document.getElementById("user-name").innerText = this.sessionStorage.getItem('accessToken')?.split('-')[1];

    document.getElementById("logout").onclick = function (e) {
        sessionStorage.removeItem('accessToken');
        location.reload();
    }

    getProduct();
    getCartItems();

    document.getElementById("purchase").onclick = purchaseItem;
})

async function getProduct() {
    const jsonData = await getProductAsync();
    for (let e of jsonData) {
        productRow(e.id, e.title, e.url, e.stock, e.price);
    }
}

async function purchaseItem(e){
    try {
        await purchaseCart();
        document.getElementById('tbodyProductList').innerHTML = "";
        getProduct();
        getCartItems();
    } catch (error) {
        console.log(error);
        $.notify("Error fetching data", 'error');
    }
}


async function addToCart(e) {
    try {
        let res = await addToCartAsync(e);
        if(res.error){
            $.notify(res.error, 'error');
        }
    } catch (error) {
        console.log(error);
        
    }
    getCartItems();
}

async function getCartItems(){
    let jsonData = await getCartAsync();
    console.log('data', jsonData);
    document.getElementById('myCartList').innerHTML = "";
    let total = 0;
    for (let e of jsonData) {
        item = e.prod;
        total += item.price * e.qty;
        cartRow(item.id, item.title, e.qty, (item.price * e.qty).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          }));
    }

    document.getElementById('cart-total').innerHTML = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

async function removeItem(id){
    let data = await deleteCartAsync(id)
    getCartItems();
}

function productRow(id, title, url, stock, price) {
    const row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(id));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(title));
    row.appendChild(cell);

    cell = document.createElement('img');
    cell.setAttribute("src", url);
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(stock));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);

    cell = document.createElement('button');
    cell.classList.add('btn');
    cell.classList.add('btn-secondary');
    cell.setAttribute("onclick", "addToCart(" + id + ")");
    cell.appendChild(document.createTextNode("add to cart"));
    row.appendChild(cell);

    document.getElementById('tbodyProductList').appendChild(row);

}


function cartRow(id, title, description, price) {

    const row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.appendChild(document.createTextNode(id));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(title));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(description));
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.appendChild(document.createTextNode(price));
    row.appendChild(cell);

    cell = document.createElement('button');
    cell.classList.add('btn');
    cell.classList.add('btn-secondary');
    cell.setAttribute("onclick", "addToCart(" + id + ")");
    cell.appendChild(document.createTextNode("Add"));
    row.appendChild(cell);


    cell = document.createElement('button');
    cell.classList.add('btn');
    cell.classList.add('btn-danger');
    cell.setAttribute("onclick", "removeItem(" + id + ")");
    cell.appendChild(document.createTextNode("Remove"));
    row.appendChild(cell);

   
    document.getElementById('myCartList').appendChild(row);
}
