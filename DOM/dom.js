/*DOM in javscript stands for Document Object Model. 
It is a programming interface for web documents. 
It represents the page so that programs can change the document structure, style, and content. */

/*Example: Selecting an Element by ID */
const headingElement = document.getElementById("main-heading");
console.log(headingElement);

/*Example: Selecting Elements by Tag Name Elements by tag
div*/
const paragraphElements = document.getElementsByTagName("p");
console.log(paragraphElements);

/*Example: Selecting Elements by Class Name */
const itemElements = document.getElementsByClassName("item");
console.log(itemElements);

/*Example: Selecting Elements using querySelector First matching CSS selector
classname=.box, id=#title, tagname=div p */
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
 
/*DOM Properties*/  
// textContent  : get or sets the text content of an element(No html tags)
console.log(headingElement.textContent);
// innerText : get or sets the text content of an element(With html tags)
console.log(headingElement.innerText);  
// innerHTML : get or sets the HTML content of an element
console.log(headingElement.innerHTML);
// outerHTML : get or sets the HTML content of an element(including the element itself)
console.log(headingElement.outerHTML);
//style : get or sets the style of an element access inline styles
console.log(headingElement.style);
//className : get or sets the class name of an element
console.log(headingElement.className);
//tagName : get the tag name of an element
console.log(headingElement.tagName);

/*DOM Attributes*/
//Attributes:attributes are the extra information written inside an HTML tag that describe or configure that element.
//getAttribute():get the value of an attribute
console.log(headingElement.getAttribute("id"));
//setAttribute():set the value of an attribute
headingElement.setAttribute("id","new-id");
console.log(headingElement.getAttribute("id"));
//hasAttribute():check if an element has a specific attribute
console.log(headingElement.hasAttribute("id"));
//removeAttribute():remove an attribute
headingElement.removeAttribute("id");
console.log(headingElement.hasAttribute("id")); 





       