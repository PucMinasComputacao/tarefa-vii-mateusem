// ===== DADOS INICIAIS =====

let nome = prompt("Digite seu nome:");

let renda = Number(prompt("Digite sua renda mensal: "));

// Validação da renda
while (isNaN(renda)) {
    renda = Number(prompt("Quantas despesas deseja informar? (1 a 5)"));
}
