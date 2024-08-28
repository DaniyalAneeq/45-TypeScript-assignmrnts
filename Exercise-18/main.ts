// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places: string[] = ["Saudia Arabia", "New Zealand", "England", "Norway", "Australia"];
console.log("Original order: ", places);

// priting the array in Alphabetical orderl;
console.log("Alphabetical order: ",places.slice().sort());

// Printing array is still in originl order;
console.log("Original order: ", places);

// Printing array in reverse alphabetical order without changing the order of an original list;
console.log("reverse alphabetical order: ",places.slice().sort().reverse());

// printing array is still in original order;
console.log("Original order after reverse sorting: ", places);

//Reversing the order of list.
console.log("reverse the order of original array: ", places.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("revrsed array in its original order:",places.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in alphabetical order: ",places.slice().sort())

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sorted in reverse alphabetical order: ",places.slice().sort().reverse());
