const botoesErrados = document.getElementsByClassName('errados');
const correta = document.querySelector('.correta');
const btnNext = document.querySelector('.btn-next');
const wrongOptions = document.querySelectorAll('.errados');
var acertos = 0;

    correta.addEventListener('click', acertou);

        // Iterar sobre a coleção de elementos
    for (let botao of botoesErrados) {
        botao.addEventListener('click', errada);
    }

    function errada() {  
        
        // Aplica estilo e altera o conteúdo de cada uma
        wrongOptions.forEach(option => {
            option.style.backgroundColor = "lightcoral"; // Muda a cor de fundo
            option.innerHTML = "ERROU"; // Altera o texto para "ERRADA"
        });

        correta.onclick=null;
        correta.style.cursor="not-allowed";
        correta.style.backgroundColor="lightgreen";
        btnNext.style.display="block";
        
    }

    function acertou(){
        acertos = acertos + 1;

        wrongOptions.forEach(option => {
            option.style.backgroundColor = "lightgreen"; // Muda a cor de fundo
            option.innerHTML = "ACERTOU"; // Altera o texto para "ERRADA"
        }); 

        btnNext.style.display="block";
        console.log(acertos);
    }
        