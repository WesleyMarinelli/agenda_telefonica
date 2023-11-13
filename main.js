const form = document.getElementById('form-atividade');

const atividade = [];
const numeros = [];

let linhas = ''; /*ir sempre mantendo o conteudo*/

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaLista();
});

function adicionaLinha() {
    const inputContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    if (atividade.includes(inputNumero.value)) {  /*para nao duplicar o mesmo numero de contato */
        alert(`O contato: ${inputNumero.value} ja foi inserido`);
    } else {
    atividade.push(inputContato.value);
    atividade.push(inputNumero.value);
    numeros.push(parseInt(inputNumero.value));
    
    let linha = '<tr>';
    linha += `<td> ${inputContato.value}</td>`;
    linha += `<td> ${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }
    inputContato.value = '';
    inputNumero.value = '';
}

function atualizaLista() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}