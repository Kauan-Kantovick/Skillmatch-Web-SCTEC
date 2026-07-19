import { CandidatoFormulario } from "./ui.js";
import { BuscarVagas } from "./dados.js";

const Candidato_1 = await CandidatoFormulario();
const Vagas = await BuscarVagas();

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

export class Vaga {
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

// - Objetos de classe:

// console.log(Candidato_1.GetNome(), Candidato_1.GetArea(), Candidato_1.GetEstiloTrabalho(), Candidato_1.GetHabilidades(), Candidato_1.GetTempoExperiencia());

// console.log(Vagas[0].GetId(), Vagas[0].GetEmpresa(), Vagas[0].GetCargo(), Vagas[0].GetRequisitos(), Vagas[0].GetSalario(), Vagas[0].GetModeloTrabalho(), Vagas[0].GetAnosExperiencia(), Vagas[0].ApresentacaoVaga());

// - Instâncias:

// Candidato_1 = dados referentes ao preenchimento do formulário


const IndiceVaga = 0;
// Todas as vagas

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
    ${HabilidadesFaltantesFormatadas.length > 0 ? `Habilidades Faltantes: ${("\n") + HabilidadesFaltantesFormatadas.join("\n")}` : ``} 
`;

// vai aparecer embaixo dos dados das vagas

// console.log(MensagemCompatibilidade);

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
// validação erro/deixa assim mesmo

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

// vai aparecer embaixo dos dados das vagas e vai bloquear os outros dados caso a experiência minima não seja atingida

ExibicaoCompatibilidade(VerificacaoCompatibilidade, Candidato_1, VagaSelecionada);

//==============================RECOMENDAÇÃO-DE-ESTUDOS=========================================

const RecomendacaoEstudos = (Candidato, Vagas) => {

    let RequisitosUrgentes = {};
    
    let MenorCompatibilidade = 101;

    for (const VagaTecnologia of Vagas) {

//        console.log("Entrou no for");

        let RequisitosVagaAtual = VagaTecnologia.GetRequisitos();

//        console.log(RequisitosVagaAtual);

        let HabilidadesCompativeisVaga = HabilidadesCandidato.filter(habilidade => RequisitosVagaAtual.includes(habilidade));

//        console.log(HabilidadesCompativeisVaga);

        let HabilidadesIncompativeisVaga = RequisitosVagaAtual.filter(requisito => HabilidadesCandidato.includes(requisito) === false);

//        console.log(HabilidadesIncompativeisVaga);

        let TotalRequisitosAtual = RequisitosVagaAtual.length;
    
//        console.log(TotalRequisitosAtual);

        let TotalCompativeis = HabilidadesCompativeisVaga.length;
        
        let CompatibilidadeCandidato = CalcularCompatibilidade(TotalCompativeis, TotalRequisitosAtual);

//        console.log("Compatibilidade:", CompatibilidadeCandidato);

//        console.log(CompatibilidadeCandidato < MenorCompatibilidade);

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

// console.log(RecomendacaoPior);

// será exibida a mensagem em um campo separado onde ira ser um foco a parte 

const RecomendacaoMensagem = `
=================== RECOMENDAÇÃO DE ESTUDOS ====================
    Priorize os estudos em: ${("\n") + RecomendacaoPior.HabilidadesImcompativeisFormatas.join ("\n")} 
`;

console.log(RecomendacaoMensagem);

//==============================MELHOR-VAGA==================================================

const MelhorVaga = (Candidato, Vagas) => {

    let RecomendacaoMelhorVaga = {};

    let MaiorCompatibilidade = -1;

    for (const VagaTecnologia of Vagas) {

        let RequisitosVagaAtual = VagaTecnologia.GetRequisitos();

//      console.log(RequisitosVagaAtual);

        let HabilidadesCompativeisVaga = HabilidadesCandidato.filter(habilidade => RequisitosVagaAtual.includes(habilidade));

//      console.log(HabilidadesCompativeisVaga);

        let HabilidadesIncompativeisVaga = RequisitosVagaAtual.filter(requisito => HabilidadesCandidato.includes(requisito) === false);

//      console.log(HabilidadesIncompativeisVaga);

        let TotalRequisitosAtual = RequisitosVagaAtual.length;
    
//      console.log(TotalRequisitosAtual);

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

// console.log(Recomendacao);

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

// vai dazer com que apareça na melhor vaga uma estrelinha

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

