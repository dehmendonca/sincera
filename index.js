// variaveis?
// dados de entrada?
// dados de saída

const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const btn = document.querySelector("#btn")
const respostas = [
  "Claro pô, confia!",
  "KKKKK Sonhou.",
  "Com certeza!",
  "Óbvio que não!",
  "Nossa, vai na fé!",
  "Irineu, você não sabe nem eu!",
  "Jurou.",
  "Acho que não, hein.",
  "Creio que sim.",
  "Talvez em outra reencarnação?",
  "Só vai!",
  "Acho melhor você ser o último a saber.",
  "Milagres são atendidos na igreja...",
  "Hmmm... Vish...",
  "Me inclua fora dessa.",
  "Provavelmente!",
  "Sinais indicam que sim.",
  "Tente novamente mais tarde.",
  "Perspectiva boa. Fonte: Eu juro.",
  "Posso ser obrigada a tudo, menos a te responder.",
  "Sim!",
]

//console.log(numeroAleatorio)

// clicar em fazer pergunta

function fazerPergunta() {

 if(inputPergunta.value == "") {
   alert("Você precisa digitar sua pergunta, ainda não aprendi a ler mentes!")
   return
 }

 btn.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
console.log(respostas[numeroAleatorio])

elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

elementoResposta.style.opacity = 1;

// fazer a resposta desaparecer após 5 segundos
setTimeout(function(){
  elementoResposta.style.opacity = 0;
  btn.removeAttribute("disabled")
}, 5000)
}








