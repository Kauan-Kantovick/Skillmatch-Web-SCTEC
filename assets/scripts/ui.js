//==============================CANDIDATO-FORMULÁRIO=========================================

// - Exportações

export const Formulario = document.getElementById("FormCandidato");

export const Mensagem = document.getElementById("MensagemUsuario");

export const MensagemJson = document.getElementById("MensagemJson");

export const SessaoCards = document.getElementById("SessaoVagas");

// - Importações e instâncias

import { BuscarVagas } from "./dados.js";

import { CalculoCompatibilidade, Candidato } from "./motor.js";

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

        console.log("Validando formulário...");
        
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

            if (habilidadesMarcadas.length == 0) {
                Mensagem.textContent = `Escolha ao menos uma habilidade.`;
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

        const ObjetoCandidato = (candidato) =>
            new Candidato(
                candidato.nome,
                candidato.area,
                candidato.habilidades,
                candidato.modeloTrabalho,
                candidato.anosExperiencia
            );

        if (!Validacao()) {
            return;
        }

        callback(ObjetoCandidato(candidato));
    });
};

// - Função ExibirMensagemErro

// executar o calculo após o ususario botar os seus dados no site

export function ExibirMensagemErro(mensagem, tema) {
    MensagemJson.textContent = mensagem;
    MensagemJson.classList.remove("Texto-verde", "Texto-vermelho");
    MensagemJson.classList.add(tema);
}

// - Função CriarCardsVaga

export const VagasJson = await BuscarVagas();

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

        // Compatibilidade: ${HabilidadesCandidato ? CalculoCompatibilidade(HabilidadesCompativeis.length, RequisitosVaga.length) : "ERRO NO CALCULO"}

        SessaoCards.appendChild(Card);
        Card.appendChild(Texto);
    });
}

CriarCardsVaga(VagasJson);

export async function MostrarCalculoComparacao(candidato, vagas, controlador) {

    console.log(`Função "MostrarCalculoComparacao"`);

    vagas.forEach(vaga => {        
   
        let HabilidadesCandidato = candidato.GetHabilidades();
        let RequisitosVaga = vaga.GetRequisitos();

        let HabilidadesCompativeis = HabilidadesCandidato.filter(habilidade => RequisitosVaga.includes(habilidade));
        let HabilidadesFaltantes = RequisitosVaga.filter(requisito => HabilidadesCandidato.includes(requisito) === false);

        const RequisitosAtendidos = HabilidadesCompativeis.length;
        const TotalRequisitos = RequisitosVaga.length;

        let CardAtual = document.getElementById(controlador);

        let Texto = document.createElement("p");     

        Texto.textContent = `
        Esta é a sua porcentagem de compatibilidade com a vaga atual: ${CalculoCompatibilidade(HabilidadesCompativeis.length, RequisitosVaga.length)}%
        ${HabilidadesFaltantes.length == 0 ? "" : "Essas são as habilidades que faltam para você alcançar 100% com a vaga:" + HabilidadesFaltantes } 
        `;

        controlador++;

        CardAtual.appendChild(Texto);
    });
}
