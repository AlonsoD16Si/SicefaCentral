let indexProductoSeleccionado;
let obj = [];

let jsonData = '[{"nombreProducto":"Donepezilo","nombreGenerico":"Donepezilo","precio":466.9,"unidadMedida":"Tableta","presentacion":"Envase con 14 tabletas.","principalIndicacion":"Enfermedad de Alzheimer.","contraindicaciones":"Hipersensibilidad al fármaco o a los derivados de piperidina.","concentracion":"10 mg","unidadesEnvase":14,"foto":"Donepezilo.jpg","codigoBarras":12345,"estatus":"Activo"},{"nombreProducto":"Etambutol","nombreGenerico":"Etambutol","precio":65.71,"unidadMedida":"Tableta","presentacion":"Envase con 50 tabletas.","principalIndicacion":"Tuberculosis.","contraindicaciones":"Hipersensibilidad al fármaco, neuritis óptica y en menores de 12 años.","concentracion":"400 mg","unidadesEnvase":50,"foto":"Etambutol.jpg","codigoBarras":67897,"estatus":"Activo"},{"nombreProducto":"Efavirenz","nombreGenerico":"Efavirenz","precio":134.19,"unidadMedida":"Comprimido","presentacion":"Envase con 30 comprimidos recubiertos.","principalIndicacion":"Infección por Virus de Inmunodeficiencia Humana (VIH), en combinación con otros antirretrovirales.","contraindicaciones":"Hipersensibilidad al fármaco.","concentracion":"600 mg","unidadesEnvase":30,"foto":"Efavirenz.jpg","codigoBarras":34567,"estatus":"Activo"},{"nombreProducto":"Ciprofibrato","nombreGenerico":"Ciprofibrato","precio":551.32,"unidadMedida":"Cápsula","presentacion":"Envase con 30 cápsulas o tabletas.","principalIndicacion":"Hiperlipidemias tipo IIb y IV.","contraindicaciones":"Hipersensibilidad al fármaco. Insuficiencia hepática o renal. Embarazo y lactancia.","concentracion":"100 mg","unidadesEnvase":30,"foto":"Ciprofibrato.jpg","codigoBarras":78965,"estatus":"Activo"},{"nombreProducto":"Lidocaína","nombreGenerico":"Lidocaína","precio":28.86,"unidadMedida":"Mililitro","presentacion":"Envase con 20 ml.","principalIndicacion":"Anestesia local.","contraindicaciones":"Hipersensibilidad conocida a anestésicos locales de tipo amida o a los otros componentes de la fórmula.","concentracion":"20 mg \/ ml","unidadesEnvase":20,"foto":"Lidocaína.jpg","codigoBarras":23456,"estatus":"Activo"},{"nombreProducto":"Ambroxol","nombreGenerico":"Ambroxol","precio":215.79,"unidadMedida":"Mililitro","presentacion":"Envase con 120 ml y dosificador.","principalIndicacion":"Bronquitis","contraindicaciones":"Hipersensibilidad al fármaco.","concentracion":"300 mg\/100 ml","unidadesEnvase":120,"foto":"Ambroxol.jpg","codigoBarras":98765,"estatus":"Activo"},{"nombreProducto":"Metronidazol","nombreGenerico":"Metronidazol","precio":616.72,"unidadMedida":"Óvulo","presentacion":"Envase con 10 óvulos o tabletas.","principalIndicacion":"Tricomoniasis vaginal","contraindicaciones":"Hipersensibilidad al fármaco.","concentracion":"500 mg","unidadesEnvase":10,"foto":"Metronidazol.jpg","codigoBarras":45673,"estatus":"Activo"},{"nombreProducto":"Nitrofural","nombreGenerico":"Nitrofural","precio":117.98,"unidadMedida":"Óvulo","presentacion":"Envase con 6 óvulos.","principalIndicacion":"Vaginitis bacteriana","contraindicaciones":"Hipersensibilidad al fármaco.","concentracion":"6 mg","unidadesEnvase":6,"foto":"Nitrofural.jpg","codigoBarras":56743,"estatus":"Activo"},{"nombreProducto":"Ibuprofeno","nombreGenerico":"Ibuprofeno","precio":29.3,"unidadMedida":"Miligramo","presentacion":"Envase con 30 cápsulas","principalIndicacion":"Dolor de leve a moderado.","contraindicaciones":"NINGUNA","concentracion":"400 mg","unidadesEnvase":30,"foto":"Ibuprofeno.jpg","codigoBarras":35677,"estatus":"Activo"},{"nombreProducto":"Montelukast","nombreGenerico":"Montelukast sódico","precio":592.51,"unidadMedida":"Comprimido","presentacion":"Envase con 30 comprimidos.","principalIndicacion":"Asma bronquial","contraindicaciones":"Hipersensibilidad al fármaco. No se recomienda en menores de 6 años, ni durante la lactancia.","concentracion":"10 mg","unidadesEnvase":30,"foto":"Montelukast.jpg","codigoBarras":56743,"estatus":"Activo"}]';


