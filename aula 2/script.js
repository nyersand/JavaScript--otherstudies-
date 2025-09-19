function adicionarTarefa(){
    //recebe valor dio input do usuário
    var inputTarefa = document.getElementById("inputTarefa")
    var tarefa = inputTarefa.value
        //se o valor do input for vazio, mostre uma mensagem de erro para o usuário
        if (tarefa == "") {
        alert("Adicione algo")
        return
    }

    //cria novo item (li) e insere na (lista ul)
    var ListasTarefas = document.getElementById("ListasTarefas")
    var novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    ListasTarefas.appendChild(novaTarefa)

    //mensagem de tarefa adicionada com sucesso
    var mensagem = "Tarefa adicionada com sucesso"
    document.getElementById("mensagem").textContent = mensagem

    //limpa o input do usuário
    inputTarefa.value = ""
}