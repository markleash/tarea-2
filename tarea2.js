const botonIngreso = document.querySelector("#ingresar");

botonIngreso.onclick = function(){
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
    const apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const edadUsuario = Number(document.querySelector("#edadUsuario").value);

    let saludoUsuario = (`Hola ${nombreUsuario} !`);
    let datosUsuario = (`Tus datos son: ${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}. Edad: ${edadUsuario}`);
    
    document.querySelector("h1").innerText = saludoUsuario;
    document.querySelector("#resultado").innerText = datosUsuario;

    return false;
}