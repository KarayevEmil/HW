//Найти суммы только положительных из трех чисел

var arr =  [4,-9,7]  

var sum = 0;
for(i=0; i<arr.length;i++){if(arr[i]>0){sum=sum+arr[i]}
}
console.log(sum);