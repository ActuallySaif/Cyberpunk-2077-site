function login() {
    let usernameInput = document.getElementById('username').value;
    let passInput = document.getElementById('password').value;

    let localusers = JSON.parse(localStorage.getItem('localUsers'))

    for (i = 0; i < localusers.length; i++) {
        if (usernameInput == localusers[i].username && passInput == localusers[i].password) {
            window.location = 'profile.html'

        } else {
            document.getElementById("errMsg").style.display = 'block'
        }
    }
}

