const productos = [];
const carrito = [];

const catalogo = document.querySelector("#catalogo");
const carritoDiv= document.querySelector('.carrito');

class Producto {
    constructor(id, tipo, precio, url) {
        this.id = id;
        this.tipo = tipo;
        this.precio = parseFloat(precio);
        this.url = url;
    }
    sumarIva() {
        return this.precio *= 1.21;
    }
}

function cargarProductos() {
    productos.push(new Producto(1, "Mesa de galeria", 25000,"/imagenes/mesa de galeria.jpg"))
    productos.push(new Producto(2, "Silloncito Outdoor", 48000, "/imagenes/silloncito outdoor.jpg"));
    productos.push(new Producto(3, "Sofa Ingles Reciclado", 66000, "/imagenes/sofa ingles reciclado.jpg"));
}

cargarProductos();

console.log(productos);

function crearCards() {
    for (const prod of productos) {
        prod.sumarIva()
        let div = document.createElement('div')
        div.className = "carta"
        div.innerHTML = `<section id="container" class="containercards">
                           <h3>${prod.tipo}</h3>
                           <p>$${prod.precio}</p>
                           <img class="cartaimg" src="${prod.url}" alt="">
                           <button class="btnCarrito" id="btn-agregar${prod.id}" >Comprar</button>
                         </section>
                         `  
        catalogo.append(div)
    }
    agregarFuncionAlBoton();
}

function agregarFuncionAlBoton(){
    productos.forEach(productos => {
       document.querySelector(`#btn-agregar${productos.id}`).addEventListener("click",()=>{
        agregarAlCarrito(productos)
       })
    });
}


function agregarAlCarrito(productos){ 
   
   let existe =carrito.some(prds=>prds.id === productos.id);
   if(existe===false){
    productos.cantidad = 1;
    carrito.push(productos);
   }
   else{
     let productoFind = carrito.find(prds=>prds.id === productos.id)
     productoFind.cantidad++;
   }
   console.log(carrito);
   renderizarCarrito();
}

function renderizarCarrito(){
    carritoDiv.innerHTML="";
     carrito.forEach(prds =>{
        carritoDiv.innerHTML += `<div id="container" class="containercards">
                           <h3>${prds.tipo}</h3>
                           <h3>CANTIDAD: ${prds.cantidad}</h3>
                           <p>$${prds.precio}</p>
                           <img class="cartaimg" src="${prds.url}" alt="">
                           <button class="btnCarrito" id="btn-borrar${prds.id}" >Borrar</button>
                         </div>
                         `  
     })
     borrarProducto()
}

function borrarProducto(){
    carrito.forEach(productos => {
        document.querySelector(`#btn-borrar${productos.id}`).addEventListener("click",()=>{
          let indice = carrito.findIndex(e=>e.id===productos.id)
          carrito.splice(indice,1)
          renderizarCarrito()
        })
     });
}

function total(){
    let total = document.getElementById("total")
    let resultado = carrito.reduce((acc,el)=> acc + el.precio, 0)
    total.innerText = resultado.toFixed(2)
}
total();

crearCards();