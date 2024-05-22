

let resultado = document.getElementById('resultado');

let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', () => {

    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value; 
    let peso = document.getElementById('peso').value;

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.innerText = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

        }   else {
            resultado.innerText = 'Por favor, preencha todos os campos corretamente.';
        }

        
    })