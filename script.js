document.getElementById('formulario').addEventListener('submit',function(event){
    event.preventDefault();
}

//Obete as notas inceridas pelo usuária
let nota1 = parseFloat(document.getElementById('nota1').value);
let nota2 = parseFloat(document.getElementById('nota2').value);
let nota3 = parseFloat(document.getElementById('nota3').value);

//calcular média
let media = (nota1 + nota2 + nota3)/3;

//Exibir a mensagem de resultado 
let resultadoDiv = document.getElementById('resultado');
if (media>= 6.0){
resultadoDiv.innerHTML=`<p class="Aprovado">Aprovado! Sua media foi: ${media.toFixed(2)}<p/>`;
}
else {
    resultadoDiv.innerHTML=`<p class="Recuperação">Recuperação! Sua media foi: ${media.toFixed(2)}<p/>`;
}
});