let prim1 = new Promise((resolve, reject)=> {
    let a = Math.random();
    if(a<0.5){
        reject("No random no. not supporting")
    }
   else{
    setTimeout(() => {
        console.log("Yes I am done")
        resolve("Harry")
    },3000);
}
}) 

prim1.then((a)=> {
    console.log(a)
}).catch((err)=>{
    console.log(err)
})

let prim2 = new Promise((resolve, reject)=> {
    let a = Math.random();
    if(a<0.5){
        reject("No random no. not supporting 2.0")
    }
   else{
    setTimeout(() => {
        console.log("Yes I am done 2.0")
        resolve("Harry 2.0")
    },3000);
}
})
// if we write promise.race ten race start who wins sj=ows
let p3 = Promise.all([prim1, prim2])   //allsettled give both value whether accepted or rejectr=ed 
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})   