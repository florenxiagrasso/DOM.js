// 003
 /**
  * Hacer un sistema para restaurant.
  * Para esto necesitamos.
  * 1. Lista de mesas - agregar, eliminar
  * 2. Lista de productos con precio - Agregar, eliminar, modificar
  * 
  * Y que nos permita obtener
  * 3. Una cuenta por mesa (la mesa se abre, se cargan los productos, y 
  * se cierra pidiendo el total consumido. Lista de cuentas con objetos)
  * 4. Obtener el producto mas vendido
  * 
  * Las funciones deben tener validaciones correspondientes.
  * 
  * Y esto debe estar todo accesible desde una pagina web.
  * TESTS de las funciones que no requieran DOM
  * 
  * En el GUI (graphical user interface, o interfaz grafica de usuario), o sea
  * la pagina, vamos a tener varias acciones relacionadas a inputs.
  * Resetear el valor de los inputs cada vez que hago click en el boton que le 
  * corresponde al input. O sea, si agrego un nuevo numero de mesa, el input
  * debe quedar vacio una vez agregado.
  * 
  * Por ultimo, puede hacerse con objetos o con clases.
  */
// local storage setItem/getItem - json.stringify / json.parse convierte el objeto en string y en array



const Mesa = {
    numero = -1,
    consumiciones:[],
    get cuenta(){
    },

    agregar: function(idProducto, cantidad, menu) {
        for(let consumicion of this.consumiciones) {
            if(consumicion.producto.id == idProducto){
                consumicion.cantidad += cantidad;
                return true;
            }
        }

        let productoEncontrado = menu.find(producto =>{
            return producto.id == idProducto;
        });
        if(typeof productoEncontrado == "undefined") {
            throw "Producto inexistente";
        }

        const consumicion = Object.assign({}, Consumicion);
        consumicion.producto = productoEncontrado;
        consumicion.cantidad = cantidad;
        this.consumiciones.push(consumicion);

    },
        borrarProducto: function(idProducto) {
        let indice =  this.consumiciones.findIndex((prod) => {
              return numero == prod.id;
          });
          consumiciones.splice(numero, 1); 
    }
},

const Consumicion = {
    producto: {},
    cantidad:0 
};

const listaDeMesas = {
    lista: [],
    agregar: function(numero) {
        const nuevaMesa = Object.assign({}, Mesa);
        nuevaMesa.numero = numero;
        this.lista.push(nuevaMesa)
    },

    borrar: function(numero){
        let indice =  this.lista.findIndex((prod) => {
            return numero == prod.id;
        });
        lista.splice(numero, 1); 
  }
},

const Menu = {
  listaMenu = [],
  
  agregar: function(id, nombre, precio) {
        const nuevoProducto = Object.assign({}, Producto);
        nuevoProducto.id = id;
        nuevoProducto.nombre = nombre;
        nuevoProducto.precio = precio;
        this.listaMenu.push(nuevoProducto);
    },

    borrar: function(id,){
            let indice =  this.listaMenu.findIndex((prod) => {
                return id == prod.id;
            });
            listaMenu.splice(id, 1); 

    }
},

const Producto = {
    id: -1,
    precio:0.00,
    nombre:''
}, 

const Productos = [   
{
    id: 01,
    nombre: "cafe cortado",
    precio: 160,
},
{
    id: 02,
    nombre: "medialuna",
    precio: 50
},
{
    id: 03,
    nombre: "limonada",
    precio: 90,

}
]


try {
    module.exports = {
        Mesa,
        Menu,
        listaDeMesas
    }
} catch (e) {}