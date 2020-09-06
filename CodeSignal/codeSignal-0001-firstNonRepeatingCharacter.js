

function firstNotRepeatingCharacter(s) {
    
    strArr = s.split("");
 
    strDict = {}

    console.log(strArr.length)

    for(let i = 0; i < strArr.length ;i++){
        if ( strDict.hasOwnProperty(strArr[i]) ){
            strDict[ strArr[i] ] +=1 
        }else{
            strDict[ strArr[i] ] = 1 
        }
        
    }
    console.log(strDict)

    for(var k in strDict){
        console.log(strDict[k])
        if (strDict[k] == 1){
            return k;
        }
    }
    
    return '_';
}

let str = "abacabad";

// console.log("hello")
console.log( firstNotRepeatingCharacter(str) )