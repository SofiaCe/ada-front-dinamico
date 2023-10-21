// const cadaCadastro = {
//     nome: '',
//     senha: '',
//     tarefas: [],
// }
const cadaTarefa = {
    titulo: '',
    descricao: '',
    prazo: '',
    prioridade: '',
    concluida: false,
}

// const tarefas = JSON.stringify(localStorage.getItem(`${email}`))
// JSON.parse(tarefas)

//  TAREFAS-PLANEE

function concluir(elemento) {
    const tarefaSelecionada = elemento.parentElement.parentElement
    tarefaSelecionada.style.backgroundColor = 'rgb(161, 240, 161)'
    elemento.remove()
}

function editar(elemento) {
    const tarefaSelecionada = elemento.parentElement.parentElement
    let titulo = tarefaSelecionada.querySelector('h3')
    let descricao = tarefaSelecionada.querySelector('p')
    let prazo = tarefaSelecionada.querySelector('p ~ p')
    const iTituloNovo = document.getElementById('tituloNovo')
    const iDescNovo = document.getElementById('descNovo')
    const iPrazoNovo = document.getElementById('prazoNovo')

    const modal = document.querySelector('.modalContent')
    modal.addEventListener('click', () => {
        titulo.textContent = iTituloNovo?.value
        descricao.textContent = iDescNovo?.value
        prazo.textContent = iPrazoNovo?.value
    })
}

function excluir(elemento) {
    const tarefaSelecionada = elemento.parentElement.parentElement
    tarefaSelecionada.remove()
}

function criar() {
    const sectionTarefas = document.querySelector('section.tarefas')
    const novaTarefa = document.createElement('div')
    novaTarefa.innerHTML = `
    <h3>Nome</h3>
    <p>Descrição</p>
    <p>Prazo</p>
    <!-- <small>Prioridade</small> -->

    <div class="acoes-tarefa">
        <button class="botaoConcluir" onclick="concluir(this)">
            <i class="fas fa-solid fa-check"></i>
        </button>
        <a href="#demo-modal"><button class="botaoEditar" onclick="editar(this)">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#ffffff}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></i>
        </button></a>
        <button class="botaoExcluir" onclick="excluir(this)">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></i>
        </button>
    </div>
    `
    // let titulo = novaTarefa.querySelector("h3")
    // let descricao = novaTarefa.querySelector('p')
    // let prazo = novaTarefa.querySelector('p ~ p')
    // tarefas.push({
    //     titulo: titulo.textContent,
    //     descricao: descricao.textContent,
    //     prazo: prazo.textContent,
    // })
    sectionTarefas.appendChild(novaTarefa)
}

// CADASTRO-PLANEE

function verificarCadastro() {
    const inputNomeC = document.getElementById('nome')
    const inputEmailC = document.getElementById('e-mail')
    const inputSenhaC = document.getElementById('senha')
    let contagemErros = 0

    function borderRed(inputInvalido) {
        const mensagemErroC = document.getElementById('mensagemErroC')
        mensagemErroC.textContent = 'Preencha todos os campos corretamente'
        inputInvalido.style.border = '1px solid red'
        contagemErros++
    }
    function borderNormal(input) {
        input.style.border = '0.1px solid rgb(212, 212, 212)'
    }

    if(!(inputNomeC?.value.trim())) {
        borderRed(inputNomeC)
    } else {
        borderNormal(inputNomeC)
    }

    if(!(inputEmailC?.value.includes('.com'))) {
        borderRed(inputEmailC)
    } else {
        borderNormal(inputEmailC)
    }

    if(!(inputSenhaC?.value.trim())) {
        borderRed(inputSenhaC)
    } else {
        borderNormal(inputSenhaC)
    }

    if(contagemErros == 0) {
        localStorage.setItem(`${inputEmailC.value}`, `${inputSenhaC.value}`)
        window.location.href = "./tarefas-planee.html"
    }
}

// LOGIN-PLANEE

function verificarLogin() {
    const inputEmailL = document.getElementById('e-mail')
    const inputSenhaL = document.getElementById('senha')
    const validando = localStorage.getItem(`${inputEmailL?.value}`)
    if(validando == null || validando == undefined) {
        const mensagemErroL = document.getElementById('mensagemErroL')
        mensagemErroL.textContent = 'E-mail não encontrado'
    } else if(validando !== inputSenhaL?.value) {
        mensagemErroL.textContent = 'Senha incorreta'
    } else {
        window.location.href = "./tarefas-planee.html"  
    }
}

function carregar() { // Para carregar as tarefas do usuário ao logar (não está sendo utilizada ainda)

    tarefas.forEach(t => {
        const sectionTarefas = document.querySelector('section.tarefas')
        let tarefa = document.createElement('div')
        tarefa.innerHTML = `
        <h3>Nome</h3>
        <p>Descrição</p>
        <p>Prazo</p>
        <!-- <small>Prioridade</small> -->
    
        <div class="acoes-tarefa">
            <button class="botaoConcluir" onclick="concluir(this)">
                <i class="fas fa-solid fa-check"></i>
            </button>
            <a href="#demo-modal"><button class="botaoEditar" onclick="editar(this)">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>svg{fill:#ffffff}</style><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></i>
            </button></a>
            <button class="botaoExcluir" onclick="excluir(this)">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></i>
            </button>
        </div>
        `
        // let titulo = tarefa.querySelector("h3")
        // let descricao = tarefa.querySelector('p')
        // let prazo = tarefa.querySelector('p ~ p')
        // titulo.textContent = t.titulo
        // descricao.textContent = t.descricao 
        // prazo.textContent = t.prazo
        // sectionTarefas.appendChild(tarefa)
    })
}

