// Создать персонажа игры-платформера. При нажатии на пробел - прыжок вверх на h пикселей. 
//При нажатии на стрелку -> передвижение персонажа на step пикселей в сторону (и остальные 
//стрелки) // event.keyCode

// Персонаж - это квадрат, имеющий размеры 100 на 100 пикселей. Прыжок - это анимация движения 
//объекта вверх на h пикселей и возврат в изначальное положение (до прыжка)

// При нажатии на CTRL персонаж должен "присесть" (уменьшиться в размерах по высоте на 40%, 
//по ширине - увеличится на 15%)

// Дополнительно: при зажатом CTRL персонаж может продолжать двигатся в ЛЕВО и ПРАВО! 
//(т.е. ВВЕРХ и ВНИЗ не работают, ПРОБЕЛ не работает)

const personage = document.querySelector('div')
const step = 50;
const h = 100;
let styles = window.getComputedStyle(personage);
console.log(styles.top);
personage.style.top = parseInt(styles.top) + 'px';
personage.style.left = parseInt(styles.left) + 'px';

function move(event) {
	switch(event.keyCode) {
		case 32: // jump, key space
			personage.style.top = parseInt(personage.style.top) - h + 'px'
			setTimeout(() => personage.style.top = parseInt(personage.style.top) + h + 'px', 500);
			break;
		case 37: // key left	
			personage.style.left = parseInt(personage.style.left) - step + 'px'
			break;
		case 38: // key up
			personage.style.top = parseInt(personage.style.top) - step + 'px';
			break;
		case 39: // key right
			personage.style.left = parseInt(personage.style.left) + step + 'px'
			break;
		case 40: // key down
			personage.style.top = parseInt(personage.style.top) + step + 'px';
			break;
        case 17: // key cmd
			personage.style.transform = 'scaleY(0.6) scaleX(1.15)'
			setTimeout(() => personage.style.transform = 'scaleY(1.0) scaleX(1.0)', 1000)
	}
}
document.addEventListener('keydown', move)