// 1º passo => modelar a todo list -
// 2º passo => construir a interface -
// 3º passo => atualizar status para resolvido ou não resolvido

// 4º passo => filtros -> se der tempo

// ======= //

// 2º passo => construir a interface

// a. capturar informações inseridas pelo usuário, para fazer a criação da todo
// b. fazer a criação do objeto todo e adicionar na lista de todos
// c. fazer a criação dos elementos e inserir na tela, através do DOM

const campoTitulo = document.querySelector('form input');
const campoDescricao = document.querySelector('form textarea');
const buttonAdicionar = document.querySelector('form button');

const ul = document.querySelector('.secaoTarefas ul');

function capturarValores(event) {
    event.preventDefault();

    const tituloInserido = campoTitulo.value;
    const descricaoInserida = campoDescricao.value;

    todoList.adicionarTodo(tituloInserido, descricaoInserida);

    montarLayout();
}
buttonAdicionar.addEventListener('click', capturarValores);


function montarLayout() {
    ul.innerHTML = '';

    const lista = todoList.getListaTodos();
    lista.forEach(construirLayout);
}


function construirLayout({ titulo, descricao, resolvido }, index) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    input.type = 'checkbox';
    input.name = 'resolvido';
    input.checked = resolvido;

    h2.innerText = titulo;
    p.innerText = descricao;

    span.appendChild(input);

    label.appendChild(h2);
    label.appendChild(p);

    li.dataset.id = index;
    li.appendChild(span);
    li.appendChild(label);

    ul.appendChild(li);
}


ul.addEventListener('click', todoList.atualizarStatus.bind(todoList));