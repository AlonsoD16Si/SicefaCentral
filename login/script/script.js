

//Login
window.addEventListener("resize", anchoPagina);

var contenedor_login_register = document.querySelector(".contenedor___login-register");
var formulario_login = document.querySelector(".formulario__login");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function validarFormulario(event) {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if (usuario.trim() === "") {
        alert("Debes ingresar un nombre de usuario.");
        event.preventDefault();
        return false;
    }
 
    if (usuario.toLowerCase() === "administrador" && password === "Administrador") {
    } else {
        swal("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        event.preventDefault();
        return false;
    }
}

document.getElementById("formulario").addEventListener("submit", validarFormulario);


function anchoPagina() {
    if (window.innerWidth <= 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
    } else {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }
}

function iniciarSesion() {
    if (window.innerWidth > 850) {
        contenedor_login_register.style.left = "40px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        contenedor_login_register.style.left = "40px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.opacity = "none";
    }
}
