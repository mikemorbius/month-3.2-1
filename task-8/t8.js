const N = +prompt("Введите время в секундах: ") 
const minute = Math.floor(N/60) 
const hour = Math.floor(minute/60)
alert("Время в минутах: "+minute+"\nВремя в часах: "+hour)