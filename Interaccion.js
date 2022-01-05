//javascript para pagina validacion.html
function redireccionar() {
    window.location="pagina2.html";
}

//javascript para pagina 3 

document.getElementById('sumar').addEventListener('click', sumar)
document.getElementById('borrar').addEventListener('click', borrar)
document.addEventListener('DOMContentLoaded', function (event) {
  if (localStorage.getItem('cantidad') != null) {
    document.getElementById('resultado').innerHTML = localStorage.getItem('cantidad')
  }
})
 
function sumar () {
  let cantidad = parseFloat(document.getElementById('cantidad').value)
  if (isNaN(cantidad)) {
    cantidad = 0
  }
  // Recupero el valor de localStorage
  let cantidadAlmacenada = parseFloat(localStorage.getItem('cantidad'))
  if (isNaN(cantidadAlmacenada)) {
    cantidadAlmacenada = 0
  }
  // Calculo la suma
  const suma = cantidad + cantidadAlmacenada
  // La muestro en el H1 porque me lo piden
  document.getElementById('resultado').innerHTML = suma
  // Almaceno el resultado en el localStorage para que quede registrado
  localStorage.setItem('cantidad', suma)
}
 
function borrar () {
  localStorage.setItem('cantidad', 0)
}
