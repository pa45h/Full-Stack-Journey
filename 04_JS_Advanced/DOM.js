// alert("This is an alert Msg");   // puts an alert msg on the top

console.log(window); // global window object
// OR console.dir(document);

console.log(window.document); // html document
// OR console.log(document);

console.log(document.location); 
// can access many things using document.   ;



// Access :

const myNav = document.getElementById("navbar");
// returns whole nav tag

const myTableData = document.getElementsByClassName("table_data");
// returns table data in the form of html collection (can be accessed individual using index)

const myPara = document.getElementsByTagName("p");
// return all p tags in the form of html collection

const myH1 = document.querySelector("#heading-1");
// returns element including '#heading-1'

const myListItems = document.querySelector(".list_items");
// return first occurence of '.list_items'

const myLink = document.querySelector("a");
// return first occurence of 'a'

const myAllTableData = document.querySelectorAll(".table_data");
// return all the occurence of '.table_data' in the form of node-list



// Update :

myNav.outerHTML;     // GET
// '<nav id="navbar">\n            <table id="table">\n                <thead id="table_head" class="table_row">\n                    <tr><th class="table_data">NAME</th>\n                    <th class="table_data">AGE</th>\n                    <th class="table_data">GENDER</th>\n                </tr></thead>\n                <tbody><tr class="table_row">\n                    <td class="table_data">Iron Man</td>\n                    <td class="table_data">30</td>\n                    <td class="table_data">Male</td>\n                </tr>\n                <tr class="table_row">\n                    <td class="table_data">Black Widow</td>\n                    <td class="table_data">27</td>\n                    <td class="table_data">Female</td>\n                </tr>\n            </tbody></table>\n        </nav>'

myNav.innerHTML;    // GET
// '\n            <table id="table">\n                <thead id="table_head" class="table_row">\n                    <tr><th class="table_data">NAME</th>\n                    <th class="table_data">AGE</th>\n                    <th class="table_data">GENDER</th>\n                </tr></thead>\n                <tbody><tr class="table_row">\n                    <td class="table_data">Iron Man</td>\n                    <td class="table_data">30</td>\n                    <td class="table_data">Male</td>\n                </tr>\n                <tr class="table_row">\n                    <td class="table_data">Black Widow</td>\n                    <td class="table_data">27</td>\n                    <td class="table_data">Female</td>\n                </tr>\n            </tbody></table>\n        '

myNav.textContent;   // GET
// '\n            \n                \n                    NAME\n                    AGE\n                    GENDER\n                \n                \n                    Iron Man\n                    30\n                    Male\n                \n                \n                    Black Widow\n                    27\n                    Female\n                \n            \n        '

// myNav.textContent = "This is the text which replaced nav textContent";  //SET

myNav.innerText;
// 'NAME\tAGE\tGENDER\nIron Man\t30\tMale\nBlack Widow\t27\tFemale'

// myNav.innerText = "NAME\tAGE\tGENDER\nIron Man\t30\tMale\nBlack Widow\t27\tFemale";                                                     //SET

const allListItems = document.querySelectorAll(".list_items");

// allListItems[0].style.color = "white";
// allListItems[2].style.color = "white";
// allListItems[7].style.color = "white";

allListItems.forEach(li=>{
    li.style.color="gray";
});
// node-list have for-each method

Array.from(myTableData).forEach(li=>{
    li.style.backgroundColor = "black";
});
// html collection does not have for-each methods
// so we can convert it to array and then use map,filter,for-each etc

const myH2 = document.querySelectorAll("h2");
myH2.forEach(h2=>{
    h2.style.textShadow = "white 1px 1px 1px";
    h2.style.boxShadow = "white 1px 2px 5px";
    h2.style.backgroundColor = "black";
    h2.style.padding = "0.5rem";
    h2.innerText = "Replaced innerText"
});

const parent = document.querySelector(".parent");

console.log(parent);
// returns whole ".parent"(<main>) tag.

console.log(parent.children);
//  return all children of parent in the form of HTML collection

console.log(parent.children[0]);    // returns h1 tag
console.log(parent.children[1]);    // returns h2 tag

for(let i=0;i<parent.children.length;i++)
    console.log(parent.children[i]);    

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const child_1 = document.querySelector(".child");
console.log(child_1.parentElement);

console.log(child_1.nextElementSibling.nextElementSibling.nextElementSibling);

console.log("Nodes", parent.childNodes);
// returns childrens in the form of nodes



// Insert :

// Create:
const myDiv = document.createElement("div");
// myDiv.className="div";
// myDiv.id= Math.round(Math.random()*10 + 1);
myDiv.setAttribute("class" , "div");
myDiv.setAttribute("id" , Math.round(Math.random()*10 + 1));
// optimized methods to add attributes

myDiv.style.color="gray";
myDiv.style.padding="1rem";
myDiv.style.border="1px solid gray";
myDiv.style.margin="1rem";

// myDiv.innerHTML="This is the text which is added using innerHTML";
myDiv.appendChild(document.createTextNode("This is the text node which is added using createTextNode"));
// optimized methods to add text

// Append:
document.body.appendChild(myDiv);

const mySpan = document.createElement("span");

mySpan.setAttribute("class" , "span");
mySpan.setAttribute("id" , Math.round(Math.random()*10 + 1));

mySpan.appendChild(document.createTextNode("This is the span which is added using insertAdjacentElement"));

mySpan.style.color="gray";
mySpan.style.padding="1rem";
mySpan.style.border="1px solid gray";
mySpan.style.margin="1rem";

myDiv.insertAdjacentElement("beforebegin",mySpan);
myDiv.insertAdjacentElement("afterbegin",mySpan);
myDiv.insertAdjacentElement("beforeend",mySpan);
myDiv.insertAdjacentElement("afterend",mySpan);

// adding list items:
function addLi(li_name) {
    const newLi = document.createElement("li");
    newLi.setAttribute("class","list_items");
    newLi.style.color="gray";
    const newLink = document.createElement("a");
    newLink.setAttribute("href","");
    newLi.appendChild(document.createTextNode(li_name));
    newLink.appendChild(newLi);
    document.querySelector("#list").appendChild(newLink);
}
addLi("Thirteen");
addLi("Fourteen");
addLi("Fifteen");

// Edit list items:
const secondLi = document.querySelector("#list a:nth-child(2)");
secondLi.innerHTML = "<li class='list_items' style='color:gray'>2</li>";
// OR
const thirdLi = document.querySelector("#list a:nth-child(3)");
const newLinkItem = document.createElement("a");
newLinkItem.setAttribute("href","");
const newItem = document.createElement("li");
newItem.setAttribute("class", "list_items");
newItem.style.color="gray";
newItem.textContent="3";
newLinkItem.appendChild(newItem);
thirdLi.replaceWith(newLinkItem);
// OR
const fisrtLi = document.querySelector("#list a:first-child");
fisrtLi.outerHTML="<a href><li class='list_items' style='color:gray'>1</li></a>";



// Remove :

const lastLi = document.querySelector("#list a:last-child");
lastLi.remove();
// OR
document.querySelector("#list").removeChild(document.querySelector("#list a:last-child"));
