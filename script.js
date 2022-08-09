let comenzo = false;
let tap = new Audio ("tap.mp3");

Vue.component("tiempo",{
    template: 
    `
    <div>
    <button class="btn btn-info btn-sm" @click="resetearIntervalo">Reset</button>
    <button class="btn btn-info btn-sm" @click="comenzarCronometro">{{minuto}}:{{segundo}}</button>
    </div>
    `,
    data(){
        return{
            segundo: 0,
            minuto: 0
        }
    },
    methods: {
        comenzarCronometro: function(){

            tap.play();
        
            if (comenzo == true) {
                comenzo = false;
            } else{
                comenzo = true;
            }
        
            if(comenzo == true){
                var tic = setInterval(() => {
        
                    this.segundo ++;
            
                    if(this.segundo >= 60){
                        this.segundo = 0;
                        this.minuto ++
                    } else if(this.minuto >= 60){
                        clearInterval(tic);
                    } else if( comenzo == false){
                        clearInterval(tic);
                    }
                   }, 1000);
                }
        
            localStorage.setItem('datos-v', JSON.stringify(this.tareas));
        },
        resetearIntervalo: function(){
            tap.play();
        
            this.segundo = 0;
            this.minuto = 0;
        
            localStorage.setItem('datos-v', JSON.stringify(this.tareas));
        }
    }
    
})






const app = new Vue({
el: "#app",
data: {
    titulo: "Tareas cronometradas",
    tareas: [],
    nuevaTarea: "",
    //Cronometro
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


