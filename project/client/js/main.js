window.addEventListener('load', function () {

    //check access token
    console.log(location.pathname);
    if (location.pathname != '/' && !sessionStorage.getItem('accessToken')) {
        location.href = '/';
    }


    async function enableLogin(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        try {
            const result = await login(username, password);
            if (result.accessToken) {
                sessionStorage.setItem('accessToken', result.accessToken);
                $.notify("Success", 'success');
                location.href = 'product.html';
            } else {
                $.notify(result.error, 'error');
            }
        } catch (e) {
            $.notify("Error fetching data", 'error');
        }
    }

    if (document.getElementById('login-btn'))
        document.getElementById('login-btn').onclick = enableLogin;

})
