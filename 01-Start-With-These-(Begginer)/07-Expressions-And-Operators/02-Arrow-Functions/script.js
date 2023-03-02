// arrow function é uma função anonimâ que precisa ser definida
// junto de uma constante

const anonimyFunc = () => {

}



// arrow function sem return mas retorna

const digit = (num1, num2 ) => num1 + num2;

console.log(digit(4,2))



// arrow function sem parâmetros 

const noParameters = () => "noParameters";



// arrow function com só um parametro

const onlyOne = numb1 => numb1 + 1;

console.log(onlyOne(2))



// parâmetro que anula a sintaxe ()

const twoDigits = _ => _ + ".";

console.log(twoDigits("hello World"))



// não é possivel retornar um valor sem return a partir do momento que você use o {}
// da função, por exemplo:


const pokemon = () => {name: "pikachu"};

console.log(pokemon())



// Podemos chamar uma função com um objeto/Json da seguinte maneira

const poke = () => (
  {name: "Pikachu",
   type: "thunder"
  }
)

console.log(poke())



// IIFE

(function () {
  const Poke = () => ({type: "physic", name: "gynger"})

  console.log(poke)
}())

