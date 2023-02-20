/*
alert('Hello World!');
*/

console.log('Hello World!');



console.log('Variables and Constants');
global1 = 10;
console.log(global1)
var functionScoped = 2;
console.log(functionScoped);
let blockScoped = 5;
console.log(blockScoped)
const constant1 = global1
                  + functionScoped
                  - blockScoped;
console.log(constant1);

console.log('Variable types');
let numberVariable = 123;
console.log(numberVariable)
let floatingPointNumber = 234.345;
console.log(floatingPointNumber);
let stringVariable = 'Hello World!';
console.log(stringVariable);
let booleanVariable = true;
console.log(booleanVariable);
let isNumber = typeof numberVariable;
console.log(isNumber);
let isString = typeof stringVariable;
console.log(isString);
let isBoolean = typeof booleanVariable;
console.log(isBoolean);


console.log('Boolean Variables');
let true1 = true;
console.log(true1);
let false1 = false;
console.log(false1);
let false2 = true1 && false1;
console.log(false2);
let true2 = true1 || false1;
console.log(true2);
let true3 = !false2;
console.log(true3);
let true4 = numberVariable === 123;
console.log(true4);
let true5 = floatingPointNumber !== 321.432;
console.log(true5)
let false3 = numberVariable < 100;
console.log(false3);

let sortaTrue = '1' == 1
console.log(sortaTrue);
let notTrue   = '1' === 1
console.log(notTrue);

console.log('If else');
if(true1) {
    console.log(true);
}

console.log("Ternary operator");
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}


console.log('Legacy ES5 function')
function add (a, b) {
    return a + b;
}

const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log('Implied Return');
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

console.log("Parenthesis and parameters");
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);


console.log("Arrays");
let numberArray1 = [1, 2, 3, 4, 5];
console.log(numberArray1);

console.log("Array Length")
let stringArray1 = ['string1', 'string2'];
console.log(stringArray1);

let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log("Printing an array")
console.log(variableArray1);
haris = [1,2,3];
console.log(haris);

console.log("Length of an array");
const length1 = numberArray1.length;
console.log(length1);
console.log("Index of element in array");
const index1 = numberArray1.indexOf(3);
console.log(index1);

console.log("Adding element into array");
numberArray1.push(6);
stringArray1.push('string3');

console.log("removing elements from array");
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

console.log("Printing elements from array For loops");
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log("directly"+stringArray1[i]);
    console.log(string1);
}

console.log("Map function");
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

console.log("Retriving index of elements in an array ");
const fourIndex = numberArray1
    .findIndex(a => a === 4);
console.log(fourIndex);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log(string3Index);


console.log("Filtering elements from array");
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
console.log(numbersGreaterThan2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log(oddNumbers);


console.log("String Template");
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);


loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)


const init = () =>
{
    console.log('Hello world from jQuery');
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');

    console.log('Binding to DOM id and class');
    console.log(bindById);
    console.log(bindByClass);

    console.log("Changing CSS properties");
    const a = $('#change-style');
    a.css('color' , 'red');   // property,value
    const b= $('.change-style');
    b.css('background-color' , 'blue');

    console.log("Fetching values from tags");
    const h2tag = $('#get-id-attr');
    const h2tagval = h2tag.attr('id');
    console.log(h2tagval);

    const d = $('#set-class-attr');
    d.attr('class', 'class-new');

    const addnewclasstag  = $('#add-class');
    addnewclasstag.addClass('class-add');

    const removeclasstag  = $('#remove-class');
    removeclasstag.removeClass('class-2');


    const hideMe = $("#hide-me");
    hideMe.hide();

    const showMe = $("#show-me");
    showMe.show();

    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");
    const appendtolist = $('#add-newlist');
    appendtolist.append(newLineItem);
    appendtolist.append(anotherLineItem);

    const newhetag = $("<h2>New tag</h2>");
    const addh2tag = $('#add-newtag');
    addh2tag.append(newhetag);

    const litag  = $('#remove-list');
    litag.remove();

    const liststag = $('#empty-list');
    liststag.empty();

    const h2tagremove = $('#remove-h2tag');
    h2tagremove.empty();

        const changeThisText = $("#change-this-text");
        const changeThisHtml = $("#change-this-html");
        changeThisText.html('New text');
        changeThisHtml.html(`
           <li>Line item A</li>
           <li>Line item B</li>
           <li>Line item C</li> `);

    const child2 = $('#child-2');
    const child2parent = child2.parents("#parent");
    child2parent.css("background-color", "red");

    const parent = $('#parent');
    const childofparent = parent.find("#child-2");
    childofparent.css("background-color", "yellow").css("color","red");

    const handleClick = () => {
        console.log('Handle click');
        const clickhtag = $('#event-target');
        clickhtag.css("background-color", "red");
    }

    const clickable = $('.clickable');
    clickable.click(handleClick);

    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target).css('background-color', 'blue').css('color', 'white');
    }

    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    const showinformation = (event) =>
    {
        const contentid = $('#id-content');
        contentid.show();
    }

    const hideinforamtion = (event) =>
    {
        const contentid = $('#id-content');
        contentid.hide();
    }

    const showbtn = $('#btn-show');
    showbtn.click(showinformation);

    const hidebtn = $('#btn-hide');
    hidebtn.click(hideinforamtion);


}


$(init);

// WHY NOT WORKING HERE>?
const handleClick = () => {
    console.log('Handle click');
    const clickhtag = $('#event-target');
    clickhtag.css("background-color", "red");
}

const clickable = $('.clickable');
clickable.click(handleClick);