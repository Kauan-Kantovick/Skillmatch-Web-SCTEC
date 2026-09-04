//==============================CANDIDATO-FORMULÁRIO=========================================

// - Exportações

export const formulario = document.getElementById("formCandidato");

export const mensagem = document.getElementById("mensagemUsuario");

export const mensagemJson = document.getElementById("mensagemJson");

export const sessaoCards = document.getElementById("sessaoVagas");

export const footer = document.getElementById("rodape");

// - Função CandidatoFormulario

export function CandidatoFormulario(callback, classeSelecionada) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    console.log("Formulário enviado!");

    const habilidadesMarcadas = document.querySelectorAll(
      'input[name="habilidade"]:checked',
    );

    const candidato = {
      nome: document.getElementById("campoNome").value,
      area: document.getElementById("campoArea").value,
      habilidades: Array.from(habilidadesMarcadas).map(
        (checkbox) => checkbox.value,
      ),
      modeloTrabalho: document.getElementById("campoModelo").value,
      anosExperiencia: document.getElementById("campoAnos").value,
    };

    console.log("Validando formulário...");

    function Validacao() {
      if (candidato.nome.length <= 2) {
        mensagem.textContent = `Nome: "${candidato.nome}" é muito pequeno(a), insira um nome maior.`;
        mensagem.classList.add("texto-vermelho");
        mensagem.classList.remove("texto-verde");
        return false;
      } else if (candidato.nome.length >= 31) {
        mensagem.textContent = `Nome: "${candidato.nome}" é muito grande, insira um nome menor.`;
        mensagem.classList.add("texto-vermelho");
        mensagem.classList.remove("texto-verde");
        return false;
      }

      if (candidato.area.length <= 3) {
        mensagem.textContent = `Área: "${candidato.area}" é muito pequeno(a), insira uma nome de área maior.`;
        mensagem.classList.add("texto-vermelho");
        mensagem.classList.remove("texto-verde");
        return false;
      } else if (candidato.area.length >= 31) {
        mensagem.textContent = `Área: "${candidato.area}" é muito grande, insira um nome de área menor.`;
        mensagem.classList.add("texto-vermelho");
        mensagem.classList.remove("texto-verde");
        return false;
      }

      if (habilidadesMarcadas.length == 0) {
        mensagem.textContent = `Escolha ao menos uma habilidade.`;
        mensagem.classList.add("texto-vermelho");
        mensagem.classList.remove("texto-verde");
        return false;
      }

      console.log("Formulário validado com sucesso!");

      mensagem.textContent = "Cadastro realizado com sucesso!";
      mensagem.classList.add("texto-verde");
      mensagem.classList.remove("texto-vermelho");

      return true;
    }

    if (!Validacao()) {
      return;
    }

    const objetoCandidato = (perfilCandidato) => {
      return new classeSelecionada(
        perfilCandidato.nome,
        perfilCandidato.area,
        perfilCandidato.habilidades,
        perfilCandidato.modeloTrabalho,
        perfilCandidato.anosExperiencia,
      );
    };

    callback(objetoCandidato(candidato));
  });
}

export function ExibirMensagemErro(mensagem, tema) {
  mensagemJson.textContent = mensagem;
  mensagemJson.classList.remove("texto-verde", "texto-vermelho");
  mensagemJson.classList.add(tema);
}

export async function CriarCardsVaga(vagas) {
  let i = 0;

  vagas.forEach((vaga) => {
    let card = document.createElement("div");
    let texto = document.createElement("p");

    card.classList.add("card");
    texto.classList.add("texto");

    texto.textContent = `
            Id: ${vaga.getId()} |
            empresa: ${vaga.getEmpresa()} |
            cargo: ${vaga.getCargo()} |
            requisitos: ${vaga.getRequisitos()} |
            salario: ${vaga.getSalario()} |
            modeloTrabalho: ${vaga.getModeloTrabalho()} |
            anosExperiencia: ${vaga.getAnosExperiencia()}
        `;

    texto.id = i;

    i++;

    sessaoCards.appendChild(card);
    card.appendChild(texto);
  });
}

export function ExibeCalculoComparacao(arrayResposta) {
  arrayResposta.forEach((resposta) => {
    let CardAtual = document.getElementById(resposta.id);

    let texto = document.createElement("p");

    texto.textContent = `
  Esta é a sua porcentagem de compatibilidade com a vaga atual: ${resposta.resultado}%
  `;

    CardAtual.appendChild(texto);
  });
}

export function ExibeCalculoCompatibilidade(arrayResposta) {
  arrayResposta.forEach((resposta) => {
    let CardAtual = document.getElementById(resposta.id);

    let texto = document.createElement("span");

    texto.textContent = `
  Classificação de compatibilidade: ${resposta.classificacao}
  `;

    CardAtual.appendChild(texto);
  });
}

export function ExibeRecomendacaoEstudos(arrayResposta) {
  arrayResposta.forEach((resposta) => {

    let texto = document.createElement("p");

    texto.classList.add("texto-vermelho");

    texto.innerHTML = `
  ${resposta.recomendacaoEstudos == "" ? "" : `Recomendação de estudos, para a vaga com o index ${resposta.id} opte por estudar as seguintes tecnologias:
  ${resposta.recomendacaoEstudos}
  `}`;

    footer.appendChild(texto);
  });
}
