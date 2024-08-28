// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array



// Test for Equality:
let Apple = "Red";
console.log("Apple is equal to Red: ");
console.log(Apple == "Red");

// Test for Inequality:
console.log("Apple is not equal to Red: ");
console.log(Apple != "Red");

// Tests using the lower case function:

let BigApple = "APPLE";
console.log("APPLE is equal to apple after converted to lowercase: ");
console.log(BigApple.toLowerCase() == "apple");

console.log("APPLE is not equal to apple after converted to lowercase: ");
console.log(BigApple.toLowerCase() != "apple");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.

let ten = 10;
let twenty = 20;

//Test for Equality :
console.log("ten is equal to twenty");
console.log(ten == twenty);
//Test for inequality :
console.log("ten is not equal to twenty");
console.log(ten != twenty);

//Test for Greater than:
console.log("twenty is greater than ten");
console.log(twenty > ten);
//Test for less than:
console.log("twenty is less than ten");
console.log(twenty < ten);

//Test for Greater than or equal to:
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);
//Test for less than or equal to:
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);

//• Tests using "and" and "or" operators:

// Test for (&&) "and" operator:
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);

console.log("twenty is not equal to ten and twenty is less than ten");
console.log(twenty != ten && twenty < ten);

// Test for (||)"or" operator:
console.log("twenty is greater than ten or twenty is not equal to twenty ");
console.log(twenty > ten || twenty != twenty );

console.log("twenty is less than ten or twenty is equal to twenty ");
console.log(twenty < ten || twenty != twenty);

//• Test whether an item is in a array

let vegetables: string[] = ["Tomato", "Potato", "Coriander"];
console.log("Tomato is include in vegetables array");
console.log(vegetables.includes("Tomato"));

//• Test whether an item is not in a array:
console.log("Tomato is not include in vegetables array");
console.log(!vegetables.includes("Tomato"));
