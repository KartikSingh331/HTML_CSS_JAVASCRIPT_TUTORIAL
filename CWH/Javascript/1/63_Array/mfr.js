let arr = [11,22,33,44,55]

//let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
      
       //itna krne kai jgh sidhe map function use kre

let newArr =arr.map((e)=> {
    return e**2
}  )     
console.log(newArr)

//function
const greaterThanSeven = (e)=> {
    if(e>7){
        return true
    }
    return false
}
console .log(newArr.filter(greaterThanSeven))

let a1 = [23,43,53,63]
const red = (a,b)=>{
    return a*b
}
console.log(a1.reduce(red))
 
// making an array from string
console.log(Array.from("kartik"))
