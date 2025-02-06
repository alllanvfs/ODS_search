const formCadastro = document.getElementById("formCadastro");
const btnLimpar = document.getElementById("btnLimpar");
const btnExcluirTodos = document.getElementById("btnExcluirTodos");
const inputPesquisa = document.getElementById("pesquisa");

formCadastro.addEventListener("submit", cadastrarUsuario);
btnLimpar.addEventListener("click", limparCampos);
btnExcluirTodos.addEventListener("click", excluirTodosUsuarios);
inputPesquisa.addEventListener("input", pesquisarUsuarios);

carregarUsuarios();

function carregarUsuarios() {
    const listaUsuarios = document.getElementById("listaUsuarios");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    listaUsuarios.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${usuario.nome} - ${usuario.email} - ${usuario.data} 
                        <button onclick="excluirUsuario(${index})">Excluir</button>`;
        listaUsuarios.appendChild(li);
    });
}

function cadastrarUsuario(event) {
    event.preventDefault(); 

    const form = document.getElementById("formCadastro");
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const data = new Date().toLocaleString(); 

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push({ nome, email, data });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    form.reset();
    carregarUsuarios(); 
}

function limparCampos() {
    const form = document.getElementById("formCadastro");
    form.reset();
}

function excluirTodosUsuarios() {
    localStorage.removeItem("usuarios");
    carregarUsuarios();
}

function excluirUsuario(index) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    carregarUsuarios();
}

function pesquisarUsuarios() {
    const inputPesquisa = document.getElementById("pesquisa").value.toLowerCase();
    const listaUsuarios = document.getElementById("listaUsuarios");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    listaUsuarios.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        if (usuario.nome.toLowerCase().includes(inputPesquisa) || usuario.email.toLowerCase().includes(inputPesquisa)) {
            const li = document.createElement("li");
            li.innerHTML = `${usuario.nome} - ${usuario.email} - ${usuario.data} 
                            <button onclick="excluirUsuario(${index})">Excluir</button>`;
            listaUsuarios.appendChild(li);
        }
    });
}