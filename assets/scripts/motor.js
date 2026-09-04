//==============================CONTADOR-DE-ANÁLISES==============================

export const CriarContadorAnalises = (() => {
  let contador = 0;

  return {
    ContarAnalise() {
      contador++;
      return contador;
    },

    InformacoesAnalise() {
      return console.log(`total de vagas analisadas: ${contador}`);
    },
  };
})();

//==============================UTILIZAÇÃO-CLASSES=========================================

// - Função CalcularCompatibilidade

export const CalculoCompatibilidade = (valorA, valorB) =>
  Math.round((valorA / valorB) * 100);

export const ClassificarCompatibilidade = (arrayCompatibilidade) => {
  let arrayResposta = [];

  arrayCompatibilidade.forEach((taxaCompatibilidade, index) => {
    if (taxaCompatibilidade.resultado === 100) {
      let total = `Total`;
      arrayResposta.push({
        id: index,
        classificacao: total,
      });
    } else if (
      taxaCompatibilidade.resultado <= 99 &&
      taxaCompatibilidade.resultado >= 80
    ) {
      let alta = `Alto`;
      arrayResposta.push({
        id: index,
        classificacao: alta,
      });
    } else if (
      taxaCompatibilidade.resultado <= 79 &&
      taxaCompatibilidade.resultado >= 50
    ) {
      let moderada = `Moderado`;
      arrayResposta.push({
        id: index,
        classificacao: moderada,
      });
    } else if (
      taxaCompatibilidade.resultado <= 49 &&
      taxaCompatibilidade.resultado >= 1
    ) {
      let baixa = `Baixo`;
      arrayResposta.push({
        id: index,
        classificacao: baixa,
      });
    } else if (taxaCompatibilidade.resultado === 0) {
      let nenhuma = `Nenhum`;
      arrayResposta.push({
        id: index,
        classificacao: nenhuma,
      });
    } else { 
      let erro = `Erro`;
      return erro;
    }
  });

  return arrayResposta;
};

export function MostrarCalculoComparacao(candidato, vagas) {
  const resultadosCompatibilidade = [];

  vagas.forEach((vaga, index) => {
    CriarContadorAnalises.ContarAnalise();

    let habilidadesCandidato = candidato.habilidades;
    let requisitosVaga = vaga.getRequisitos();

    let HabilidadesCompativeis = habilidadesCandidato.filter((habilidade) =>
      requisitosVaga.includes(habilidade),
    );

    let habilidadesIncompativeisVaga = requisitosVaga.filter(
      (requisito) => habilidadesCandidato.includes(requisito) === false,
    );

    const requisitosAtendidos = HabilidadesCompativeis.length;
    const totalRequisitos = requisitosVaga.length;

    let taxaCompatibilidade = CalculoCompatibilidade(
      requisitosAtendidos,
      totalRequisitos,
    );

    resultadosCompatibilidade.push({
      id: index,
      resultado: taxaCompatibilidade,
      recomendacaoEstudos: habilidadesIncompativeisVaga,
    });
  });

  CriarContadorAnalises.InformacoesAnalise();

  return resultadosCompatibilidade;
}

export function SalvarCandidato(dadosCandidato) {
  let candidatoSalvo = {
    nome: dadosCandidato.nome,
    area: dadosCandidato.area,
    habilidades: dadosCandidato.habilidades,
  };

  localStorage.setItem("usuario", JSON.stringify(candidatoSalvo));
}

export function LembraCandidato(candidato, vagas, funcao1, funcao2) {

  console.log("unucia funcao")

  if (candidato) {
    const resultadoCalculoSalvo = funcao1(candidato, vagas);
    const resultadoClassificacaoSalvo = funcao2(resultadoCalculoSalvo);
    return resultadoClassificacaoSalvo, resultadoCalculoSalvo;
  }
}

// que funções diferentes vão ter que executar