// Exemplo de interação com a barra de busca
document.querySelector('.search-btn').addEventListener('click', () => {
    const texto = document.querySelector('.search-box input').value;
    alert("Tu buscou por: " + texto);
});
