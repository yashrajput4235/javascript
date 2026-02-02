/* events in javascript */
/*What are events in javascript?
Events are actions or occurrences that happen in the browser,
such as a user clicking a button, typing in an input field, or scrolling the page.
Events are used to trigger actions or responses in the browser.

*/

/*Types of events in javascript
1. Mouse events
2. Keyboard events
3. Form events
4. Document events
5. Window events
*/  
// Example of mouse event
document.getElementById("myButton").addEventListener("click",function(){
    alert("Button clicked!");
})
// Example of keyboard event
document.addEventListener("keydown",function(event){
    console.log("Key pressed: " + event.key);
})
// Example of form event
document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    alert("Form submitted!");
})
// Example of document event
document.addEventListener("DOMContentLoaded",function(){
    console.log("Document loaded!");
})
// Example of window event
window.addEventListener("resize",function(){
    console.log("Window resized!");
})
// Event propagation
/*Event propagation is the order in which events are received on the page.
There are two types of event propagation:
1. Bubbling: The event starts from the target element and propagates up to the parent elements.
2. Capturing: The event starts from the topmost parent element and propagates down to the target element.
*/
// Example of event propagation
document.getElementById("parent").addEventListener("click",function(){
    alert("Parent clicked!");
},true); // capturing phase

document.getElementById("child").addEventListener("click",function(){
    alert("Child clicked!");
}); // bubbling phase

// Event delegation
/*Event delegation is a technique where a single event listener is added to a parent element
to handle events for its child elements. This is useful for dynamically added elements.
*/
// Example of event delegation
document.getElementById("list").addEventListener("click",function(event){
    if(event.target && event.target.nodeName == "LI"){
        alert("List item clicked: " + event.target.textContent);
    }
});
// Removing event listeners
/*To remove an event listener, use the removeEventListener() method.
You need to provide the same event type and function reference that was used to add the listener.
*/
// Example of removing event listener
function handleClick(){
    alert("Button clicked!");
}
document.getElementById("removeButton").addEventListener("click",handleClick);
// To remove the event listener
document.getElementById("removeButton").removeEventListener("click",handleClick);   
// This code demonstrates various aspects of events in JavaScript, including types of events,
// event propagation, event delegation, and removing event listeners.



