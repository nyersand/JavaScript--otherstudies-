let tarefas = []

function adicionarTarefa() {

    

    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    // se o valor do input for vazio então mostre uma mensagem de erro para o usuário
    if (tarefa == "") {
        //mostre uma mensagem do erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "red"
    } else {
        //mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "green"
        tarefas.push(tarefa)
        renderizarTarefas()
    }
    //limpa o input do usuário
    inputTarefa.value = ""
}

function renderizarTarefas() {
    //cria novo item (li) e insere na (lista ul)
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    // for - Itens na lista
    // 1. item inicial (iterador)
    // 2. item final (condição)
    //3. se vai de 1 em 1 elemento ou se pula (frequência)

        //for (iterador, condição, frequência)
        let i = 0
        for (i; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)
    }

}