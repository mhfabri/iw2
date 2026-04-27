// exercicio 1

digite = document.getElementById("digite").value;
txt = document.getElementById("txt");

function submit() {
    txt.innerHTML = digite.value;
    if (digite.value == null || digite.value == "") {
        txt.innerHTML = "Substituir texto";
    }
}
// ==============================================================


// exercicio 2

function submit2() {
    var nome = document.getElementById("nome").value;
    document.getElementById("txt2").innerHTML = "Olá " + nome;
}

// ===============================================================

// exercicio 3

function submit3(){
    var num1 = document.getElementById("numero").value;
    if (num1 >=18) {
        document.getElementById("txt3").innerHTML = "Você é maior de idade";
    } else {
        document.getElementById("txt3").innerHTML = "Você é menor de idade";
    }
}

// ===============================================================

// exercicio 4

function changeBackgroundColor() {
    body = document.body
    color = document.getElementById("color").value;
    body.style.backgroundColor = color;
}

// ===============================================================

// exercicio 5

function toggleBackgroundColor() {
    body = document.body
    check = document.getElementById("blackwhite").checked
    if (check) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}

// ===============================================================

// exercicio 6

function adicionarItem() {
    const input = document.getElementById("inputTexto");
    const texto = input.value;
    if (texto.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = texto;
    // Exercício 7: remover ao clicar
    li.onclick = function() {
        li.remove();
    };
    document.getElementById("lista").appendChild(li);
    input.value = "";
}

// ===============================================================

// exercicio 8

function checkParImpar() {
    const num = parseInt(document.getElementById("parimpar").value);
    const resultado = document.getElementById("txtParImpar");
    if (isNaN(num)) {
        resultado.textContent = "Por favor, insira um número válido.";
    } else if (num % 2 === 0) {
        resultado.textContent = num + " é um número par.";
    } else {
        resultado.textContent = num + " é um número ímpar.";
    }
}

// ===============================================================

// exercicio 9

function verificarSenha() {
    const senha = document.getElementById("senha").value;
    if (senha.length < 6) {
        alert("A senha deve conter pelo menos 6 caracteres.");
    } else {
        alert("tamanho correto");
    }
}

// ===============================================================

// exercicio 10

function addNome() {
    const input = document.getElementById("dgtNome").value;
    const nome = input;
    if (nome.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = nome;
    // Exercício 7: remover ao clicar
    li.onclick = function() {
        li.remove();
    };
    document.getElementById("listaNomes").appendChild(li);
    document.getElementById("dgtNome").value = "";
}