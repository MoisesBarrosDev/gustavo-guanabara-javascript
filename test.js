let salario = 1500.32 * 100

let salarioFormatado = salario / 100

const money = salarioFormatado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

console.log(money)