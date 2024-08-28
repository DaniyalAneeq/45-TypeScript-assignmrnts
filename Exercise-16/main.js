//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var Guest = ["Babar Azam", "Shaheen", "Amir"];
console.log("Good News! we found a biiger table");
//Add element in the first of my array;
Guest.unshift("Rizwan");
//Adding the element in the middle of my array;
Guest.splice(Math.floor(Guest.length / 2), 0, "Naseem");
//Adding the element in the last;
Guest.push("Shan Massod");
//Sending message to each person in the list;
Guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you all are invited to dinner,Please join tonight"));
});
console.log(Guest);
