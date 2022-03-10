const btnmudar = document.querySelector("#btn");
const nome =document.getElementById('nome');
const imagem = document.querySelector('#img')

btnmudar.addEventListener('click', () =>{
   
    if(btnmudar.value == 'primeiro'){
        imagem.src = './midia/img/homer.png';
        nome.innerText = 'Homer';
        btnmudar.value = 'segundo';

    } else if(btnmudar.value == 'segundo') { 
        imagem.src = './midia/img/Marge.png';
        nome.innerText = 'Marge';
        btnmudar.value = 'terceiro';

    } else if(btnmudar.value == 'terceiro') { 
        imagem.src = './midia/img/lisa.png';
        nome.innerText = 'lisa';
        btnmudar.value = 'quarto';
    } else if(btnmudar.value == 'quarto') { 
        imagem.src = './midia/img/barte.png';
        nome.innerText = 'Barte';
        btnmudar.value = 'quinto';
    } else { 
        imagem.src = './midia/img/familiasimpsons.png';
        nome.innerText = 'Familia';
        btnmudar.value = 'primeiro';
    }
})