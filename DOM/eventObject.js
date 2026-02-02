/*Event Object in JavaScript
The event object is automatically passed to event handlers in JavaScript.
It contains useful information about the event that occurred, such as the type of event,
the target element, and other properties specific to the event type.
*/
// Example of mouse event
document.getElementById("myButton").addEventListener("click",function(event){
    console.log("Event Type: " + event.type);
    console.log("Target Element: " + event.target.id);
    alert("Button clicked!");
})
// Example of keyboard event
document.addEventListener("keydown",function(event){
    console.log("Event Type: " + event.type);
    console.log("Key Pressed: " + event.key);
})
// Example of form event
document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Event Type: " + event.type);
    console.log("Target Element: " + event.target.id);
    alert("Form submitted!");
})
// Example of mouse event with coordinates
document.getElementById("myDiv").addEventListener("mousemove",function(event){
    console.log("Mouse X: " + event.clientX);
    console.log("Mouse Y: " + event.clientY);
})
// Example of event with modifier keys
document.addEventListener("click",function(event){
    if(event.shiftKey){
        console.log("Shift key was held during the click.");
    }
    if(event.ctrlKey){
        console.log("Control key was held during the click.");
    }
})
 
// This code demonstrates how to use the event object in various event handlers
// to access information about the events that occur in the browser.
/* exmple e.target and e.currentTarget
The event.target property refers to the actual element that triggered the event,
while event.currentTarget refers to the element to which the event handler is attached.
*/
// Example demonstrating e.target and e.currentTarget
document.getElementById("outerDiv").addEventListener("click",function(event){
    console.log("event.target id: " + event.target.id); // Actual clicked element
    console.log("event.currentTarget id: " + event.currentTarget.id); // Element with listener
});
/*e.clentX and e.clientY
The event.clientX and event.clientY properties provide the horizontal and vertical
coordinates of the mouse pointer relative to the viewport when the event occurred.
*/
// Example demonstrating e.clientX and e.clientY
document.getElementById("coordinateDiv").addEventListener("click",function(event){
    console.log("Mouse X Coordinate: " + event.clientX);
    console.log("Mouse Y Coordinate: " + event.clientY);
});
/*e.preventDefault()
The event.preventDefault() method is used to prevent the default action associated with an event.
For example, it can be used to prevent a form from submitting or a link from navigating.
*/
// Example demonstrating e.preventDefault()
document.getElementById("link").addEventListener("click",function(event){
    event.preventDefault(); // Prevents the default navigation action
    alert("Link click prevented!");
});
// This code demonstrates the use of various properties and methods of the event object
// to handle events more effectively in JavaScript.