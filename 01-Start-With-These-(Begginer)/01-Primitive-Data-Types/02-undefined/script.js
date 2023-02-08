let vazio 

// Uma variavel sem valor (vazia), sera atribuida pelo undefined

console.log(vazio)
console.log(vazio - 3)
console.log(`Ola ${vazio}`)


// undefined pode ser usado com comparadores de igualdade 

let x

if(vazio === x){
  console.log(`Hello ${x}`)
}

if(typeof x === "undefined"){
  console.log(`O x é ${x}`)
  // esse código é executado sem erros
}


if(typeof y === undefined){
  console.log(`O y é ${y}`)}
  // esse código é executado e retorna o else
  else {
    console.log("Hello")
  }


// se a variavel y não for atribuida

// if(y === undefined){
//   console.log(`O y é ${y}`)}
//   // esse código é executado e lança um erro para o Referencer x
//   else {
//     console.log("Hello")
//   }


  if(typeof y === undefined){
    console.log(`O y é ${y}`)}
    // esse código dara erro y não esta definido
    else {
      console.log("Hello")
    }


if(typeof y === undefined){
  console.log(`O y é ${y}`)}
  // esse código é executado e retorna o else
  else {
    console.log("Hello")
  }



//   void operator

// O operador void avalia a expressão dada e, em seguida, retorna undefined.



let w 

if(w === void 0){
  // esse código é executado
  console.log("Hey World")

}



if(r === void 0){
  // esse código não é executado
  console.log("Hey World Two")}
