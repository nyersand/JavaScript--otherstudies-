function adicionarTarefa(){
    //recebe valor dio input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    var tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")
        
    //se o valor do input for vazio, mostre uma mensagem de erro para o usuário
    if (tarefa == "") {
        var mensagemErro = "Digite uma tarefa para adicioná-la a sua lista"
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#a34743"
        return
    } else {
        //mensagem de tarefa adicionada com sucesso
        var mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28a745"
        //cria novo item (li) e insere na (lista ul)
        const ListasTarefas = document.getElementById("ListasTarefas")
        var novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        ListasTarefas.appendChild(novaTarefa)
    }

    //limpa o input do usuário
    inputTarefa.value = ""
}