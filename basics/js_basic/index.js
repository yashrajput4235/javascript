// printing the message
console.log("Hello, World!");

// variable structure in java script
var x=10;
console .log(x);
console.log(typeof x);
// diasdvatage below again declare with var x
var x=20;
console.log(x);

let y=30;
console.log(y);
// not declare let y=40; // error

// const is uesd not change value
const id =500
console.log(id);
// id=600; // error

// operators in js 
let a=10;
let b=5;

// arithmetic operators
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// assignment operators
let c=a;
console.log(c);
c+=5; // c=c+5
console.log(c);
c-=5; // c=c-5
console.log(c);
c*=2; // c=c*2
console.log(c);
c/=3; // c=c/3
console.log(c);
c%=2; // c=c%2
console.log(c);

// comparison operators
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);


// logical operators
console.log((a>b) && (a!=b));
console.log((a>b) || (a==b));
console.log(!(a>b));

// data types in js
let str="Hello"; // string
let num=100; // number
let flag=true; // boolean
let n=null; // null
let undef; // undefined
let obj={name:"John", age:30}; // object
let arr=[1,2,3,4,5]; // array

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof n);
console.log(typeof undef);
console.log(typeof obj);
console.log(typeof arr);  

// difference between double and triple equal to
let g=10;
let h=9;
let l='9';
console.log(a==b);// == equal comapre value
console.log(h==l);
console.log(h===l);// === equal compare value as well as data type

// Ternary operator 
// (statement)?(if true):(if false)
let age=18;
let canVote=(age>=18)? "Yes, can vote":"No, cannot vote";
console.log(canVote);

// type conversion
let strNum="100";
let convertedNum=Number(strNum);
console.log(convertedNum);
console.log(typeof convertedNum);

let num2=200;
let convertedStr=String(num2);
console.log(convertedStr);
console.log(typeof convertedStr);

let bool=true;
let convertedBool=String(bool);
console.log(convertedBool);
console.log(typeof convertedBool);

// type coercion
let result1='5'+10; // string concatenation
console.log(result1);
console.log(typeof result1);

let result2='5'-2; // subtraction
console.log(result2);
console.log(typeof result2);

let result3='5'*2; // multiplication
console.log(result3);
console.log(typeof result3);

let result4='10'/2; // division
console.log(result4);
console.log(typeof result4);

let result5='5'+true; // string concatenation
console.log(result5);
console.log(typeof result5);

let result6='10'-false; // subtraction
console.log(result6);
console.log(typeof result6);

let result7=5+null; // addition
console.log(result7);
console.log(typeof result7);

let result8=5+undefined; // NaN
console.log(result8);
console.log(typeof result8);    

// comments in js
// this is single line comment

/*
this is 
multi line 
comment
*/      

// template literal in js
const name="Yash";
const age1=22;
// without template literal
let message1="My name is " + name + " and I am " + age1 + " years old.";
console.log(message1);
// with template literal
let message2=`My name is ${name} and I am ${age1} years old.`;
console.log(message2);

// if-else statement
let number=7;
if(number%2==0){
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}

// switch statement
let day=3;
let dayName;
switch(day){
    case 1:
        dayName="Monday";
        break;
    case 2:
        dayName="Tuesday";
        break;
    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;
    case 5:
        dayName="Friday";
        break;
    case 6:
        dayName="Saturday";
        break;
    case 7:
        dayName="Sunday";
        break;
    default:
        dayName="Invalid day";
}
console.log(`Day ${day} is ${dayName}`);

// loops in js
// for loop
console.log("For loop:");
for(let i=1; i<=5; i++){
    console.log(i);
}

// while loop
console.log("While loop:");
let j=1;
while(j<=5){
    console.log(j);
    j++;
}

// do-while loop
console.log("Do-While loop:");
let k=1;
do{
    console.log(k);
    k++;
}while(k<=5);

