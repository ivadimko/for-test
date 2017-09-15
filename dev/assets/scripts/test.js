"use strict"
/*
																			Циклы
		Цикл - это многократное повторение одного участка кода, например "подсчет от 1 до 10".
		Повторение цикла по-научному называется «итерация»

		Каждый цикл имеет "условие цикла" (логическое сравнение) и "тело цикла" (исполняемый код).
		Если "условие" возвращает значение "TRUE", то "тело" выполняется.

*/


						// ----------- Простой пример цикла while ----------- \\

/*var i = 0;
while (i < 3) { //условие, возвращает TRUE, если i меньше чем 3
  console.log( i ); //
  i++;						//	тело цикла				
}*/
			//Простыми словами:
				//-Задаем переменной i значение 0
				//-Если i<3, выводим в консоль значение i
				//-Прибавляем единицу к i (i+1)


/*
					Стоит обратить внимание, что условие проверяется ПЕРЕД выполнением итерации
*/
							// ----------- Простой пример цикла do ... while ----------- \\
/*
var i = 0;
do {
  console.log( i );
  i++;
} while (i > 3);*/

/*
					В данном цикле условие проверяется ПОСЛЕ выполнения итерации
					По-этому цикл выполнится минимум 1 раз, даже если УСЛОВИЕ возвращает FALSE
*/

							// ----------- Простой пример цикла for ----------- \\


/*for (let i = 0; i < 3; i++) {
  console.log(i); //Выведет в консоль числа 0,1,2
}*/

/*
					Логика работы циклов while и for очень похожа, но у for форма записи проще
*/
				// ------ Пример работы с DOM с помощью циклов for & while ------ \\

/*var elem = document.querySelectorAll('.button'),
		count 	 = elem.length;
console.log(elem);
for (var i = 0; i < count; i++) {
	console.log(elem[i]);
	elem[i].setAttribute('name', 'super button №' + (i+1));
	elem[i].onclick = () => console.log('Вы кликнули на кнопку');
}*/




/*		i = 0;
while (i < elem.length) {
	console.log(elem[i]);
	elem[i].setAttribute('name', 'super button №' + (i+1));
	elem[i].onclick = () => console.log('Вы кликнули на кнопку ');
	i++;
}*/



						// ------ Немного массивов никогда не помешает ------ \\
											// ------ forEach & for ... in ------ \\
/*
					forEach перебирает каждый элемент массива и представляет его в виде отдельной переменной
*/
/*
var arr = ['a', 'b', 'c'];
arr.forEach(function(element) {
    console.log(element);
}); //Выведет по очереди a, b, c

*/
											// ------ Использование с DOM ------ \\
/*var elem 	= document.querySelectorAll('.button');
elem.forEach(function (innerButton, i, elem) {
	elem[i].setAttribute('name', 'super button №' + (i+1));
	innerButton.onclick = () => console.log('Вы кликнули на кнопку ' + innerButton.getAttribute('name'));
});*/


/*
					for ... in перебирает свойства массива
*/
											// ------- Пример цикла for ... in ------- \\
/*
var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

for (var key in menu) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет имя свойства и его значение

  console.log( "Ключ: " + key + " значение: " + menu[key] );
}
*/

							// ------- Пример перебора свойств реального объекта ------- \\

/*
var element = document.querySelector('#test'), //наш div с "Hello World"
		counter = 0; //пригодится позже
console.log(element);
element.draggable = true;  //и это позже
for (var key in element) {
	counter++; //при каждой итерации (вывод свойства) увеличиваем counter на 1
	console.log(key + ' = ' + element[key]);  //в key пишется имя свойства, в element[key] - значение
	}
	console.log('total = ' + counter); //посчитали количество записей в массиве

*/


							// ------- Пример прерывания цикла (break) ------- \\
/*
var sum = 0;
while (true) { //запускаем бесконечный цикл
  var value = +prompt("Введите число", ''); //вводим числа
  if (!value) break; 												//если ничего не ввели - прерываем цикл
  sum += value; 														//считаем сумму введенных чисел
}
console.log( 'Сумма: ' + sum ); 						//показываем сумму введенных чисел

*/
							// ------- Пример прерывания итерации (continue) ------- \\
/*for (var i = 0; i < 10; i++) {

  if (i % 2 == 0) continue; //если остаток от деления = 0, запускаем цикл по новой
  													//вывод в консоль не приизведется
  console.log(i);
}
*/
									// ------- Другая форма записи continue ------- \\
/*for (var i = 0; i < 10; i++) {
  if (i % 2) { // остаток от деления больше 0? результат True, делаем console.log
  	//если остаток от деления = 0, то False, начинаем следующую итерацию
    console.log( i );
  }
}
*/
														// ------- Метки ------- \\

/*nextPrime:
  for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime; //внутренний цикл прерывает итерацию внешнего
    }
    console.log( i );
  }
*/


 								// ------- Конструкция switch ... case ... ------- \\
/*
					Конструкция switch - case по принципу работы напоминает много вложенных
					друг в друга проверок if ... else ... 
					В данном случае требуется соблюдать строгую типизацию вводимых данных.
*/
/*
var a = +prompt('2 + 2', ''); //вводим значение

switch (a) {
  case 1: //если равно 1 или 2, выполнится код ниже (до метки break!)
  case 2:
  	console.log( 'Cовсем мало' );
    break; //если тут не будет brake, код пойдет еще ниже

  case 3:
    console.log( 'Маловато' );
    break; //и ниже
  case 4:
    console.log( 'В точку!' );
    break; //никогда не убирайте break, если хотите правильно прервать цикл
  case 5:
    console.log( 'Перебор' );
    break; //даже в конце, вдруг понадобится добавить еще 1 case и Вы забудете про break?
  default: //default выполняется, когда полученное значение не соответсвует ни одному case
    console.log( 'Я таких значений не знаю' );
}
*/
/*yuratest();

function yuratest() {
	var name 				= prompt('Введите имя', ''),
			number			= +prompt('Введите число до 20', ''),
			height			= +prompt('Введите Ваш рост'),
			check				=	confirm('Исполнить без проверки?');
							
							//Chek Number & Height for "Number value" 
	if (isFinite(number) && isFinite(height)) { 
								//Check main condition
		if (check || ((number > 0 && number <= 20) && ((height/5) >= 30))) {
			console.log('Длина имени ' + name + ' = ' + name.length)
		} else {console.log('Имя: ' + name + '\n' + 'Рост: ' + height);}
	} else {console.log('В поле Рост и(или) Число нужно вводить ЧИСЛО');}
}*/