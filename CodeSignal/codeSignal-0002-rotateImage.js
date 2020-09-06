function rotateImage(a) {

    const width = a[0].length
    const height = a.length
    const area = width*height

    let rotated = new Array(height).fill(0).map(() => new Array(width).fill(0));

    console.log(width)
    console.log(height)

    for (let i = 0; i < area; i++){
        let x = Math.floor(i/height)
        let y = i%width
        console.log( `X: ${x} y: ${y} val: ${a[x][y]}` )
        
        rotated[ y ][ height - 1 - x ] = a[x][y]

    }
    return rotated
}

var a = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]


console.log(a)
console.log(rotateImage(a))