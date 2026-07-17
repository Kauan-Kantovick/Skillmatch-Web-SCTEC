console.log("Conexão com ui.js");

const formulario = document.getElementById("FormCandidato");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("Formulário enviado!");

    const candidato = {
        nome: document.getElementById('CampoNome').value,
        area: document.getElementById('CampoArea').value,
        habilidades: document.getElementById('CampoHabilidades').value,
        anosExperiencia: document.getElementById('CampoAnos').value                
    };
    
    function Validacao() {
        // candidato.nome.length <= 2 && candidato.nome.length >= 30 ?
        //     alert("Nome inválido! Nome muito extenso/pequeno.")
        //     : console.log(candidato.nome);

        if (candidato.nome.length <= 2) {
            alert(`Nome: ${candidato.nome} é muito pequeno(a), insira um nome maior.`);
            return;
        } else if (candidato.nome.length >= 31) {
            alert(`Nome: ${candidato.nome} é muito grande, insira um nome menor.`);
            return;
        } else {
            console.log(candidato.nome);
        }

        if (candidato.area.length <= 3) {
            alert(`Área: ${candidato.area} é muito pequeno(a), insira uma nome de área maior.`);
            return;
        } else if (candidato.area.length >= 31) {
            alert(`Área: ${candidato.area} é muito grande, insira um nome de área menor.`);
            return;
        } else {
            console.log(candidato.area);
        }

        if (candidato.habilidades.length <= 3) {
            alert(`habilidade(s): ${candidato.habilidades} é muito pequeno(a), insira uma habilidade maior ou mais habilidades.`);
            return;
        } else if (candidato.habilidades.length >= 51) {
            alert(`habilidade(s): ${candidato.habilidades} é muito grande, insira uma habilidade menor ou menos habilidades.`);
            return;
        } else {
            console.log(candidato.habilidades);
        }
    
        console.log(Number(candidato.anosExperiencia));

        console.log("Formulário validado com sucesso!");
    }
    Validacao();   
});