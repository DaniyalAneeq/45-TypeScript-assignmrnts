// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.



let Guest: string[] = [ 'Rizwan', 'Babar Azam', 'Naseem', 'Shaheen', 'Amir', 'Shan Massod' ];

console.log("Unfortunately! the new dinner table won;t arrive so we can invite only two guest");
 
// Remove the guest from the list;
while(Guest.length > 2) {
    let  removedGuest: string | undefined = Guest.pop();
    if (removedGuest !== undefined){
        console.log(`Sorry ${removedGuest}, we can't invite you.`);
        
    }
}

Guest.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited for the dinner.`);
    
})

Guest.splice(0,Guest.length);
console.log(`Updated guest list: ${Guest}`);

