let num1 = prompt("Digite um números, por favor!")
let num2 = prompt("Digite outro números, por favor!")
console.log(num1)
console.log(num2)

resultado = num1 > num2
console.log("O primeiro numero é maior que segundo?:", resultado)

resultado = num1 == num2
console.log("O primeiro numero é igual ao segundo?:", resultado)

resultado = num1 / num2
resto = ((num1 % num2)==0)
console.log("O primeiro numero é divisível pelo segundo?:", resto )

resultado = num2 / num1
resto = ((num2 % num1)==0)
console.log("O segundo numero é divisível pelo primeiro?:", resto )