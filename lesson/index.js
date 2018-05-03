var myAge = 21;

var year = 'лет';

	if ((myAge % 100) >= 5 && (myAge % 100) <=20)
		(year = 'лет')

	if ((myAge % 10) == 1)
		(year = 'год')

	else if ((myAge % 10) >= 2 && (myAge % 10) <= 4) 
		(year = 'года')

alert(`Мой возраст ${myAge} ${year}`);