//1 - Par ou Ímpar
function verificarParOuImpar(num) {
    alert("Descubra se o número é Par ou ímpar!");

    if (num === undefined) {
        num = Number(prompt("Digite um número: "));
    }

    if (num % 2 === 0) {
        console.log("Este número é par");
    } else {
        console.log("Este número é ímpar");
    }
}

//2 - Verificação de Maioridade
function verificarMaioridade(idade) {
    alert("Aqui você descobrirá se é maior de idade!!");

    if (idade === undefined) {
        idade = Number(prompt("Digite sua idade: "));
    }

    if (idade >= 18) {
        console.log("Você é maior de idade!!");
    } else {
        console.log("Você é menor de idade!!");
    }
}

//3 - Contagem de 1 a 10
function contarAteDez() {
    alert("Contagem de 1 a 10");

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

//4 - Contagem Regressiva
function contagemRegressiva(num1) {
    alert("Contagem regressiva do número digitado:");

    if (num1 === undefined) {
        num1 = Number(prompt("Digite um número: "));
    }

    while (num1 >= 0) {
        console.log(num1);
        num1--;
    }

    console.log("Fim da contagem!");
}

//5 - Tabuada
function gerarTabuada(numero) {
    alert('Tabuada do número digitado');

    if (numero === undefined) {
        numero = Number(prompt("Digite um número:"));
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

//6 - Somatório
function calcularSomatorio(somat) {
    alert("Aqui será somado de 1 até o número digitado");

    if (somat === undefined) {
        somat = Number(prompt("Digite o número: "));
    }

    let soma = 0;

    for (let i = 1; i <= somat; i++) {
        soma += i;
    }

    console.log("A soma é: " + soma);
}

//7 - Número Primo
function verificarPrimo(numerop) {
    alert("Número Primo ou não?");

    if (numerop === undefined) {
        numerop = Number(prompt("Digite um número:"));
    }

    let primo = true;

    if (numerop < 2) {
        primo = false;
    } else {
        for (let i = 2; i < numerop; i++) {
            if (numerop % i === 0) {
                primo = false;
                break;
            }
        }
    }

    console.log(primo ? "É primo" : "Não é primo");
}

//8 - Login Simples
function realizarLogin(usuario, senha) {
    alert("Login Simples");

    if (usuario === undefined) usuario = prompt("Usuário:");
    if (senha === undefined) senha = prompt("Senha:");

    while (usuario !== "fabri" || senha !== "1234") {

        if (usuario !== "fabri") alert("Usuário errado!");
        if (senha !== "1234") alert("Senha errada!");

        usuario = prompt("Usuário:");
        senha = prompt("Senha:");
    }

    alert("Login realizado com sucesso!");
}

//9 - Soma de Números Positivos
function somarPositivos() {
    alert("Soma de números positivos");
    let somap = 0;

    while (true) {
        let nump = Number(prompt("Digite um número (ou negativo para parar):"));

        if (nump < 0) break;
        somap += nump;
    }

    alert("A soma dos números positivos é: " + somap);
}

//10 - Adivinhação
function jogoAdivinhacao() {
    let numeroa = Math.floor(Math.random() * 10) + 1;
    let palpite = prompt("Adivinhe o número de 1 a 10");

    while (Number(palpite) !== numeroa) {
        let palpiteNum = Number(palpite);

        if (palpiteNum > numeroa) {
            alert("O número secreto é menor");
        } else {
            alert("O número secreto é maior");
        }

        palpite = prompt("Tente novamente:");
    }

    alert("Parabéns! Você acertou!!");
}

//11 - Fatorial
function calcularFatorial() {
    alert("Digite um número e verá o seu fatorial!!");
    let numfa = Number(prompt("Digite um número:"));
    let fatorial = 1;

    for (let i = 1; i <= numfa; i++) {
        fatorial *= i;
    }

    console.log("Fatorial:", fatorial);
}

//12 - Validação de nota
function validarNota() {
    alert("Validação de nota!!");

    while (true) {
        let notav = Number(prompt("Digite uma nota entre 0 e 10:"));

        if (notav >= 0 && notav <= 10) {
            console.log("Nota válida:", notav);
            break;
        } else {
            alert("Nota inválida!");
        }
    }
}

//13 - Média
function verificarAprovacao() {
    let n1 = Number(prompt("Nota 1:"));
    let n2 = Number(prompt("Nota 2:"));
    let n3 = Number(prompt("Nota 3:"));

    let media = (n1 + n2 + n3) / 3;
    console.log("Média:", media);

    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

//14 - Caixa eletrônico
function simularCaixaEletronico() {
    let valor = Number(prompt("Digite o valor do saque:"));
    const notas = [100, 50, 20, 10, 5, 2, 1];

    notas.forEach(nota => {
        let quantidade = Math.floor(valor / nota);
        valor %= nota;

        if (quantidade > 0) {
            console.log(`${quantidade} nota(s) de ${nota}`);
        }
    });
}

//15 - Ímpares
function listarImpares() {
    let limite = Number(prompt("Digite o limite:"));

    for (let i = 1; i <= limite; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}