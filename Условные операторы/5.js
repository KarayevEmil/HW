//Написать программу определения оценки студента по его рейтингу, на основе следующих правил


// 0-19
// F
// 20-39
// E
// 40-59
// D
// 60-74
// C
// 75-89
// B
// 90-100
// A

var rating = 100;

if (rating<= 19){console.log('ваша оценка F');
} 

else if( rating >=20 && rating<=39){console.log('ваша оценка E');
} 

else if (rating>=40 && rating<=59){console.log('ваша оценка D');
}

else if (rating>=60 && rating<=74){console.log('ваша оценка C');
}

else if (rating>=75 && rating<=89){console.log('ваша оценка B');
}

else if (rating>=90 && rating<=100){console.log('ваша оценка A');
}

else {console.log('не гунди! так не бывает');
}