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
        perfilCandidato.anosExperiencia,
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

  vagas.forEach((vaga) => {
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

export function ExibeCalculoComparacao(arrayResposta) {
  arrayResposta.forEach((resposta) => {
    let CardAtual = document.getElementById(resposta.id);

    let Texto = document.createElement("p");

    Texto.textContent = `
  Esta é a sua porcentagem de compatibilidade com a vaga atual: ${resposta.resultado}%
  `;

    CardAtual.appendChild(Texto);
  });
}

export function ExibeCalculoCompatibilidade(arrayResposta) {
  arrayResposta.forEach((resposta) => {
    let CardAtual = document.getElementById(resposta.id);

    let Texto = document.createElement("span");

    Texto.textContent = `
  Classificação de compatibilidade: ${resposta.classificacao}
  `;

    CardAtual.appendChild(Texto);
  });
}

export function ExibeRecomendacaoEstudos(arrayResposta) {
  arrayResposta.forEach((resposta) => {

    let Texto = document.createElement("p");

    Texto.classList.add("Texto-vermelho");

    Texto.innerHTML = `
  ${resposta.RecomendacaoEstudos == "" ? "" : `Recomendação de estudos, para a vaga com o index ${resposta.id} opte por estudar as seguintes tecnologias:
  ${resposta.RecomendacaoEstudos}
  `}`;

    Footer.appendChild(Texto);
  });
}
