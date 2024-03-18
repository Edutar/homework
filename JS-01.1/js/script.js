let kilometres = +prompt("Яку кількість кілометрів ти готовий бігати щодня?");
let wishtKilometres = +prompt("Яку кількість усіх кілометрів ти хочеш пробігти за місяць?");
if(wishtKilometres <= kilometres){
    alert('Ти зможеш пробігти усю заплановану дистанцію');
}else{
    var difference = wishtKilometres - kilometres;
    alert("Краще зменши сумарну кількість кілометрів на " + difference + "км" );
}