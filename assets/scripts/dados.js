//==============================BUSCAR-VAGAS=========================================

// - Importações

import { VagaTecnologia } from "./motor.js";

// - Função BuscarVagas

export async function BuscarVagas() {

    console.log("Carregando vagas…");

    try {

        const Resposta = await fetch("/assets/data/vagas.json");;

        if (!Resposta.ok) {
            throw new Error("Erro ao carregar as vagas.");
        }

        const VagasJson = await Resposta.json();

        if (VagasJson.length === 0) {
            throw new Error("Nenhuma vaga encontrada.");
        }

        if (!Array.isArray(VagasJson)) {
            throw new Error("Arquivo json em formato inválido.");
        }

        console.log("Vagas encontradas com sucesso!");

        const vagas = VagasJson.map(vaga =>
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

    return vagas;

    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}
