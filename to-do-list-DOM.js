// 001 
/**
 * Crear un TODO list, que tenga
 * 1. un input para agregar nuevos TODO
 * 2. Este input debe tener un button para poder
 *    agregar el TODO desde el input
 * 3. un button por cada TODO de la lista
 *  para borrar el mismo.
 * 4. Un checkbox, antes del texto de cada TODO,
 *  que me permita tachar el elemento de la lista
 *  como resuelto. 
 */

const agregarItem = () => {
    
      let listItem = document.createElement("li");
      let newText = document.querySelector('#myInput').value;
      newText = document.createTextNode(newText)
      listItem.appendChild(newText)

      let button = document.createElement('button')  
        button.innerText= 'borrar';
        button.addEventListener("click", (event) => {
            event.target.parentElement.remove()
        })
        listItem.appendChild(button)


        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener('change', checkboxStatus);
        listItem.appendChild(checkbox)

      document.querySelector('#myUL').appendChild(listItem)
};      
    document.querySelector('#addBtn').addEventListener("click", () => {
    agregarItem()
})

const checkboxStatus = (event) => {
    let itemText = event.target.parentElement;
    
    if(event.target.checked){
        itemText.style.textDecoration = "line-through";
    }
    else{
        itemText.style.textDecoration = "none";
    }
};
    let checkBox = document.createElement("input");


// 002
/**
 * Tomar el input del ejercicio anterior y hacer que 
 * cambie sus bordes de color y de ancho cuando 
 * hacemos foco(focus, hacemos click en el recuadro) en el, 
 * y que esos mismos bordes y color vuelvan al 
 * estado anterior cuando sacamos el foco (blur).
 */

const getFocus = () => {
  let input = document.querySelector('#myInput').focus();
}
document.querySelector('#myInput').addEventListener("focus", () => {
    getFocus()
})




const loseFocus = () => {
    document.querySelector('#myInput').blur();
  }