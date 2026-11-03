/*console.log("name:nakshay");
console.log("age:18");
console.log("education:bca");

//calculator
let number1=20;
let number2=30
console.log("calculator");
console.log("addition:",number1+number2);
console.log("subtraction:",number1-number2);
console.log("multiplication:",number1*number2);
console.log("division:",number1/number2);

//product bill

console.log("product:mobile");
console.log("price:20000");
console.log("quantity:2");
console.log("total:40000");

//student mark

console.log("studentname:akshay");
console.log("english mark:90");
console.log("maths mark:70");
console.log("science mark:60");
console.log("total mark:220");

//object

const student={
    name:"akshay",
    age:18,
    course:"bca",
};
console.log(student);


console.log(student.name);
console.log(student.age);
console.log(student.course);

//update

student.age=19
console.log(student.age);

//array

const friutes=["apple","mango","orange"]
console.log(friutes);

console.log(friutes[0]);
console.log(friutes[1]);
console.log(friutes[2]);

friutes[1]="banana";
console.log(friutes);


// let price = "50000";
let quantity = "2";
// let convertedprice = Number(price);
let convertedquantity = Number(quantity);
// let total = convertedprice * convertedquantity;
// console.log("Total:",total);
console.log(typeof convertedprice);
console.log(typeof convertedquantity);


//product bill

let productname = "laptop";
let price = 50000;
let productquantity = 2;
let isavailable = true;
let total = price * productquantity;
console.log("product:", productname);
console.log("price:", price);
console.log("quantity:", productquantity);
console.log("availability:", isavailable);
console.log("Total:", total);

//if else

let number = 18;
if(number % 2 == 0)
{
console.log("even number");
}
else
{
    console.log("odd number");
    
};



//menu driven calculator

/*et num1 = 20;
let num2 = 30;
let operator = "+";
switch(operator)
{
    case "+":
        console.log("result:", num1 + num2);
        break;
         case "-":
         console.log("result:", num1 - num2);
        break;
         case "*":
         console.log("result:", num1 * num2);
        break;
         case "/":
         console.log("result:", num1 / num2);
        break;
         case "%":
         console.log("result:", num1 % num2);
        break;
      
        default:
            console.log("invalid operator");
            
};





let num = 5;
if(num<0)
{
    console.log("invalid");
    
}
else if(num>18)
{
    console.log("eligible");
    
}
else
{
    console.log("not eligible");
    
}



let num1 =3;
if(num1<0)
{
    console.log("negative number");
    
}
else if(num1==0)
{
console.log("zero");

}
else{
    console.log("positive number");
    
}


//great calculator

let score =80
if (score >100)
{
    console.log("invalid");
    
}
else if(score>=90)
{
    console.log("A grade");
    
}
else if(score>=80)
{
    console.log("B grade");
    
}
else if(score>=70)
{
    console.log("c grade");
    
}
else if(score>=60)
{
    console.log("D grade");
    
}
else if(score>=50)
{
    console.log("E grade");
    
}
else if(score>=40)
{
    console.log("F grade");
    
}
else if(score>30)
{
    console.log("fail");
    
}
else if(score>20)
{
    console.log("fail");
    
}
else if(score>10)
{
    console.log("fail");
    
}
else if(score>=0)
{
    console.log("fail");
    
}
else{
   console.log("invalid");
   
}




//electricity bill calculator

let unit=150;
if(unit<=100)
{
    console.log("total rupees",unit * 2);
    
}
else if(unit<200)
{
    console.log("total rupees",unit * 3);
    
}
else{
    console.log("total rupees",unit * 5);
    
}


let mark=55;
let documentsSubmitted = true;
if(mark>=50)
{
    if(documentsSubmitted)
    console.log("exam passed");

   else{
    console.log("documents are not submitted");
    
} 
}
else  
{
    console.log("exam failed");
}



//for loop

for(let i=1;i<=5;i++){
    console.log(i);
    
}



console.log("even numbers");

for(let i=1;i<=10;i++)
{
    if(i%2==0){
    console.log(i);
    }
}



console.log("sum of first 10 numbers");

let sum=0
for(let i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum);



let numbers=[10, 20, 30, 40, 50]
for(i=0 ;i < numbers.length ;i++)
   { if(numbers[i]===30)
    {
        console.log("number found");
        break;
    }
}


for(i=1;i<=10;i++)
{
    if(i%2==0)
        continue
    console.log(i);
    
}

/*


console.log("number reverse");

let numb = 1234;
let reverse = 0;
while(numb>0){
    let digit = numb%10;
    reverse = reverse * 10 + digit;
    numb=Math.floor(numb/10);
    console.log(reverse);
    
}



let numb=123455;
let count=0;
while(numb>0){
    numb=Math.floor(numb/10);
    count++;

}
console.log("number of the digit",count);
*/

//function1

