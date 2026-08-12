//==============================BUSCAR-VAGAS=========================================

// - Importações

import { VagaTecnologia } from "./motor.js";

import { ExibirMensagemErro } from "./ui.js";

// - Função BuscarVagas

export async function BuscarVagas() {

    console.log("Carregando vagas…");

    try {

        const Resposta = await fetch("/assets/data/vagas.json");;

        if (!Resposta.ok) {
            ExibirMensagemErro(
                "Erro ao carregar as vagas.",
                "Texto-vermelho"
            );
        }

        const VagasJson = await Resposta.json();

        if (VagasJson.length === 0) {
            ExibirMensagemErro(
                "Nenhuma vaga encontrada.",
                "Texto-vermelho"
            );
        }

        if (!Array.isArray(VagasJson)) {
            ExibirMensagemErro(
                "Arquivo json em formato inválido.",
                "Texto-vermelho"
            );
        }

        console.log("Vagas encontradas com sucesso!");

        const Vagas = VagasJson.map(Vaga =>
            new VagaTecnologia(
                Vaga.id,
                Vaga.empresa,
                Vaga.cargo,
                Vaga.requisitos,
                Vaga.salario,
                Vaga.modeloTrabalho,
                Vaga.anosExperiencia
            )
        );

        return Vagas;

    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}
