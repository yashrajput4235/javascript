/*DOM in javscript stands for Document Object Model. 
It is a programming interface for web documents. 
It represents the page so that programs can change the document structure, style, and content. */

/*Example: Selecting an Element by ID */
const headingElement = document.getElementById("main-heading");
console.log(headingElement);

/*Example: Selecting Elements by Tag Name */
const paragraphElements = document.getElementsByTagName("p");
console.log(paragraphElements);

/*Example: Selecting Elements by Class Name */
const itemElements = document.getElementsByClassName("item");
console.log(itemElements);

/*Example: Selecting Elements using querySelector */
const firstItem = document.querySelector(".item");
console.log(firstItem);

/*Example: Selecting Elements using querySelectorAll */
const allItems = document.querySelectorAll(".item");
console.log(allItems);

/*Example: Modifying Element Content */
headingElement.textContent = "New Heading";

/*Example: Modifying Element Style */
headingElement.style.color = "blue";
headingElement.style.fontSize = "24px";

/*Example: Adding and Removing Classes */
headingElement.classList.add("active");
headingElement.classList.remove("inactive");

/*Example: Creating and Appending Elements */
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
document.body.appendChild(newElement);

/*Example: Removing Elements */
const elementToRemove = document.getElementById("remove-me");
if (elementToRemove) {
    elementToRemove.remove();
}

/*Example: Event Handling */
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    alert("Button clicked!");
});

/*Example: Traversing the DOM */
const parentElement = headingElement.parentElement;
console.log(parentElement);

const firstChild = headingElement.firstElementChild;
console.log(firstChild);

const nextSibling = headingElement.nextElementSibling;
console.log(nextSibling);

const previousSibling = headingElement.previousElementSibling;
console.log(previousSibling);   