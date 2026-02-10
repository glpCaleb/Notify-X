window.onload = () => {
    const user = localStorage.getItem("user");
    if (user) {
        mostrarNotas();
        carregarNota();
    }
};

function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
        alert("Preencha todos os campos.");
        return;
    }

    localStorage.setItem("user", email);
    mostrarNotas();
    carregarNota();
}

function mostrarNotas() {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("notesBox").classList.remove("hidden");
}

function salvarNota() {
    const nota = document.getElementById("nota").value;
    localStorage.setItem("nota", nota);
    alert("Nota salva!");
}

function carregarNota() {
    const nota = localStorage.getItem("nota");
    if (nota) {
        document.getElementById("nota").value = nota;
    }
}

function logout() {
    localStorage.clear();
    location.reload();
}
