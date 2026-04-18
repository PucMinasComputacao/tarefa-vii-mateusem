// ===== DADOS INICIAIS =====

let nome = prompt("Digite seu nome:");

let renda = Number(prompt("Digite sua renda mensal: "));

// Validação da renda
while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido. Digite sua senha novamente:"));
}

// ===== QUANTIDADE DE DESPESAS =====

let quantidade = Number(prompt("Quantas despesas deseja informar? (1 a 5)"));

// Validação
while (isNaN(quantidade)) {
    quantidade = Number(prompt("Digite um número válido entre 1 e 5:"));
}

//Limite entre 1 e 5
if (quantidade < 1) {
    quantidade = 1;
} else if (quantidade > 5) {
    quantidade = 5;
}

// ===== DESPESAS =====

let totalDespesas = 0;

for (let i = 1; i <= quantidade; i++) {
    let despesa = Number(prompt(`Digite o valor da despesa ${i}:`));

    // Validação
    while (isNaN(despesa)) {
        despesa = Number(prompt(`Valor inválido. Digite a despesa ${i} novamente:`));
    }

    totalDespesas += despesa;
}

// ===== ANÁLISE =====

let sobra = renda - totalDespesas;
let mensagem = "";

if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    let percentual = sobra / renda;

    if (percentual >= 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}