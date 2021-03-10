/*FUNCION VALIDACION*/
function validacion() {
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;
  var mensaje = document.getElementById("mensaje").value;
  var nombrecontador = '';
  var apellidoscontador = '';
  var telefonocontador = '';
  var correocontador = '';
  var mensajecontador = '';
  var errores = 'Errores encontrados:\n--------------------------\n';

  if (nombre == null || nombre.length == 0 || !isNaN(nombre)) {
    errores += 'Nombre no válido.\n'
    document.getElementById('nombre').style.borderBottomColor = 'd63031';
    nombrecontador = false;
  } else {
    document.getElementById('nombre').style.borderBottomColor = 'purple';
    nombrecontador = true;
  }
  if (apellidos == null || apellidos.length == 0 || !isNaN(apellidos)) {
    errores += 'Apellidos no válidos.\n'
    document.getElementById('apellidos').style.borderBottomColor = 'd63031';
    apellidoscontador = false;
  } else {
    document.getElementById('apellidos').style.borderBottomColor = 'purple';
    apellidoscontador = true;
  }

  if (!(/\S+@\S+\.\S+/.test(correo))) {
    errores += 'Correo no válido.\n'
    document.getElementById('correo').style.borderBottomColor = 'd63031';
    correocontador = false;
  } else {
    document.getElementById('correo').style.borderBottomColor = 'purple';
    correocontador = true;
  }

  if (isNaN(telefono) || telefono == null || telefono.length == 0 || telefono.length < 9) {
    errores += 'Telefono no válido.\n'
    document.getElementById('telefono').style.borderBottomColor = 'd63031';
    telefonocontador = false;
  } else {
    document.getElementById('telefono').style.borderBottomColor = 'purple';
    telefonocontador = true;
  }

  if (mensaje == null || mensaje.length == 0 || !isNaN(mensaje)) {
    errores += 'Mensaje no válido.\n'
    document.getElementById('mensaje').style.borderBottomColor = 'd63031';
    mensajecontador = false;
  } else {
    document.getElementById('mensaje').style.borderBottomColor = 'purple';
    mensajecontador = true;
  }

  if (nombrecontador == false || apellidoscontador == false || correocontador == false || telefonocontador == false || mensajecontador == false) {
    errores += '--------------------------\n'
    alert(errores)
    return false;
  } else return true;

}
/*FIN FUNCION VALIDACION*/



/*FIN FUNCION VALIDACION*/

/* FUNCIONES COOKIES */
function setCookie(name, value, days) {
  expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

function leerCookie() {
  if (getCookie('aceptar_cookie') != '1') {
    document.getElementById('barraaceptacion').style.display = 'block';
  }
  else {
    document.getElementById('barraaceptacion').style.display = 'none';
  }
}

function ponerCookie() {
  setCookie('aceptar_cookie', '1', 365);
  document.getElementById('barraaceptacion').style.display = 'none';
}

$(document).ready(function () {
  leerCookie();
});

$(document).ready(function () {
  $("#contenedor-menu").find("a").click(function () {
    ponerCookie();
  });
});
/* FIN FUNCIONES COOKIES */

/*SIDE NAV */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("overlayint").style.display = "block";
  document.getElementById("sidebarCollapse").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlayint").style.display = "none";
  document.getElementById("sidebarCollapse").style.display = "initial";
}
/*FIN SIDENAV */
/*Smooth scrolling */
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

/* fin smooth scrolling*/
