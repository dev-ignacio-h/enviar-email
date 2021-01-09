// variables
const btnEnviar = document.querySelector("#enviar");

// variables para campos
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

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
    if (e.target.value.length) {
        console.log("sí hay algo");
    } else {
        e.target.style.borderBottomColor = "red";
        e.target.classList.add('border-red-500');
    }
}