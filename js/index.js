const cp_provincias = {
    01: "alava", 02: "albacete", 03: "alicante", 04: "almeria", 05: "avila",
    06: "badajoz", 07: "baleares", 08: "barcelona", 09: "burgos", 10: "caceres",
    11: "cadiz", 12: "castellon", 13: "ciudad real", 14: "cordoba", 15: "la coruna",
    16: "cuenca", 17: "gerona", 18: "granada", 19: "guadalajara", 20: "guipuzcoa",
    21: "huelva", 22: "huesca", 23: "jaen", 24: "leon", 25: "lerida",
    26: "la rioja", 27: "lugo", 28: "madrid", 29: "malaga", 30: "murcia",
    31: "navarra", 32: "orense", 33: "asturias", 34: "palencia", 35: "las palmas",
    36: "pontevedra", 37: "salamanca", 38: "santa cruz de tenerife", 39: "cantabria", 40: "segovia",
    41: "sevilla", 42: "soria", 43: "tarragona", 44: "teruel", 45: "toledo",
    46: "valencia", 47: "valladolid", 48: "vizcaya", 49: "zamora", 50: "zaragoza",
    51: "ceuta", 52: "melilla"
};


// Mostrar Valoración
function ValoracionRango(){
    var valor = document.getElementById("val").value;
    alert("Has valorado con "+ valor + " puntos");
};

// Mostrar Cuenta
function MostrarCuenta() {
    var pais = document.getElementById("banc1").value;
    var iban = document.getElementById("banc2").value;
    var ent = document.getElementById("banc3").value;
    var suc = document.getElementById("banc4").value;
    var dc = document.getElementById("banc5").value;
    var cuen = document.getElementById("banc6").value;
    alert("Le informamos que su cuenta bancaria es: " + pais + iban + "-" + ent + "-" + suc + "-" + dc + "-" + cuen );
};

// Mostrar Día Semana
function MostrarDia(){
    var dia = document.getElementById("fecha").value;
    var fecha = new Date(dia);
    var semana = fecha.toLocaleString('es-es', { weekday: 'long' });
    alert("La fecha seleccionada en el elemento de fecha es un " + semana)
};


// Comprobación del Codigo Postal
function validarCodigoPostal() {
    var input = document.getElementById("postal").value;
    console.log(parseInt(input))
    if (input.length == 5 && parseInt(input) >= 1000 && parseInt(input) <= 52999) {
        document.getElementById('postalJS').innerHTML = 'Codigo Postal Correcto';
        document.getElementById('postalJS').style.color = 'green';
    }
    else {
        document.getElementById('postalJS').innerHTML = 'Codigo Postal Incorrecto';
        document.getElementById('postalJS').style.color = "red";
    }
}

// Comprobación de Provincia
function validarProvincia(){
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    var prov = removeAccents(document.getElementById("provincia").value).toLowerCase();

    //console.log(cp_provincias[parseInt(cpostal.substring(0, 2))]);
    var cp = document.getElementById("postal").value;
    var provincia_cp = cp_provincias[parseInt((cp).substring(0, 2))];

    if (provincia_cp == prov) {
        document.getElementById('provinciaJS').innerHTML = 'Provincia y CP correcto';
        document.getElementById('provinciaJS').style.color = 'green';
    } else {
        document.getElementById('provinciaJS').innerHTML = 'Provincia y/o CP Incorrecto';
        document.getElementById('provinciaJS').style.color = "red";
    }
}



