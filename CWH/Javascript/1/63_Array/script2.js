let a = [12,15,22,35,46]

// for each loop
a.forEach ((value,index,arr)=>{
console.log(value,index,arr)
})

//for in loop
// let object={
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key,element)
        
//     }
// }

// for of looop
for (const element of a) {
    console.log(element)
}
