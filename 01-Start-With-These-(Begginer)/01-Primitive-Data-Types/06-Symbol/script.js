//                Symbol sempre representara um valor novo e unico                                                                        //
//                Symbol não é uma string, symbol é usado como um identificador interno                                                                                                 //


//            A função Symbol() criará um símbolo cujo valor permanece único durante toda a vida
                                        //útil do programa

let too = Symbol()
let loo = Symbol()

console.log(too)
console.log(loo)

console.log(too == loo)




//        métodos "Symbol.for()" e "Symbol.keyFor()" para definir e recuperar símbolos do registro global de
                                         //symbols
let oneSymbol = Symbol.for("name")
let TwoSymbol = Symbol.for("name")

console.log(oneSymbol == TwoSymbol)

console.log(Symbol.keyFor(TwoSymbol) == "name")



