let jsonData = '[{"adminx":"ADMIN","nombreSucursal":"Sucursal Plaza Mayor","titular":"Juan Pérez","rfc":"ABC123456XYZ","domicilio":"Juan Alonso de Torres Pte. 2002","colonia":"Valle del Campestre","ciudad":"León","estado":"Guanajuato","cp":"37150","telefono":"4771234567","longitud":"-101.684213","latitud":"21.123456","estatus":"Activa"},{"adminx":"ADMIN","nombreSucursal":"Sucursal Centro","titular":"María González","rfc":" DEF789012UVW","domicilio":"Avenida del Bosque #456","colonia":"Centro","ciudad":"León","estado":"Guanajuato","cp":"37000","telefono":"4779876543","longitud":"-101.661234","latitud":"21.345678","estatus":"Activa"},{"adminx":"ADMIN","nombreSucursal":"Sucursal Centro Max","titular":"Carlos Rodríguez","rfc":"GHI345678PQR","domicilio":" Adolfo López Mateos 2518","colonia":" Jardines de Jerez","ciudad":"León","estado":"Guanajuato","cp":"37530 ","telefono":"4772345678","longitud":"-101.705432","latitud":"20.987654","estatus":"Activa"}]';


let indexSucursalSeleccionada;
let sucursal = [];

function init() {
    sucursal = JSON.parse(jsonData);
    console.log(sucursal);
    actualizarTabla();
}

function actualizarTabla() {
    let cuerpo = "";
    sucursal.forEach(function (nuevaSucursal) {
        let registro =
            '<tr onclick="selectSucursal(' + sucursal.indexOf(nuevaSucursal) +
            ');">' +
            '<td>' + "ADMIN" + sucursal.indexOf(nuevaSucursal) + '</td>' +
            '<td>' + sucursal.indexOf(nuevaSucursal) + '</td>' +
            '<td>' + nuevaSucursal.nombreSucursal + '</td>' +
            '<td>' + nuevaSucursal.titular + '</td>' +
            '<td>' + nuevaSucursal.rfc + '</td>' +
            '<td>' + nuevaSucursal.domicilio + '</td>' +
            '<td>' + nuevaSucursal.colonia + '</td>' +
            '<td>' + nuevaSucursal.ciudad + '</td>' +
            '<td>' + nuevaSucursal.estado + '</td>' +
            '<td>' + nuevaSucursal.cp + '</td>' +
            '<td>' + nuevaSucursal.telefono + '</td>' +
            //'<td>' + nuevaSucursal.longitud + '</td>' +
            //'<td>' + nuevaSucursal.latitud + '</td>' +
            '<td>' + nuevaSucursal.estatus + '</td></tr>';

        cuerpo += registro;
    });
    document.getElementById("tblSucursales").innerHTML = cuerpo;
}

function selectSucursal(index) {
    document.getElementById("txtnombreS").value = sucursal[index].nombreSucursal;
    document.getElementById("txttitular").value = sucursal[index].titular;
    document.getElementById("txtrfc").value = sucursal[index].rfc;
    document.getElementById("txtDomicilio").value = sucursal[index].domicilio;
    document.getElementById("txtColonia").value = sucursal[index].colonia;
    document.getElementById("txtciudad").value = sucursal[index].ciudad;
    document.getElementById("txtestado").value = sucursal[index].estado;
    document.getElementById("txtcp").value = sucursal[index].cp;
    document.getElementById("txttel").value = sucursal[index].telefono;
    document.getElementById("txtlongitud").value = sucursal[index].longitud;
    document.getElementById("txtlatitud").value = sucursal[index].latitud;

    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexSucursalSeleccionada = index;
}

function limpiarS() {
    document.getElementById("txtnombreS").value = "";
    document.getElementById("txttitular").value = "";
    document.getElementById("txtrfc").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtciudad").value = "";
    document.getElementById("txtestado").value = "";
    document.getElementById("txtcp").value = "";
    document.getElementById("txttel").value = "";
    document.getElementById("txtlongitud").value = "";
    document.getElementById("txtlatitud").value = "";

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexSucursalSeleccionada = 0;
}

function agregarS() {
    if (!validardatos()) {
        return;
    }
    let nombreSucursal, titular, rfc, domicilio, colonia, ciudad, estado, cp, telefono,longitud, latitud;

    nombreSucursal = document.getElementById("txtnombreS").value;
    titular = document.getElementById("txttitular").value;
    rfc = document.getElementById("txtrfc").value;
    domicilio = document.getElementById("txtDomicilio").value;
    colonia = document.getElementById("txtColonia").value;
    ciudad = document.getElementById("txtciudad").value;
    estado = document.getElementById("txtestado").value;
    cp = document.getElementById("txtcp").value;
    telefono = document.getElementById("txttel").value;
     longitud = document.getElementById("txtlongitud").value;
    latitud = document.getElementById("txtlatitud").value;

    let newSucursal = {
        "nombreSucursal": nombreSucursal,
        "titular": titular,
        "rfc": rfc,
        "domicilio": domicilio,
        "colonia": colonia,
        "ciudad": ciudad,
        "estado": estado,
        "cp": cp,
        "telefono": telefono,
         "longitud": longitud,
         "latitud": latitud,
        "estatus": "Activa"
    };
    sucursal.push(newSucursal);


    jsonData = JSON.stringify(sucursal);
    console.log(jsonData);
    console.log(typeof (jsonData));

    alertexito();
    limpiarS();
    actualizarTabla();
};

