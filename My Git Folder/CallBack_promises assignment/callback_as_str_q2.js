
function manipulateString(inputaStr,callback){

    const manipulatedString = inputaStr.toUpperCase();
    callback(manipulatedString);
    //return manipulatedString;
}

function logString(manipulatedString){
    console.log(`The manipulated string is ${manipulatedString}`);
}

manipulateString("sidharth shekhar",logString);
manipulateString("pw skills",logString);