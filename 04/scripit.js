// Função para calcular o frete (Fórmula Telles Transportes)
function calcularFrete(peso, distancia, volume) {
    let frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume);
    return frete;
}

// Execução dos Casos de Teste

// Caso 1
let peso1 = 10;
let distancia1 = 100;
let volume1 = 2;
let resultado1 = calcularFrete(peso1, distancia1, volume1);
console.log(`Teste 1 -> Peso: ${peso1}kg, Distância: ${distancia1}km, Volume: ${volume1}m³ | Frete: R$ ${resultado1.toFixed(2)}`);

// Caso 2
let peso2 = 5;
let distancia2 = 50;
let volume2 = 1;
let resultado2 = calcularFrete(peso2, distancia2, volume2);
console.log(`Teste 2 -> Peso: ${peso2}kg, Distância: ${distancia2}km, Volume: ${volume2}m³ | Frete: R$ ${resultado2.toFixed(2)}`);

// Caso 3
let peso3 = 20;
let distancia3 = 200;
let volume3 = 5;
let resultado3 = calcularFrete(peso3, distancia3, volume3);
console.log(`Teste 3 -> Peso: ${peso3}kg, Distância: ${distancia3}km, Volume: ${volume3}m³ | Frete: R$ ${resultado3.toFixed(2)}`);


