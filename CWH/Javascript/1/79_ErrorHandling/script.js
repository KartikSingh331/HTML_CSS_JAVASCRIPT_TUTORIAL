let a = prompt("Enter a number")
let b = prompt("Enter another number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

// let sum = a + b  // + operator concatenate 2 string not add
let sum = parseInt(a) + parseInt(b)

// try {
//     console.log(sum*x)       // Error trycatch dwara handle hota h
// } catch (error) {
//     console.log("Error aa gya bhai")
// }
// finally{
//     console.log("namste sarkar")    // Normally finally chlta hi h hmesha
// }

   // finally ka use tb hota h main jb try catch finally sb ek function mai ho aur try catch mai return ho tb return kai baad bhi finally chlega normal console nhi chl payega

   function main () {
    let x =5;

    try {
    console.log(sum*x)
    return true       // Error trycatch dwara handle hota h
} 
   catch (error) {
    console.log("Error aa gya bhai")
    return false
}

finally {
    console.log(" hm to chlb bhaiya")
}
   }

   let c= main()