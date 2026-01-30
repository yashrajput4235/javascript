/* date in javascript
Date objects are used to work with dates and times in JavaScript.
They provide various methods to get and set date and time components,
as well as perform date calculations.
*/

/* Example: Creating a Date Object */
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);

/* Example: Getting Date Components */
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Months are zero-based
let day = currentDate.getDate();
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);

/* Example: Setting Date Components */
currentDate.setFullYear(2025);
currentDate.setMonth(11); // December
currentDate.setDate(25);
console.log("Updated Date:", currentDate);

/* Example: Date Calculations */
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10); // 10 days from now
console.log("Date after 10 days:", futureDate);