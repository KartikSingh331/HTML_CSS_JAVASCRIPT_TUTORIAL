console.log("Hello 1st")
console.log("Hello 2nd")

setTimeout(() => {
    console.log("Hello 3rd")
} ,2000)

console.log("Hello 4th")
const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
