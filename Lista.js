var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
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
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
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
        fechaCreacion: Date.now(), 
        completa: false
    }
    toDoList.push();
    

    let input = document.createElement("input");
    let li = document.createElement("li");
    li.className = "list-group-item";
    input.setAttribute("type", "button");
    li.className = "list-group-item";
    input.className = "btn btn-primary";
    li.appendChild(input);
    li.innerHTML += text;
    listaHtml.appendChild(li);
    return alert(`La tarea ${text} fue creada`);
}
var close = document.getElementsByClassName("form-check-input me-1");p
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function pasarHora()
{
}*/
