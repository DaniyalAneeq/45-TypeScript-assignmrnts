// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("Make a shirt of size ".concat(size, " and the message ").concat(text, " print on it"));
}
;
make_shirt();
make_shirt("Medium");
make_shirt("small", "I really like coding");