function init() {
    obj = JSON.parse(jsonData);
    console.log(obj);
    actualizaTabla();
}

function obtenerNombreFoto() {
    let nombreFoto;
    nombreFoto = document.getElementById("txtfoto").value;
    nombreFoto = nombreFoto.substring(nombreFoto.lastIndexOf("\\") + 1);
    return nombreFoto;
}

function actualizaTabla() {
    let cuerpo = "";
    obj.forEach(function (newProducto, index) {
        let registro =
            '<tr onclick="selectProducto(' + index + ');">' +
            '<td>' + index + '</td>' +
            '<td>' + newProducto.nombreProducto + '</td>' +
            '<td>' + newProducto.nombreGenerico + '</td>' +
            '<td>' + newProducto.precio + '</td>' +
            '<td>' + newProducto.unidadMedida + '</td>' +
            '<td>' + newProducto.presentacion + '</td>' +
            '<td>' + newProducto.principalIndicacion + '</td>' +
            '<td>' + newProducto.contraindicaciones + '</td>' +
            '<td>' + newProducto.concentracion + '</td>' +
            '<td>' + newProducto.unidadesEnvase + '</td>' +
            '<td> <img src="img/' + newProducto.foto + ' " width="100" > </td>' +
            '<td>' + newProducto.codigoBarras + '</td>' +
            '<td>' + newProducto.estatus + '</td></tr>';

        cuerpo += registro;
    });
    document.getElementById("tblProductos").innerHTML = cuerpo;
}

function selectProducto(index) {
    document.getElementById("txtnomProd").value = obj[index].nombreProducto;
    document.getElementById("txtnomGen").value = obj[index].nombreGenerico;
    document.getElementById("txtprecio").value = obj[index].precio;
    document.getElementById("txtunidadMedida").value = obj[index].unidadMedida;
    document.getElementById("txtpresentacion").value = obj[index].presentacion;
    document.getElementById("txtindicacion").value = obj[index].principalIndicacion;
    document.getElementById("txtcontraindicaciones").value = obj[index].contraindicaciones;
    document.getElementById("txtconcentracion").value = obj[index].concentracion;
    document.getElementById("txtunidadesEnvase").value = obj[index].unidadesEnvase;
    document.getElementById("txtfoto").src = obj[index].rutaFoto + obj[index].foto;
    document.getElementById("txtcodigoBarras").value = obj[index].codigoBarras;

    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");
    indexProductoSeleccionado = index;
}

function limpiar() {
    document.getElementById("txtnomProd").value = "";
    document.getElementById("txtnomGen").value = "";
    document.getElementById("txtprecio").value = "";
    document.getElementById("txtunidadMedida").value = "";
    document.getElementById("txtpresentacion").value = "";
    document.getElementById("txtindicacion").value = "";
    document.getElementById("txtcontraindicaciones").value = "";
    document.getElementById("txtconcentracion").value = "";
    document.getElementById("txtunidadesEnvase").value = "";
    document.getElementById("txtfoto").value = "";
    document.getElementById("txtcodigoBarras").value = "";

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexProductoSeleccionado = 0;
}

function agregarProducto() {
    if(!validardatos()){
        return;
    }
    let nomProd, nomGen, precio, unidadMedida, presentacion, indicacion, contraindicaciones, concentracion, unidadesEnvase, fotoNueva, codigoBarras;

    nomProd = document.getElementById("txtnomProd").value;
    nomGen = document.getElementById("txtnomGen").value;
    precio = document.getElementById("txtprecio").value;
    unidadMedida = document.getElementById("txtunidadMedida").value;
    presentacion = document.getElementById("txtpresentacion").value;
    indicacion = document.getElementById("txtindicacion").value;
    contraindicaciones = document.getElementById("txtcontraindicaciones").value;
    concentracion = document.getElementById("txtconcentracion").value;
    unidadesEnvase = document.getElementById("txtunidadesEnvase").value;
    fotoNueva = obtenerNombreFoto();
    codigoBarras = document.getElementById("txtcodigoBarras").value;

    let newProd = {
        "nombreProducto": nomProd,
        "nombreGenerico": nomGen,
        "precio": parseFloat(precio),
        "unidadMedida": unidadMedida,
        "presentacion": presentacion,
        "principalIndicacion": indicacion,
        "contraindicaciones": contraindicaciones,
        "concentracion": concentracion,
        "unidadesEnvase": parseInt(unidadesEnvase),
        "foto": fotoNueva,
        "codigoBarras": codigoBarras,
        "estatus": "Activo"
    };

    obj.push(newProd);

    jsonData = JSON.stringify(obj);

    console.log(jsonData);
    console.log(typeof (jsonData));

    limpiar();
    actualizaTabla();
}

