let names = ["Oliver", "Litavszky", "Kevin", "Abdi"]
let index = 1

// for (let i = names.length - 1; i >= 0; i--) {
//     hej += 2
//     console.log(names[i])
// }

let foundOliver = false

while (!foundOliver) {
    if (names[index] === "Oliver"){
        foundOliver = true
    }
    index++
    
}

console.log("I found Oliver at index: " + indexq)