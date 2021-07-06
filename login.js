function acessar() {
    var Login = document.getElementById("Login");
    var Senha = document.getElementById("Senha");

    if (Login.value == "Geovana" && Senha.value == "1412" || Login.value == "Jusan" && Senha.value == "123") {
        localStorage.setItem("acesso", true);

        window.location.href = "./area.html";
        console.log(window.location.href);

        alert("Seja bem vindo(a) " + Login.value);

    } else {
        alert("Login ou senha invalidos!");
    }
}
