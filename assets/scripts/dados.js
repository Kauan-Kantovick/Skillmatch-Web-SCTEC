//==============================BUSCAR-VAGAS=========================================

// - Importações

import { ClasseVagaTecnologia } from "./main.js";
import { HTMLSessaoCards } from "./main.js";
import { HTMLMensagem } from "./main.js";

// - Função BuscarVagas

export async function BuscarVagas() {

    console.log("Carregando vagas…");

    try {

        const Resposta = await fetch("/assets/data/vagas.json");

        if (!Resposta.ok) {
            HTMLMensagem.textContent = "Erro ao carregar as vagas.";
            HTMLMensagem.classList.remove("Texto-verde");
            HTMLMensagem.classList.add("Texto-vermelho")
            HTMLSessaoCards.appendChild(HTMLMensagem);
            throw new Error("Erro ao carregar as vagas.");
        }

        const VagasJson = await Resposta.json();

        if (VagasJson.length === 0) {
            HTMLMensagem.textContent = "Nenhuma vaga encontrada.";
            HTMLMensagem.classList.remove("Texto-verde");
            HTMLMensagem.classList.add("Texto-vermelho")
            HTMLSessaoCards.appendChild(HTMLMensagem);
            return [];
        }

        if (!Array.isArray(VagasJson)) {
            HTMLMensagem.textContent = "Arquivo json em formato inválido.";
            HTMLMensagem.classList.remove("Texto-verde");
            HTMLMensagem.classList.add("Texto-vermelho")
            HTMLSessaoCards.appendChild(HTMLMensagem);
            throw new Error("Arquivo json em formato inválido.");
        }

        console.log("Vagas encontradas com sucesso!");

        HTMLMensagem.textContent = "Vagas encontradas com sucesso!";
        HTMLMensagem.classList.remove("Texto-vermelho");
        HTMLMensagem.classList.add("Texto-verde")
        HTMLSessaoCards.appendChild(HTMLMensagem);

        const Vagas = VagasJson.map(vaga =>
            new ClasseVagaTecnologia(
                vaga.id,
                vaga.empresa,
                vaga.cargo,
                vaga.requisitos,
                vaga.salario,
                vaga.modeloTrabalho,
                vaga.anosExperiencia
            )
        );

    return Vagas;

    } catch (erro) {
        console.error("Erro:", erro.message);
        HTMLMensagem.textContent = "Erro: consulte o console para mais informações";
        HTMLMensagem.classList.remove("Texto-verde");
        HTMLMensagem.classList.add("Texto-vermelho");
        HTMLSessaoCards.appendChild(HTMLMensagem);
    }
}

BuscarVagas();