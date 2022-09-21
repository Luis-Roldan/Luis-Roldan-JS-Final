let nombreIngresado = prompt("Ingresar Nombre");
let apellidoIngresado = prompt("Ingresar Apellido")



function solicitarNombre(nombreIngresado , apellidoIngresado){
    if((nombreIngresado == "") || (apellidoIngresado == "")){
        alert("No ingresaste la informacion completa");
    }
    else{
        alert("Bienvenido a Tienda online estimado" + " " + nombreIngresado + " " + apellidoIngresado + "," + " disfruta de tus compras con nosotros")
    }
}

solicitarNombre(nombreIngresado , apellidoIngresado)

// const products = [ { name: "lampara", price: "69.00" },  { name: "Mesa Gamer", price: "699.00" }]

// let montoFinal = 0

// for (const product of products) {			
//     montoFinal += product.price*1.18   
// }

// alert("Costo final de los productos seleccionados lampara y mesa Gamer"+ " " + montoFinal + "," + " " + "Gracias por su preferencia")

function calcular(){
    let continuar = true

    while(continuar==true){    
        let ingresarNumero = parseInt(prompt("Ingresar Numero (0 para salir)"))
        if(ingresarNumero==0)
        continuar=false;
        let resultado = ingresarNumero + ingresarNumero * 0.18;
        alert("El costo con impuestos es" + " " + resultado + " " + "soles");
    }
}