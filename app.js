require("colors");

// Mis importaciones
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDB = leerDB();
  if (tareasDB) {
    // meto las tareas en tareas
  }
  await pausa();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        // crear una tarea
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas.listadoArr);
        break;

      default:
        break;
    }
    guardarDB(tareas.listadoArr);
    if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
