//==============================IMPORTAÇÕES-E-EXPORTAÇÕES=========================================

// - Importações: Funções

import { BuscarVagas } from "./dados.js";

import {CandidatoFormulario} from "./ui.js";

// - Importações: Classes

import {Candidato} from "./motor.js";

import { VagaTecnologia } from "./motor.js";

// - Importações: Objetos HTML

import { SessaoCards } from "./ui.js";

import { Mensagem } from "./ui.js";

import {Formulario} from "./ui.js";

// - Exportações

export const FuncaoCandidatoFormulario = CandidatoFormulario();

export const ClasseVagaTecnologia = VagaTecnologia;

export const ClasseCandidato = Candidato;

try {

    const vagas = await BuscarVagas();

    CriarCards(vagas);

    MostrarMensagem(
        "Vagas carregadas com sucesso!",
        "sucesso"
    );

} catch (erro) {

    MostrarMensagem(
        erro.message,
        "erro"
    );

}