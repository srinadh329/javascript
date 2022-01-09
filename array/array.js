let a = [1,2,3,'ff',4,5,78,90];
console.log(a)
console.log(a[1])
console.log(a.length);
console.log(a[a.length-1]);
console.log(a[Math.round((a.length-1)/2)]);
///console.log(Math.floor((a.length-1)/2));
//console.log(Math.round((a.length-1)/2));
let c= ['venki','srinadh'];
let d = ['javascript','angular'];
let z= c+d // concact;
console.log(typeof z)
let cc= ['venki','srinadh'];
let dd = ['javascript','angular'];
let ee =['ss']
let test='hello'
let zz = cc.concat(dd,ee,test);
console.log(zz)
//ES6 Feature Spread operator
let test1=['dd','dddd','fhfhhf']
let test2=['lllk','gdbdg','gdgdg']
let tst='hdhdh'
let test3= [...test1,...test2,...tst];
console.log(test3)

let ele =[34,5,53,55,453,54,4];
// filter is used to filter the array of elements on certian condition

let evenEle = ele.filter(x=>{
    return (x%2) == 1
})
console.log(evenEle)

let arr=[{name:'venki',pas:''},{name:"srinadh",pas:'123'},{name:"srinadh",pas:'123ss'}];

let arrname= arr.filter(x=>{
    console.log(x.name == 'srinadh')
    
    return x.name == 'srinadh'
    
})
console.log(arrname)

let arrMap = arr.map(x=>{
    x.phone='none';
    return x;
})
let kg=[1,3,4,5];
let gg = kg.map(x=>{
   x= x+1;
    return x;
})
console.log(gg)
console.log(kg)
console.log(arrMap)
console.log(arr)
let eveA =[1,3,9,5];
let e = eveA.every(x=>{
    return x%2 ==0
});
console.log(e)

let s = eveA.some(x=>{
    return x%2 ==0
})
console.log(s)
let [ds,g] =[1,5,'ff'];
console.log(ds,g);
let arr1=[1,2];
let arr2=[1,2];
console.log(JSON.stringify(arr1)==JSON.stringify(arr2))
console.log( JSON.stringify(arr1));
let arrRev=[23,45,6,6,899,76];
let rev= arrRev.reverse();
console.log(rev)
let venki = arr.find(x=>x.name=='venki');

console.log(venki)
let pos =[32,45,6,7];
let index = pos.findIndex(x=>x==33);
console.log(index);
let name='sri/nadh';
console.log(name.split('').join(''));

let dymicArr=[];
console.log(dymicArr);
dymicArr.push(2)
console.log(dymicArr);
dymicArr.push(3)
console.log(dymicArr);
dymicArr.pop()
console.log(dymicArr);
dymicArr.unshift(34)
console.log(dymicArr);
dymicArr.shift()
console.log(dymicArr);
let spele=[1,2,3,4];
 spele.splice(2,1)
console.log(spele.join(''))
let m =[{name:'srinadh',phone:'1234560'},{name:'venkatesh',phone:'2334444'},{name:'srinadh',phone:'3333'}];
let phone = m.map(x=>x.name);
console.log(phone)
let as = new Array()
console.log(typeof as)
console.log(as instanceof Array)
console.log(Array.isArray(as))


// sorts, reducer,min max , slice, toString, array keys, array.form