/*
function even(a){
    if(a%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(even (10));


//function2

function add(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
function modulas(a,b){
    return a%b;
}
let num1 = 20;
let num2 = 30;
console.log("addition:",add(num1,num2));
console.log("substaction:",subtraction(num1,num2));
console.log("multiplicatiom:",multiplication(num1,num2));
console.log("division:",division(num1,num2));
console.log("modulas:",modulas(num1,num2));




//largest of 2 numbers

function number(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }

}
console.log("the largest number is",number(3,5));



//largest pf 3 numbers

function number1(a,b,c) {
    if(a>b){
        if(a>c){
            return a
        }
    }
    else if(b>c){
      return b
}
else{
    return c
}
}
console.log(number1(5,8,9));



//check a number is palindrome or not


function palindrome(a){
    let num=a
    let reverse = 0;

    while(a>0){
    let digit = a%10;
    reverse = reverse * 10 + digit;
    a=Math.floor(a/10);
  
   
}
if(reverse===num){
    console.log("number is palindrom");
    
}
else{
    console.log("number is not palindrom");
    
}

}
palindrome(121);



//atm withdrawer


function atm(m) {
    let balance = 10000;
   let pin=true
    if(pin){
        if(m<=10000)
console.log("withdrowel sucsessful");

    }
    else{
        console.log("withdrowel unsucsessful");
        
    }
}
atm(3000)




//object



const student={
    name:"akshay",
    age:18
};
console.log(student.name);
console.log(student.age);
student.course="mca"
console.log(student);
delete student.age;
console.log(student);
console.log(student["name","course"]);




//array


const students=["anu",
    "meera",
    "rahul",
    "arun"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

students.push("akshay")
console.log(students);

students.pop()
console.log(students);

students.unshift("abhi")
console.log(students);

students.shift()
console.log(students);

console.log(students.indexOf("meera"));



console.log(students.includes("rahul"));
console.log(students.includes("meera"));

const st=students.slice(1,3)
console.log(st);

students.splice(1,3)
console.log(students);

students.splice(1,0,"manu")
console.log(students);



//for each

const men=[
    "anu","manu","sanu","akshay","rahul"
];
men.forEach((men,index)=>{
    console.log(index + 1 + "." + men);
    
});



//question

/*
const employee=["akhil","neha","vishnu"];
console.log(employee[1]);
employee.unshift("sneha")
console.log(employee);
employee.shift()
console.log(employee);
employee.push("rahul","anu")
console.log(employee);
console.log(employee.length);
console.log(students.includes("neha"));
console.log(students.includes("arun"));
const emp=employee.slice(0,3)
console.log(emp);
employee.splice(1,1,"varun")
console.log(employee);
employee.forEach((employee,index)=>{
    console.log(index + 1 + "." + employee);
    
})

*/



//array object

/*
const employee=[
    {name:"Akshay",
        age:18
    },
    {name:"Anu",
        age:20
    },
    {name:"Manu",
        age:22
    }
]
employee.forEach(employee=>{
    console.log(employee.name);
    
})



//string

const name="akshay";
console.log(name.toUpperCase());

const na="AKSHAY"
console.log(na.toLowerCase());



//task
const inputName="  rahul sharma  ";
console.log(inputName.trim());


const sentence="learning python is higly rewarding and fum";

const textfile="assignment_report.pdf";

const greeting="hello developers!";

const rawTags="HTML,CSS,Javascript,React";

console.log(sentence.includes("python"));

console.log(textfile.startsWith("assignment"));
console.log(textfile.endsWith(".pdf"));

console.log(greeting.indexOf("developers"));

console.log(greeting.slice(0,5));

const sen=sentence.replace("python","javascript");
console.log(sen);

console.log(rawTags.split(","));



//loging validation

function loging(username,password){
    if(username===""){
        throw new Error("user name is required");
    }
    if(password===""){
        throw new Error("password is required");
    }
    return "loging is successful";
    }
    try{
        console.log(loging("akshay","12345"));
        
    }catch(error){
        console.log(error.message);
        
    }
    */

const add=(a,b)=>{
    return a+b;
};
const a=(a,b)=>{
    return a-b;
};
const b=(a,b)=>{
    return a*b;
};
const c=(a,b)=>{
    return a/b;
};
const d=(a,b)=>{
    return a%b;
};
console.log(add(10,20));
console.log(a(10,20));
console.log(b(10,20));
console.log(c(10,20));
console.log(d(10,20));


//date and time

const today=new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getMilliseconds());

/*
function even(a){
    if(a%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(even (10));


*/

function palindrome(a){
    let num=a
    let reverse = 0;

    while(a>0){
    let digit = a%10;
    reverse = reverse * 10 + digit;
    a=Math.floor(a/10);
  
   
}
if(reverse===num){
    console.log("number is palindrom");
    
}
else{
    console.log("number is not palindrom");
    
}

}
palindrome(121);



for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row=row+"*";
    }
    console.log(row);
}




//movie ticket

function age(a){
    if(a>=18){
        console.log("access granted:you can watch the movie");
        
    }
    else{
        console.log("access denid:you must be 18 or older");
        
    }
}
age(15);

//cart value

function cart(n){
    if(n>=100){
        console.log("shipping is free");
        
    }
    else if(n>=50){
        console.log("shipping coast=5$");
        
    }
    else{
        console.log("shipping coast=10$");
        
    }
}
cart(99);


//atm 


function atm(m,b){
    let accno=1234;
    let balance=10000;
    if(m===accno){
        if(b<10000){
            console.log("withdrowel succsessful");
          
                
            }
            else{
                console.log("money is not debited");
                
            }
            
        }
        else{
            console.log("account number is incorrect");
            
        }
    }
    atm(1234,21000)



    //tax

    function tax(t,s){
        if(s===a){
            console.log("10% tax penalty");
            console.log("penalty=",0.1*t);
            
        }
        else if(s===b){
            if(t>50000){
                console.log("15% tax penalty");
              console.log("penalty=",0.15*t);
                
            }
            else{
                console.log("12% tax penalty");
                 console.log("penalty=",0.12*t);
            }
        }
        else{
            console.log("5% tax penalty");
             console.log("penalty=",0.05*t);
        }
    }
    tax(60000,b);