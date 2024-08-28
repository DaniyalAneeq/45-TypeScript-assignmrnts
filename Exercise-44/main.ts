/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.*/

function Sandwiches(...items: string[]){
    console.log("\nPlease make a sandwich with the fillowing items: ");
    items.forEach(item => 
        console.log(item)
    )
    console.log("\n \tYour Sandwich is ready\t \n");
}
Sandwiches("Butter", "Bread", "Chicken");
Sandwiches("Egg","Butter", "Bread", "Chicken");
Sandwiches("Cheese","Egg","Butter", "Bread", "Chicken");

