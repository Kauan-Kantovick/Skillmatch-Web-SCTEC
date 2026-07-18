console.log("Conexão com dados.js");

import { VagaTecnologia } from "./motor.js";
import { SessaoCards } from "./ui.js";
import { Mensagem } from "./ui.js";

export async function BuscarVagas() {

    console.log("Carregando vagas…");

    try {

        const Resposta = await fetch("/assets/data/vagas.json");

        if (!Resposta.ok) {
            Mensagem.textContent = "Erro ao carregar as vagas.";
            Mensagem.classList.add("Texto-vermelho")
            SessaoCards.appendChild(Mensagem);
            throw new Error("Erro ao carregar as vagas.");
        }

        const VagasJson = await Resposta.json();

        if (VagasJson.length === 0) {
            console.log("Nenhuma vaga encontrada.");
            Mensagem.textContent = "Nenhuma vaga encontrada.";
            Mensagem.classList.add("Texto-vermelho")
            SessaoCards.appendChild(Mensagem);
            return [];
        }

        if (!Array.isArray(VagasJson)) {
            Mensagem.textContent = "Arquivo json em formato inválido.";
            Mensagem.classList.add("Texto-vermelho")
            SessaoCards.appendChild(Mensagem);
            throw new Error("Arquivo json em formato inválido.");
        }

        console.log("Vagas encontradas com sucesso!");

        Mensagem.textContent = "Vagas encontradas com sucesso!";
        Mensagem.classList.add("Texto-verde")
        SessaoCards.appendChild(Mensagem);

        const Vagas = VagasJson.map(vaga =>
            new VagaTecnologia(
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
        Mensagem.textContent = "Erro:", erro.message;
        Mensagem.classList.add("Texto-verde")
        SessaoCards.appendChild(Mensagem);
    }
}
BuscarVagas();