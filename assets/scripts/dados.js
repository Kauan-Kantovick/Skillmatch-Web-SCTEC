//==============================CLASSE-Candidato=========================================

export class Candidato {
    constructor(nome, area, habilidades, estiloTrabalho, tempoExperiencia) {
        this.nome = nome;
        this.area = area;
        this.habilidades = habilidades;
        this.estiloTrabalho = estiloTrabalho;
        this.tempoExperiencia = tempoExperiencia;
    };
    getNome(){
        return this.nome;
    };
    getArea(){
        return this.area;
    };
    getEstiloTrabalho(){
        return this.estiloTrabalho;
    };
    getHabilidades(){
        return this.habilidades;
    };
    getTempoExperiencia(){
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
    getId() {
        return this.id;
    };
    getEmpresa() {
        return this.empresa;
    };
    getCargo() {
        return this.cargo;
    };
    getRequisitos() {
        return this.requisitos;
    };
    getSalario() {
        return this.salario;
    };
    getModeloTrabalho() {
        return this.modeloTrabalho;
    };
    apresentacaoVaga() {
        return `A empresa ${this.empresa} está contratando para o cargo de ${this.cargo} (ID: ${this.id}). Procuramos profissionais com os requisitos: ${this.requisitos}. Oferecemos salário de ${this.salario} e modelo de trabalho ${this.modeloTrabalho}.`;
    }
}

//==============================CLASSE-VagaTecnologia=========================================

export class VagaTecnologia extends Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modeloTrabalho, anosExperiencia = 0) {
        super(id, empresa, cargo, requisitos, salario, modeloTrabalho);
        this.anosExperiencia = anosExperiencia;
    };
    getAnosExperiencia(){
        return this.anosExperiencia;
    };
    apresentacaoVaga() {
        return `A empresa ${this.empresa} está contratando para o cargo de ${this.cargo} (ID: ${this.id}). É necessário possuir ${this.anosExperiencia} de experiência e conhecimentos em ${this.requisitos}. Oferecemos salário de ${this.salario} e modelo de trabalho ${this.modeloTrabalho}.`;
    }
}

//==============================BuscarVagas=========================================

export async function BuscarVagas() {

    console.log("Carregando vagas…");

    try {

        const resposta = await fetch("/assets/data/vagas.json");

        if (!resposta.ok) {
            const mensagemErro = `Erro ao carregar as vagas`;
            console.log(mensagemErro);
            return mensagemErro;
        }

        const vagasJson = await resposta.json();

        if (vagasJson.length === 0) {
            const erroVazio = `Array Vazio`;
            console.log(erroVazio);
            return erroVazio;
        }

        console.log("Vagas encontradas com sucesso!");

        const vagas = vagasJson.map(vaga =>
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