function eliminarS() {
    swal({
        title: "¿Esta seguro de eliminar esta sucursal?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                sucursal[indexSucursalSeleccionada].estatus = "Inactiva";
                limpiarS();
                actualizarTabla();
                swal("¡La sucursal ha sido eliminada!", {
                    icon: "success",
                });
            } else {
                swal("¡La eliminación de la sucursal ha sido cancelada!");
            }
        });

}

function modificarS() {
    swal({
        title: "¿Quieres modificar la sucursal seleccionado?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willModify) => {
            if (willModify) {
                modificarRegistro();
                actualizarTabla();
                limpiarS();
                swal("¡Registro modificado con éxito!", {
                    icon: "success",
                });
            } else {
                swal("¡Los cambios de la sucursal han sido cancelados!");
            }
        });
}

function modificarRegistro() {
    let nombreSucursal, titular, rfc, domicilio, colonia, ciudad, estado, cp, telefono,longitud, latitud

    nombreSucursal = document.getElementById("txtnombreS").value;
    titular = document.getElementById("txttitular").value;
    rfc = document.getElementById("txtrfc").value;
    domicilio = document.getElementById("txtDomicilio").value;
    colonia = document.getElementById("txtColonia").value;
    ciudad = document.getElementById("txtciudad").value;
    estado = document.getElementById("txtestado").value;
    cp = document.getElementById("txtcp").value;
    telefono = document.getElementById("txttel").value;
   longitud = document.getElementById("txtlongitud").value;
    latitud = document.getElementById("txtlatitud").value;

    let newSucursal = {
        "nombreSucursal": nombreSucursal,
        "titular": titular,
        "rfc": rfc,
        "domicilio": domicilio,
        "colonia": colonia,
        "ciudad": ciudad,
        "estado": estado,
        "cp": cp,
        "telefono": telefono,
        "longitud": longitud,
        "latitud": latitud,
        "estatus": "Activa"
    };

    sucursal[indexSucursalSeleccionada] = newSucursal;
    jsonData = JSON.stringify(sucursal);
}

function validardatos() {

    const suc = document.getElementById("txtnombreS").value;
    const tit = document.getElementById("txttitular").value;
    const rFc = document.getElementById("txtrfc").value;
    const domi = document.getElementById("txtDomicilio").value;
    const col = document.getElementById("txtColonia").value;
    const cd = document.getElementById("txtciudad").value;
    const est = document.getElementById("txtestado").value;
    const Cp = document.getElementById("txtcp").value;
    const tele = document.getElementById("txttel").value;
    const lon = document.getElementById("txtlongitud").value;
    const lat = document.getElementById("txtlatitud").value;

    if (suc == '' || tit == '' || rFc == '' || domi == '' || col == '' || cd == '' || est == '' || Cp == '' || tele == ''|| lon == '' || lat == '') {
        alertcampos();
        return false;

    } else if (isNaN(parseFloat(Cp)) || isNaN(parseFloat(tele))||isNaN(parseFloat(lon)) || isNaN(parseFloat(lat))){
        alertnumeros();
        return;
    }
    return true
}

function alertnumeros() {
    swal({
        title: "¡Atención!",
        text: "Ingrese los números en los campos necesarios",
        icon: "warning",
        button: "Aceptar",
    });
}

function alertexito() {
    swal({
        title: "¡Éxito!",
        text: "Se ha agregado correctamente la sucursal",
        icon: "success",
        button: "Aceptar",
    });
}

function alertcampos() {
    swal({
        title: "¡Atención!",
        text: "Complete todos los campos",
        icon: "warning",
        button: "Aceptar",
    });
}

function reactivarS() {
    swal({
        title: "¿Esta seguro de eliminar esta sucursal?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                sucursal[indexSucursalSeleccionada].estatus = "Activa";
                limpiarS();
                actualizarTabla();
                swal("¡La sucursal ha sido reactivada!", {
                    icon: "success",
                });
            } else {
                swal("¡La reactivación ha sido cancelada!");
            }
        });

}



init();
function buscarSucursal() {
    const searchTerm = document.getElementById("searchSuc").value.toLowerCase();

    const sucursalFiltrada = sucursal.filter((sucur) => {
        return (
            sucur.nombreSucursal.toLowerCase().includes(searchTerm) ||
            sucur.titular.toLowerCase().includes(searchTerm) ||
            sucur.rfc.toLowerCase().includes(searchTerm) ||
            sucur.domicilio.toLowerCase().includes(searchTerm) || 
            sucur.colonia.toLowerCase().includes(searchTerm) ||
            sucur.ciudad.toLowerCase().includes(searchTerm) ||
            sucur.cp.toLowerCase().includes(searchTerm) 
        );
    });

    if (sucursalFiltrada.length > 0) {
        sucursal = sucursalFiltrada;
        actualizarTabla();
        sucursal = JSON.parse(jsonData);
    console.log(sucursal);
        
    } else {
        swal({
            title: "No se encontro la sucursal",
            text: "No se encontraron sucursales que coincidan con el término de búsqueda.",
            icon: "info",
            button: "Aceptar",
        });
    }
}


