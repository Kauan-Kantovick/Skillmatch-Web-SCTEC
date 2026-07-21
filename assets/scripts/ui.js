//==============================CANDIDATO-FORMULÁRIO=========================================

// - Exportações

export const Formulario = document.getElementById("FormCandidato");

export const Mensagem = document.getElementById("MensagemUsuario");

export const MensagemJson = document.getElementById("MensagemJson");

export const SessaoCards = document.getElementById("SessaoVagas");

// - Importações e instâncias

import { BuscarVagas } from "./dados.js";

import { Candidato } from "./motor.js";

// - Função CandidatoFormulario

export function CandidatoFormulario(callback) {
    Formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        console.log("Formulário enviado!");

        const habilidadesMarcadas = document.querySelectorAll(
            'input[name="Habilidade"]:checked'
        );
        
        const candidato = {
            nome: document.getElementById('CampoNome').value,
            area: document.getElementById('CampoArea').value,
            habilidades: Array.from(habilidadesMarcadas).map((checkbox) => checkbox.value),
            modeloTrabalho: document.getElementById('CampoModelo').value,
            anosExperiencia: document.getElementById('CampoAnos').value
        };

        console.log(candidato);

        function Validacao() {

            if (candidato.nome.length <= 2) {
                Mensagem.textContent = `Nome: "${candidato.nome}" é muito pequeno(a), insira um nome maior.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return false;
            } else if (candidato.nome.length >= 31) {
                Mensagem.textContent = `Nome: "${candidato.nome}" é muito grande, insira um nome menor.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return false;
            }

            if (candidato.area.length <= 3) {
                Mensagem.textContent = `Área: "${candidato.area}" é muito pequeno(a), insira uma nome de área maior.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return false;
            } else if (candidato.area.length >= 31) {
                Mensagem.textContent = `Área: "${candidato.area}" é muito grande, insira um nome de área menor.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return false;
            }

            console.log("Formulário validado com sucesso!");

            Mensagem.textContent = "Cadastro realizado com sucesso!";
            Mensagem.classList.add('Texto-verde');
            Mensagem.classList.remove('Texto-vermelho');

            return true;

        }

        Validacao();

        const ObjetoCandidato = (candidato) =>
            new Candidato(
                candidato.nome,
                candidato.area,
                candidato.habilidades,
                candidato.modeloTrabalho,
                candidato.anosExperiencia
            );

        if (!Validacao()) {
            return false;
        }

        callback(ObjetoCandidato(candidato));
    });
};

// - Função ExibirMensagemErro

export function ExibirMensagemErro(mensagem, tema) {
    MensagemJson.textContent = mensagem;
    MensagemJson.classList.remove("Texto-verde", "Texto-vermelho");
    MensagemJson.classList.add(tema);
}

// - Função CriarCardsVaga

export const vagas = await BuscarVagas();

export async function CriarCardsVaga(vagas) {
    vagas.forEach(vaga => {
        let Card = document.createElement("div");
        let Texto = document.createElement("p");

        Card.classList.add("Card");
        Texto.classList.add("Texto");

        Texto.textContent = `
            Id: ${vaga.GetId()} 
            empresa: ${vaga.GetEmpresa()}
            cargo: ${vaga.GetCargo()}
            requisitos: ${vaga.GetRequisitos()}
            salario: ${vaga.GetSalario()}
            modeloTrabalho: ${vaga.GetModeloTrabalho()}
            anosExperiencia: ${vaga.GetAnosExperiencia()}
        `;

        SessaoCards.appendChild(Card);
        Card.appendChild(Texto);
    });
}

CriarCardsVaga(vagas);