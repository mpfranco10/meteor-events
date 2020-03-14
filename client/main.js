import './main.html';
import Events from "../collections";

Template.profile.created = ()=>{
  console.log("Created the profile template");
}

Template.profile.rendered = ()=>{
  console.log("Rendered the profile template");
}

/*otros elementos del archivo*/

Template.profile.helpers({
     /*other helpers*/

    eventsCollection: () => {
        return Events.find({});
    }
});

Template.formulario.events({
    'submit form': (event) => {
        event.preventDefault();
        console.log("hola")
        const target = event.target;
        const nombre = target.nombre.value
        const descr = target.descripcion.value
        const responsable = target.responsable.value
        const fechainicio = target.fechainicio.value
        const fechafin = target.fechafin.value
        const ubicacion = target.ubicacion.value

        if(nombre == "" || descr =="" || responsable =="" || fechainicio =="" || fechafin =="" || ubicacion ==""){
          alert("Por favor llene todos los campos");
        }
        else{
        let evento = { nombre: nombre, descripcion: descr, responsable: responsable, fechainicio: fechainicio, fechafin: fechafin, ubicacion: ubicacion}
        Events.insert(evento)
        }
        
    }
});
