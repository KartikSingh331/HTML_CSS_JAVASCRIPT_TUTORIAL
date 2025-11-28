function nice(name){
    console.log("Hey " + name + " you are good")
    console.log("Hey " + name + " you are bad")
}
nice("Kartik")

function sum(a,b){
    console.log(a+b)
}
sum(1,2)

function sum(a,b,c=8){  //c is default parameter
      return a+b+c
}
result=sum(1,2)
console.log(result)

//arrow function
const func1 = (b)=> {
    console.log("I am an arrow function",  b)
}
func1(54)
func1(5  )