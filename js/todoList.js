// 1º passo => modelar a todo list

// quais as propriedades que ela vai ter? -> atributos
// quais as ações que ela vai executar? -> métodos

// a. lista de todos => onde vão ser armazenadas as todos/tasks
// b. uma forma de acessar a lista de todos/tasks
// c. criar/adicionar todo na lista de todos

const todoList = {
    listaTodos: [],

    getListaTodos() {
        return this.listaTodos;
    },
    adicionarTodo(tituloTodo, descricaoTodo) {
        const newTodo = {
            titulo: tituloTodo,
            descricao: descricaoTodo,
            resolvido: false
        };

        this.listaTodos.push(newTodo);
        return true;
    },

    // 3º passo => atualizar status para resolvido ou não resolvido

    // a. event handler => para tratar o clique e executar função a partir dele
    // b. capturar li clicado através do clique na ul
    // c. pensar numar forma de saber qual o objeto do li clicado
    // d. passar o atributo resolvido para true

    atualizarStatus(event) {
        const liClicado = event.target.closest('li');
        const idLiClicado = liClicado.dataset.id;

        const objetoTodoResolvido = this.listaTodos[idLiClicado];
        objetoTodoResolvido.resolvido = !objetoTodoResolvido.resolvido;

        const inputCheckbox = liClicado.querySelector('input');
        inputCheckbox.checked = !inputCheckbox.checked;
    }
};