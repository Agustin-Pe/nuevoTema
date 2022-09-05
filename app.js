let archivoTareas = require('./funcionesDeTareas');

// node app.js ACCION =>  [ 'node' , 'app.js' , 'ACCION' ]
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach((tareas,i) => {
             console.log((i + 1) +'. ' + tareas.titulo + ' - ' + tareas.estado) 
    

        })
    case 'crear':
        let titulo = process.argv[3];
        let tareaNueva = {titulo: titulo, estado: 'pendiente'}
        archivoTareas.guardarTarea(tareaNueva)
        break;
    case 'filtrar':
        let estado = process.argv[3]
        let tareasFiltradas = archivoTareas.filtarPorEstado (estado)
        console.log( tareasFiltradas )
        break
        case undefined:
          console.log();    
          console.log('Atención - Tienes que pasarme una acción');
          console.log('Las acciones disponibles son: listar');
          console.log('----------------------------------------');
          break;
  
      default:
          console.log('------------------------------------');
          console.log('No entiendo qué quieres hacer');
          console.log('Las acciones disponibles son: listar');
          console.log('------------------------------------');
          break;
  }
  console.log