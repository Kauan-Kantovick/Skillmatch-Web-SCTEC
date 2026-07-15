/*
1 - Definicao das classes (POO, metodos, heranca)
2 - A utiizacao das classes e demais instâncias
3 - Fluxo do sistema
    3.1 - Capturar as vagas cadastradas (10 vagas) - async/await/fetch
    3.2 - Contador de análises
    3.3 - Filtrar as vagas que são para que aquele usuario (tempo de experiencia - 3 vagas)
    3.4 - Calcular a compatibilidade de cada vaga filtrada para aquele usuario
    3.5 - Classifica essa compatibilidade
    3.6 - Faz e exibe o cálulo de compatibilidade com a vaga escolhida
    3.7 - Destaca a melhor dentre as filtradas
    3.8 - Recomendação de estudos das habilidades faltantes da pior vaga
    3.9 - Callback e total de análises
*/
//==============================CLASSE-CANDIDATO=========================================
class Candidato {
    constructor(nome, area, estiloTrabalho, habilidades, tempoExperiencia) {
        this.nome = nome;
        this.area = area;
        this.estiloTrabalho = estiloTrabalho;
        this.habilidades = habilidades;
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

//==============================CLASSE-VAGAS=========================================

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
}

class VagaTecnologia extends Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modeloTrabalho, anosExperiencia = 0) {
        super(id, empresa, cargo, requisitos, salario, modeloTrabalho);
        this.anosExperiencia = anosExperiencia;
    };
    GetAnosExperiencia(){
        return this.anosExperiencia;
    };
}

//==============================UTILIZAÇÃO-CLASSES=========================================

// - Objetos de classe:

const Candidato_1 = new Candidato("Ana", "Front-End", "Híbrido", ["JavaScript", "GitHub", "Lógica de Programação"], 5);

// console.log(Candidato_1.GetNome(), Candidato_1.GetArea(), Candidato_1.GetEstiloTrabalho(), Candidato_1.GetHabilidades(), Candidato_1.GetTempoExperiencia());

