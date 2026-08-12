//==============================IMPORTAÇÕES-E-EXPORTAÇÕES=========================================

// - Importações: Funções

import { BuscarVagas } from "./dados.js";

import {CandidatoFormulario} from "./ui.js";

import {vagas} from "./ui.js";

import {ExibirMensagemErro} from "./ui.js";

// - Importações: Exportações

export const BuscandoVagas = BuscarVagas();

export const DadosCandidato = CandidatoFormulario();

CandidatoFormulario((candidato) => {
    console.log(candidato);
});

try {

    ExibirMensagemErro(
        "Vagas carregadas com sucesso!",
        "Texto-verde"
    );

} catch (erro) {

    ExibirMensagemErro(
        erro.message,
        "Texto-vermelho"
    );

}