const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
    li.appendChild(botaoApagar);
}

function criarTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criarBotaoApagar(li);
    // salvarTarefas();
}

btnTarefa.addEventListener('click', () => {
    if(!inputTarefa .value) return;
    criarTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', (event) => {
    if(event.keyCode === 13){
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
});

document.addEventListener('click', (event) => {
    const el = event.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        // salvarTarefas();
    }
});

