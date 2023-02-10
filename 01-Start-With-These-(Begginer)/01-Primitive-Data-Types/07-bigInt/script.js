//                        O bigInt representa valores numericos que são muito grandes
//                              para serem representados em um number(primitivo)

const bigNumb = BigInt(1312312312115666)

console.log(bigNumb)

let newNumb = 131231231211566613123123121156661312312312115666 
//essa variavél em tipo number sera representada como(1.3123123121156661 e + 47 ao quadrado)

console.log(newNumb)



//Ja aqui usando o tipo primitivo bigInt nos teremos o valor completo
//Que cria e anexa um n no final do literal inteiro
newNumb = BigInt(131231231211566613123123121156661312312312115666)

console.log(newNumb)




const otherNumber = 3132919239911834194128193121389123n

console.log(otherNumber)//Anexando um n no final de um "number" nos criamos um valor bigInt