//==============================IMPORTAÇÕES-E-EXPORTAÇÕES=========================================

// - Importações: Funções

import { BuscarVagas, Candidato } from "./dados.js";

import {
  CandidatoFormulario,
  ExibeRecomendacaoEstudos,
  CriarCardsVaga,
  ExibirMensagemErro,
  ExibeCalculoComparacao,
  ExibeCalculoCompatibilidade,
} from "./ui.js";

import {
  ClassificarCompatibilidade,
  MostrarCalculoComparacao,
  SalvarCandidato,
  LembraCandidato
} from "./motor.js";

export const VagasJson = await BuscarVagas();

if (VagasJson === `Erro ao carregar as vagas`) {
  ExibirMensagemErro(VagasJson, "Texto-vermelho");
} else if (VagasJson === `Array Vazio`) {
  ExibirMensagemErro(VagasJson, "Texto-vermelho");
}

CriarCardsVaga(VagasJson);

CandidatoFormulario((candidato) => {
  console.log(candidato);
  const resultadoCalculo = MostrarCalculoComparacao(candidato, VagasJson);
  console.log(resultadoCalculo);
  const resultadoClassificacao = ClassificarCompatibilidade(resultadoCalculo);
  SalvarCandidato(candidato);

  ExibeCalculoComparacao(resultadoCalculo);
  ExibeCalculoCompatibilidade(resultadoClassificacao);
  ExibeRecomendacaoEstudos(resultadoCalculo);
}, Candidato);

const respostaSalva = JSON.parse(localStorage.getItem("Usuário"));

console.log(LembraCandidato(respostaSalva, VagasJson, MostrarCalculoComparacao, ClassificarCompatibilidade));

// if (LembraCandidato) {
//     ExibeCalculoComparacao(resultadoCalculo);
//     ExibeCalculoCompatibilidade(resultadoClassificacao);
//     ExibeRecomendacaoEstudos(resultadoCalculo);
// }