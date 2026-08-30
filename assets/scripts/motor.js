//==============================CONTADOR-DE-ANÁLISES==============================

export const CriarContadorAnalises = (() => {
    let Contador = 0;

    return {
        ContarAnalise() {
            Contador++;
            return Contador;
        },

        InformacoesAnalise() {
            return console.log(`Total de vagas analisadas: ${Contador}`);
        }
    }
})();

//==============================UTILIZAÇÃO-CLASSES=========================================

// - Função CalcularCompatibilidade

export const CalculoCompatibilidade = (valorA, valorB) => Math.round((valorA / valorB) * 100);

export const ClassificarCompatibilidade = (TaxaCompatibilidade) => {
    if (TaxaCompatibilidade === 100) {
        let Total = `Total`;
        return Total;
    } else if (TaxaCompatibilidade <= 99 && TaxaCompatibilidade >= 80) {
        let Alta = `Alto`;
        return Alta;
    } else if (TaxaCompatibilidade <= 79 && TaxaCompatibilidade >= 50) {
        let Moderada = `Moderado`;
        return Moderada;
    } else if (TaxaCompatibilidade <= 49 && TaxaCompatibilidade >= 1) {
        let Baixa = `Baixo`;
        return Baixa;
    } else if (TaxaCompatibilidade === 0) {
        let Nenhuma = `Nenhum`;
        return Nenhuma;
    } else {
        let Erro = `Erro`;
        return Erro;
    }
}

// export async function MostrarCalculoComparacao(candidato, vagas, controlador) {

//     console.log(`Função "MostrarCalculoComparacao"`);

//     vagas.forEach(vaga => {

//         CriarContadorAnalises.ContarAnalise();

//         let HabilidadesCandidato = candidato.GetHabilidades();
//         let RequisitosVaga = vaga.GetRequisitos();

//         let HabilidadesCompativeis = HabilidadesCandidato.filter(habilidade => RequisitosVaga.includes(habilidade));
//         let HabilidadesFaltantes = RequisitosVaga.filter(requisito => HabilidadesCandidato.includes(requisito) === false);

//         const RequisitosAtendidos = HabilidadesCompativeis.length;
//         const TotalRequisitos = RequisitosVaga.length;

//         let CardAtual = document.getElementById(controlador);

//         let Texto = document.createElement("p");

//         let TaxaCompatibilidade = CalculoCompatibilidade(HabilidadesCompativeis.length, RequisitosVaga.length);

//         Texto.textContent = `
//         Esta é a sua porcentagem de compatibilidade com a vaga atual: ${TaxaCompatibilidade}%
//         ${HabilidadesFaltantes.length == 0 ? "" : "| Habilidades faltantes:" + HabilidadesFaltantes}
//         | Nível de compatibilidade: ${ClassificarCompatibilidade(TaxaCompatibilidade)}
//         `;

//         controlador++;

//         CardAtual.appendChild(Texto);

//         return TaxaCompatibilidade
//     });

//     CriarContadorAnalises.InformacoesAnalise();
// }

// export async function IdentificaMaiorCompatibilidade(candidato, vagas, controlador) {

//     console.log(`Função "IdentificaMaiorCompatibilidade"`);

//     let MaiorCompatibilidade = 75;

//     vagas.forEach(vaga => {

//         let RecomendacaoMelhorVaga = document.getElementById(controlador);

//         let HabilidadesCandidato = candidato.GetHabilidades();
//         let RequisitosVaga = vaga.GetRequisitos();

//         let HabilidadesCompativeis = HabilidadesCandidato.filter(habilidade => RequisitosVaga.includes(habilidade));

//         const RequisitosAtendidos = HabilidadesCompativeis.length;
//         const TotalRequisitos = RequisitosVaga.length;

//         let CompatibilidadeCandidato = CalculoCompatibilidade(RequisitosAtendidos, TotalRequisitos);

//         if (CompatibilidadeCandidato === 100) {

//             RecomendacaoMelhorVaga.classList.add("VagaCompTotal")

//         } else if (CompatibilidadeCandidato <= 99 && CompatibilidadeCandidato >= 80) {

//             RecomendacaoMelhorVaga.classList.add("VagaCompAlta")

//         } else if (CompatibilidadeCandidato <= 79 && CompatibilidadeCandidato >= 50) {

//             RecomendacaoMelhorVaga.classList.add("VagaCompMedia")

//         } else if (CompatibilidadeCandidato <= 49 && CompatibilidadeCandidato >= 1) {

//             RecomendacaoMelhorVaga.classList.add("VagaCompBaixa")

//         } else if (CompatibilidadeCandidato === 0) {

//             RecomendacaoMelhorVaga.classList.add("VagaCompNula")

//         }

//         controlador++;
//     });
// }

// export async function RecomendacaoEstudos (candidato, vagas) {

//     let RequisitosUrgentes = {};

//     let MenorCompatibilidade = 101;

//     let Texto = document.createElement("p");

//     Texto.classList.add("Texto-vermelho");

//     vagas.forEach(vaga => {

//         let HabilidadesCandidato = candidato.GetHabilidades();
//         let RequisitosVaga = vaga.GetRequisitos();

//         let HabilidadesCompativeis = HabilidadesCandidato.filter(habilidade => RequisitosVaga.includes(habilidade));
//         let HabilidadesIncompativeisVaga = RequisitosVaga.filter(requisito => HabilidadesCandidato.includes(requisito) === false);

//         const RequisitosAtendidos = HabilidadesCompativeis.length;
//         const TotalRequisitos = RequisitosVaga.length;

//         let CompatibilidadeCandidato = CalculoCompatibilidade(RequisitosAtendidos, TotalRequisitos);

//         if (CompatibilidadeCandidato < MenorCompatibilidade) {
//             MenorCompatibilidade = CompatibilidadeCandidato;

//             RequisitosUrgentes = HabilidadesIncompativeisVaga;

//             Texto.textContent = `
//             Prioridades de estudo: ${RequisitosUrgentes}
//             `;
//         }
//     })

//     Footer.appendChild(Texto);
// };
