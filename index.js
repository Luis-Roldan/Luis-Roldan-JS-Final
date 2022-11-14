// let nombreIngresado = prompt("Ingresar Nombre");
// let apellidoIngresado = prompt("Ingresar Apellido")



// function solicitarNombre(nombreIngresado , apellidoIngresado){
//     if((nombreIngresado == "") || (apellidoIngresado == "")){

//         Swal.fire({
//             icon: "error",
//             tittle: "error al procesar",
//             text: "No ingresaste la informacion completa"
//         })
//     }
//     else{
        
//         Swal.fire({
//             icon: "success",
//             tittle: "Bienvenido",
//             text: "Bienvenido a Tienda online estimado" + " " + nombreIngresado + " " + apellidoIngresado + "," + " disfruta de tus compras con nosotros",
//             width: 400,
//             padding: '3em',
//             color: '#716add',
//             background: '#fff url(/images/trees.png)',
//             backdrop: `
//               rgba(0,0,123,0.4)
//               url("/img/nyan-cat.gif")
//               left top
//               no-repeat
//             `
//           })
//     }
// }

// solicitarNombre(nombreIngresado , apellidoIngresado)




// const botonSwal = document.getElementById("btnMostrarSwal")
// botonSwal.onclick = mostrarSwal







// console.log(inputCorreo.value);
// inputCorreo.value = "jesus@prueba.com";
// console.log(inputCorreo.value);

// console.log(inputContrasenia.value);

// let nombreIngresado = document.getElementById("nombreIngresado")

function solicitarNombre(){

    let nombreIngresado = document.getElementById("nombreIngresado").value

    if(nombreIngresado == ""){

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
            text: "Bienvenido a Tienda online estimado" + " " + nombreIngresado + " " + "," + " disfruta de tus compras con nosotros",
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
    // nombreIngresado.solicitarNombre();
}


const products = [ { name: "lampara", price: "69.00" },  { name: "Mesa Gamer", price: "699.00" }]

let montoFinal = 0

for (const product of products) {			
    montoFinal += product.price*1.18   
} 

// alert("Costo final de los productos seleccionados lampara y mesa Gamer"+ " " + montoFinal + "," + " " + "Gracias por su preferencia")

function calcularImpuestos(){
    
    let ingresarNumero = parseInt(document.getElementById("monto").value)
        
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



function consultarProductosServer() {
    let lista = document.querySelector("#descuentos ul")
    fetch("https://634753a3db76843976a9f41e.mockapi.io/Ecommerce")
    .then((response) => response.json())
    .then((data) => {

        for(let i = 0 ; i<10 ; i++){
            
            lista.insertAdjacentHTML("afterbegin", data[i].nombre + " " + data[i].precioVenta + "<br>");

            console.log(data)
        }
    })
    .catch((error) => console.log(error));
}   
consultarProductosServer()




// function clicked() {
//     let name = document.getElementById('name').value
//    return confirm('Bienvenido a Tienda online' + " " + name);
//   }




//   // function clicked(){
//     let continuar = true

//     while(continuar==true){    
//       let calcularImpuestos = document.getElementById('calcularImpuestos').value
      
//       // let ingresarNumero = parseInt(document.getElementById("Ingresar Numero (0 para salir)"))
      
//       let resultado = calcularImpuestos + (calcularImpuestos * 0.18) ;

//       // alert("El costo con impuestos es" + " " + resultado + " " + "soles");

//       return confirm('El costo de con impuestos es' + " " + resultado);


//          if(calcularImpuestos==0){
//           continuar=false;
//   } else{
//           sessionStorage.setItem("producto", resultado)

//           let productoGuardado = sessionStorage.getItem("producto")

//           console.log(productoGuardado)
//       }
//   }
// }