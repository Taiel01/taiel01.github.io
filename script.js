
let tap = new Audio ("tap.mp3");

const app = new Vue({
el: "#app",
data: {
    titulo: "Tareas",
    tareas: [],
    nuevaTarea: ""
},

methods:{
agregarTarea: function(){
    
    tap.play();

    this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
    });

    this.nuevaTarea = "";
    localStorage.setItem('datos-v', JSON.stringify(this.tareas));

},
editarTarea: function(index){

    tap.play();

    if (this.tareas[index].estado == true) {
        this.tareas[index].estado = false;
    } else{
        this.tareas[index].estado = true;
    }
    localStorage.setItem('datos-v', JSON.stringify(this.tareas));

},
eliminarTarea: function(index){

    tap.play();

    this.tareas.splice(index, 1);
    localStorage.setItem('datos-v', JSON.stringify(this.tareas));

}
},

created: function(){

let datosLS = JSON.parse(localStorage.getItem('datos-v'));

if (datosLS === null){

    this.tareas = [];

}else{

    this.tareas = datosLS;

}

}
});