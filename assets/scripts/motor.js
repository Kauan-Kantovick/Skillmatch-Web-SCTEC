//==============================CLASSE-Candidato=========================================

class Candidato {
    constructor(nome, area, habilidades, modeloTrabalho, anosExperiencia) {
        this.nome = nome;
        this.area = area;
        this.habilidades = habilidades;
        this.modeloTrabalho = modeloTrabalho;
        this.anosExperiencia = anosExperiencia;
    };
    Apresentacao() {
        console.log(`
            Olá, meu nome é ${this.nome}, trabalho na área de ${this.area} com o modelo de trabalho ${this.modeloTrabalho}, minhas habilidades são ${this.habilidades} e tenho ${this.anosExperiencia} anos de experiência.`);
    };
}

const Candidato_1 = new Candidato("Ana", "Front-End", ["JavaScript", "GitHub", "Lógica de Programação"], "Híbrido", 3);

Candidato_1.Apresentacao();

//==============================CLASSE-VAGAS=========================================

class Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modeloTrabalho) {
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modeloTrabalho = modeloTrabalho;
    }
}

class VagaTecnologia extends Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modeloTrabalho, anosExperiencia = 0) {
        super(id, empresa, cargo, requisitos, salario, modeloTrabalho);
        this.anosExperiencia = anosExperiencia;
    };
    Apresentacao() {
        console.log(`
            A empresa ${this.empresa} está buscando um candidato para o cargo de ${this.cargo}, com o modelo de trabalho ${this.modeloTrabalho} e salário na faixa de R$${this.salario}, são necessários as habilidades: ${this.requisitos} e com ${this.anosExperiencia} ano(s) de experiência na área.`);
    };
}

