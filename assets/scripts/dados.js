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
