let toDoList = [];
let completList = [];
let listaHtml = document.getElementById("lista") ;

function crearTarea()
{
    let text = document.getElementById("input-tarea").value;
    let nuevo = {
        tarea: text,
        tiempoCreacion: Date.now(), 
        completa: false
    }
    toDoList.push();
    

    let button = document.createElement("button");
    let li = document.createElement("li");
    li.className = "list-group-item";
    button.setAttribute("type", "button");
    button.className = "btn btn-outline-primary";
    button.setAttribute("onclick",tareaCompleta());
    li.appendChild(button);
    li.innerHTML += text;
    listaHtml.appendChild(li);
    return alert(`La tarea ${text} fue creada`);
}

function tareaCompleta()
{

}
