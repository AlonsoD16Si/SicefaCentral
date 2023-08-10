/*  ESTATUS PEDIDOS */

var datosJSON = {
  "datos" : [
    {"Estatus" : "Pendiente", "Sucursal" : "Plaza Mayor", "ID Pedido" : 123456},
    {"Estatus" : "Pendiente", "Sucursal" : "Plaza Mayor", "ID Pedido" : 234467},
    {"Estatus" : "Pendiente", "Sucursal" : "Plaza Mayor", "ID Pedido" : 345678},
    {"Estatus" : "Pendiente", "Sucursal" : "Plaza Mayor", "ID Pedido" : 456789}
  ]
}

var tabla = document.getElementById("miTabla");
var tablaBody = tabla.getElementsByTagName("tbody")[0];

datosJSON.datos.forEach(function (Pedidos) {
  var fila = tablaBody.insertRow();

  var ESTATUSCell = fila.insertCell(0);
  ESTATUSCell.textContent = Pedidos.Estatus;

  var SUCURSALCell = fila.insertCell(1);
  SUCURSALCell.textContent = Pedidos.Sucursal;

  var ID_PEDIDOCell = fila.insertCell(2);
  ID_PEDIDOCell.textContent = Pedidos["ID Pedido"];

  var botonCell = fila.insertCell(3);
  var botonAceptar = document.createElement("boton");
  botonAceptar.textContent = "ACEPTARLA";
  botonAceptar.className = "btn btn-primario"; /* Estilos de bootstrap para el boton*/
  botonCell.appendChild(botonAceptar);
})

/*TABLA EMERGENTE AL DAR CLICK EN EL BOTON DE ACEPTARLA */


/* TABLA MOSTRAR REPORTES */


// Datos del JSON 

