function required() {
    let empt = document.forms["form1"]["clave"].value;
    if (empt == "") {
        alert("Debe llenar todos los campos");
    }
}

function ValidateEmail(inputText) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        document.form1.usuario.focus();
        return true;
    } else {
        alert("Ingrese un Email válido");
        document.form1.usuario.focus();
        return false;
    }
}