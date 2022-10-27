const coffees = ["Врото", "Влад", "Хомяк", "Кисель", "Некра", "Ярик", "Лаза"];
const coffeeName = prompt("Запущена программа ВротоЧек - проверка на петуха, лоха и бабу. Введите имя:  ").trim().toLowerCase();

const searchedLatte = coffees.findIndex((coffee) =>{
    return coffee === "Latte"
})
const searchedAmericano = coffees.findIndex((coffee) =>{
    return coffee === "Americano"
})
const searchedCappuccino = coffees.findIndex((coffee) =>{
    return coffee === "Cappuccino" 
})

if(coffeeName.trim().toLowerCase() === coffees[1].trim().toLowerCase()) {
    alert (`Молодой человек ${coffees[1]} является приятнейшим парнем, пусть и болеет за полную хуету`)
}else if(coffeeName.trim().toLowerCase() === coffees[2].trim().toLowerCase()) {
    alert (`Молодой человек ${coffees[2]} явлется приятнейшим парнем, пусть и слегка жирным`)
}else if(coffeeName.trim().toLowerCase() === coffees[3].trim().toLowerCase()) {
        alert (`Молодой человек ${coffees[3]} является приятнейшим парнем, пусть и много дрочит`)
}else if(coffeeName.trim().toLowerCase() === coffees[4].trim().toLowerCase()) {
    alert (`Молодой человек ${coffees[4]} является приятнейшим парнем, пусть и забил на чат`)
}else if(coffeeName.trim().toLowerCase() === coffees[0].trim().toLowerCase()) {
    alert (`Поздравляем, вы угадали! ${coffees[0]} является петухом, лохом и бабой!`)
}else if(coffeeName.trim().toLowerCase() === coffees[5].trim().toLowerCase()) {
    alert (`Молодой человек ${coffees[5]} является притнейшим парнем, пусть и живет во вражеской Польше`)
}else if(coffeeName.trim().toLowerCase() === coffees[6].trim().toLowerCase()) {
    alert (`Молодой человек ${coffees[6]} является притнейшим парнем, пусть и имеет ужасное прошлое`)
}else {
    alert ("К сожалению, проверяемый не найден, но мы знаем, что он тоже петух, лох и баба")
}