function calcular() {
    // 1. Pega os valores que o usuário digitou na página
    let salario = parseFloat(document.getElementById('salario').value);
    let valorEmprestimo = parseFloat(document.getElementById('valor').value);
    let parcelas = parseInt(document.getElementById('parcelas').value);
    let resposta = document.getElementById('resultado');

    // 2. Validação: não pode ser zero ou negativo
    if (salario <= 0 || valorEmprestimo <= 0 || parcelas <= 0 || isNaN(salario)) {
        resposta.innerHTML = "Por favor, digite valores válidos!";
        resposta.style.color = "orange";
        return; 
    }

    // 3. Cálculos
    let valorDaParcela = valorEmprestimo / parcelas;
    let limite30PorCento = salario * 0.30;

    // 4. Verificação da regra da Plumas de Avalon
    if (valorDaParcela <= limite30PorCento) {
        resposta.innerHTML = "Empréstimo APROVADO! Parcela de R$ " + valorDaParcela.toFixed(2);
        resposta.style.color = "green";
    } else {
        resposta.innerHTML = "Empréstimo NEGADO! A parcela de R$ " + valorDaParcela.toFixed(2) + 
                             " é maior que o limite de R$ " + limite30PorCento.toFixed(2);
        resposta.style.color = "red";
    }
}

