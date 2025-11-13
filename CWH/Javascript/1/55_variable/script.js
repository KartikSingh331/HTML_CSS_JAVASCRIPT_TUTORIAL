console.log("hey dude!");
var a=8;
var b=9;
console.log(a+b)
console.log(typeof a,typeof b);

// const a1=9;
// a1=a1+8;   not allowed change b/c of consonant

// let is block scope
//var has global scope
{
    let a=66;
    console.log(a); 
}
   console.log(a); 


//Datatypes
let x="gajhjj";
let y=87;
let z=9.9;
const p= true;
let q=undefined;
let r=null;
console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

//Obbject if space contains put in ""
let o={
    name: "kartik",
    "job code":732,
    "is handsome":true,
    
}
console.log(o);
o.salary="8181821";
console.log(o);
o.salary="100000";
console.log(o);
