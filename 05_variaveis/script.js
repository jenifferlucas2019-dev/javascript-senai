// Variável global para guardar a soma de todas as rolagens
let pontuacaoTotal = 0;
// Pegando os elementos do HTML que vão mudar na tela
const totalDisplay = document.getElementById('totalDisplay');
const logDisplay = document.getElementById('logDisplay');

// Função principal que recebe o número de lados do dado por parâmetro
function rolarDado(lados) {
    // A lógica matemática que o senhor passou:
    // Math.random() gera de 0 a 0.99... multiplicado pelos lados
    // Math.floor() joga o que sobrar pra baixo e o +1 garante que nunca dê zero
    const resultado = Math.floor(Math.random() * lados) + 1;
    pontuacaoTotal += resultado;
    totalDisplay.textContent = pontuacaoTotal;
    logDisplay.textContent = `Você rolou 1D${lados} e tirou: ${resultado}`;
}
function zerarPontuacao() {
    pontuacaoTotal = 0;
    totalDisplay.textContent = 0;
    logDisplay.textContent = "Placar zerado!";
}
