function add (numbers){

    var numbers = numbers.replace(/\n|;|\/|\\|[.*]|[%]|[$]/g,",");

    if(numbers == "")
        return 0;

    if(numbers != '') {
        var numberArray = numbers.split(",");
        return sum(numberArray, ',');
        }
        
    else
        return parseInt(numbers);
    
}

function sum(numberArray){
    var total = 0;
    var negativeArr = [];

    for(var i=0; i < numberArray.length; i++) {
        total += parseInt(numberArray[i]);
        }

    return total;
}


module.exports = add;