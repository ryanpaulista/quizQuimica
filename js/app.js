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
            option.style.cursor="not-allowed";
        });

        correta.removeEventListener('click', acertou);
        correta.style.cursor="not-allowed";
        correta.style.backgroundColor="lightgreen";
        btnNext.style.display="block";
        
    }

    function acertou(){

        wrongOptions.forEach(option => {
            option.style.backgroundColor = "lightgreen"; // Muda a cor de fundo
            option.innerHTML = "ACERTOU"; // Altera o texto para "ERRADA"
            option.removeEventListener('click', errada);
            option.style.cursor="not-allowed";
        }); 
    
        
        correta.removeEventListener('click', acertou);
        correta.style.cursor="not-allowed";
        btnNext.style.display="block";
        console.log(acertos);

        if(localStorage.acertosCont){
            localStorage.acertosCont = Number(localStorage.acertosCont) + 1;
        } else {
            localStorage.acertosCont = 1;
        }
        
    }

    /* LEMBRAR DE DAR CLEAR NA PAGINA EM QUE MOSTRA OS RESULTADOS*/
        