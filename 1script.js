let resposta = document.getElementById('resposta')
let array1 = []

function gravar(){

    let num = Number(document.getElementById('num').value)

    if(array1.length < 5){

        array1.push(num)
        console.log(array1)

    }else{

        calculaMedia()

    }

}

function calculaMedia(){

    let total = 0;

    for(i=0; i<5; i++){

        total = array1[0] +  array1[1] +  array1[2] +  array1[3] +  array1[4]

    }

    let media = total / 5
    resposta.innerHTML = 'A média aritmética dos elementos da matriz é: ' + media.toFixed(2)

}