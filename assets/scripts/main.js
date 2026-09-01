//==============================IMPORTAÇÕES-E-EXPORTAÇÕES=========================================

// - Importações: Funções

import { BuscarVagas, Candidato } from "./dados.js";

import { CandidatoFormulario, CriarCardsVaga, ExibirMensagemErro, ExibeCalculoComparacao } from "./ui.js";

import { MostrarCalculoComparacao} from "./motor.js";

export const VagasJson = await BuscarVagas();

if (VagasJson === `Erro ao carregar as vagas`) {
  ExibirMensagemErro(VagasJson, "Texto-vermelho");
} else if (VagasJson === `Array Vazio`) {
  ExibirMensagemErro(VagasJson, "Texto-vermelho");
}

CriarCardsVaga(VagasJson);

// MostrarCalculoComparacao(candidato, VagasJson, i);

CandidatoFormulario((candidato) => {
  // const instancia = MostrarCalculoComparacao(candidato, VagasJson, i);

  console.log(candidato);
  const resultado = MostrarCalculoComparacao(candidato, VagasJson);
  ExibeCalculoComparacao(resultado);
}, Candidato);

// console.log(Classe)
// console.log(Candidato);
// MostrarCalculoComparacao(candidato, VagasJson, i);
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
