//1. Anoynmous function
//a.print the odd numbers in an array
// anonymous function
var array =function(num){
    let temp=[];
for(let i=0;i<num.length;i++){
    if(num[i]%2!=0){
        temp.push(num[i])
    }
}
console.log(temp);
}
array([1,2,3,4,5]);

// IIFE function
(function(num){
let temp=[];
for(let i=0;i<num.length;i++){
    if(num[i]%2!=0){
        temp.push(num[i])
    }
}
console.log(temp);
})
([1,2,3,4,5]);


//b. convert all the strings to tilte caps in a string array
// anonymous function
var string=function(abc){
    let str=abc.toUpperCase();    
console.log(str);
}
string(("guvi geek"));

// IIFE function
(function(abc){
    let str=abc.toUpperCase();

    console.log(str);
})
(("guvi geek"))


//c.Sum of all numbers in an array
// anonymous function
let number=function(n){
let sum=0;
for(let i=0;i<n.length;i++){
    sum+=n[i];
}
console.log(sum);
}
number([1,2,3,4,5]);

// IIFE function
(function(n){
    let sum=0;
    for(let i=0;i<n.length;i++){
        sum+=n[i];
    }
    console.log(sum);
})
([1,2,3,4,5]);


//d.print the prime numbers in an array
// anonymous function
let print=function(num){
    let temp=[];
    num.forEach ((n)=>{
         let factor=0;
        for(let i=0;i<=n;i++){
        if((n%i)===0){
            factor++;
        }
        }
        if(factor==2){
            temp.push(n);
        }
          });
    return temp;
  };
  console.log(print([21,23,37,40,5,6,7,8]));

// IIFE function
(function(num){
    let temp=[];
    num.forEach((n)=>{
        let factor=0;
        for(let i=0;i<=n;i++){
            if((n%i)===0){
                factor++
            }
        }
        if(factor==2){
            temp.push(n);
        }
    });
    console.log(temp);
})
([21,23,37,40,5,6,7,8]);


  //e.print the palindrome numbers in an array
// anonymous function
  var t=[];
  var pan= function(ar){
    for(var i=0;i<ar.length;i++){
        var s=ar[i];
        var r=ar[i].split("").reverse().join("");
         if(s==r){
        t.push(s);
    }
    }
    return t;
  }
console.log(pan(["mom","kumar","101","200","hello"]));

// IIFE function
var t = [];
	 (function(ar){
        for(var i=0;i<ar.length;i++){
            var s=ar[i];
            var r=ar[i].split("").reverse().join("");
             if(s==r){
            t.push(s);
        }
        }
     console.log(t);
	  })
      (["mom","kumar","101","200","hello"]);


// f.Return median of two sorted arrays of the same size
// anonymous function
var m =function(n1,n2){   
    var arr=[...n1,...n2].sort();
    if(arr.length%2==0){
        var m1=arr[arr.length/2];
        var m2=arr[arr.length/2-1];
        return (m1+m2)/2;
    }
    else {
        return arr[Math.floor(arr.length/2)];
    }
}
console.log(m([12,30,45],[20,44,67]));


// IIFE function
(function(n1,n2){
    var arr=[...n1,...n2].sort();
    if(arr.length%2==0){
        var m1=arr[arr.length/2];
        var m2=arr[arr.length/2-1];
        console.log ((m1+m2)/2);
    }
    else{
        
       console.log( arr[Math.floor(arr.length/2)]);
    }
   
})
([12,30,45],[20,44,67]);


//g.Remove duplicates from an array
//anonymous function
var temp=[];
var a= function (arr) {
for(var i=0; i<arr.length; i++){
    var count=0;
    for(var j=i; j<arr.length;j++){
         if(arr[i]==arr[j]){
                 count++; 
         }
    } 
    if(count=1){ 
        temp.push(arr[i]);
    }  
}
return temp
}
console.log(a([10,35,6,20,10,6]));

// IIFE function
var temp=[];
(function (arr) {
for(var i=0; i<arr.length; i++){
    var count=0;
    for(var j=i; j<arr.length;j++){
         if(arr[i]==arr[j]){
         count++; 
  }
 } 
    if(count<=1){
    temp.push(arr[i]);
  }  
}
 console.log(temp);
})
([10,35,6,20,10,6]);


//h.Rotate an array by k times
// anonymous function
const a = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }
  console.log(a([1,2,3,4,5],2));
  
  //   IFFE function
  
   (function(nums, k) {
  
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    console.log(nums);
  })
  ([1,2,3,4,5],2);

  
//3.Do the below programs in arrow functions.
//a.Print odd numbers in an array

let array=(num)=>{
    let temp=[];
for(let i=0;i<num.length;i++){
    if(num[i]%2!=0){
        temp.push(num[i])
    }
}
return temp;
}
console.log(array([1,2,3,4,5]));


//b.Convert all the strings to title caps in a string array
var string1=(abc)=>{
    var str=abc.toUpperCase();    
return str;
}
console.log(string1(("guvi geek")));

//c.Sum of all numbers in an array
let number1=(n)=>{
    let sum=0;
    for(let i=0;i<n.length;i++){
        sum+=n[i];
    }
   return sum;
    }
    console.log(number1([1,2,3,4,5]));


//d.Return all the prime numbers in an array
let print1=(num)=>{
    let temp=[];
    num.forEach ((n)=>{
         let factor=0;
        for(let i=0;i<=n;i++){
        if((n%i)===0){
            factor++;
        }
        }
        if(factor==2){
            temp.push(n);
        }
          });
    return temp;
  };
  console.log(print1([21,23,37,40,5,6,7,8]));

//e.Return all the palindromes in an array
var t=[];
var pan= (ar)=>{
  for(var i=0;i<ar.length;i++){
      var s=ar[i];
      var r=ar[i].split("").reverse().join("");
       if(s==r){
      t.push(s);
  }
  }
  return t;
}
console.log(pan(["mom","kumar","101","200","hello"]));