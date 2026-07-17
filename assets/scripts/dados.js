const sla = await fetch("http://127.0.0.1:5500/")

localStorage.setItem('nome:kauan', JSON.stringify(kauan));

const kauan = JSON.parse(localStorage.getItem("nome:kauan"));
console.log("LocaStorage");