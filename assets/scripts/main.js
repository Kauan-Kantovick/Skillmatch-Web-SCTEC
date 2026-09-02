//==============================IMPORTAÇÕES-E-EXPORTAÇÕES=========================================

// - Importações: Funções

import { BuscarVagas, Candidato } from "./dados.js";

import { CandidatoFormulario, ExibeRecomendacaoEstudos, CriarCardsVaga, ExibirMensagemErro, ExibeCalculoComparacao, ExibeCalculoCompatibilidade } from "./ui.js";

import { ClassificarCompatibilidade, MostrarCalculoComparacao} from "./motor.js";

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

  ExibeCalculoComparacao(resultadoCalculo);
  ExibeCalculoCompatibilidade(resultadoClassificacao);
  ExibeRecomendacaoEstudos(resultadoCalculo);
}, Candidato);

// IdentificaMaiorCompatibilidade(candidato, VagasJson, i);
// RecomendacaoEstudos(candidato, VagasJson);
// SalvarCandidato(candidato);

// function SalvarCandidato(dadosCandidato) {
//   let CandidatoSalvo = {
//     nome: dadosCandidato.nome,
//     area: dadosCandidato.area,
//     habilidades: dadosCandidato.habilidades,
//   };

//   localStorage.setItem("Usuário", JSON.stringify(CandidatoSalvo));
// }

//       window.addEventListener("DOMContentLoaded", () => {
//         const respostaSalva = JSON.parse(localStorage.getItem("Usuário"));
//         let i = 0;

//         if (respostaSalva) {
//           CandidatoFormulario((respostaSalva) => {
//             console.log(respostaSalva);
//             MostrarCalculoComparacao(respostaSalva, VagasJson, i);
//             IdentificaMaiorCompatibilidade(respostaSalva, VagasJson, i);
//             RecomendacaoEstudos(respostaSalva, VagasJson);
//             SalvarCandidato(respostaSalva);
//           });
//         }
//       });

// window.addEventListener("DOMContentLoaded", () => {
//   console.log("Página carregada");

//   const respostaSalva = localStorage.getItem("Usuário");

//   console.log("Resposta salva:", respostaSalva);

//   if (respostaSalva !== null) {
//     console.log("Executando função...");
//     minhaFuncao(respostaSalva);
//   }
// });

// window.addEventListener("DOMContentLoaded", () => {
//   const respostaSalva = JSON.parse(localStorage.getItem("Usuário"));

//   if (respostaSalva) {
//     console.log(respostaSalva);
//   }
// });
