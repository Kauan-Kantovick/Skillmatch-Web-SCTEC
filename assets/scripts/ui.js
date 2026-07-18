console.log("Conexão com ui.js");

import {BuscarVagas} from "./dados.js";

export const Formulario = document.getElementById("FormCandidato");

export const Mensagem = document.getElementById("MensagemUsuário");

export const SessaoCards = document.getElementById("SessãoVagas");

const Vagas = await BuscarVagas();

export function Candidato() {
    Formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        console.log("Formulário enviado!");

        const candidato = {
            nome: document.getElementById('CampoNome').value,
            area: document.getElementById('CampoArea').value,
            habilidades: document.getElementById('CampoHabilidades').value,
            anosExperiencia: document.getElementById('CampoAnos').value
        };

        function Validacao() {
            // candidato.nome.length <= 2 && candidato.nome.length >= 30 ?
            //     alert("Nome inválido! Nome muito extenso/pequeno.")
            //     : console.log(candidato.nome);

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

            console.log("Formulário validado com sucesso!");

            Mensagem.textContent = "Cadastro realizado com sucesso!";
            Mensagem.classList.add('Texto-verde');
            Mensagem.classList.remove('Texto-vermelho');
        }

        Validacao();

        // function MostrarCandidato(candidato) {
        //     let texto = document.createElement("p");

        //     texto.textContent = `${candidato.nome}`;

        //     let caixa = document.getElementById("container");
        //     caixa.appendChild(texto);
        // }

        // MostrarCandidato(candidato);
    });
};

// async function exibirArray() {
//     console.log(Vagas);
//     console.log(Vagas[0]);
//     console.log(Vagas[0].id);
// }

// exibirArray();

export async function CriarCardsVaga () {
    Vagas.forEach(Vaga => {
        let Card = document.createElement("div");
        let Texto = document.createElement("p");

        Card.classList.add("Card");
        Texto.classList.add("Texto");

        Texto.textContent = `
            Id: ${Vaga.id} 
            empresa: ${Vaga.empresa}
            cargo: ${Vaga.cargo}
            requisitos: ${Vaga.requisitos}
            salario: ${Vaga.salario}
            modeloTrabalho: ${Vaga.modeloTrabalho}
            anosExperiencia: ${Vaga.anosExperiencia}
        `;

        SessaoCards.appendChild(Card);
        Card.appendChild(Texto);
    });
}

CriarCardsVaga();

// CriarCardsVaga();

    // for (const Vaga of Vagas) {
    //     console.log(Vaga.empresa);
    // }


// {
//     "id": 1,
//     "empresa": "TechStart",
//     "cargo": "Desenvolvedor Front-End Júnior",
//     "requisitos": [
//       "JavaScript",
//       "GitHub",
//       "Lógica de Programação"
//     ],
//     "salario": 2800,
//     "modeloTrabalho": "Remoto",
//     "anosExperiencia": 1
//   },
