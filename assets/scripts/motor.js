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
    },
  };
})();

//==============================UTILIZAÇÃO-CLASSES=========================================

// - Função CalcularCompatibilidade

export const CalculoCompatibilidade = (valorA, valorB) =>
  Math.round((valorA / valorB) * 100);

export const ClassificarCompatibilidade = (arrayCompatibilidade) => {
  let arrayResposta = [];

  arrayCompatibilidade.forEach((TaxaCompatibilidade, index) => {
    if (TaxaCompatibilidade.resultado === 100) {
      let Total = `Total`;
      arrayResposta.push({
        id: index,
        classificacao: Total,
      });
    } else if (
      TaxaCompatibilidade.resultado <= 99 &&
      TaxaCompatibilidade.resultado >= 80
    ) {
      let Alta = `Alto`;
      arrayResposta.push({
        id: index,
        classificacao: Alta,
      });
    } else if (
      TaxaCompatibilidade.resultado <= 79 &&
      TaxaCompatibilidade.resultado >= 50
    ) {
      let Moderada = `Moderado`;
      arrayResposta.push({
        id: index,
        classificacao: Moderada,
      });
    } else if (
      TaxaCompatibilidade.resultado <= 49 &&
      TaxaCompatibilidade.resultado >= 1
    ) {
      let Baixa = `Baixo`;
      arrayResposta.push({
        id: index,
        classificacao: Baixa,
      });
    } else if (TaxaCompatibilidade.resultado === 0) {
      let Nenhuma = `Nenhum`;
      arrayResposta.push({
        id: index,
        classificacao: Nenhuma,
      });
    } else {
      let Erro = `Erro`;
      return Erro;
    }
  });
  // console.log(arrayResposta);

  return arrayResposta;
};

export function MostrarCalculoComparacao(candidato, vagas) {
  const ResultadosCompatibilidade = [];

  vagas.forEach((vaga, index) => {
    CriarContadorAnalises.ContarAnalise();

    let HabilidadesCandidato = candidato.habilidades;
    let RequisitosVaga = vaga.GetRequisitos();

    let HabilidadesCompativeis = HabilidadesCandidato.filter((habilidade) =>
      RequisitosVaga.includes(habilidade),
    );

    let HabilidadesIncompativeisVaga = RequisitosVaga.filter(
      (requisito) => HabilidadesCandidato.includes(requisito) === false,
    );

    const RequisitosAtendidos = HabilidadesCompativeis.length;
    const TotalRequisitos = RequisitosVaga.length;

    let TaxaCompatibilidade = CalculoCompatibilidade(
      RequisitosAtendidos,
      TotalRequisitos,
    );

    ResultadosCompatibilidade.push({
      id: index,
      resultado: TaxaCompatibilidade,
      RecomendacaoEstudos: HabilidadesIncompativeisVaga,
    });
  });

  CriarContadorAnalises.InformacoesAnalise();

  return ResultadosCompatibilidade;
}

export function SalvarCandidato(dadosCandidato) {
  let CandidatoSalvo = {
    nome: dadosCandidato.nome,
    area: dadosCandidato.area,
    habilidades: dadosCandidato.habilidades,
  };

  localStorage.setItem("Usuário", JSON.stringify(CandidatoSalvo));
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