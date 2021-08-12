const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion de la tarea por hacer",
};

const completado = {
  default: true,
  alias: "c",
  desc: "Marca como completado la tarea",
};

const argv = require("yargs")
  .command("crear", "crear un elemento por hacer", {
    descripcion,
  })
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado,
  })
  .command("borrar", "Borra una tarea de la lista de tareas", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Borra de la lista de tareas",
    },
  })
  .help().argv;

module.exports = {
  argv,
};
