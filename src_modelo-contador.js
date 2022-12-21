function contarPasso (){
    let numInicio = document.getElementById('numInicio');
    let numFim = document.getElementById('numFim');
    let numPasso = document.getElementById('numPasso');
    let result = document.getElementById('res');

    if(numInicio.value.lenght == 0 || numFim.value.length == 0 || numPasso.value.length == 0){
        window.alert("[ERRO] Verifique se todos dados foram preenchidos.");
    }else{

        result.innerHTML = "Contando:"

        let i = Number(numInicio.value);
        let f = Number(numFim.value);
        let p = Number(numPasso.value);

        if(p <=0 ){
            window.alert('[ERRO] Passo invalido, considerando passo = 1')
            p = 1;
        }

        if(i < f){
            //contagem crescente 
        for(let c = i; c <= f; c += p){
            result.innerHTML += `${c} `;
        }
    }else{ //contagem decrescente 
        for(let c = i; c >= f; c -= p){
            result.innerHTML += `${c} `;
        }
    }
    }

}
