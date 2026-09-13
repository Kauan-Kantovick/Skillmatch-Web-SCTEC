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
  LembraCandidato,
  ManipulaCandidato
} from "./motor.js";

export const respostaJson = await BuscarVagas();

if (respostaJson === `Erro ao carregar as vagas`) {
  ExibirMensagemErro(respostaJson, "texto-vermelho");
} else if (respostaJson === `Array Vazio`) {
  ExibirMensagemErro(respostaJson, "texto-vermelho");
}

CriarCardsVaga(respostaJson);

CandidatoFormulario((candidato) => {
  console.log(candidato);
  const resultadoCalculo = MostrarCalculoComparacao(candidato, respostaJson);
  console.log(resultadoCalculo);
  const resultadoClassificacao = ClassificarCompatibilidade(resultadoCalculo);
  ManipulaCandidato.SalvarCandidato(candidato);

  ExibeCalculoComparacao(resultadoCalculo);
  ExibeCalculoCompatibilidade(resultadoClassificacao);
  ExibeRecomendacaoEstudos(resultadoCalculo);
}, Candidato);

// ManipulaCandidato.EsquecerCandidato();

const respostaSalva = JSON.parse(localStorage.getItem("usuario"));

let coisa = LembraCandidato(respostaSalva).executaFuncao1(MostrarCalculoComparacao, respostaSalva, respostaJson);
let coisa2 = LembraCandidato(respostaSalva).executaFuncao2(MostrarCalculoComparacao, ClassificarCompatibilidade, respostaSalva, respostaJson);

ExibeCalculoComparacao(coisa);
ExibeCalculoCompatibilidade(coisa2);
ExibeRecomendacaoEstudos(coisa);