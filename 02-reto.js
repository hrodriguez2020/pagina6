
//1. Obtenemos los elementos que necesitamos
var inputtexto=document.getElementById("tarea")
var btntexto=document.getElementById("botoninput")

var btnAll=document.getElementById("all")
var btndone=document.getElementById("done")
const list = document.querySelector("#list")
var el=document.getElementsByTagName("li")


//2. Ponemos un eventlistener
btntexto.addEventListener("click",function(){

    
    var cajaVacia=document.getElementById("cajavacia")
    var lista=document.getElementById("list")
    var li=document.createElement("li")
    li.className="secundario"
    
    li.innerHTML=inputtexto.value

    lista.appendChild(li)
    inputtexto.value=""
})

btnAll.addEventListener("click", function(){
    var cajaVacia=document.getElementById("cajavacia")
    var lista=document.getElementById("list")
    var secundario=document.getElementsByClassName("secundario")
    console.log(secundario)
    for (var i=secundario.length-1; i>=0; --i) {
        secundario[i].remove()
    }
})
list.onclick = function(el){
    console.log(el)
    if(el.target.tagName == "LI"){
         el.target.classList.toggle("checked");
    }
};