function eliminarProducto() {
    swal({
        title: "¿Quieres eliminar el producto seleccionado?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                obj[indexProductoSeleccionado].estatus = "Inactivo";
                limpiar();
                actualizaTabla();
                swal("Eliminado con éxito!", {
                    icon: "success",
                });
            } else {
                swal("No se elimino el producto");
            }
        });
}

function modificaProducto() {
    swal({
        title: "¿Quieres modificar el producto seleccionado?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willModify) => {
        if (willModify) {
            modificarRegistro();
            actualizaTabla();
            limpiar();
            swal("¡Registro modificado con éxito!", {
                icon: "success",
            });
        } else {
            swal("¡Los cambios en el registro han sido cancelados!");
        }
    });
}

function modificarRegistro() {
    let nomProd, nomGen, precio, unidadMedida, presentacion, indicacion, contraindicaciones, concentracion, unidadesEnvase, fotoNueva, codigoBarras;

    nomProd = document.getElementById("txtnomProd").value;
    nomGen = document.getElementById("txtnomGen").value;
    precio = document.getElementById("txtprecio").value;
    unidadMedida = document.getElementById("txtunidadMedida").value;
    presentacion = document.getElementById("txtpresentacion").value;
    indicacion = document.getElementById("txtindicacion").value;
    contraindicaciones = document.getElementById("txtcontraindicaciones").value;
    concentracion = document.getElementById("txtconcentracion").value;
    unidadesEnvase = document.getElementById("txtunidadesEnvase").value;
    fotoNueva = obtenerNombreFoto();
    codigoBarras = document.getElementById("txtcodigoBarras").value;

    let newProd = {
        "nombreProducto": nomProd,
        "nombreGenerico": nomGen,
        "precio": precio,
        "unidadMedida": unidadMedida,
        "presentacion": presentacion,
        "principalIndicacion": indicacion,
        "contraindicaciones": contraindicaciones,
        "concentracion": concentracion,
        "unidadesEnvase": unidadesEnvase,
        "codigoBarras": codigoBarras,
        "estatus": "Activo"
    };

    // Verificar si se ha seleccionado una nueva foto
    if (fotoNueva === "") {
        newProd.foto = obj[indexProductoSeleccionado].foto; // Mantener la foto existente
    } else {
        newProd.foto = fotoNueva; // Usar la nueva foto seleccionada
    }

    obj[indexProductoSeleccionado] = newProd;
    jsonData = JSON.stringify(obj);
}

function validardatos() {
    const nomProd = document.getElementById("txtnomProd").value;
    const nomGen = document.getElementById("txtnomGen").value;
    const prec = document.getElementById("txtprecio").value;
    const unMed = document.getElementById("txtunidadMedida").value;
    const pres = document.getElementById("txtpresentacion").value;
    const indic = document.getElementById("txtindicacion").value;
    const conindic = document.getElementById("txtcontraindicaciones").value;
    const concen = document.getElementById("txtconcentracion").value;
    const uniEnv = document.getElementById("txtunidadesEnvase").value;
    const codbarr = document.getElementById("txtcodigoBarras").value;

    if (nomProd == '' || nomGen == '' || prec == '' || unMed == '' || pres == '' || indic == '' || conindic == '' || concen == '' || uniEnv == '' || codbarr == '') {
        alertcampos();
        return false;
    } else if (isNaN(parseFloat(prec)) || isNaN(parseFloat(codbarr)) || isNaN(parseFloat(uniEnv))) {
        alertnumeros();
        return false;
    }

    alertexito();
    return true;
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
        text: "Se ha agregado correctamente el producto",
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

function reactivarProducto() {
    swal({
        title: "¿Quieres reactivar el producto seleccionado?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            obj[indexProductoSeleccionado].estatus = "Activo";
            limpiar();
            actualizaTabla();
            swal("Reactivado con éxito!", {
                icon: "success",
            });
        } else {
            swal("No se reactivo el producto");
        }
    });
}


init();
// buscador

function buscarProducto() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    const productosFiltrados = obj.filter((producto) => {
        return (
            producto.nombreProducto.toLowerCase().includes(searchTerm) ||
            producto.nombreGenerico.toLowerCase().includes(searchTerm)
        );
    });

    if (productosFiltrados.length > 0) {
        obj = productosFiltrados;
        actualizaTabla();
        obj = JSON.parse(jsonData);

    } else {
        swal({
            title: "No se encontraron productos",
            text: "No se encontraron productos que coincidan con el término de búsqueda.",
            icon: "info",
            button: "Aceptar",
        });
    }
}
