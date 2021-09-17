function Click(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function Redirecionar(){
    window.open("https://github.com/danielafarias");
    // window.location.href = "https://github.com/danielafarias";
}

function Trocar(elemento){
//     document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
 }

function Voltar(elemento){
//     document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function Load(){
    alert("Página carregada");
}

function Mudar(elemento){
    console.log(elemento.value);
}

// var nome = "Daniela Farias";
// var idade = 20;
// var idade2 = 10;
// var frase = "Japão é o melhor país do mundo."
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);
// console.log(nome);
// console.log(frase);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
// console.log(idade * idade2);

// var lista = ["maça", "pera", "laranja"];
// var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]

// lista.push("uva");
// // lista.pop(); - retira o último
// console.log(lista[1]);
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" "));
// console.log(frutas)
// console.log(frutas[1].nome)

// var idade = prompt('Qual sua idade?')

// if (idade >= 18) {
//     alert("maior de idade");
// } else {
//     alert("menor de idade")
// }

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     // count = count + 1;
//     count++;
// }

// var count;
// // valor + condição + ação/loop
// for(count=0; count <=5; count++){
//     alert(count);
// }

// var d = new Date();
// alert(d.getMonth()+1);
// alert(d.getHours());
// alert(d.getMinutes());

// function soma(n1, n2) {
//     return n1 + n2;
// }

// function setReplace(frase, nome, novoNome){
//     return frase.replace(nome, novoNome)
// }

// alert(soma(5, 10))
// alert(setReplace("Vai Japão", "Japão", "Brasil"));

// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true
//     } else {
//         validar = false
//     }
//     return validar
// }

// var idade = prompt("Qual sua idade?")
// console.log(validaIdade(idade))