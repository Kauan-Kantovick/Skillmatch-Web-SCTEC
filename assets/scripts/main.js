//==============================IMPORTAÇÕES=========================================

import { BuscarVagas } from "./dados.js";

export const FuncaoBuscarVagas = await BuscarVagas();

import {CandidatoFormulario} from "./ui.js";

export const FuncaoCandidatoFormulario = await CandidatoFormulario();

import {Formulario} from "./ui.js";

export const FuncaoFormulario = await Formulario();

import { VagaTecnologia } from "./motor.js";

export const ClasseVagaTecnologia = VagaTecnologia;

import { SessaoCards } from "./ui.js";

export const HTMLSessaoCards = await SessaoCards;

import { Mensagem } from "./ui.js";

export const HTMLMensagem = Mensagem;

import {Candidato} from "./motor.js";

export const ClasseCandidato = Candidato;

