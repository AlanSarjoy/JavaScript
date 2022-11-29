class Producto {
  constructor(id, nombre, precio, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  vender(cantidad){
    this.stock -= cantidad;
    if(this.stock < 1){
      this.disponible = false;
    }
  }

}

//inicio secion
let usuario;
let password;
let usuarioLS;

usuarioLS = localStorage.getItem("usuario");
console.log(usuarioLS);

if(usuarioLS == null){
  usuario = prompt("Ingrese su usuario.");
  password = prompt("Ingrese su contraseña");
  localStorage.setItem("usuario", usuario);
}else{
  alert(`Hola, ${usuarioLS}`);
}


let carrito = document.getElementById("carrito");
// Empezamos por declarar el ARRAY.

const mesas = [];

mesas.push(new Producto(1,"mesa de galeria", 25000, 3));
mesas.push(new Producto(2,"mesa titan", 20000, 5));
mesas.push(new Producto(3,"mesa cuadrada de pinotea", 21000, 1));
mesas.push(new Producto(4,"mesa baja laurel", 18500, 2));
mesas.push(new Producto(5,"mesa cuadrada con pata bocha", 28600, 3));
mesas.push(new Producto(6,"mesa rustica de galeria", 30000, 0));
mesas.push(new Producto(7,"mesa de comedor diario reciclado", 28300, 2));
mesas.push(new Producto(8,"mesa baja laurel patas en x", 15000, 4));
mesas.push(new Producto(9,"mesa baja con ruedas y tres cajones", 12700, 5));
mesas.push(new Producto(10,"mesa de luz woodie ale", 12100, 2));
mesas.push(new Producto(11,"mesa de apoyo pinotea", 17800, 1));
mesas.push(new Producto(12,"mesita de apoyo", 12300, 0));

const sillas = [];

sillas.push(new Producto(13,"silla moderna reciclada", 11000, 2));
sillas.push(new Producto(14,"silla cabecera toledo con estirilla", 10000, 6));
sillas.push(new Producto(15,"silla revestida recta lino", 13100, 12));
sillas.push(new Producto(16,"silla vestida f", 5000, 12));
sillas.push(new Producto(17,"silla london", 7600, 12));
sillas.push(new Producto(18,"silla francesa", 7600, 12));
sillas.push(new Producto(19,"silla de descanso", 8000, 12));
sillas.push(new Producto(20,"banqueta cuadrada con respaldo", 5000, 12));
sillas.push(new Producto(21,"banqueta francesa mariposa", 6000, 12));
sillas.push(new Producto(22,"silla cabecera esterillada", 13000, 12));
sillas.push(new Producto(23,"acapulco sur", 8900, 12));
sillas.push(new Producto(24,"silla jack", 5000, 12));

const sillones = [];


sillones.push(new Producto(25,"sofa tokyo", 48000, 1));
sillones.push(new Producto(26,"sillon esquinero italia", 66000, 2));
sillones.push(new Producto(27,"sofa ingles reciclado", 32000, 1));
sillones.push(new Producto(28,"sofa torino", 29000, 1));
sillones.push(new Producto(29,"sillon estocolmo", 40000, 1));
sillones.push(new Producto(30,"sillon esquinero phanton", 39500, 2));
sillones.push(new Producto(31,"silloncito velvet", 51000, 2));
sillones.push(new Producto(32,"sillon bkf", 22000, 3));
sillones.push(new Producto(33,"sillon de sala francesa luis xv", 31000, 2));
sillones.push(new Producto(34,"camastro galeria x3", 55000, 6));
sillones.push(new Producto(35,"butaca net", 22650, 4));
sillones.push(new Producto(36,"silloncito outdoor", 33000, 6));


const productos = [...mesas, ...sillas, ...sillones];


let seleccion = prompt("Bienvenido, desea ver nuestra lista de productos? \n 1.Si \n 2.No");



if(seleccion == 1){
  alert("A continuación le vamos a mostrar todos nuestros productos:");
  let todosLosProductos = productos.map((Producto) => Producto.nombre + ", Precio: $" + Producto.precio + ", " + "Stock:" + Producto.stock);

  alert(todosLosProductos.join(" \n "));
}


let productosEnCarrito = [];
let productosEnCarritoLS = localStorage.getItem("carrito");

if(productosEnCarritoLS){
  productosEnCarrito = JSON.parse(productosEnCarritoLS);

  productosEnCarrito.forEach(item => {
    carrito.innerHTML += `<li>
    ${item.cantidad}x ${item.nombre} 
    </li>`
  });

}



let productoSeleccionado = prompt("Ingrese el producto que desea agregar al carrito.");



let productoRequerido = productos.find((item) => productoSeleccionado === item.nombre );

if(productoRequerido){
  let cantidad = parseInt(prompt("Cuantos productos desea agregar al carrito?"));
  productosEnCarrito.push({nombre: productoSeleccionado, cantidad: cantidad});

  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}else{
  alert("Este producto no existe.");
}

//Eventos
let boton = document.getElementById("btn");


boton.addEventListener("click", () =>{
  alert("Producto agregado al carrito");
})