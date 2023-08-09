const tarefas = [];

function adicionarTarefa() {
    const novaTarefa = document.getElementById("tarefaInput").value;
    tarefas.push(novaTarefa);
    atualizarListaTarefas();
    document.getElementById("tarefaInput").value = "";
}

function atualizarListaTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    const tarefa = tarefas[i];
    const item = document.createElement("li");
    item.textContent = tarefa;

    const removerBotao = document.createElement("button");
    removerBotao.textContent = "Remover";
    removerBotao.classList.add("remover");
    removerBotao.addEventListener("click", () => removerTarefa(i));

    item.appendChild(removerBotao);
    listaTarefas.appendChild(item);
  }

  const removerPrimeiroBotao = document.createElement("button");
  removerPrimeiroBotao.textContent = "Remover Primeira";
  removerPrimeiroBotao.addEventListener("click", () => removerPrimeiroTarefa());

  const removerUltimoBotao = document.createElement("button");
  removerUltimoBotao.textContent = "Remover Última";
  removerUltimoBotao.addEventListener("click", () => removerUltimoTarefa());

  listaTarefas.prepend(removerPrimeiroBotao);
  listaTarefas.appendChild(removerUltimoBotao);
}

function removerTarefa(index) {
  tarefas.splice(index, 1);
  atualizarListaTarefas();
}

function removerPrimeiroTarefa() {
  tarefas.shift();
  atualizarListaTarefas();
}

function removerUltimoTarefa() {
  tarefas.pop();
  atualizarListaTarefas();
}

function verificarTecla(event) {
    if (event.key === "Enter") {
      adicionarTarefa();
      event.preventDefault();
    }
  }
  
  document.getElementById("tarefaInput").addEventListener("keydown", verificarTecla);