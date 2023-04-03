var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    var horaF= new Date()
    ev.target.innerHTML += horaF.toLocaleString();
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var horaC= new Date()
  li.appendChild(t);

  li.innerHTML += horaC.toLocaleString(); 
  if (inputValue === '') {
    alert("Escribi algo pa  !");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

/*let toDoList = [];
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
*/
