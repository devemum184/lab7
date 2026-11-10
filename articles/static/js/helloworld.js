var groupmates = [
    {
        "name": "Александр",
        "surname": "Иванов",
        "group": "БВТ1702",
        "marks": [4, 3, 5]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "group": "БСТ1702",
        "marks": [4, 4, 4]
    },
    {
        "name": "Кирилл",
        "surname": "Смирнов",
        "group": "БАП1801",
        "marks": [5, 5, 5]
    }
];
var rpad = function(str, length) {
    str = str.toString();
    while (str.length < length) {
        str = str + ' ';
    }
    return str;
};

var printStudents = function(students) {
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
    );
    for (var i = 0; i < students.length; i++) {
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['surname'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n');
};

var filterByGroup = function(students, group) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i]['group'] === group) {
            result.push(students[i]);
        }
    }
    return result;
};

var filterByAverage = function(students, threshold) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        var marks = students[i]['marks'];
        var sum = 0;
        for (var j = 0; j < marks.length; j++) {
            sum += marks[j];
        }
        var avg = sum / marks.length;
        if (avg > threshold) {
            result.push(students[i]);
        }
    }
    return result;
};

printStudents(groupmates);

var groupInput = prompt("Введите группу для фильтрации:");
console.log("Студенты группы " + groupInput + ":");
printStudents(filterByGroup(groupmates, groupInput));

var avgInput = parseFloat(prompt("Введите средний балл для фильтрации:"));
console.log("Студенты со средним баллом выше " + avgInput + ":");
printStudents(filterByAverage(groupmates, avgInput));

console.log(groupmates);