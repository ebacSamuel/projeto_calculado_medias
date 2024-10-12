const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./IMAGES/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src="./IMAGES/reprovado.png" alt="emoji decepcionado"/>';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizarMediaFinal();
})

function adicionarLinha(){
    const inputAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividade.includes(inputAtividade.value)){
        alert(`A atividade: ${inputAtividade} ja foi inserida`);
    } else {

    atividade.push(inputAtividade);
    notas.push(parseFloat(notaAtividade.value));

    let linha = '<tr>';
    linha +=`<td>${inputAtividade.value}</td>`;
    linha +=`<td>${notaAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha +=`</tr>`;

    linhas += linha;
    }

    inputAtividade.value = '';
    notaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0;
    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}

