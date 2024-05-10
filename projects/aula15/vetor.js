let valores = [4, 5, 23, 4, 5, 1, 1, 8]

/* for (let pos = 0; pos < valores.length; pos++) {
    console.log(valores[pos])

    jeito tradicional
} */ 

// let pos = num.indexOf(23) esse codigo pode ser usado para pesquisar as posicoes de valores em arrays e se o valor n for encontrado ele retorna -1

for(let pos in valores) {
    console.log(valores[pos])
}