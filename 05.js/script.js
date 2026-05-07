// Função que será chamada quando o usuário clicar no botão
function analisarEmprestimo() {
    // 1. Captura os valores dos campos do formulário
    // Usamos parseFloat para números decimais e parseInt para números inteiros
    const salario = parseFloat(document.getElementById('salario').value);
    const valorEmprestimo = parseFloat(document.getElementById('valor').value);
    const numPrestacoes = parseInt(document.getElementById('prestacoes').value);
    
    // Elemento onde vamos exibir a resposta para o colaborador
    const campoResultado = document.getElementById('resultado');

    // 2. Validação: Nenhum dos valores pode ser zero ou negativo
    if (salario <= 0 || valorEmprestimo <= 0 || numPrestacoes <= 0 || isNaN(salario)) {
        campoResultado.innerHTML = "⚠️ Erro: Informe apenas valores positivos e maiores que zero.";
        campoResultado.style.color = "red";
        return; // Para a execução aqui se houver erro
    }

    // 3. Cálculo da prestação (A empresa não cobra juros)
    const valorDaPrestacao = valorEmprestimo / numPrestacoes;
    
    // 4. Cálculo do limite (30% do salário)
    const limitePermitido = salario * 0.30;

    // 5. Verificação da regra de negócio
    if (valorDaPrestacao <= limitePermitido) {
        // Empréstimo aprovado
        campoResultado.innerHTML = `✅ Empréstimo Concedido!<br>
                                    Prestação: R$ ${valorDaPrestacao.toFixed(2)}`;
        campoResultado.style.color = "green";
    } else {
        // Empréstimo reprovado
        campoResultado.innerHTML = `❌ Empréstimo Negado.<br>
                                    A parcela de R$ ${valorDaPrestacao.toFixed(2)} excede 30% do seu salário.`;
        campoResultado.style.color = "red";
    }
}
