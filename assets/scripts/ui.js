//==============================CANDIDATO-FORMULÁRIO=========================================

// - Exportações

export const Formulario = document.getElementById("FormCandidato");

export const Mensagem = document.getElementById("MensagemUsuário");

export const SessaoCards = document.getElementById("SessãoVagas");

// - Importações e instâncias

import {BuscarVagas} from "./dados.js";

import {ClasseCandidato} from "./main.js";

// - Função CandidatoFormulario

export function CandidatoFormulario(callback) {
    Formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        console.log("Formulário enviado!");

        const candidato = {
            nome: document.getElementById('CampoNome').value,
            area: document.getElementById('CampoArea').value,
            habilidades: document.getElementById('CampoHabilidades').value,
            modeloTrabalho: document.getElementById('CampoModelo').value,
            anosExperiencia: document.getElementById('CampoAnos').value
        };

        function Validacao() {

            if (candidato.nome.length <= 2) {
                Mensagem.textContent = `Nome: "${candidato.nome}" é muito pequeno(a), insira um nome maior.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return;
            } else if (candidato.nome.length >= 31) {
                Mensagem.textContent = `Nome: "${candidato.nome}" é muito grande, insira um nome menor.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return;
            } else {
                console.log(candidato.nome);
            }

            if (candidato.area.length <= 3) {
                Mensagem.textContent = `Área: "${candidato.area}" é muito pequeno(a), insira uma nome de área maior.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return;
            } else if (candidato.area.length >= 31) {
                Mensagem.textContent = `Área: "${candidato.area}" é muito grande, insira um nome de área menor.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return;
            } else {
                console.log(candidato.area);
            }

            if (candidato.habilidades.length <= 3) {
                Mensagem.textContent = `habilidade(s): "${candidato.habilidades}" é muito pequeno(a), insira uma habilidade maior ou mais habilidades.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return;
            } else if (candidato.habilidades.length >= 51) {
                Mensagem.textContent = `habilidade(s): "${candidato.habilidades}" é muito grande, insira uma habilidade menor ou menos habilidades.`;
                Mensagem.classList.add('Texto-vermelho');
                Mensagem.classList.remove('Texto-verde');
                return;
            } else {
                console.log(candidato.habilidades);
            }

            console.log(Number(candidato.anosExperiencia));
            console.log(candidato.modeloTrabalho);
            console.log("Formulário validado com sucesso!");

            Mensagem.textContent = "Cadastro realizado com sucesso!";
            Mensagem.classList.add('Texto-verde');
            Mensagem.classList.remove('Texto-vermelho');
        }

        Validacao();

        const ObjetoCandidato = (candidato) =>
        new ClasseCandidato (
            candidato.nome,
            candidato.area,
            candidato.habilidades,
            candidato.modeloTrabalho,
            candidato.anosExperiencia
        );

        callback(ObjetoCandidato(candidato));
    });
};

// - Função MostrarMensagem

export function MostrarMensagem(texto, tipo) {

    Mensagem.textContent = texto;

    Mensagem.classList.remove("Texto-verde", "Texto-vermelho");

    Mensagem.classList.add(
        tipo === "erro"
            ? "Texto-vermelho"
            : "Texto-verde"
    );
}

// - Função CriarCardsVaga

export const vagas = await BuscarVagas();

export async function CriarCardsVaga (vagas) {
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