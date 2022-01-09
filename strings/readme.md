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
## Array
Array is a collection of elements that can stored in contiguous memory location