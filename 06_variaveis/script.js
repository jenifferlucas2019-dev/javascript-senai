
const jogoDino = {
    totalArrecadado: 1000, // Começa com mil reais de fundo pro jogo rodar
    listaDinos: ['T-Rex', 'Triceratops', 'Velociraptor', 'Diplodoco', 'Pterodactilo', 'Estegossauro', 'Anquilossauro', 'Espinossauro', 'Braquiossauro', 'Iguanodonte']
};

// Pegando os elementos do HTML que vou manipular
const campoAposta = document.getElementById('valorAposta');
const txtCaixa = document.getElementById('caixaBancaDisplay');
const txtResultado = document.getElementById('resultadoLog');

// Mostra o saldo inicial na tela formatado
txtCaixa.textContent = `R$ ${jogoDino.totalArrecadado.toFixed(2)}`;

function jogar(dinoEscolhido) {
    const valorAposta = parseFloat(campoAposta.value);

    // Validação para o usuário não tentar zoar o input
    if (isNaN(valorAposta) || valorAposta <= 0) {
        txtResultado.textContent = "❌ Digita uma aposta válida aí!";
        return;
    }

    // O dinheiro da aposta entra na hora pro caixa da Dona Bete
    jogoDino.totalArrecadado += valorAposta;
    
    //  Calcula quanto ela teria que pagar (dobro) e o limite seguro (20% do caixa)
    const premio = valorAposta * 2;
    const limiteSeguro = jogoDino.totalArrecadado * 0.20;

    // Sorteia um dinossauro aleatório do array (índice de 0 a 9)
    let indiceSorteado = Math.floor(Math.random() * jogoDino.listaDinos.length);
    let dinoSorteado = jogoDino.listaDinos[indiceSorteado];

     //A REGRA DE OURO DA DONA BETE 🥸
    // Se o jogador acertou, mas o prêmio vai estourar os 20% do arrecadado...
    if (dinoEscolhido === dinoSorteado && premio > limiteSeguro) {
        // A máquina "rouba" de leve: muda o índice pro próximo dino do array pro cara errar!
        indiceSorteado = (indiceSorteado + 1) % jogoDino.listaDinos.length;
        dinoSorteado = jogoDino.listaDinos[indiceSorteado];
    }

    
    if (dinoEscolhido === dinoSorteado) {
        // Se passou pela regra, ele ganha e o dinheiro sai do caixa
        jogoDino.totalArrecadado -= premio;
        txtResultado.textContent = `🎉 Deu sorte! O sorteado foi ${dinoSorteado}. Você ganhou R$ ${premio.toFixed(2)}!`;
    } else {
        // Se errou (ou foi forçado a errar kkkk) a banca fica com a grana
        txtResultado.textContent = `😢 Deu ruim! O sorteado foi ${dinoSorteado}. A banca agradece!`;
    }


    txtCaixa.textContent = `R$ ${jogoDino.totalArrecadado.toFixed(2)}`;
}
