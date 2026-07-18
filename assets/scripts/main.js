console.log("Conexão com main.js");

import { BuscarVagas } from "./dados.js";

const vagas = await BuscarVagas();

console.log(vagas);