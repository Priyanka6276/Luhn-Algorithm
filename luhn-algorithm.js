function validCard (num) {
    //NUMBERS IN ARRAY, REVERSED
    let arr = (num+"")
    .split("")
    .reverse()
    .map(x => parseInt(x)) 

    //===========WORK ON NUMBERS THAT NEED TO BE DOUBLED AND MADE INTO SINGLE DIGITS=========

    //STARTING FROM THE 1ST NUMBER IN THE REVERSED ARRAY, EVERY OTHER NUMBER 
    let arr2 = arr.filter(function(v,i) {
        return i % 2 !== 0
    })
    //DOUBLE EACH NUMBER FROM arr2
    let doubleArr2 = arr2.map(y => y*2) 

    //MAKE THE DOUBLE DIGIT NUMBERS SINGLE DIGIT 
    let joinDoubleArr2 = doubleArr2.join("").split("").map(x => parseInt(x)) 

    // THE SUM OF INDIVIDUAL DIGITS IN doublearr2
    let sum = 0
    for (let i = 0; i < joinDoubleArr2.length; i++) {
        sum += joinDoubleArr2[i]
    }

    //======WORK ON NUMBERS THAT WERE NOT IN arr2==========
    let arr3 = arr.filter(function(v,i) {
        return i % 2 === 0
    })

    //SUM OF NUMBERS IN arr3
    let sum1 = 0
    for (let i = 0; i < arr3.length; i++) {
        sum1 += arr3[i]
    }
    //=========ADDING THEM ALL TOGETHER AND VALIDATING STEP==========
    let sumAll = sum + sum1

    if(sumAll % 10 === 0) {
        return true
    } else {
        return false
    }


    // console.log(arr2, notDoubledArr)

}

console.log(validCard(1234567890123456))
console.log(validCard(4408041234567893))
console.log(validCard(38520000023237))
console.log(validCard(4222222222222))