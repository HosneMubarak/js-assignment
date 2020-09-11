//Problem-1
function feetToMile(feet) {
    let mile = feet * 0.00018939393;
    return mile;
}

console.log(feetToMile(100))

//Problem-2
function woodCalculator(table, chair, khat) {
    let table_cubic = table*1;
    let chair_cubic = chair*3;
    let khat_cubic = khat*5;
    let total_cubic = table_cubic+chair_cubic+khat_cubic;
    return total_cubic;
}

console.log(woodCalculator(1,1,1))

//Problem-3
let count = 0;
let first_ten = 0;
let secont_ten = 0;
let rest_feet = 0;
function brickCalculator(buildingFeet) {
    for (let index = 0; index < buildingFeet; index++) {
        count+=1;
        if(count<=10){
            first_ten++;
        }
        if (count>10 && count<=20) {
            secont_ten++;
        }
        if(count>20){
            rest_feet++;

        }
    }
    let result = first_ten*15000 + secont_ten*12000 + rest_feet*10000;
    return result;
}
console.log(brickCalculator(80))

// Problem-4
function tinyFriend(arr) {

    let shortest = null;

    if(arr.length > 0){
        for(let i = 0; i < arr.length; i++){
           if(typeof arr[i] === 'string'){
                if(shortest == null)
                    shortest = arr[i];
                else if(arr[i].length < shortest.length){
                    shortest = arr[i];
                }
            }
        }
    }
    return shortest;
}

console.log(tinyFriend(['tass', 'twomir', 'mskvlog', 'three']));