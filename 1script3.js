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

    let somaPar = 0;
    let somaImpar = 0;

    for(i=0; i<5; i++){

        if(array_random[i] % 2 == 0){

            somaPar += array_random[i]

        }else{

            somaImpar += array_random[i]

        }

    }

    console.log('Os valores gerados foram: ', array_random,'. A soma dos números pares foram: ', somaPar,', já a soma dos ímpares foram: ', somaImpar)
    resposta.innerHTML = 'Os valores gerados foram: ' + array_random + '. A soma dos números pares foram: ' + somaPar + ', já a soma dos ímpares foram: ' + somaImpar

}