
let num = prompt("ведите число")

if (num ==="0"){
    alert("это ноль")
} else if(num === ""){
    alert("ничего не ввел")
} else if(num === null){
    alert("отмена")
} else if(num < 0){
    alert("отрицательный")
} else if(num > 0){
    alert("пололжительное")
} else{
    alert("ведите число")
}