
### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  

Ans:  **getElementById** return a single element with specific id.   
**getElementsByClassName** returns html collection of all elements with className  
**querySelector** returns the first element that matches the css selector  
**querySelectorAll** returns nodeList of all  element that matches the css selector  

2. How do you **create and insert a new element into the DOM**?    
Ans:In the DOM, a new element is first created using document.createElement("tagName").  
 For example, a <div> or <p> can be created. After that, we can add text or HTML content    
to the element using textContent or innerHTML. Similarly, we can assign an id or className  
 to the element for identification or styling purposes. Once the element is created, we can  
  insert it into the DOM using appendChild() to add it at the end of a parent element.   

3. What is **Event Bubbling** and how does it work?  
Ans:**Event Bubbling** is a process in the dom where an event is triggered on a child element   
first runs its handler,then **bubbles** up to its parent elements,triggering their handlers.    
Let's assume a <button> inside a <div>,the click event first trigger on the button then on the div  

4. What is **Event Delegation** in JavaScript? Why is it useful?  
Ans:**Event Delegation** is basically a process to handle events efficiently.     
 Instead of adding an **event listener** to each and every similar element,    
  we can add an event listener to a parent element and call an event on a particular target    
 using the .target property of the event object.
It is useful because it improves performance,reduces memory usage.

5. What is the difference between **preventDefault() and stopPropagation()** methods?  
Ans:**preventDefault()** stops the default action of an event  
**stopPropagation()** prevents the event from bubbling up to parent elements
