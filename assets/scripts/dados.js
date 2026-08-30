//==============================CLASSE-Candidato=========================================

export class Candidato {
    constructor(nome, area, habilidades, estiloTrabalho, tempoExperiencia) {
        this.nome = nome;
        this.area = area;
        this.habilidades = habilidades;
        this.estiloTrabalho = estiloTrabalho;
        this.tempoExperiencia = tempoExperiencia;
    };
    GetNome(){
        return this.nome;
    };
    GetArea(){
        return this.area;
    };
    GetEstiloTrabalho(){
        return this.estiloTrabalho;
    };
    GetHabilidades(){
        return this.habilidades;
    };
    GetTempoExperiencia(){
        return this.tempoExperiencia;
    };
}

//==============================CLASSE-Vaga=========================================

class Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modeloTrabalho) {
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modeloTrabalho = modeloTrabalho;
    };
    GetId() {
        return this.id;
    };
    GetEmpresa() {
        return this.empresa;
    };
    GetCargo() {
        return this.cargo;
    };
    GetRequisitos() {
        return this.requisitos;
    };
    GetSalario() {
        return this.salario;
    };
    GetModeloTrabalho() {
        return this.modeloTrabalho;
    };
    ApresentacaoVaga() {
        return `A empresa ${this.empresa} está contratando para o cargo de ${this.cargo} (ID: ${this.id}). Procuramos profissionais com os requisitos: ${this.requisitos}. Oferecemos salário de ${this.salario} e modelo de trabalho ${this.modeloTrabalho}.`;
    }
}

//==============================CLASSE-VagaTecnologia=========================================

export class VagaTecnologia extends Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modeloTrabalho, anosExperiencia = 0) {
        super(id, empresa, cargo, requisitos, salario, modeloTrabalho);
        this.anosExperiencia = anosExperiencia;
    };
    GetAnosExperiencia(){
        return this.anosExperiencia;
    };
    ApresentacaoVaga() {
        return `A empresa ${this.empresa} está contratando para o cargo de ${this.cargo} (ID: ${this.id}). É necessário possuir ${this.anosExperiencia} de experiência e conhecimentos em ${this.requisitos}. Oferecemos salário de ${this.salario} e modelo de trabalho ${this.modeloTrabalho}.`;
    }
}

//==============================BuscarVagas=========================================

export async function BuscarVagas() {

    console.log("Carregando vagas…");

    try {

        const Resposta = await fetch("/assets/data/vagas.json");

        if (!Resposta.ok) {
            const MensagemErro = `Erro ao carregar as vagas`;
            console.log(MensagemErro);
            return MensagemErro;
        }

        const VagasJson = await Resposta.json();

        if (VagasJson.length === 0) {
            const ErroVazio = `Array Vazio`;
            console.log(ErroVazio);
            return ErroVazio;
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
