module.exports = {
    /**
     * @returns an array of words for each number, in the order given.
     */
    "getNumberAsWords": (num) =>{
        let numStr = num.toString().split('');
        let result = [];

        for (i=0; i< numStr.length; i++){
            result[i] = getAsWord(numStr[i]);
        }

        return result;
    }
}

function getAsWord(num){
    switch(num){
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        case '0': return 'zero';
    }
}