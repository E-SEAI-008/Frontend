console.log("Hello", " My name is Maria")
console.warn("I am a warning")
console.error("I am an error")
let message;

function greeting(name) {
    console.log(`Hello, ${name}`)
    if(!name) {
        return "Hello, guest"
    }
    // message = `Hello, ${name}`
    return `Hello, ${name}`;
}

console.log(message);
const result = greeting("Maria");
console.log("result: ", result)