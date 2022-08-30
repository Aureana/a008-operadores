let num1 = prompt("Digite um números, por favor!")
let num2 = prompt("Digite outro números, por favor!")
console.log(num1)
console.log(num2)

resultado = num1 > num2
console.log("Atenção a opção é:", resultado)

resultado = num1 == num2
console.log("Atenção a opção é:", resultado)

resultado = num1 / num2
resto = ((num1 % num2)==0)
console.log("Atençã é divisivel por 2:", resto )

resultado = num2 / num1
resto = ((num2 % num1)==0)
console.log("Atençã é divisivel por 2:", resto )