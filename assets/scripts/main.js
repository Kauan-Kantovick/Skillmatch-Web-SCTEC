//==============================IMPORTAÇÕES-E-EXPORTAÇÕES=========================================

// - Importações: Funções

import { BuscarVagas } from "./dados.js";

import {CandidatoFormulario} from "./ui.js";

import {ExibirMensagemErro} from "./ui.js";

import {CalculoCompatibilidade} from "./motor.js";

import { MostrarCalculoComparacao } from "./ui.js";

import { VagasJson } from "./ui.js";

import { ClassificarCompatibilidade } from "./motor.js";

import { IdentificaMaiorCompatibilidade } from "./ui.js";

import { RecomendacaoEstudos } from "./ui.js";

import { Footer } from "./ui.js";

// - Importações: Exportações

let i = 0;

CandidatoFormulario((candidato) => {
    console.log(candidato);
    MostrarCalculoComparacao(candidato, VagasJson, i);
    IdentificaMaiorCompatibilidade(candidato, VagasJson, i);
    RecomendacaoEstudos(candidato, VagasJson);
});