const Vagas = [
    new VagaTecnologia(1, "TechStart", "Desenvolvedor Front-End Júnior", ["JavaScript", "GitHub", "Lógica de Programação", "Objetos"], 2800, "Remoto", 1),
    new VagaTecnologia(2, "CodeLab", "Estágio em Front-End", ["JavaScript", "Kanban", "GitHub"], 1800, "Híbrido"),
    new VagaTecnologia(3, "WebSolutions", "Desenvolvedor JavaScript Júnior", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial", 2),
    new VagaTecnologia(4, "ABACATE", "Estágiario de POO", ["JavaScript", "Objetos", "Lógica de Programação"], 2200, "Híbrido", 3)
];

Vagas[3].Apresentacao();

//==============================VISUALIZAR-VAGAS=========================================

const VisualizarVagas = (Vagas) => {
    let i = 0;

    console.log(`
        =================== VAGAS DISPONÍVEIS ===================
    `);

    while (i < Vagas.length) {

        let Mensagem = `

            Índice da Vaga ${i}:
            ID: ${Vagas[i].id},
            EMPRESA: ${Vagas[i].empresa},
            CARGO: ${Vagas[i].cargo},
            REQUISITOS: ${Vagas[i].requisitos},
            SALÁRIO: ${Vagas[i].salario},
            MODELO DE TRABALHO: ${Vagas[i].modeloTrabalho},
            ANOS DE EXPERIÊNCIA: ${Vagas[i].anosExperiencia}.
        `;

        console.log(Mensagem);
        i++;
    }
}

VisualizarVagas(Vagas);

//==============================INSTÂNCIAS=========================================

//const prompt = require("prompt-sync")();

let VagaSelecionada = 0;
//prompt("Digite o ID da Vaga que deseja comparar com o perfil do Candidato: ");

const RequisitosVaga = Vagas[VagaSelecionada].requisitos;

const HabilidadesCandidato = Candidato_1.habilidades;

//==============================COMPARAÇÃO=========================================

const HabilidadesCompativeis = HabilidadesCandidato.filter(habilidade =>
    RequisitosVaga.includes(habilidade)
);

const HabilidadesFaltantes = RequisitosVaga.filter(requisito =>
    HabilidadesCandidato.includes(requisito) === false
);

//==============================FORMATAÇÃO=========================================

const HabilidadesCompativeisFormatadas = HabilidadesCompativeis.map(habilidade =>
    ` ${habilidade}`
);

const HabilidadesFaltantesFormatadas = HabilidadesFaltantes.map(habilidade =>
    `    -${habilidade}`
);

//==============================CONTADOR-DE-ANÁLISES==============================

const CriarContadorAnalises = (() => {
    let Contador = 0;

    return {
        ContarAnalise() {
            Contador++;
            return Contador;
        },

        InformacoesAnalise() {
            return console.log(`Total de análises: ${Contador}`);
        }
    }
})();

//==============================CÁLCULO-E-MENSAGEM-DE-COMPATIBILIDADE=====================================

const RequisitosAtendidos = HabilidadesCompativeis.length;

const TotalRequisitos = RequisitosVaga.length;

const CalcularCompatibilidade = (valorA, valorB) => Math.round((valorA / valorB) * 100);

const TaxaCompatibilidade = CalcularCompatibilidade(RequisitosAtendidos, TotalRequisitos);

const MensagemCompatibilidade = `
=================== MENSAGEM DE COMPATIBILIDADE ====================
    Empresa: ${Vagas[VagaSelecionada].empresa}
    Cargo: ${Vagas[VagaSelecionada].cargo}
    Compatibilidade: ${TaxaCompatibilidade}%
    Habilidades Compatíveis:${HabilidadesCompativeisFormatadas}
    Habilidades Faltantes: ${("\n") + HabilidadesFaltantesFormatadas.join("\n")}
`;

const verificarMensagem = (TaxaCompatibilidade, CriarContadorAnalises, MensagemCompatibilidade) => {
    if (TaxaCompatibilidade >= 0){
        CriarContadorAnalises.ContarAnalise();
        return console.log(MensagemCompatibilidade);
    } else {
        console.log(`ERRO`);
    }
}

verificarMensagem(TaxaCompatibilidade, CriarContadorAnalises, MensagemCompatibilidade);

//==============================CLASSIFICAÇÃO-DE-COMPATIBILIDADE============================

const ClassificarCompatibilidade = (TaxaCompatibilidade) => {
    if (TaxaCompatibilidade === 100) {
        let Total = `Compatibilidade Total`;
        return Total;
    } else if (TaxaCompatibilidade <= 99 && TaxaCompatibilidade >= 80) {
        let Alta = `Alta Compatibilidade`;
        return Alta;
    } else if (TaxaCompatibilidade <= 79 && TaxaCompatibilidade >= 50) {
        let Moderada = `Compatibilidade Moderada`;
        return Moderada;
    } else if (TaxaCompatibilidade <= 49 && TaxaCompatibilidade >= 1) {
        let Baixa = `Baixa Compatibilidade`;
        return Baixa;
    } else if (TaxaCompatibilidade === 0) {
        let Nenhuma = `Nenhuma Compatibilidade`;
        return Nenhuma;
    } else {
        let Erro = `Erro`;
        return Erro;
    }
}

const VerificacaoCompatibilidade = ClassificarCompatibilidade(TaxaCompatibilidade);

const ExibicaoCompatibilidade = `
=================== VERIFICAÇÃO DE COMPATIBILIDADE ====================
    ${VerificacaoCompatibilidade}
`;

console.log(ExibicaoCompatibilidade);

//==============================RECOMENDAÇÃO-DE-ESTUDOS=========================================

const RecomendacaoEstudos = `
=================== RECOMENDAÇÃO DE ESTUDOS ====================
    Priorize os estudos em: ${("\n") + HabilidadesFaltantesFormatadas.join("\n")} 
`;

console.log(RecomendacaoEstudos);
//==============================MELHOR-VAGA==================================================

const MelhorVaga = (Candidato, Vagas) => {
    let MelhorCompatibilidade = "";
    let MaiorCompatibilidade = -1;
    for (const Vaga of Vagas) {

        CriarContadorAnalises.ContarAnalise();

        const HabilidadesCompativeis = Candidato.habilidades.filter(habilidade => Vaga.requisitos.includes(habilidade));

        const Compatibilidade = CalcularCompatibilidade(HabilidadesCompativeis.length, Vaga.requisitos.length);

        if (Compatibilidade > MaiorCompatibilidade) {
            MaiorCompatibilidade = Compatibilidade;

            MelhorCompatibilidade = {
                Vaga,
                Compatibilidade,
                HabilidadesCompativeis,
                HabilidadesFaltantes: Vaga.requisitos.filter(requisito => !Candidato.habilidades.includes(requisito))
            };
        }
    }

    return MelhorCompatibilidade;
};

const Recomendacao = MelhorVaga(Candidato_1, Vagas);

console.log(`
================= MELHOR VAGA =================

Empresa: ${Recomendacao.Vaga.empresa}
Cargo: ${Recomendacao.Vaga.cargo}
Compatibilidade: ${Recomendacao.Compatibilidade}%
Classificação: ${ClassificarCompatibilidade(Recomendacao.Compatibilidade)}

Habilidades Compatíveis:
${Recomendacao.HabilidadesCompativeis.join("\n")}

Habilidades Faltantes:
${Recomendacao.HabilidadesFaltantes.join("\n")}

`);

CriarContadorAnalises.InformacoesAnalise();

//==============================CALLBACK==================================================

const AnaliseFinal = "Análise finalizada.";
const NomeCandidato = Candidato_1.nome;

function MensagemFinal(nome, analise) {
    console.log(`${nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`);
    console.log(analise);
}

function FinalizarAnalise(callback) {
    callback(NomeCandidato, AnaliseFinal);
}

FinalizarAnalise(MensagemFinal);

//==============================PROMISE-ASYNC/AWAIT==================================================

function SimulacaoBusca() {
    return new Promise((resolve, reject) => {

        console.log("Buscando Vagas...");

        setTimeout(() => {

            if (true) {
                resolve(Vagas.length);
            } else {
                reject("Nenhuma Vaga encontrada.");
            }
        }, 2000);
    });
}

async function IniciarBusca() {
    const VagasCarregadas = await SimulacaoBusca();
    console.log(`
        Vagas carregadas com sucesso!
        Total de ${VagasCarregadas} Vagas encontradas.
        `);
}

IniciarBusca();