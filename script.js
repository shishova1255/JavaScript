var number = prompt('Введите число от 0 до 999');
var numberLen = number.length;
var object = {};
numberToObj(number);

function numberToObj(number) {
    if(number < 0 || number > 999) {
        console.log('Введите корректное число');
    } else {
        switch(numberLen) {
            case 3:
                object['Сотни'] = number[0];
            case 2:
                object['Десятки'] = number[1];
            case 1:
                object['Единицы'] = number[2];  
        }
        console.log (object);
    }
}
