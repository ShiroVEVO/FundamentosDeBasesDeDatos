window.onload = function(){
    
fetch("/cuenta")
.then(function(response){
    return response.json();})
.then(function(data){
    let tablaCuentas = document.querySelector("#BodyTablaCuentas");
    console.log(tablaCuentas);
    for(let i = 0; i < data.length; i++){
        tablaCuentas.innerHTML +=
        "<tr id=\"registroCuentaKey" + data[i].k_cuenta + "\">" +
            "<th>" + data[i].k_cuenta + "</th>" +    
            "<th>" + data[i].plan_k_plan + "</th>" +
            "<th>" + data[i].saldoFinal + "</th>" +
            "<th>" + data[i].saldoInicial + "</th>" +
            "<th>" + data[i].estado + "</th>" +
            "<th>" + data[i].contraseña + "</th>" +
            "<th>" + data[i].correoElectronico + "</th>" +
            "<th><input type=\"button\" class=\"btn btn-primary btnActualizarCuenta\" id=\"" + data[i].k_cuenta + "\" value=\"✏\"></input></th>" +
            "<th><input type=\"button\" class=\"btn btn-danger btnEliminarCuenta\" id=\"" + data[i].k_cuenta + "\" value=\"❌\"></input></th>" +
        "</tr>";
    }
    let botonesEliminarCuenta = document.querySelectorAll('.btnEliminarCuenta');
    for(let i = 0; i < botonesEliminarCuenta.length; i++){
        botonesEliminarCuenta[i].addEventListener("click",function(){
            borrarCuenta(botonesEliminarCuenta[i].attributes[2].value);
        });
    }
    let botonesActualizarCuenta = document.querySelectorAll('.btnActualizarCuenta');
        for(let i = 0; i < botonesActualizarCuenta.length; i++){
            botonesActualizarCuenta[i].addEventListener("click",function(){
                actualizarCuenta(botonesActualizarCuenta[i].attributes[2].value);
            });
        }
})

fetch("/usuario")
.then(function(response){
    return response.json();})
.then(function(data){
    let tablaUsuarios = document.querySelector("#BodyTablaUsuarios");
    for(let i = 0; i < data.length; i++){
        tablaUsuarios.innerHTML +=
        "<tr id=\"registroUsuarioKey" + data[i].identificacion + "\">" +
            "<th>" + data[i].identificacion + "</th>" +
            "<th>" + data[i].cuenta_k_cuenta + "</th>" +
            "<th>" + data[i].numCelular + "</th>" +
            "<th>" + data[i].tipoIdentificacion + "</th>" +
            "<th>" + data[i].nacionalidad + "</th>" +
            "<th>" + data[i].eps + "</th>" +
            "<th>" + data[i].primerNombre + " " + data[i].segundoNombre +"</th>" +
            "<th>" + data[i].primerApellido + " " + data[i].segundoApellido +"</th>" +
            "<th>" + data[i].fechaNacimiento + "</th>" +
            "<th>" + data[i].sexo + "</th>" +
            "<th><input type=\"button\" class=\"btn btn-primary btnActualizarUsuario\" id=\"" + data[i].identificacion + "\" value=\"✏\"></input></th>" +
            "<th><input type=\"button\" class=\"btn btn-danger btnEliminarUsuario\" id=\"" + data[i].identificacion + "\" value=\"❌\"></input></th>" +
        "</tr>";
    }
    let botonesEliminarUsuarios = document.querySelectorAll('.btnEliminarUsuario');
    for(let i = 0; i < botonesEliminarUsuarios.length; i++){
        botonesEliminarUsuarios[i].addEventListener("click",function(){
            borrarUsuario(botonesEliminarUsuarios[i].attributes[2].value);
        });
    }
    let botonesActualizarUsuarios = document.querySelectorAll('.btnActualizarUsuario');
        for(let i = 0; i < botonesActualizarUsuarios.length; i++){
            botonesActualizarUsuarios[i].addEventListener("click",function(){
                actualizarUsuario(botonesActualizarUsuarios[i].attributes[2].value);
            });
        }
})

fetch("/plan")
.then(function(response){
    return response.json();})
.then(function(data){
    let tablaPlanes = document.querySelector("#BodyTablaPlanes");
    for(let i = 0; i < data.length; i++){
        tablaPlanes.innerHTML +=
        "<tr id=\"registroPlanKey" + data[i].k_plan + "\">" +
            "<th>" + data[i].k_plan + "</th>" +    
            "<th>" + data[i].valorRetiroMecanica + "</th>" +
            "<th>" + data[i].valorRetiroElectrica + "</th>" +
            "<th>" + data[i].tarifaSuscripcion + "</th>" +
            "<th>" + data[i].tiempoSuscripcion + "</th>" +
            "<th>" + data[i].duracionMaxViaje + "</th>" +
            "<th>" + data[i].cantidadMaxViajes + "</th>" +
            "<th>" + data[i].viajesExtra + "</th>" +
            "<th>" + data[i].valorViajeExtra + "</th>" +
            "<th>" + data[i].valorMinAdicional + "</th>" +
            "<th>" + data[i].nombre + "</th>" +
            "<th><input type=\"button\" class=\"btn btn-primary btnActualizarPlan\" id=\"" + data[i].k_plan + "\" value=\"✏\"></input></th>" +
            "<th><input type=\"button\" class=\"btn btn-danger btnEliminarPlan\" id=\"" + data[i].k_plan + "\" value=\"❌\"></input></th>" +
        "</tr>";
    }
    let botonesEliminarPlanes = document.querySelectorAll('.btnEliminarPlan');
    for(let i = 0; i < botonesEliminarPlanes.length; i++){
        botonesEliminarPlanes[i].addEventListener("click",function(){
            borrarPlan(botonesEliminarPlanes[i].attributes[2].value);
        });
    }
    let botonesActualizarPlanes = document.querySelectorAll('.btnActualizarPlan');
        for(let i = 0; i < botonesActualizarPlanes.length; i++){
            botonesActualizarPlanes[i].addEventListener("click",function(){
                actualizarPlan(botonesActualizarPlanes[i].attributes[2].value);
            });
        }
})

}
