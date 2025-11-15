let arr = [1,2,4,6,8]
let a1 = [23,43,53,63]
let a2 = [2,4,3,6]
let a3 = [22,44,33,88]
arr[0] = 555
console.log(arr,typeof arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[3])

console.log(arr.toString())  //for converting array to string

console.log(arr.pop())  // pop last element
console.log(arr)
console.log(arr.push(157))
console.log(arr)
console.log(arr.shift())  //shift popout first element
console.log(arr)
console.log(arr.unshift("kartik"))  //it add element at first
console.log(arr)

// console.log(arr.delete())  element got deleted but length should be same and value its is undefined shows

console.log(a1.concat(a2,a3)) //it does not change original array
console.log(arr.sort()) //confusion in it

console.log(arr.splice(1,3))
console.log(arr.splice(1,3,333,444)) //it splice and add 333,444
console.log(a1.slice(1,3))
console.log(a1.reverse   )