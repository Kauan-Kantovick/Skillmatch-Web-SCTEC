//==============================IMPORTAÇÕES-E-EXPORTAÇÕES=========================================

// - Importações: Funções

import { BuscarVagas } from "./dados.js";

import {CandidatoFormulario} from "./ui.js";

import {vagas} from "./ui.js";

import {MostrarMensagem} from "./ui.js";

CandidatoFormulario((candidato) => {
    console.log(candidato);
});

try {

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