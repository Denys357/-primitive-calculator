//						 Task 1


let calc = prompt("Введите действие.");
if (calc.includes("+")) {
let plus = calc.indexOf("+");
console.log(plus);
let number_1 = calc.slice(0, plus);
console.log(number_1);
let number_2 = calc.slice((++plus), 100000000);
console.log(number_2);
let results = +number_1 + +number_2;
alert(results);
}
else if (calc.includes("-")){
	let plus = calc.indexOf("-");
	console.log(plus);
	let number_1 = calc.slice(0, plus);
	console.log(number_1);
	let number_2 = calc.slice((++plus), 100000000);
	console.log(number_2);
	let results = +number_1 - +number_2;
	alert(results);
}
else if (calc.includes("*")) {
	let plus = calc.indexOf("*");
	console.log(plus);
	let number_1 = calc.slice(0, plus);
	console.log(number_1);
	let number_2 = calc.slice((++plus), 100000000);
	console.log(number_2);
	let results = +number_1 * +number_2;
	alert(results);
}
else if (calc.includes("/")) {
	let plus = calc.indexOf("/");
	console.log(plus);
	let number_1 = calc.slice(0, plus);
	console.log(number_1);
	let number_2 = calc.slice((++plus), 100000000);
	console.log(number_2);
	let results = +number_1 / +number_2;
	alert(results);
}
else {
	alert("???");
}





// 						Task 2
// let numberA = Number(prompt("Введите первое число"));
// let numberB = Number(prompt("Введите второе число"));

// if (numberA > numberB && numberA < numberB + 5 ) {
// 	numberA = numberA ** 5;
// 	console.log(numberA);
// }
// else if (numberA > numberB && numberA > numberB + 5) {
// 	numberB = numberB ** numberA;
// 	console.log(numberB);
// }
// else if (numberA === numberB) {
// 	let sum = numberA + numberB;
// 	console.log(sum);
// }
// else {
// 	alert("???");
// }


			// Task 3

// let tel = prompt("Введите ваш номер телефона");
// let operator = tel.slice(3 , 6);
// alert(operator);