const Vagas = [
    new VagaTecnologia(1, "TechStart", "Desenvolvedor Front-End Júnior", ["JavaScript", "GitHub", "Lógica de Programação", "Objetos"], 2800, "Remoto", 1),
    new VagaTecnologia(2, "CodeLab", "Estágio em Front-End", ["JavaScript", "Kanban", "GitHub"], 1800, "Híbrido"),
    new VagaTecnologia(3, "WebSolutions", "Desenvolvedor JavaScript Júnior", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial", 2),
    new VagaTecnologia(4, "ABACATE", "Estágiario de POO", ["JavaScript", "Objetos", "Lógica de Programação"], 2200, "Híbrido", 3),
    new VagaTecnologia(5, "DevSphere", "Desenvolvedor Back-End Júnior", ["Node.js", "JavaScript", "APIs", "GitHub"], 3400, "Remoto", 1),
    new VagaTecnologia(6, "CloudTech", "Desenvolvedor Full Stack Júnior", ["JavaScript", "HTML", "CSS", "Node.js", "GitHub"], 3800, "Híbrido", 2),
    new VagaTecnologia(7, "SoftVision", "Estágio em Desenvolvimento Web", ["HTML", "CSS", "JavaScript", "Lógica de Programação"], 1700, "Presencial"),
    new VagaTecnologia(8, "DataFlow", "Desenvolvedor Back-End", ["Node.js", "MySQL", "APIs", "GitHub"], 4200, "Remoto", 3),
    new VagaTecnologia(9, "NextCode", "Desenvolvedor Front-End Pleno", ["JavaScript", "HTML", "CSS", "React", "Git"], 5000, "Híbrido", 4),
    new VagaTecnologia(10, "InovaTech", "Desenvolvedor JavaScript", ["JavaScript", "Funções", "Arrays", "Objetos", "GitHub"], 3200, "Presencial", 2)
];

// console.log(Vagas[0].GetId(), Vagas[0].GetEmpresa(), Vagas[0].GetCargo(), Vagas[0].GetRequisitos(), Vagas[0].GetSalario(), Vagas[0].GetModeloTrabalho(), Vagas[0].GetAnosExperiencia());

// - Instâncias:

const IndiceVaga = 0;

const VagaSelecionada = Vagas[IndiceVaga];

// console.log(VagaSelecionada);

const HabilidadesCandidato = Candidato_1.GetHabilidades();

// console.log(HabilidadesCandidato);

const RequisitosVaga = VagaSelecionada.GetRequisitos();

// console.log(RequisitosVaga);

const HabilidadesCompativeis = HabilidadesCandidato.filter(habilidade => RequisitosVaga.includes(habilidade));

// console.log(HabilidadesCompativeis);

const HabilidadesFaltantes = RequisitosVaga.filter(requisito => HabilidadesCandidato.includes(requisito) === false);

// console.log(HabilidadesFaltantes);

// - Formatação

const HabilidadesCompativeisFormatadas = HabilidadesCompativeis.map(habilidade => ` ${habilidade}`);

// console.log(HabilidadesCompativeisFormatadas);

const HabilidadesFaltantesFormatadas = HabilidadesFaltantes.map(habilidade => `    -${habilidade}`);

// console.log(HabilidadesFaltantesFormatadas);

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

// CriarContadorAnalises.ContarAnalise();

// CriarContadorAnalises.InformacoesAnalise();

//==============================CÁLCULO-E-MENSAGEM-DE-COMPATIBILIDADE=====================================

const RequisitosAtendidos = HabilidadesCompativeis.length;

// console.log(RequisitosAtendidos);

const TotalRequisitos = RequisitosVaga.length;

// console.log(TotalRequisitos);

const CalcularCompatibilidade = (valorA, valorB) => Math.round((valorA / valorB) * 100);

// console.log(CalcularCompatibilidade(50, 100));

const TaxaCompatibilidade = CalcularCompatibilidade(RequisitosAtendidos, TotalRequisitos);

// console.log(TaxaCompatibilidade);

const MensagemCompatibilidade = `
=================== MENSAGEM DE COMPATIBILIDADE ====================
    empresa: ${VagaSelecionada.GetEmpresa()}
    cargo: ${VagaSelecionada.GetCargo()}
    Compatibilidade: ${TaxaCompatibilidade}%
    Habilidades Compatíveis:${HabilidadesCompativeisFormatadas}
    Habilidades Faltantes: ${("\n") + HabilidadesFaltantesFormatadas.join("\n")}
`;

// console.log(MensagemCompatibilidade);

const VerificarMensagem = (TaxaCompatibilidade, CriarContadorAnalises, MensagemCompatibilidade) => {
    if (TaxaCompatibilidade >= 0 && TaxaCompatibilidade <= 100){
        CriarContadorAnalises.ContarAnalise();
        return console.log(MensagemCompatibilidade);
    } else {
        console.log(`ERRO`);
    }
}

VerificarMensagem(TaxaCompatibilidade, CriarContadorAnalises, MensagemCompatibilidade);

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

//console.log(VerificacaoCompatibilidade);

function ExibicaoCompatibilidade(VerificacaoCompatibilidade, Candidato_1, VagaSelecionada) {
    if (Candidato_1.GetTempoExperiencia() >= VagaSelecionada.GetAnosExperiencia()) {
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

ExibicaoCompatibilidade(VerificacaoCompatibilidade, Candidato_1, VagaSelecionada);

//==============================RECOMENDAÇÃO-DE-ESTUDOS=========================================

const RecomendacaoEstudos = `
=================== RECOMENDAÇÃO DE ESTUDOS ====================
    Priorize os estudos em: ${("\n") + HabilidadesFaltantesFormatadas.join("\n")} 
`;

console.log(RecomendacaoEstudos);

//==============================MELHOR-VAGA==================================================

const MelhorVaga = (Candidato, Vagas) => {
    let MelhorVaga = {};
    let MaiorCompatibilidade = -1;
    for (const Vaga of Vagas) {

        CriarContadorAnalises.ContarAnalise();

        const Compatibilidade = CalcularCompatibilidade(RequisitosAtendidos, TotalRequisitos);

        if (Compatibilidade > MaiorCompatibilidade) {
            MaiorCompatibilidade = Compatibilidade;

            MelhorVaga = {
                Vaga,
                Compatibilidade,
                HabilidadesCompativeis,
                HabilidadesFaltantes
            };

        }
    }
    return MelhorVaga;
};

const Recomendacao = MelhorVaga(Candidato_1, Vagas);

// console.log(Recomendacao);

console.log(`
================= MELHOR VAGA =================

empresa: ${Recomendacao.Vaga.GetEmpresa()}
cargo: ${Recomendacao.Vaga.GetCargo()}
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
const NomeCandidato = Candidato_1.GetNome();

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