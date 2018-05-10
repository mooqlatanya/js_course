const arr1 = [1, 13, -3, 0];

function arraySum(array){
	var sum = 0;
for(var i = 0; i < array.length; i++){
sum += array[i];
}
console.log(sum);
}
arraySum(arr1);

function average() {
var sum = 0;
for (var i = 0; i < arguments[i]; i++ ) sum += arguments[i];
return sum == 0 ? sum : sum / arguments.length;
}
console.log( average( 1, 13, -3, 0) );

var maxNum = [1, 13, -3, 0];

for (var i = 0; i < maxNum.length; i++) {
    if(maxNum[i] > maxNum[0]){
        maxNum[0] = maxNum[i];
    }

}
console.log(maxNum[0]);

var minNum = [1, 13, -3, 0];

for (var i = 0; i < minNum.length; i++) {
    if(minNum[i] < minNum[0]){
        minNum[0] = minNum[i];
    }

}
console.log(minNum[0]);

const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };
let arr2 = obj1['value'], arr3 = [];

for (j = obj1['from']; j <= obj1['to']; j++) {
	if (j == obj1['ignore']) continue;
	arr3.push(arr2[j]);
}

console.log(arr3.join(', '))