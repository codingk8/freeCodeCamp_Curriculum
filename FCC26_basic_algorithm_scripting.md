<h1 align="center">FCC26 - 16 JS algorithm exercices - Memo</h1>

***

1. [Convert Celsius to Fahrenheit](#ex1)
2. [Reverse a String](#ex2)
3. [Factorialize a Number](#ex3)
4. [Find the Longest Word in a String](#ex4)
5. [Return Largest Numbers in Arrays](#ex5)
6. [Confirm the Ending](#ex6)
7. [Repeat a String Repeat a String](#ex7)
8. [Truncate a String](#ex8)
9. [Finders Keepers](#ex9)
10. [Boo who](#ex10)
11. [Title Case a Sentence](#ex11)
12. [Slice and Splice](#ex12)
13. [Falsy Bouncer](#ex13)
14. [Where do I Belong](#ex14)
15. [Mutations](#ex15)
16. [Chunky Monkey](#ex16)

***

### 1. <a name="ex1"></a>Convert Celsius to Fahrenheit

_**The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.  
You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.  
Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.**_

##### Hints: plain easy one, an occasion to test ES5 & ES6

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_1_celsius_to_fah.js)


### 2. <a name="ex2"></a>Reverse a String

_**Reverse the provided string.  
You may need to turn the string into an array before you can reverse it. 
Your result must be a string.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_2_reverse_string.js)


### 3. <a name="ex3"></a>Factorialize a Number

_**Return the factorial of the provided integer.   
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!  
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120  
Only integers greater than or equal to zero will be supplied to the function.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_3_factorialize.js)


### 4. <a name="ex4"></a>Find the Longest Word in a String

_**Return the length of the longest word in the provided sentence.  
Your response should be a number.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_4_longest_word.js)


### 5. <a name="ex5"></a>Return Largest Numbers in Arrays

_**Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.  
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_5_largest_number.js)


### 6. <a name="ex6"></a>Confirm the Ending

_**Check if a string (first argument, str) ends with the given target string (second argument, target).  
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.**_

##### Hints: at least 2 possibilities, one being a Regex

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_6_confirm_ending.js)


### 7. <a name="ex7"></a>Repeat a String Repeat a String

_**Repeat a given string str(first argument) for num times (second argument). Return an empty string if num is not a positive number.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_7_repeat.js)


### 8. <a name="ex8"></a>Truncate a String

_**Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ...ending.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_8_truncate.js)


### 9. <a name="ex9"></a>Finders Keepers

_**Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_9_finders_keepers.js)


### 10. <a name="ex10"></a>Boo who

_**Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_10_boo_who.js)


### 11. <a name="ex11"></a>Title Case a Sentence

_**Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.  
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_11_title_case.js)


### 12. <a name="ex12"></a>Slice and Splice

_**You are given two arrays and an index.  
Use the array methods slice and splice to copy each element of the first array into the second array, in order.  
Begin inserting elements at index n of the second array.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_12_slice_splice.js)


### 13. <a name="ex13"></a>Falsy Bouncer

_**Remove all falsy values from an array.  
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.  
Hint: Try converting each value to a Boolean.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_13_falsy.js)


### 14. <a name="ex14"></a>Where do I Belong

_**Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.  
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).  
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20(index 2) and greater than 5 (index 1).**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_14_belong.js)


### 15. <a name="ex15"></a>Mutations

_**Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.  
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.  
The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".  
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_15_mutations.js)


### 16. <a name="ex16"></a>Chunky Monkey

_**Write a function that splits an array (first argument) into groups the length of size(second argument) and returns them as a two-dimensional array.**_

##### Hints: 

##### [Results](https://github.com/codingk8/freeCodeCamp_Curriculum/blob/master/fcc26_16_chunky_monkey.js)


***

<h2 align="center">May the force :orange:</h2>
<p align="center"><img src="https://media.giphy.com/media/3oKIPcrmtSHeIYsfe0/giphy.gif" alt="May the force be with you"/></p>
  
***
