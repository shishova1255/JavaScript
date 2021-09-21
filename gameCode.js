var record = [];
function isAnswer (q, scene) {
    if (isNaN(scene) || !isFinite(scene) ) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (scene < 1 || scene > q) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
    return true;
}

function answer(question, answer1, answer2) {
    var ok = false;
    do {
        scene = +prompt(question + answer1 + answer2 + '-1 - Выход из игры');
        if (scene == -1) {
            break;
        } else {
            ok = isAnswer(works.a0, scene);
        }
    } while (!ok);
        switch(scene) {
        case 1: record.push( [question, answer1] );
            break;
        case 2: record.push( [question, answer2] );
            break;
        case 3: record.push( [question, 'Вы вышли из игры.'] );
            break;
    }
    return scene;
}

switch (answer(works.a00, works.a1, works.a2) ) {
    case 1:
        switch (answer(works.b00, works.b1, works.b2) ) {
            case 1:
            case 2:
                answer(works.d00, works.d1, works.d2);
                break;
            case -1:
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2:
        switch (answer(works.c00, works.c1, works.c2) ) {
            case 1:
            case 2:
                answer(works.d00, works.d1, works.d2);
                break;
            case -1:
                break;
            default:
                alert('Ошибка');
        }
        break;
}
alert('Спасибо за игру');
console.log(record);
var step = +prompt('Введите номер хода');
console.log(step);
var stepHistory = 'В ходе ' + step + ' ' + record[step-1][0] + 'Ваш выбор ' + record[step-1][1];
alert(stepHistory);

