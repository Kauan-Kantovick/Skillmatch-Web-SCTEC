//==============================CLASSE-Candidato=========================================

class Candidato {
    constructor(Nome, Area, EstiloTrabalho, Habilidades, TempoExperiencia) {
        this.Nome = Nome;
        this.Area = Area;
        this.EstiloTrabalho = EstiloTrabalho;
        this.Habilidades = Habilidades;
        this.TempoExperiencia = TempoExperiencia;
    };
    Apresentacao() {
        console.log(`
            Olá, meu nome é ${this.Nome}, trabalho na área de ${this.Area} com o modelo de trabalho ${this.EstiloTrabalho}, minhas Habilidades são ${this.Habilidades} e tenho ${this.TempoExperiencia} anos de experiência.`);
    };
}

const Candidato_1 = new Candidato("Ana", "Front-End", "Híbrido", ["JavaScript", "GitHub", "Lógica de Programação"]);

const {Nome, Area, EstiloTrabalho, Habilidades, TempoExperiencia} = Candidato_1;

Candidato_1.Apresentacao({Nome, Area, EstiloTrabalho, Habilidades, TempoExperiencia});

//==============================CLASSE-VAGAS=========================================

class Vaga {
    constructor(id, Empresa, Cargo, Requisitos, Salario, ModeloTrabalho) {
        this.id = id;
        this.Empresa = Empresa;
        this.Cargo = Cargo;
        this.Requisitos = Requisitos;
        this.Salario = Salario;
        this.ModeloTrabalho = ModeloTrabalho;
    }
}

class VagaTecnologia extends Vaga {
    constructor(Id, Empresa, Cargo, Requisitos, Salario, ModeloTrabalho, AnosExperiencia = 0) {
        super(Id, Empresa, Cargo, Requisitos, Salario, ModeloTrabalho);
        this.AnosExperiencia = AnosExperiencia;
    };
    Apresentacao() {
        console.log(`
            A empresa ${this.Empresa} está buscando um candidato para o Cargo de ${this.Cargo}, com o modelo de trabalho ${this.ModeloTrabalho} e salário na faixa de R$${this.Salario}, são necessários as Habilidades: ${this.Requisitos} e com ${this.AnosExperiencia} ano(s) de experiência na área.`);
    };
}


const Vagas = [
    new VagaTecnologia(1, "TechStart", "Desenvolvedor Front-End Júnior", ["JavaScript", "GitHub", "Lógica de Programação", "Objetos"], 2800, "Remoto", 1),
    new VagaTecnologia(2, "CodeLab", "Estágio em Front-End", ["JavaScript", "Kanban", "GitHub"], 1800, "Híbrido"),
    new VagaTecnologia(3, "WebSolutions", "Desenvolvedor JavaScript Júnior", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial", 2),
    new VagaTecnologia(4, "ABACATE", "Estágiario de POO", ["JavaScript", "Objetos", "Lógica de Programação"], 2200, "Híbrido", 3)
];

const {Id, Empresa, Cargo, Requisitos, Salario, ModeloTrabalho, AnosExperiencia} = Vagas[3];

Vagas[3].Apresentacao({Id, Empresa, Cargo, Requisitos, Salario, ModeloTrabalho, AnosExperiencia});

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
            EMPRESA: ${Vagas[i].Empresa},
            CARGO: ${Vagas[i].Cargo},
            REQUISITOS: ${Vagas[i].Requisitos},
            SALÁRIO: ${Vagas[i].Salario},
            MODELO DE TRABALHO: ${Vagas[i].ModeloTrabalho},
            ANOS DE EXPERIÊNCIA: ${Vagas[i].AnosExperiencia}.
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

//==============================COMPARAÇÃO=========================================

const HabilidadesCompativeis = Habilidades.filter(habilidade =>
    Requisitos.includes(habilidade)
);

const HabilidadesFaltantes = Requisitos.filter(requisito =>
    Habilidades.includes(requisito) === false
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

const TotalRequisitos = Requisitos.length;

const CalcularCompatibilidade = (valorA, valorB) => Math.round((valorA / valorB) * 100);

const TaxaCompatibilidade = CalcularCompatibilidade(RequisitosAtendidos, TotalRequisitos);

const MensagemCompatibilidade = `
=================== MENSAGEM DE COMPATIBILIDADE ====================
    Empresa: ${Vagas[VagaSelecionada].Empresa}
    Cargo: ${Vagas[VagaSelecionada].Cargo}
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

function ExibicaoCompatibilidade(VerificacaoCompatibilidade, TempoExperiencia, AnosExperiencia) {
    if (TempoExperiencia >= AnosExperiencia) {
        console.log(`
=================== VERIFICAÇÃO DE COMPATIBILIDADE ====================
    ${VerificacaoCompatibilidade}
`);
    } else {
        console.log(`A vaga a seguir não é compativel com o nível de experiência que o usuário possui, procure outra vaga!
            `);
        return process.exit(1);
    };
}

ExibicaoCompatibilidade(VerificacaoCompatibilidade, TempoExperiencia, AnosExperiencia);

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

        const HabilidadesCompativeis = Candidato.Habilidades.filter(habilidade => Vaga.Requisitos.includes(habilidade));

        const Compatibilidade = CalcularCompatibilidade(HabilidadesCompativeis.length, Vaga.Requisitos.length);

        if (Compatibilidade > MaiorCompatibilidade) {
            MaiorCompatibilidade = Compatibilidade;

            MelhorCompatibilidade = {
                Vaga,
                Compatibilidade,
                HabilidadesCompativeis,
                HabilidadesFaltantes: Vaga.Requisitos.filter(requisito => !Candidato.Habilidades.includes(requisito))
            };
        }
    }

    return MelhorCompatibilidade;
};

const Recomendacao = MelhorVaga(Candidato_1, Vagas);

console.log(`
================= MELHOR VAGA =================

Empresa: ${Recomendacao.Vaga.Empresa}
Cargo: ${Recomendacao.Vaga.Cargo}
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
const NomeCandidato = Candidato_1.Nome;

function MensagemFinal(Nome, analise) {
    console.log(`${Nome}, revise suas Habilidades faltantes e atualize seu plano de estudos.`);
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