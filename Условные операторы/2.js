//Определить какой четверти принадлежит точка с координатами (х,у)

var x = prompt('Чему равен X ?');
var y = prompt('Чему равен Y ?');

if(x > 0 && y > 0) {console.log('Первая четверть');
} else if (x < 0 && y < 0 ) {console.log('Третяя четверть');
} else if (x > 0 && y < 0 ) {console.log(' Четвертая четверть');
} else if (x < 0 && y > 0){console.log('Вторая четверть');
}
else {console.log('Вне четверти');
}