var magicians = ["Asif", "Kalam", "Javed"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var duplicate_magicians = magicians.slice();
var print_duplicate = make_great(duplicate_magicians);
console.log("\nOriginal Array: ");
show_magicians(magicians);
console.log("\nDuplicate Array: ");
show_magicians(print_duplicate);
