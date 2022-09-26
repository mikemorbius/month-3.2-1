const a = +prompt("Введите число: ") 
const first = Math.floor(a/10) 
const second = a-first*10
alert("Сумма цифр числа: "+(first+second))