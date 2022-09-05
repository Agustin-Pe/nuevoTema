const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        const arrayTareas = fs.readFileSync(this.archivo, 'utf-8')
        return JSON.parse(arrayTareas);
    },
    escribirJSON: function (tareas) {
        const stringTareas = JSON.stringify(tareas)
        fs.writeFileSync(this.archivo, stringTareas, 'utf-8')
    },
    guardarTarea: function(tareaNueva) {
        let tareas =  this.leerArchivo()
        tareas.push(tareaNueva)
        this.escribirJSON(tareas)
    },
    filtarPorEstado: function(estado) {
        let tareas = this.leerArchivo ()
        let tareasFiltras = tareas.filter(tarea => tarea.estado === estado)
        return tareasFiltras
    }
}
module.exports = archivoTareas;
