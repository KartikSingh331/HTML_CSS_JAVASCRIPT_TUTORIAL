console.log("loops concepts of javascript");

// 1️⃣ Normal for loop
for (let u = 0; u < 10; u++) {   // (100 works too, I made 10 for short output)
    console.log(u);
}

// 2️⃣ for...in loop (used for objects)
let obj = {
    name: "kartik",
    role: "programmer",
    company: "Ambition"
};

for (const key in obj) {
    const element = obj[key];   // ❌ you wrote "object[key]" but correct is "obj[key]"
    console.log(key, element);
}

// 3️⃣ for...of loop (used for arrays, strings, etc.)
for (const c of "kartik") {   // ❌ you used "c" in console.log but defined "k"
    console.log(c);
}

j=1
while(j<4){
    console.log(j)
    j++
}


let k=9
do{
    console.log(k)
    k++;
    
}
while(k<14)
