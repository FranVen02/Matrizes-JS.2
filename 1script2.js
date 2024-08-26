let resposta = document.getElementById('resposta')
let array_random = []

function gerar_random() {

    let valor_aleatorio = 0;
    if (array_random.length < 5) {
        console.log('estou aqui');

        for (i = 0; i < 5; i++) {

            valor_aleatorio = Number(Math.floor(Math.random() * (10 - 1 + 1)) + 1)
            array_random.push(valor_aleatorio)

            console.log(array_random)

        }

    } else {

        calculo()

    }

}

function calculo() {

    let total = 0;
    let soma = 0;

    for (i = 0; i < array_random.length; i++) {

        soma += array_random[i]
        
    }
    total = soma / array_random.length

    console.log('Os números gerados foram: ', array_random,'. A soma dos elementos do vetor é de: ', soma,', já a média é de: ', total.toFixed(2))
    resposta.innerHTML = 'Os números gerados foram: ' + array_random + '. A soma do elementos do vetor é de: ' + soma + ', já a média é de: ' + total.toFixed(2)

}