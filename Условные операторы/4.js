//Посчитать выражение (макс(а*б*с, а+б+с))+3

var a = 1
var b = 4
var c = 3

var sum = a+b+c
var multik= a*b*c

if (sum>multik){console.log(sum + 3);
}
else {console.log(multik+3);
}