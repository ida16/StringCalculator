function add (numbers){

    var numbers = numbers.replace(/\n|;|\/|\\|[.*]|[%]|[$]/g,",");

    try {
    if(numbers == "")
        return 0;

    if(numbers != '') {
        var numberArray = numbers.split(",");
        return sum(numberArray, ',');
        }
        
    else
        return parseInt(numbers);
    }
    catch(errMessage) {
        return errMessage;
    }
    
}

function sum(numberArray){
    var total = 0;
    var negativeArray = [];

    for(var i=0; i < numberArray.length; i++) {
        total += parseInt(numberArray[i]);

        if(numberArray[i] < 0) {
            containsNegative = true;
            negativeArray.push(numberArray[i]);
            }
        }

        if(negativeArray.length != 0) {
            negativeNumbers(negativeArray);
        }        

    return total;
}

function negativeNumbers(negativeArray) {

    var errMessage = 'Negatives not allowed: ';
    for(var i = 0; i < negativeArray.length; i++) {
        errMessage += negativeArray[i]
        if(i != negativeArray.length - 1) {
            errMessage += ',';
        }
    }
    throw errMessage;
}
module.exports = add;