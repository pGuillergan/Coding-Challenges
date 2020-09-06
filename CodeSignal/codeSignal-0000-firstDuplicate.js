

function firstDuplicate(a) {
    
    // let temp = []
    
    // for(let i = 0; i <a.length ;i++){
    //     if(temp.length ===0){
    //         temp.push(a[i])
    //     }else{
    //         for(let j = 0; j < temp.length ;j++){
    //             if( temp[j] === a[i] )
    //             {
    //                 return a[i]
    //             }
    //         }
    //         temp.push(a[i])
    //     }
            
        
    // }
    
    // for (let i of a) {
    //     let posi = Math.abs(i) - 1
    //     console.log(` for i: ${i}, posi is ${posi}`)
    //     if (a[posi] < 0) return posi + 1
    //     a[posi] = a[posi] * -1
    //     console.log(a)
    //   }
    
    //   return -1


    for (let i = 0; i < a.length; i++) {
        const val = Math.abs(a[i]);
        // console.log(a)
        // console.log( "a[i]: " + a[i])
        // console.log("val: " + val)
        // console.log("a[val - 1]: " + a[val - 1])

        if (a[val - 1] < 0) return val;
        a[val - 1] = -a[val - 1];

        console.log(a)
        console.log("------")
      }
      return -1;
}

let a = [2, 1, 3, 5, 3, 2]
// let a = [1, 2, 3, 4, 3, 2, 1]

console.log( firstDuplicate(a) )