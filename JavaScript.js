alert("Bem vindo")

nome = prompt("Qual seu nome?  ");

if (nome) {
    alert("Bem Vindo " + nome );
}
idade = prompt("Qual a sua idade? ");

if (idade >= 18 ) {
    console.log("Maior de idade");
}else if (idade <= 17) {
    console.log("Menor de idade");
}else{
    console.log("Valor invalido");
}





let confirmar = confirm("Deseja prosseguir?")


if (confirmar){
        while (true){
            alert("voce esta prosseguindo")

            let num1 = Number(prompt("Digite um numero: "))
            let num2 = Number(prompt("digite outro numero: "))
            soma = num1+num2
            alert(soma)

            break
        }  
    } 
else{
    alert("vc nao prosseguiu")
}

num3 = Number(prompt("digita a porra do numero krl: "))
alert("o dobro do seu numero é "+num3 * 2)







nome2 = prompt("digite  seu nome: ")
idade2 = Number(prompt("digite sua idade: "))

alert("ola "+nome2+"sua idade é "+idade2)