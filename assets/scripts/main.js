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

export const FuncaoBuscarVagas = await BuscarVagas();

export const FuncaoCandidatoFormulario = await CandidatoFormulario();

export const FuncaoFormulario = await Formulario();

export const ClasseVagaTecnologia = VagaTecnologia;

export const HTMLSessaoCards = await SessaoCards;

export const HTMLMensagem = Mensagem;

export const ClasseCandidato = Candidato;
