console.log("Conexão com main.js");

import { BuscarVagas } from "./dados.js";

const vagas = await BuscarVagas();

console.log(vagas);

import {Candidato} from "./ui.js";
import {Formulario} from "./ui.js";

const ExecutarCandidato = await Candidato;

Candidato();