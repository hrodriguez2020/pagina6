
//1. Obtenemos los elementos que necesitamos
var inputtexto=document.getElementById("tarea")
var btntexto=document.getElementById("botoninput")
var tareas=[]


//2. Ponemos un eventlistener
btntexto.addEventListener("click",function(){
    tareas.push(inputtexto.value)
    console.log(tareas)
    inputtexto.value=""
})



