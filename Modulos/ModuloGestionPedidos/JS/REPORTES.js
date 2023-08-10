var datosJSON = {
    "datos" : [
      {"ID_Compra" : 123, "Fecha" : "2023-07-26", "Sucursal" : "Plaza Mayor", "Empleado" : "Juan Perez", "Codigo_Postal" : "12345", "Ciudad" : "Léon ", "Estado" : "Guanajuato", "Total" : 1000},
      {"ID_Compra" : 234, "Fecha" : "2023-07-25", "Sucursal" : "Plaza Mayor", "Empleado" : "Ana Lopez", "Codigo_Postal" : "23456", "Ciudad" : "Léon ", "Estado" : "Guanajuato", "Total" : 1500},
      {"ID_Compra" : 345, "Fecha" : "2023-07-24", "Sucursal" : "Plaza Mayor", "Empleado" : "Pedro Ramirez", "Codigo_Postal" : "34567", "Ciudad" : "Léon ", "Estado" : "Guanajuato", "Total" : 800},
      {"ID_Compra" : 456, "Fecha" : "2023-07-23", "Sucursal" : "Plaza Mayor", "Empleado" : "María Garcia", "Codigo_Postal" : "45678", "Ciudad" : "Léon ", "Estado" : "Guanajuato", "Total" : 1200}
    ]
  };
  
  var tabla = document.getElementById("miTabla2");
  var tablaBody = tabla.getElementsByTagName("tbody")[0];
  
  datosJSON.datos.sort(function(a, b) {
    return new Date(b.Fecha) - new Date(a.Fecha); // Ordenar por fecha en orden descendente
  });
  
  datosJSON.datos.forEach(function (pedido) {
    var fila = tablaBody.insertRow();
  
    var idCell = fila.insertCell(0);
    idCell.textContent = pedido.ID_Compra;
  
    var fechaCell = fila.insertCell(1);
    fechaCell.textContent = pedido.Fecha;
  
    var sucursalCell = fila.insertCell(2);
    sucursalCell.textContent = pedido.Sucursal;
  
    var empleadoCell = fila.insertCell(3);
    empleadoCell.textContent = pedido.Empleado;
  
    var codigoPostalCell = fila.insertCell(4);
    codigoPostalCell.textContent = pedido.Codigo_Postal;
  
    var ciudadCell = fila.insertCell(5);
    ciudadCell.textContent = pedido.Ciudad;
  
    var estadoCell = fila.insertCell(6);
    estadoCell.textContent = pedido.Estado;
  
    var totalCell = fila.insertCell(7);
    totalCell.textContent = pedido.Total;
  });
