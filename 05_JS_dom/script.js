// alert("This is an alert Msg");   // puts an alert msg on the top

console.log(window);                // global window object

console.log(window.document);       // html document
// OR console.log(document);

document.getElementById('nav'); 
document.getElementById('h1').id;
document.getElementById('h1').getAttribute('class');
document.getElementById('h1').setAttribute('class','h1Class');

// const myDiv = document.getElementById('div');
// myDiv.style.backgroundColor='green';
// myDiv.style.color='white';

const myPara = document.getElementById('para');
myPara.innerHTML;
// '\n                This is h3 inside p of main\n            '
myPara.outerHTML;
// '<h3 id="h3" style="background-color: green; color: white;">\n                This is h3 inside p of main\n            </h3>'
