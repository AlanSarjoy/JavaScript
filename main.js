class Producto {
  constructor(nombre, precio, stock){
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

  sumarIva(){
    this.precio = this.precio * 1.21;
  }
}

// Empezamos por declarar el ARRAY.

const mesas = [];

mesas.push(new Producto("mesa de galeria", 25000, 3));
mesas.push(new Producto("mesa titan", 20000, 5));
mesas.push(new Producto("mesa cuadrada de pinotea", 21000, 1));
mesas.push(new Producto("mesa baja laurel", 18500, 2));
mesas.push(new Producto("mesa cuadrada con pata bocha", 28600, 3));
mesas.push(new Producto("mesa rustica de galeria", 30000, 0));
mesas.push(new Producto("mesa de comedor diario reciclado", 28300, 2));
mesas.push(new Producto("mesa baja laurel patas en x", 15000, 4));
mesas.push(new Producto("mesa baja con ruedas y tres cajones", 12700, 5));
mesas.push(new Producto("mesa de luz woodie ale", 12100, 2));
mesas.push(new Producto("mesa de apoyo pinotea", 17800, 1));
mesas.push(new Producto("mesita de apoyo", 12300, 0));

const sillas = [];

sillas.push(new Producto("silla moderna reciclada", 11000, 2));
sillas.push(new Producto("silla cabecera toledo con estirilla", 10000, 6));
sillas.push(new Producto("silla revestida recta lino", 13100, 12));
sillas.push(new Producto("silla vestida f", 5000, 12));
sillas.push(new Producto("silla london", 7600, 12));
sillas.push(new Producto("silla francesa", 7600, 12));
sillas.push(new Producto("silla de descanso", 8000, 12));
sillas.push(new Producto("banqueta cuadrada con respaldo", 5000, 12));
sillas.push(new Producto("banqueta francesa mariposa", 6000, 12));
sillas.push(new Producto("silla cabecera esterillada", 13000, 12));
sillas.push(new Producto("acapulco sur", 8900, 12));
sillas.push(new Producto("silla jack", 5000, 12));

const sillones = [];


sillones.push(new Producto("sofa tokyo", 48000, 1));
sillones.push(new Producto("sillon esquinero italia", 66000, 2));
sillones.push(new Producto("sofa ingles reciclado", 32000, 1));
sillones.push(new Producto("sofa torino", 29000, 1));
sillones.push(new Producto("sillon estocolmo", 40000, 1));
sillones.push(new Producto("sillon esquinero phanton", 39500, 2));
sillones.push(new Producto("silloncito velvet", 51000, 2));
sillones.push(new Producto("sillon bkf", 22000, 3));
sillones.push(new Producto("sillon de sala francesa luis xv", 31000, 2));
sillones.push(new Producto("camastro galeria x3", 55000, 6));
sillones.push(new Producto("butaca net", 22650, 4));
sillones.push(new Producto("silloncito outdoor", 33000, 6));


const productos = [...mesas, ...sillas, ...sillones];

// le sume el Iva a todos los productos de los ARRAYS.
for(Producto of productos){
    Producto.sumarIva();
}

let seleccion = prompt("Bienvenido, desea ver nuestra lista de productos? \n 1.Si \n 2.No");



if(seleccion == 1){
  alert("A continuación le vamos a mostrar todos nuestros productos");
  let todosLosProductos = productos.map((Producto) => Producto.nombre + ", Precio: $" + Producto.precio + ", " + "Stock:" + Producto.stock);

  alert(todosLosProductos.join(" \n "));
}




let productoAElegir = prompt(`Qué producto desea comprar?`);
let existe = false;
let posicion = -1;



productos.forEach((item, indice) => {
  if(productoAElegir === item.nombre){
    existe = true;
    posicion = indice;
  }
});

if(existe){
  let cantidad = parseInt(prompt(`Qué cantidad desea comprar?`));
  if(productos[posicion].stock < cantidad){
    alert(`Disculpa, por el momento no tenemos tantos, solo tengo ${productos[posicion].stock} en stock`);
  }else {
    productos[posicion].vender(cantidad);

    if(!productos[posicion].disponible){
      productos.splice(posicion, -1);
    }
  }
}else {
  alert(`Lo lamento. Este producto no lo tengo.`);
}

console.log(productos);









// console.log para ir probando que todo funcione...
/*console.log(mesas);
console.log(sillas);
console.log(sillones);
console.log(productos);*/