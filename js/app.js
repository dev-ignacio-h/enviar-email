// variables
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");

// variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

let emailValido = false;
let asuntoValido = false;
let mensajeValido = false;

eventListeners();

function eventListeners() {
    // cuando la app arranca
    document.addEventListener("DOMContentLoaded", iniciarApp);

    // campos del formulario
    email.addEventListener("blur", validarFormulario);
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
}

// funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add("cursor-not-allowed", "opacity-50");
}

// valida el formulario
function validarFormulario(e) {

    if (e.target.value.length > 0) {
        // eliminar errores
        const error = document.querySelector('p.error');
        e.target.classList.remove("border", "border-red-500");
        e.target.classList.add("border", "border-green-500");

        console.log(e.target.type);
        if (e.target.type === 'text') asuntoValido = true;
        if (e.target.type === 'textarea') mensajeValido = true;
        if (error && asuntoValido && mensajeValido && emailValido) error.remove();
        console.log(asuntoValido, mensajeValido, emailValido)

    } else {
        // e.target.style.borderBottomColor = "red";
        e.target.classList.remove("border", "border-green-500");
        e.target.classList.add("border", "border-red-500");
        mostrarError('Todos los campos son obligatorios');
        if (e.target.type === 'text') asuntoValido = false;
        if (e.target.type === 'textarea') mensajeValido = false;
    }

    if (e.target.type === 'email') {
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (er.test(e.target.value)) {
            const error = document.querySelector('p.error');
            emailValido = true;
            if (error && asuntoValido && mensajeValido) error.remove();
            e.target.classList.remove("border", "border-red-500");
            e.target.classList.add("border", "border-green-500");
        } else {
            e.target.classList.remove("border", "border-green-500");
            e.target.classList.add("border", "border-red-500");
            mostrarError('Email no válido');
            emailValido = false;
        }
    }

    if (emailValido && asuntoValido && mensajeValido) {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
    }
}

function mostrarError(mensaje) {
    // console.log("error...");
    const mensajeError = document.createElement("p");
    mensajeError.textContent = mensaje;
    mensajeError.classList.add(
        "border",
        "border-red-500",
        "background-red-100",
        "text-red-500",
        "p-3",
        "mt-3",
        "text-center",
        "error"
    );
    const errores = document.querySelectorAll('.error')

    if (errores.length === 0) formulario.appendChild(mensajeError);

}