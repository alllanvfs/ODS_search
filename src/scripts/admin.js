document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formCadastro");
    const btnCadastrar = document.getElementById("btnCadastrar");
    const btnLimpar = document.getElementById("btnLimpar");
    const listaUsuarios = document.getElementById("listaUsuarios");
    const btnExcluirTodos = document.getElementById("btnExcluirTodos");
    const inputPesquisa = document.getElementById("pesquisa");

    // Função para carregar os dados do Local Storage e exibir na lista
    function carregarUsuarios() {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        listaUsuarios.innerHTML = ''; // Limpar a lista antes de adicionar os usuários

        usuarios.forEach((usuario, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${usuario.nome} - ${usuario.email} - ${usuario.data} 
                            <button onclick="excluirUsuario(${index})">Excluir</button>`;
            listaUsuarios.appendChild(li);
        });
    }

    // Função para cadastrar um novo usuário
    btnCadastrar.addEventListener("click", function () {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const data = new Date().toLocaleString(); // Pega a data e hora atual

        if (nome && email) {
            const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuarios.push({ nome, email, data });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            form.reset(); // Limpa os campos do formulário
            carregarUsuarios(); // Atualiza a lista de usuários
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Função para limpar os campos do formulário
    btnLimpar.addEventListener("click", function () {
        form.reset();
    });

    // Função para excluir um usuário da lista e do Local Storage
    window.excluirUsuario = function (index) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.splice(index, 1); // Remove o usuário pelo índice
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        carregarUsuarios(); // Atualiza a lista de usuários
    };

    // Função para excluir todos os usuários da lista e do Local Storage
    btnExcluirTodos.addEventListener("click", function () {
        localStorage.removeItem("usuarios");
        carregarUsuarios(); // Atualiza a lista de usuários
    });

    // Função para pesquisar os usuários cadastrados
    inputPesquisa.addEventListener("input", function () {
        const termoPesquisa = inputPesquisa.value.toLowerCase();
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        listaUsuarios.innerHTML = ''; // Limpa a lista antes de mostrar os resultados

        usuarios.forEach((usuario, index) => {
            if (usuario.nome.toLowerCase().includes(termoPesquisa) || usuario.email.toLowerCase().includes(termoPesquisa)) {
                const li = document.createElement("li");
                li.innerHTML = `${usuario.nome} - ${usuario.email} - ${usuario.data} 
                                <button onclick="excluirUsuario(${index})">Excluir</button>`;
                listaUsuarios.appendChild(li);
            }
        });
    });

    // Carregar os usuários ao carregar a página
    carregarUsuarios();
});
