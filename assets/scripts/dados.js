import { VagaTecnologia } from "./motor.js";

export async function BuscarVagas() {

    console.log("Carregando vagas…");

    try {

        const Resposta = await fetch("./assets/data/vagas.json");

        if (!Resposta.ok) {

            throw new Error("Erro ao carregar as vagas.");

        }

        const VagasJson = await Resposta.json();

        if (VagasJson.length === 0) {
            console.log("Nenhuma vaga encontrada.");
            return [];
        }

        if (!Array.isArray(VagasJson)) {
            throw new Error("Formato inválido.");
        }

        console.log("Vagas encontradas com sucesso!");

        const Vagas = VagasJson.map(vaga =>
            new VagaTecnologia(
                vaga.id,
                vaga.empresa,
                vaga.cargo,
                vaga.requisitos,
                vaga.salario,
                vaga.modalidade,
                vaga.anosExperiencia
            )
        );

        return Vagas;

    } catch (erro) {

        console.error("Erro:", erro.message);

    }
}