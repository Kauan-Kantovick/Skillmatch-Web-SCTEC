//==============================IMPORTAÇÕES-E-EXPORTAÇÕES=========================================

// - Importações

import { BuscarVagas } from "./dados.js";

import {CandidatoFormulario} from "./ui.js";

import {Formulario} from "./ui.js";

import { VagaTecnologia } from "./motor.js";

import { SessaoCards } from "./ui.js";

import { Mensagem } from "./ui.js";

import {Candidato} from "./motor.js";

// - Exportações

export const FuncaoCandidatoFormulario = await CandidatoFormulario();

export const ClasseVagaTecnologia = VagaTecnologia;

export const ClasseCandidato = Candidato;