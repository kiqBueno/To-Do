//selecao de elementos

const todoForm = document.querySelector("#header-adicionar") //todo = css(a fazer)
const todoInput = document.querySelector("#input-header")//Retorna apenas o primeiro elemento com as propriedades CSS inseridas como parâmetro
const todoList = document.querySelector("#todo-list")//Element.getElementsByTagName() retorna todos os elementos do objeto
const editForm = document.querySelector("#header-editar")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#botao-cancelar")

let oldInputValue
let todoTitle

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
  };

//funcoes
const saveTodo = (text) => {
    const todo = document.createElement("div") //criar divisoria 
    todo.classList.add("a-fazer") //cria toda a classe convocada()

    const todoTitle = document.createElement("h3") //cria titulo
    todoTitle.innerText = text //retorna texto da funcao inteira como variavel
    todo.appendChild(todoTitle) // h3

    const doneBtn = document.createElement("button") //funcao do botao
    doneBtn.classList.add("terminar-a-fazer") //criar classe pra terminar todo
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>' //criar botao funcional
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button") //funcao do botao
    editBtn.classList.add("editar-a-fazer") //criar classe pra terminar todo
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>' //criar botao funcional
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button") //funcao do botao
    deleteBtn.classList.add("remover-a-fazer") //criar classe pra terminar afazer
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>' //criar botao funcional
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo) // colocar todo na lista geral (html header-a-fazer)

    todoInput.value = "" //zera valor todo quando clica no botao +
    todoInput.focus() // cursor de digitar ir automaticamente pro input
}

//eventos

todoForm.addEventListener("submit", (e) => { //acionar evento /submit para formulario / nome do evento =>
    e.preventDefault() //cancelar evento
    
    const inputValue = todoInput.value //seleciona input e a propriedade value que tem valor
        
    if(inputValue){ //validacao para o usuario nao fazer variaveis nulls
        saveTodo(inputValue) //criar funcao para salvar valor do input
        
    }
})
document.addEventListener("click", (e) => {  //acicionar evento de clique no evento 
    const targetEl = e.target //efetuar evento/acao com elemento target
    const parentEl = targetEl.closest("div") //selecionou a div mais proxima, o elemento div mais proximo
    let todoTitle

    if(parentEl && parentEl.querySelector("h3")){ //se parentEl existe e se queryselector contiver queryselector com h3
        todoTitle = parentEl.querySelector("h3").innerText // todoTitle assume valor da tarefa, fazendo ela ser uma variavel
    }
    
    if (targetEl.classList.contains("terminar-a-fazer")){ //se a variavel na lista de evento contem uma classe com o nome de finish...
        parentEl.classList.toggle("done") //adicionar ou remover a formatacao azul de feito
    }

    if (targetEl.classList.contains("remover-a-fazer")){//acessar lista de classes DOM e verificar se o valor da classe existe na classe
       parentEl.remove()
    }

    if (targetEl.classList.contains("editar-a-fazer")){//acessar lista de classes DOM e verificar se o valor da classe existe na classe
        toggleForms() //esconde um formulario e mostra o outro

        editInput.value = todoTitle //mudar valor para pre preenchido por ser um input
        oldInputValue = todoTitle //salvar efetivamente o valor na memoria
    }
})

cancelEditBtn.addEventListener("click", (e) =>{
    e.preventDefault //cancelar evento
    toggleForms() //esconder e mostrar
})

