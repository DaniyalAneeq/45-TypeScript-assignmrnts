//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guest = ["Babar Azam", "Virat kohli", "AB de villers"];
Guest.forEach(function (guest) {
    console.log("Hi ".concat(guest, " would you like to have a dinner with me"));
});
// for(let guest of Guest){
//     console.log(`Hi ${guest} would you like to dinner with me?`);
// }
