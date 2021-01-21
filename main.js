const recados = [];

const button = document.querySelector('#enviar');
button.addEventListener('click', salvaRecados);

function salvaRecados() {
    const inputNome = document.querySelector("#nome");
    const inputMensagem = document.querySelector("#recado");

    const nome = inputNome.value;
    const mensagem = inputMensagem.value;

    const obj = { nome, mensagem };

    recados.push(obj);
    renderizaRecados();
}

function renderizaRecados() {
    const display = document.querySelector('#display');
    display.innerHTML = "";
    recados.forEach((recado, index) => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.textContent = `${recado.nome}: ${recado.mensagem}`;
        const button = document.createElement('button');
        button.textContent = "Excluir";
        button.classList = "button";
        button.addEventListener('click', () => {
            recados.splice(index, 1);
            renderizaRecados();
        });
        div.appendChild(p);
        div.appendChild(button);
        display.appendChild(div);
    });
}

function vermei() {
    document.getElementById("headerr").style.backgroundColor = "#8B0000"
    document.getElementById("nave").style.backgroundColor = "#8B0001"
    document.getElementById("foo").style.backgroundColor = "#8B0000"
    document.getElementById("enviar").style.backgroundColor = "#8B0001"
}

function azul() {
    document.getElementById("headerr").style.backgroundColor = "#00008B"
    document.getElementById("nave").style.backgroundColor = "#00018B"
    document.getElementById("foo").style.backgroundColor = "#00008B"
    document.getElementById("enviar").style.backgroundColor = "#00008B"
    document.getElementById("excluir").style.backgroundColor = "#00008B"
}

function preto() {
    document.getElementById("headerr").style.backgroundColor = "black"
    document.getElementById("nave").style.backgroundColor = "black"
    document.getElementById("foo").style.backgroundColor = "black"
    document.getElementById("enviar").style.backgroundColor = "black"
}

function exibeCreditos() {
    alert("Disciplina Web Carlos Jardel")
}