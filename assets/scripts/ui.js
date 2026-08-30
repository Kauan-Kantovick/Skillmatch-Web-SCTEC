//==============================CANDIDATO-FORMULÁRIO=========================================

// - Exportações

export const Formulario = document.getElementById("FormCandidato");

export const Mensagem = document.getElementById("MensagemUsuario");

export const MensagemJson = document.getElementById("MensagemJson");

export const SessaoCards = document.getElementById("SessaoVagas");

export const Footer = document.getElementById("RodaPe");

// - Função CandidatoFormulario

export function CandidatoFormulario(callback, classeSelecionada) {
  Formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    console.log("Formulário enviado!");

    const habilidadesMarcadas = document.querySelectorAll(
      'input[name="Habilidade"]:checked',
    );

    const candidato = {
      nome: document.getElementById("CampoNome").value,
      area: document.getElementById("CampoArea").value,
      habilidades: Array.from(habilidadesMarcadas).map(
        (checkbox) => checkbox.value,
      ),
      modeloTrabalho: document.getElementById("CampoModelo").value,
      anosExperiencia: document.getElementById("CampoAnos").value,
    };

    console.log("Validando formulário...");

    function Validacao() {
      if (candidato.nome.length <= 2) {
        Mensagem.textContent = `Nome: "${candidato.nome}" é muito pequeno(a), insira um nome maior.`;
        Mensagem.classList.add("Texto-vermelho");
        Mensagem.classList.remove("Texto-verde");
        return false;
      } else if (candidato.nome.length >= 31) {
        Mensagem.textContent = `Nome: "${candidato.nome}" é muito grande, insira um nome menor.`;
        Mensagem.classList.add("Texto-vermelho");
        Mensagem.classList.remove("Texto-verde");
        return false;
      }

      if (candidato.area.length <= 3) {
        Mensagem.textContent = `Área: "${candidato.area}" é muito pequeno(a), insira uma nome de área maior.`;
        Mensagem.classList.add("Texto-vermelho");
        Mensagem.classList.remove("Texto-verde");
        return false;
      } else if (candidato.area.length >= 31) {
        Mensagem.textContent = `Área: "${candidato.area}" é muito grande, insira um nome de área menor.`;
        Mensagem.classList.add("Texto-vermelho");
        Mensagem.classList.remove("Texto-verde");
        return false;
      }

      if (habilidadesMarcadas.length == 0) {
        Mensagem.textContent = `Escolha ao menos uma habilidade.`;
        Mensagem.classList.add("Texto-vermelho");
        Mensagem.classList.remove("Texto-verde");
        return false;
      }

      console.log("Formulário validado com sucesso!");

      Mensagem.textContent = "Cadastro realizado com sucesso!";
      Mensagem.classList.add("Texto-verde");
      Mensagem.classList.remove("Texto-vermelho");

      return true;
    }

    if (!Validacao()) {
      return;
    }

    const ObjetoCandidato = (perfilCandidato) => {
      return new classeSelecionada(
        perfilCandidato.nome,
        perfilCandidato.area,
        perfilCandidato.habilidades,
        perfilCandidato.modeloTrabalho,
        perfilCandidato.anosExperiencia
      );
    };

    callback(ObjetoCandidato(candidato));
  });
}

export function ExibirMensagemErro(mensagem, tema) {
    MensagemJson.textContent = mensagem;
    MensagemJson.classList.remove("Texto-verde", "Texto-vermelho");
    MensagemJson.classList.add(tema);
}

export async function CriarCardsVaga(vagas) {

    let i = 0;

    vagas.forEach(vaga => {
        let Card = document.createElement("div");
        let Texto = document.createElement("p");

        Card.classList.add("Card");
        Texto.classList.add("Texto");

        Texto.textContent = `
            Id: ${vaga.GetId()} |
            empresa: ${vaga.GetEmpresa()} |
            cargo: ${vaga.GetCargo()} |
            requisitos: ${vaga.GetRequisitos()} |
            salario: ${vaga.GetSalario()} |
            modeloTrabalho: ${vaga.GetModeloTrabalho()} |
            anosExperiencia: ${vaga.GetAnosExperiencia()}
        `;

        Texto.id = i;

        i++;

        SessaoCards.appendChild(Card);
        Card.appendChild(Texto);
    });
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
