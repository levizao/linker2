function verificarSenha() {
    var senhaDigitada = document.getElementById("senha").value;

    // Coloque aqui a senha desejada
    var senhaCorreta = "1";

    if (senhaDigitada === senhaCorreta) {
        // Redirecionamento para o outro site
        window.location.href = "https://www.mediafire.com/login/";
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}

// Preenchimento dos campos no outro site
document.getElementById("widget_login_email").value = "levicc28@gmail.com";
document.getElementById("widget_login_pass").value = "levi2812";

// Simular clique no botão de login
document.querySelector(".gbtnTertiary").click();
