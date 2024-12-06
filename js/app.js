const botoesErrados = document.getElementsByClassName('errados');

        // Iterar sobre a coleção de elementos
        for (let botao of botoesErrados) {
            botao.addEventListener('click', errada);
        }

        function errada() {
            // Alterar o estilo do botão clicado
            this.style.backgroundColor = 'rgb(255, 67, 67)';
            this.innerText='ERRADA'
        }
        