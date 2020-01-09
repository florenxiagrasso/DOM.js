// 001
/**
 * Escribir una funcion que nos permita pasarle un elemento 
 * y un color, y  le cambie el color de fondo al elemento.
 */
 const changeColor = (elemento, color) => {
    elemento.style.background = color;
}

 //002 
/**
  * Modificar la funcion previa para que, si no se recibe
  * un color por parametro, se busque un color de forma
  * azarosamente.
  */

 const randomColor = (elemento, color=null) => {
    let colors = color
        if(color == null){ 
            let letters = '0123456789ABCDEF';
                 colors = '#';
                    for (let i = 0; i < 6; i++) {
                         color += letters[Math.floor(Math.random() * 16)];
        }
        elemento.style.background = colors;
    }
 }

  // 003
/**
   * Crear una lista con varios elementos.
   * Crear una funcion que asigne la clase
   * "active" a uno de estos elementos seleccionados.
   * Ademas al mismo tiempo tiene que eliminar
   * la clase "active" del resto de los elementos.
   * Asignarle algun estilo para diferenciar la clase
   * "active" de cuando no se encuentra la misma.
   */

  const addActive = (id) => {
    let elements = document.querySelector('#lista').children
    for (i=0; i < elements.length; i++){
        elements[i].classList.remove('active');
    }   
    document.querySelector("#"+id).classList.add("active");
  }

// 004
/**
 * Crear una funcion para aumentar tamaño 
 * de un titulo y otra para reducirlo.
 */
  
 const increaseTitleSize = () => {
   let title = document.querySelector('#titulo');
   let size = title.style.fontSize;
   size = size.replace('px', "");
   size = parseInt(size)+ 10;
   title.style.fontSize = `${size}px`;
 }


 // 005
 /**
  * Crear una lista que contenga imagenes, de las 
  * cuales se va a mostrar solo una.
  * Crear una funcion que me permita ir cambiando
  * de imagen cada vez que la ejecuto, segun el orden
  * en que estan declaradas.
  */
 let imgsindex = 0;
  const showImg = () => {
    let imgs = document.querySelector('#listaImg').children;
    imgs[imgsindex].style.display= "none";
    imgsindex++;
    if(imgsindex == imgs.lenght){
      imgsindex = 0;
    }
    imgs[imgsindex].style.display = "block";
  };   
      

  






