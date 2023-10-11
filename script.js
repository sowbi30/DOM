//Creating the HTML elements dynamically
// Step 1 : create an HTML element
// we have to use document.createElement(elename);
//this is an inbuilt method
//which takes element name as parameter 
var element = document.createElement("div");
//createElement is a method
//<div></div>
//Step 2 : to add content
//by using inerHtml property in the variable 
element.innerHTML="This is My First Dynamic Tag"; //<= this is content
//<div>This is dynamic div</div>
//Step 3: appending the elements to the body of document
// append is the method
document.body.append(element);

 

//More details on Inner html
//1. Content
// 2. Nested Element
// an alternate to innerHTML
//innerText
//innerHTML vs innerText
//innerHTML : ACCESS the HTML content inside an element
//innerTextt : access the Text content inside an element

var element = document.createElement("div");
var span = document.createElement("span");
span.innerHTML ="<P>  This is Nested Element </p>"
span.innerHTML = "<P> This is Sowbaranika</p>"
span.innerText = "Happy Morning"
element.append(span);
document.body.append(element);

//to give the attribute of the element
//setAttribute method
//it takkes two parameter, First is attribute name, attribute value
//both the values are string

var element = document.createElement("div");
element.setAttribute("class","container");
element.innerHTML ="THIS IS ATTRIBUTE";
document.body.append(element);

//<div class= "container">this is attribute</div>

