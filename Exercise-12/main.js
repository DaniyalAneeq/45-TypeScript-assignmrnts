// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["Ahmed", "Ali", "Hamza"];
// console.log(`Hello ${names[0]} my friend how are you!`);
// console.log(`Hello ${names[1]} my friend how are you!`);
// console.log(`Hello ${names[2]} my friend how are you!`);
// for (let name of names) {
//     console.log(`Hello ${name}, would you like to learn
//      some TypeScript today?`);
// }
names.forEach(function (name) {
    console.log("Hello ".concat(name, ", would you like to learn some TypeScript today?"));
});
