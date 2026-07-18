console.log("Conexão com ui.js");

const formulario = document.getElementById("FormCandidato");

const mensagem = document.getElementById("textoHTML");

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
            mensagem.textContent = `Nome: "${candidato.nome}" é muito pequeno(a), insira um nome maior.`;
            mensagem.classList.add('Texto-vermelho');
            mensagem.classList.remove('Texto-verde');
            return;
        } else if (candidato.nome.length >= 31) {
            mensagem.textContent = `Nome: "${candidato.nome}" é muito grande, insira um nome menor.`;
            mensagem.classList.add('Texto-vermelho');
            mensagem.classList.remove('Texto-verde');            
            return;
        } else {
            console.log(candidato.nome);
        }

        if (candidato.area.length <= 3) {
            mensagem.textContent = `Área: "${candidato.area}" é muito pequeno(a), insira uma nome de área maior.`;
            mensagem.classList.add('Texto-vermelho');
            mensagem.classList.remove('Texto-verde');
            return;
        } else if (candidato.area.length >= 31) {
            mensagem.textContent = `Área: "${candidato.area}" é muito grande, insira um nome de área menor.`;
            mensagem.classList.add('Texto-vermelho');
            mensagem.classList.remove('Texto-verde');
            return;
        } else {
            console.log(candidato.area);
        }

        if (candidato.habilidades.length <= 3) {
            mensagem.textContent = `habilidade(s): "${candidato.habilidades}" é muito pequeno(a), insira uma habilidade maior ou mais habilidades.`;
            mensagem.classList.add('Texto-vermelho');
            mensagem.classList.remove('Texto-verde');
            return;
        } else if (candidato.habilidades.length >= 51) {
            mensagem.textContent = `habilidade(s): "${candidato.habilidades}" é muito grande, insira uma habilidade menor ou menos habilidades.`;
            mensagem.classList.add('Texto-vermelho');
            mensagem.classList.remove('Texto-verde');
            return;
        } else {
            console.log(candidato.habilidades);
        }
    
        console.log(Number(candidato.anosExperiencia));

        console.log("Formulário validado com sucesso!");

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.classList.add('Texto-verde');
        mensagem.classList.remove('Texto-vermelho');        
    }

    Validacao();   

    function MostrarCandidato (candidato) {
        let texto = document.createElement("p");

        texto.textContent = `${candidato.nome}`;

        let caixa = document.getElementById("container");
        caixa.appendChild(texto);
    }

    MostrarCandidato(candidato);
});