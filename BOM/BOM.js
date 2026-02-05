/*BOM in javascript
BOM stands for Browser Object Model.
It is a collection of objects that represent the browser window and its contents.

*/

/*Properties of BOM
1. window: Represents the browser window.
2. document: Represents the HTML document.
3. navigator: Represents the browser's navigator object.
4. screen: Represents the screen object.
5. location: Represents the browser's location object.
6. history: Represents the browser's history object.
7. frames: Represents the browser's frames object.
8. innerHeight: Represents the height of the browser window.
9. innerWidth: Represents the width of the browser window.
10. outerHeight: Represents the height of the browser window including toolbars and scrollbars.
11. outerWidth: Represents the width of the browser window including toolbars and scrollbars.
*/

/*Methods of BOM
1. alert(): Displays an alert box with a message.
2. confirm(): Displays a confirmation dialog box with a message.
3. prompt(): Displays a dialog box that prompts the user for input.
4. open(): Opens a new browser window.
5. close(): Closes the current browser window.
6. setTimeout(): Executes a function after a specified delay.
7. setInterval(): Executes a function repeatedly at specified intervals.
8. clearTimeout(): Clears a timeout previously set with setTimeout().
9. clearInterval(): Clears an interval previously set with setInterval().
*/

/*Example: Using BOM
// Display an alert box
alert("Hello World!");

// Display a confirmation dialog box
if (confirm("Are you sure?")) {
    alert("You clicked OK");
} else {
    alert("You clicked Cancel");
}

// Display a prompt dialog box
let name = prompt("Enter your name");
alert("Hello " + name);

// Open a new browser window
let newWindow = window.open("https://www.google.com", "_blank", "width=400,height=300");

// Close the current browser window
// window.close();

// Set a timeout
setTimeout(function() {
    alert("This message is displayed after 2 seconds");
}, 2000);

// Set an interval
let intervalId = setInterval(function() {
    console.log("This message is displayed every 2 seconds");
}, 2000);

// Clear a timeout
clearTimeout(intervalId);

// Clear an interval
clearInterval(intervalId);
*/
