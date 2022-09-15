let nombreIngresado = prompt("Ingresar Nombre");
let apellidoIngresado = prompt("Ingresar Apellido")
let continuar = true

if((nombreIngresado == "") || (apellidoIngresado == "")){
    alert("No ingresaste la informacion completa");
}
else{
    alert("Bienvenido a Tienda online estimado" + " " + nombreIngresado + " " + apellidoIngresado + "," + " disfruta de tus compras con nosotros")
}
