/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/ 


let magicians: string[] = ["Asif", "Kalam","Javed"];

function show_magicians(magicians: string[]){
    magicians.forEach((magician) => {
        console.log(magician);
        
    })
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`)
}

let duplicate_magicians = magicians.slice();
let print_duplicate = make_great(duplicate_magicians);

console.log("\nOriginal Array: ");
show_magicians(magicians);
console.log("\nDuplicate Array: ");
show_magicians(print_duplicate)

