//==============================IMPORTAÇÕES-E-INSTÂNCIAS-EXTERNAS=========================================



//==============================CLASSE-CANDIDATO=========================================

export class Candidato {
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

// - Classe Vaga

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

// - Classe VagaTecnologia

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

//==============================UTILIZAÇÃO-CLASSES=========================================
// - Importações
/*
import { FuncaoCandidatoFormulario } from "./main.js";
import { BuscarVagas } from "./dados.js";

// - Instâncias externas

const Candidato_1 = FuncaoCandidatoFormulario();
const Vagas = await BuscarVagas();

// - Instâncias objetos

const IndiceVaga = 0;
// Todas as vagas

const VagaSelecionada = Vagas[IndiceVaga];

// - Instâncias funcionalidades

const HabilidadesCandidato = Candidato_1.GetHabilidades();

const RequisitosVaga = VagaSelecionada.GetRequisitos();

// - Instâncias comparações

const HabilidadesCompativeis = HabilidadesCandidato.filter(habilidade => RequisitosVaga.includes(habilidade));

const HabilidadesFaltantes = RequisitosVaga.filter(requisito => HabilidadesCandidato.includes(requisito) === false);

// - Instâncias formatações

const HabilidadesCompativeisFormatadas = HabilidadesCompativeis.map(habilidade => ` ${habilidade}`);

const HabilidadesFaltantesFormatadas = HabilidadesFaltantes.map(habilidade => `    -${habilidade}`);

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

// - Instâncias tamanho dos objetos 

const RequisitosAtendidos = HabilidadesCompativeis.length;

const TotalRequisitos = RequisitosVaga.length;

// - Função CalcularCompatibilidade

const CalcularCompatibilidade = (valorA, valorB) => Math.round((valorA / valorB) * 100);

const TaxaCompatibilidade = CalcularCompatibilidade(RequisitosAtendidos, TotalRequisitos);

const MensagemCompatibilidade = `
=================== MENSAGEM DE COMPATIBILIDADE ====================
    empresa: ${VagaSelecionada.GetEmpresa()}
    cargo: ${VagaSelecionada.GetCargo()}
    Compatibilidade: ${TaxaCompatibilidade}%
    Habilidades Compatíveis:${HabilidadesCompativeisFormatadas}
    ${HabilidadesFaltantesFormatadas.length > 0 ? `Habilidades Faltantes: ${("\n") + HabilidadesFaltantesFormatadas.join("\n")}` : ``} 
`;

// vai aparecer embaixo dos dados das vagas

// - Validaçâo Função CalcularCompatibilidade

const VerificarMensagem = (TaxaCompatibilidade, CriarContadorAnalises, MensagemCompatibilidade) => {
    if (TaxaCompatibilidade >= 0 && TaxaCompatibilidade <= 100){
        CriarContadorAnalises.ContarAnalise();
        return console.log(MensagemCompatibilidade);
    } else {
        console.log(`ERRO`);
    }
}

// Fazer validação de outra forma

VerificarMensagem(TaxaCompatibilidade, CriarContadorAnalises, MensagemCompatibilidade);

//==============================CLASSIFICAÇÃO-DE-COMPATIBILIDADE============================

// - Função ClassificarCompatibilidade

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

// vai aparecer embaixo dos dados das vagas
// validação erro ou deixa assim mesmo

const VerificacaoCompatibilidade = ClassificarCompatibilidade(TaxaCompatibilidade);

// - Validação função ClassificarCompatibilidade

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

// vai aparecer embaixo dos dados das vagas e vai bloquear os outros dados caso a experiência minima não seja atingida

ExibicaoCompatibilidade(VerificacaoCompatibilidade, Candidato_1, VagaSelecionada);

//==============================RECOMENDAÇÃO-DE-ESTUDOS=========================================

// - Função RecomendacaoEstudos

const RecomendacaoEstudos = (Candidato, Vagas) => {

    let RequisitosUrgentes = {};
    
    let MenorCompatibilidade = 101;

    for (const VagaTecnologia of Vagas) {

        let RequisitosVagaAtual = VagaTecnologia.GetRequisitos();

        let HabilidadesCompativeisVaga = HabilidadesCandidato.filter(habilidade => RequisitosVagaAtual.includes(habilidade));

        let HabilidadesIncompativeisVaga = RequisitosVagaAtual.filter(requisito => HabilidadesCandidato.includes(requisito) === false);

        let TotalRequisitosAtual = RequisitosVagaAtual.length;
    
        let TotalCompativeis = HabilidadesCompativeisVaga.length;
        
        let CompatibilidadeCandidato = CalcularCompatibilidade(TotalCompativeis, TotalRequisitosAtual);

        CriarContadorAnalises.ContarAnalise();

        if (CompatibilidadeCandidato < MenorCompatibilidade) {
            MenorCompatibilidade = CompatibilidadeCandidato;

            let HabilidadesImcompativeisFormatas = HabilidadesIncompativeisVaga.map(habilidade => `    -${habilidade}`);

            RequisitosUrgentes = {
                CompatibilidadeCandidato,
                HabilidadesImcompativeisFormatas,
                VagaTecnologia
            };

        }
    }
    return RequisitosUrgentes;
};

const RecomendacaoPior = RecomendacaoEstudos(Candidato_1, Vagas);

// será exibida a mensagem em um campo separado onde ira ser um foco a parte 

// - Mensagem da RecomendacaoEstudos

const RecomendacaoMensagem = `
=================== RECOMENDAÇÃO DE ESTUDOS ====================
    Priorize os estudos em: ${("\n") + RecomendacaoPior.HabilidadesImcompativeisFormatas.join ("\n")} 
`;

console.log(RecomendacaoMensagem);

//==============================MELHOR-VAGA==================================================

// - Função MelhorVaga

const MelhorVaga = (Candidato, Vagas) => {

    let RecomendacaoMelhorVaga = {};

    let MaiorCompatibilidade = -1;

    for (const VagaTecnologia of Vagas) {

        let RequisitosVagaAtual = VagaTecnologia.GetRequisitos();

        let HabilidadesCompativeisVaga = HabilidadesCandidato.filter(habilidade => RequisitosVagaAtual.includes(habilidade));

        let HabilidadesIncompativeisVaga = RequisitosVagaAtual.filter(requisito => HabilidadesCandidato.includes(requisito) === false);

        let TotalRequisitosAtual = RequisitosVagaAtual.length;

        let TotalCompativeis = HabilidadesCompativeisVaga.length;
        
        let CompatibilidadeCandidato = CalcularCompatibilidade(TotalCompativeis, TotalRequisitosAtual);

        CriarContadorAnalises.ContarAnalise();

        if (CompatibilidadeCandidato > MaiorCompatibilidade) {
            MaiorCompatibilidade = CompatibilidadeCandidato;

            let HabilidadesCompativeisFormatas = HabilidadesCompativeisVaga.map(habilidade => `    -${habilidade}`);

            let HabilidadesImcompativeisFormatas = HabilidadesIncompativeisVaga.map(habilidade => `    -${habilidade}`);
               
                RecomendacaoMelhorVaga = {
                    VagaTecnologia,
                    CompatibilidadeCandidato,
                    HabilidadesCompativeisFormatas,
                    HabilidadesImcompativeisFormatas
                };
        }
    }
    return RecomendacaoMelhorVaga;
};

const Recomendacao = MelhorVaga(Candidato_1, Vagas);

// - Mensagem da MelhorVaga

console.log(`
================= MELHOR VAGA =================

Empresa: ${Recomendacao.VagaTecnologia.GetEmpresa()}
Cargo: ${Recomendacao.VagaTecnologia.GetCargo()}
Compatibilidade: ${Recomendacao.CompatibilidadeCandidato}%
Classificação: ${ClassificarCompatibilidade(Recomendacao.CompatibilidadeCandidato)}

Habilidades Compatíveis:
${Recomendacao.HabilidadesCompativeisFormatas.join("\n")}

${Recomendacao.HabilidadesImcompativeisFormatas.length > 0 ? `Habilidades Faltantes:${("\n") + Recomendacao.HabilidadesImcompativeisFormatas.join("\n")}` : ``} 

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
*/