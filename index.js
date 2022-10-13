let nombreIngresado = prompt("Ingresar Nombre");
let apellidoIngresado = prompt("Ingresar Apellido")



function solicitarNombre(nombreIngresado , apellidoIngresado){
    if((nombreIngresado == "") || (apellidoIngresado == "")){

        Swal.fire({
            icon: "error",
            tittle: "error al procesar",
            text: "No ingresaste la informacion completa"
        })
    }
    else{
        
        Swal.fire({
            icon: "success",
            tittle: "Bienvenido",
            text: "Bienvenido a Tienda online estimado" + " " + nombreIngresado + " " + apellidoIngresado + "," + " disfruta de tus compras con nosotros",
            width: 400,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/img/nyan-cat.gif")
              left top
              no-repeat
            `
          })
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
        
        let resultado = ingresarNumero + ingresarNumero * 0.18;

        alert("El costo con impuestos es" + " " + resultado + " " + "soles");


        if(ingresarNumero==0){
        	continuar=false;
	} else{
        	sessionStorage.setItem("producto", resultado)

        	let productoGuardado = sessionStorage.getItem("producto")

        	console.log(productoGuardado)
        }
    }

    
}


const botonSwal = document.getElementById("btnMostrarSwal")
botonSwal.onclick = mostrarSwal


function consultarProductosServer() {
    fetch("https://634753a3db76843976a9f41e.mockapi.io/")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}



 