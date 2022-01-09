# STRINGS
 ### string is a data type in javascript we can define  single quotes and double quotes and templateliteras
 
 ```
 let hello = 'srinadh';
 let hello = "srinadh";
 let hello = `srinadh`;
 ```
## Create String or convert string from diffterent datatypes

```
String(), toString(), new String()
 new String : it will return construction String , value can be accessedby string.valueOf();
 String     : it will converting any value to the string even null and undefined.
 toString   : it will converting value except null and undefined properties.
```
```
string.formcharcode(): it will return the string
String.formcharcode(49): 1

```
```
charcode(): it will return the unique code when trigger the keypress of event.

```

```
test(): The test() method returns true if it finds a match, otherwise false.


```

## Concating a string
### join two variable into single variable


```
using +, contact , and string literals

let a = 'test1';
let b = 'test2';
let c = a+b;
let d = a.contact(b);
let e = `${a} ${b}`;

```
## Reverse of string

### it will return the reverse string in any value

```
    let myname='sivasrinadh'
       let n =1337
       let arry = [1,2,3]
       let arry1= String(arry)     
       console.log(typeof m)
       console.log(myname.split('').reverse().join(''));
       console.log([...String(n)].reverse().join('')); 
       console.log(arry1.split('').reverse().join('')) 

```
## Comparing Strings
### It compare strings alphabetically,it will return negative postive and zero values. if returns negative value the compare string in not alphabetically and it return postive value the compate string in alphabetically and it return zero value the reference string is same

```
    // Comparing Strings
       let fn = 'bdf';
       let sn = 'adf';
       console.log(fn==sn)  return false
       console.log(fn.localeCompare(sn))   return 1
    
    // Comparing Strings


```
## character
### It will return the character at specified index of the string
```
 let sname ="srinadh";
    console.log(sname.charAt(4)) // a

```
## trim
### It remove the white space form the both edges of a string
```
    let newname= "  srinadh    "      
    console.log(newname.trim())

```
##trimStart()
### It remove the white space at the starting of a string
```
    let newname= "  srinadh    "      
    console.log(newname.trimStart())

```
##trimEnd()
### It remove the white space at the Ending of a string
```
    let newname= "  srinadh    "      
    console.log(newname.trimEnd())

```
##slice
### It will return the extracted part of new string and it has starting position and ending postion if give starting position from the string without ending position it will return complete extract string.if give starting position and ending position it will return the starting position to ending postion before element.it will accept negative values also if give negative value the starting index position from right to left.
```
 let sname ="srinadh";
  console.log(sname.slice(2)) //  inadh
  console.log(sname.slice(2,3)) // i
   console.log(sname.slice(2,5)) // ina  
    console.log(sname.slice(-5,-1)) // inad
```
##substring

### It similar to the slice and it not accept negative values
```
     console.log(sname.substring(3,5)) // na
```
##indexof
### It will return the postion of the string and it return negative value if text is not found
```
  let format = "sivasrinadh"       
   console.log(format.indexOf('a'))    // 3

```
##lastindexof
### It will return the postion of the string and it return negative value if text is not found
```
  let format = "sivasrinadh"       
   console.log(format.lastIndexOf('a'))    // 8

```
```
 console.log(format.lastIndexOf('.')) // it will return poistion
     console.log(format.slice(format.lastIndexOf('.'))) // it will the string
     console.log(format.replace(format.slice(format.lastIndexOf('.')),'.png')) // it will replace the string
```
##lower case
### It will return the lowercase string
```
 let low = 'SRINADH';
       console.log(low)     
       console.log(low.toLowerCase()) // srinadh
```

###upper case
### It will return the uppercase string

```
let upp ="srinadh";
    console.log(upp.toUpperCase()) //   SRINADH
```
## repeat 
### It will return repeat string number of time at particular count

```
console.log("siva".repeat(4)) // sivasivasivasiva

```

# Array
Array is a collection of elements that can stored in contiguous memory location.

```
let arr = [2,5,9,1,8];

console.log(arr) // It will return  the  total array of elements
console.log(arr[3]) // It will return the element of the index of position // 1
console.log(arr.lenght) // It will return the lenght of the arrya // 5
console.log(arr.[arr.lenght-1]) // It will return the array of last element // 8

````