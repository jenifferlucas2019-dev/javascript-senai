function verificar() {
    let numeroMarujos = parseInt(document.getElementById('marujos').value);
    let quantidadeDeComida = parseFloat(document.getElementById('comida').value);
    let campoResultado = document.getElementById('resultado');

    
    if (numeroMarujos >= 10 && (quantidadeDeComida / numeroMarujos) >= 1.5) {
        campoResultado.innerText = "Provisões suficientes. Rumo ao horizonte! 🌊";
        campoResultado.style.color = "green";
    } else {
        campoResultado.innerText = "Algo está errado. Posseidom não quer ninguém no mar hoje. 🔱";
        campoResultado.style.color = "red";
    }
}
