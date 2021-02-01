---
path: "/blog/2020/02/20/javascript-array-traversal"
title: "JavaScript Array Traversal techniques"
author: "CodeDead"
date: "2020-02-20"
abstract: "This short but informative tutorial, will cover the very basics of looping through arrays in JavaScript using a couple of different techniques. There are some requirements that you should be aware of before starting this tutorial, so be sure that your skill level is..."
categories: "JavaScript, Tutorial, Development"
---
## Information

This short but informative tutorial, will cover the very basics of looping through arrays in JavaScript using a couple of different techniques. There are some requirements that you should be aware of before starting this tutorial, so be sure that your skill level is adequate.
This will not be an extensive tutorial, but very basic and hopefully you can learn some things here that you didn’t know before. As always, if you’re in need of help, you can always leave a comment. Feedback is also welcome. If you’d like to see something corrected or added to this particular tutorial, feel free to let us know.

### Requirements

* Basic understanding of what an array is in JavaScript
* Basic understanding about the var, let and const keywords in JavaScript
* Basic understanding of HTML
* Basic understanding of CSS is optional but always nice
* Basic understanding of arrow functions

### Useful resources

* [vscode](https://code.visualstudio.com/)
* [WebStorm](http://jetbrains.com/webstorm)
* [var, let const – what’s the difference](https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e)
* [Arrow functions in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [JSFiddle](https://jsfiddle.net/)

## JavaScript Arrays:

JavaScript arrays are high-level, list-like objects that have the ability to contain multiple elements. Since JavaScript is such a versatile language, arrays can contain anything from strings to complete objects and even functions.
For a more well-defined definition:

`Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array’s length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them. In general, these are convenient characteristics; but if these features are not desirable for your particular use, you might consider using typed arrays.`

https://developer.mozilla.org/en-US/docs…ects/Array

You can declare arrays in JavaScript, like so:
```
const array = ["Jack", "John", "Arthur"];
const array = new Array("Jack", "John", "Arthur");
```

Be wary, there is a difference between using new Array and the contained array declaration ( [] ). The Array method can be used to pass an argument to indicate the length of the array. This will set the length property of the array to whatever value you pass to the constructor.
```
console.log(new Array(200).length); // Will output '200'
console.log([].length); // Will output '0'
console.log(new Array(200)[0] === undefined); // Will output 'true'
console.log([][0] === undefined); // Will output 'true'
```
https://jsfiddle.net/rhdjowtv/

As explained above, arrays are not limited in containing only a single data type. Here’s an example of an array that contains both strings and numbers:

```
const array = ["Jack", "John", "Arthur", 666];
console.log(array[0]); // Will output 'Jack'
console.log(array[3]); // Will output '666'
array[3] += 1;
console.log(array[3]); // Will output '667'
```
https://jsfiddle.net/tka96530/

Do note that you should avoid situations in which mixed content in arrays are involved. They are confusing and can break the programmer’s flow of thought.

You can retrieve an element inside an array by utilizing the index of the element that you want to retrieve on the array object, like so:
```
const array = ["Jack", "John", "Arthur"];
console.log(array[0]); // Will output 'Jack'
console.log(array[1]); // Will output 'John'
```
https://jsfiddle.net/cf4hqa05/

You can also change array elements like you would with any other variable (using the equals operator ‘=‘):
```
const array = ["Jack", "John", "Arthur"];
array[0] = "Micah";
console.log(array[0]); // Will output 'Micah'
console.log(array[1]); // Will output 'John'
```
https://jsfiddle.net/uL2fvj69/

Adding items to an existing array can be done by utilizing the push() function:
```
const array = ["Jack", "John", "Arthur"];
array.push("Abigail");
console.log(array[3]); // Will output 'Abigail'
```
https://jsfiddle.net/nqtgdk1r/

As is obvious by the example above, the push() function will add an element to the array and will append it to the end of said array. In case you want to add elements to the front of an array, you can use the unshift() function:
```
const array = ["Jack", "John", "Arthur"];
array.unshift("Abigail");
console.log(array[0]); // Will output 'Abigail'
console.log(array[3]); // Will output 'Arthur'
```
https://jsfiddle.net/xpjtczmo/

Removing and at the same time retrieving elements from an array can be as simple as using either a pop() or a shift():
```
const array = ["Jack", "John", "Arthur"];
const lastElement = array.pop();
console.log(array[2]); // Will output 'undefined'
console.log(lastElement); // Will output 'Arthur'
const firstElement = array.shift();
console.log(array[0]); // Will output 'John'
console.log(firstElement); // Will output 'Jack';
```
https://jsfiddle.net/8arw4g7L/

Arrays can also be sliced in the sense that we can grab a portion of the array and create a new one in the process. The slice() method offers this functionality:
```
const names = ['Jack', 'Abigail', 'John', 'Arthur', 'Micah'];
console.log(names.slice(3));
// Arthur, Micah
console.log(names.slice(3, 5));
// Arthur, Micah
console.log(names.slice(0, 4));
// Jack, Abigail, John, Arhur
```
https://jsfiddle.net/25h6ktew/

Later, we’ll look into the filter() method which is similar in nature.

This concludes the short introduction into JavaScript arrays and some of their functionality. If you want more information about them, there are some great resources that you can check out. For example, I recommend that you check out the Mozilla developer docs. These include more in depth examples an explanations about the functions used above and more.

## Array traversal

There are various ways in which you can loop through the elements of an array. The one most people are familiar with and the one that looks similar to other programming languages, is the traditional for-loop. We will be looking at that shortly, along with the forEach loop, for-of loop, for-in loop, map, reduce and of course the filter methods, what they’re used for and how you can use them to achieve your goals.

### For-loops

For-loops are the traditional looping mechanic when it comes to array traversal techniques. There’s nothing special about them. For-loops have been available since the early days of JavaScript and offers precise control over the loop itself.
```
const array = ["Jack", "John", "Arthur"];
for (let x = 0; x < array.length; x++) {
console.log(array[x]);
}
// Output iteration 0: 'Jack'
// Output iteration 1: 'John'
// Output iteration 2: 'Arthur'
```
https://jsfiddle.net/sv9e5L31/

This works, in essence, by incrementing the counter variable (in this case x) that is used to select an element at a certain index in the array. Since we start the loop at index 0 and only stop when the iterator has reached the end of the line (e.g. when the iterator is equal to the size of the array), we can safely print out any values that the array contains.
There are a couple of advantages and of course disadvantages linked to this methodology.

#### Advantages

* Precise control over the looping mechanics (return, break, continue)
* You can safely use this in IE3+ (if of course you change the let keyword to var because IE is extremely old and outdated at this point)

##### Disadvantages

* Extremely verbose, requiring multiple lines of code.
* The same applies to while loops and do-while loops (available in IE4+). I highly recommend that you avoid do-while loops in JavaScript. While they are a valid way to traverse through arrays or iterate/loop, they should not be used because they have a tendency to look extremely bad to programmers and might break the flow of thoughts.

For demonstration purposes, the example above can be re-written using while loops using the following code fragment:
```
const array = ["Jack", "John", "Arthur"];
let counter = 0;
while (counter < array.length) {
console.log(array[counter]);
counter++;
}
// Jack
// John
// Arthur
```
https://jsfiddle.net/ye71dhzt/

As you can tell, you are required to manually increment the counter variable that is used to select an element from the array.

### forEach loop
The forEach method is simple, yet elegant, in the way that it executes a single function for each element inside an array. Said function, called the callback function, can receive the element and index of the element as parameters. An example of this would be:

```
const array = ["Jack", "John", "Arthur"];
array.forEach((item, index) => console.log(item + " at position " + index ));
// Jack at position 0
// John at position 1
// Arthur at position 2
```
https://jsfiddle.net/daLfp2b1/

This example uses a reusable function as the callback parameter, instead of an anonymous arrow function:
```
const array = ["Jack", "John", "Arthur"];
array.forEach(printElement);
function printElement(item, index) {
console.log(item + " at position " + index );
}
// Jack at position 0
// John at position 1
// Arthur at position 2
```
https://jsfiddle.net/qyxm39p8/

#### Advantages

* Simple, clean and elegant
* Easier to read than for loops
* Less chance of making increment (e.g. i++) errors when compared to for-loops

#### Disadvantages

* Harder to break out of the loop
* They skip empty elements

Example of empty element skipping:
```
const arr = ['Jack',,'John'];
for (let x = 0; x < arr.length; x++) {
console.log(arr[x]);
}
// Jack
// Undefined
// John
arr.forEach(v => console.log(v));
// Jack
// John
```
https://jsfiddle.net/naxhe3b8/

### for-of loop

Not to be confused with the for-in loop, the for-of loop is similar to the for-loop in syntax and declaration. The difference being that the for-of loop can iterate over items (not the properties of the items like for in loops) in arrays, without the need of declaring an iterator. In addition to that, the for-of loop can be used to iterate over strings, maps, sets and other data types.
```
const names = ['Jack', 'John', 'Arthur'];
for (let name of names) {
console.log(`The person's name is ${name}`);
}
// Jack
// John
// Arthur
```
https://jsfiddle.net/mwfy59ba/

#### Advantages

* Simple, clean and elegant
* Easier to read than for loops
* Precise control over the looping mechanics (return, break, continue)
* No chance of making increment (e.g. i++) errors when compared to for loops

#### Disadvantages

* Harder to break out of the loop
* They skip empty elements
* If, for some reason, you want to keep track of the index of the item you’re looping over, you will need to create and increment a variable for each iteration

### for-in loop

The for-in loop is similar to to the for-of loop in syntax and workings, except for one large detail. The for-in loop will loop through the properties of an object and not the values.
```
const person = {
firstName: 'John',
lastName: 'Marston'
};
for (const prop in person) {
console.log(prop);
}
// firstName
// lastName
```
https://jsfiddle.net/75wsx63j/

### map

The map() function is used to create a new array, populated with the elements of the calling array, with said elements having been calculated or modified by the result of a calling function. While this is not a traditional looping mechanic, it can be used to perform powerful calculations.

Let’s use the following scenario to demonstrate what this all means:

Imagine having an array that is populated with a couple of names. You’d like to retrieve a new array that contains all the elements of the original array with something extra added to it as well. Map() would be a great way to do this:
```
const array = ['Jack', 'John', 'Arthur', 'Marcus'];
const aurelified = array.map(item => item += ' Aurelius');
console.log(aurelified);
// Jack Aurelius
// John Aurelius
// Arthur Aurelius
// Marcus Aurelius
```
https://jsfiddle.net/okcg4nt0/

### filter

The filter() method can be used to, as the name indicates, filter certain values out of an array. Do note that this will not change the original array. Just like the map() method, this will return a new array with the result of the filter operation, which is calculated by a calling function.

Consider the following scenario:
You’d like to retrieve an array of elements in which the length of the elements is greater than 10:
```
const array = ['Jack', 'John', 'Arthur', 'Marcus Aurelius'];
const aurelified = array.filter(item => item.length > 10);
console.log(aurelified);
// Marcus Aurelius
```
https://jsfiddle.net/m54yjdnq/

### reduce

The reduce() function can execute a reducer function on each element in an array. To explain this with an example, think of calculating the sum of all the elements in an array and outputting only a single value (e.g. the sum of the elements 1,2 and 3 is equal to 6). To translate this to code:
```
const array = [1, 2, 3];
console.log(
array.reduce(
(accumulator, currentValue) => accumulator + currentValue
)
);
// 6
```
https://jsfiddle.net/udj8m6nr/

The reducer function can take up to four arguments and the reduce() function can also be provided with an initial value. The arguments for the reducer are as follows:

* Accumulator
* Current value
* The current index
* The source array

This example utilizes all four arguments, and will provide the reduce() function with an initial value to perform calculations on:
```
const array = [1, 2, 3];
const result = array.reduce((accumulator, currentValue, index, source) => {
console.log('Index: ' + index);
console.log(source);
return (accumulator + currentValue);
}, 20);
console.log(result);
// Index will start at 0 because an initial value is provided. Without an initial value, the index will start at 1
// result = 26 | This is because we set the initial value to be equal to 20
```
https://jsfiddle.net/Lqwea2b7/

## Extra

That concludes this short tutorial. It is by no means a complete overview of all the available techniques and the demonstrations are rather short, but will hopefully help you along the way on your journey as a webdeveloper / JavaScript developer. Again, if you have any questions, suggestions, comments or feedback, feel free to leave them in the comment section below.
