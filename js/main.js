
(function(){
    var lista= document.getElementById("lista"),
        tareaInput= document.getElementById("tareaInput"),
        btnNuevatarea= document.getElementById("btn-agregar");

        //Funciones
        var agregarTarea = function(){
            var tarea = tareaInput.value;
                nuevaTarea = document.createElement("li"),
                enlace = document.createElement("a"),
                eliminar = document.createTextNode("i"),
                contenido = document.createTextNode(tarea);

            if (tarea === "") {
                tareaInput.setAttribute("placeholder","Agrega una tarea valida");
                tareaInput.className = "error";
                alert("Agregue una tarea valida")
                return false;
            }
                // Agregar los elementos de la lista
            enlace.appendChild(contenido);
            enlace.setAttribute("href","#");
            enlace.appendChild(eliminar);
            nuevaTarea.appendChild(enlace);
            lista.appendChild(nuevaTarea);

            tareaInput.value= "";

            for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
            
        };

        var comprobarbutton = function(){
            tareaInput.className = "";
            tareaInput.setAttribute("placeholder", "Agrega tu tarea");
            
        };
        var eliminarTarea = function(){
            this.parentNode.removeChild(this);
        };

        //Evento 
        //agregar tarea
        btnNuevatarea.addEventListener("click", agregarTarea);
        tareaInput.addEventListener("click", comprobarbutton);

}());

