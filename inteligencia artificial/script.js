const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como um torcedor pode afetar uma estação de trem inteira por causa de uma aposta errada?",

        alternativas: ["Alternativa 1",
            "Alternativa 2"
        ]
    },

    {
        enunciado: "Pergunta2",
        alternativas: ["Alternativa 1",
            "Alternativa 2"
        ]
    }, 
    {
        enunciado: "Pergunta2",
        alternativas: ["Alternativa 1",
            "Alternativa 2"
        ]
    }, 
    {
        enunciado: "Pergunta2",
        alternativas: ["Alternativa 1",
            "Alternativa 2"
        ]
    }, 
    {
        enunciado: "Pergunta2",
        alternativas: ["Alternativa 1",
            "Alternativa 2"
        ]
    }, 
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
    
}
 
function mostraAlternativas(){
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);

    }
}

mostraPergunta();
