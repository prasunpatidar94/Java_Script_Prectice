'use strict';
console.log('loops - Object methods - Introduction of Object - basic array opration - Arrays - calling function other function - Activation Strict Mode - functions - function and declearation vs expreation - Arrow function - ');

/*
console.log( 'Activation Strict Mode');

let hasPassport = false;
const passInLanguageTest = true;

if(passInLanguageTest) hasPassport = true;

if(hasPassport) console.log("he can go out of contry");

let interface = 10;// it will not run and given exception reserved veriable  because of strict mode 

console.log('functions');

//defination of function
function logger() {

    console.log("I am Prasun patidar ")
}

//calling , running , invoking  function
logger();
logger();

//function with perameter 
function ageCalculator(birthDate) {
    return new Date().getFullYear()-birthDate;
}
console.log(ageCalculator(1995));


console.log( 'function and declearation vs expreation');

 // 1 type simple fuction (declearation) (call then  create or create then call both will work)
 const age1= ageCal(1995);
console.log(age1);

function ageCal(birthDate){
    return new Date().getFullYear() - birthDate;
}

//anonimous function (expreation) (create then call is work but call then create is not work )
 const age2 =  function (birthDate) { return new Date().getFullYear() - birthDate; }
 console.log(age2(1995));

console.log('Arrow function ES6 version  ');

var timesTwo = params => params * 2

console.log(timesTwo(4));  // 8
const age3 = birthYear => 2020 - birthYear;
//with one perameters
const result = age3(1995);
console.log(result);

//with multipal perameters
const add = (a, b) => a + b;
console.log(add(10, 20));

//with body 
const cool = (a, b) => {
    let c = (a + b) / 2;
    return c;
};
console.log(cool(10, 30));

console.log('calling function other function');

let fullName = function (firstName , lastName) {
return ` MR. ${firstName} ${lastName}` 
}
 
const userAge = birthYear => new Date().getFullYear() - birthYear;

function address(userName) {
return 'ram mander chok patidar mohalla kasrawad';
    
}

function info(userName) {

    return ` user name is : ${userName}
            user full name is : ${fullName('Prasun', 'Patidar')}
            user Adderss is : ${address(userName)}
            user age is : ${userAge(1995)}
            `

    
}

console.log(info('Prasun'));



console.log('Arrays');

//literal type
const famailyL = ["Kamal","Rekha","Prasun","Chandan","megha"] ;
console.log(famailyL);

//object type array
const famailyO = new Array("Kamal","Rekha","Prasun","Chandan","megha") ;

console.log(famailyO);

console.log(famailyL[0]);
console.log(famailyL[2]);
console.log(famailyL.length);
console.log(famailyL[famailyL.length - 1]);

famailyL[0] = 100;
console.log(famailyL);
console.log(famailyL[2]);

const age = birthyear => new Date().getFullYear()-birthyear;

const user_info = ['Prasun' , 'Patidar' ,  age(1995), 21000.35 , true,famailyO];

console.log(user_info);
console.log(user_info.length);



console.log('Basic array opration ')

const age = birthyear => new Date().getFullYear()-birthyear;


const user_info = ['Prasun' , 'Patidar' ,  age(1995), 21000.35 , true];
//add elemets in end

user_info.push('itenaz');

console.log(user_info);

const newLength = user_info.push('Titan');
console.log(newLength);
console.log(user_info);

//add elemets in first
console.log(user_info.unshift('MR.'));
console.log(user_info);

//remove element in end
console.log(user_info.pop());//
console.log(user_info);
//remove element in first
console.log(user_info.shift());//
console.log(user_info);

//get index of elenemt 

console.log(user_info.indexOf(26)); //if there + ve
console.log(user_info.indexOf(261)); //if there - ve or -1

//ES6 to check element  (strict ) not allow to auto type converstion)
console.log(user_info.includes('Prasun')) //if there true

console.log(user_info.includes('chandan')) //if there false




const calTips = (bill , per) => bill*(per/100);

const bills = [150,200,100];
const tipes = [];

if (bills.pop() ===100) {

    tipes.push(calTips(150 , 20));
        

    
}
if (bills.pop() === 200) {

    tipes.push(calTips(150 , 20));


    
}
if (bills.pop() ===150) {

    tipes.push(calTips(150 , 20));
        

    
}

// console.log(bills);
console.log(tipes);




console.log('Introduction of Object ')

//to vover come array  andimpliment then objev in  it use object 

const user_info = {
    userName: 'prasunpatidar94',
    firstName: 'Prasun',
    lastName: 'Patidar',
    age: 26,
    wife: 'Megha Patidar',
    famaily:["Kamal","Rekha","Prasun","Chandan","megha"],
    salary: 21000.256


};

console.log(user_info);
console.log(user_info.famaily);
console.log(user_info["famaily"]);

console.log(user_info.wife);
console.log(user_info['wife']);

console.log(user_info.famaily[3]);



const know = prompt(`what you want to know about ${user_info.userName} ?`)

// console.log(user_info.know);  //undefined

// console.log(user_info[know]); //26

if (user_info[know]) {

    console.log(user_info[know]); 

    
}else{

    console.log('envalid request');
}
console.log(user_info.famaily.length); 





// const a =[1,2,3,4,5,];
// a[100] = 55;
// console.log(a.length);
// console.log(a);



console.log('Object methods ')



const user_info = {
    userName: 'prasunpatidar94',
    firstName: 'Prasun',
    lastName: 'Patidar',
    birthYear: 1995,
    wife: 'Megha Patidar',
    famaily:["Kamal","Rekha","Prasun","Chandan","megha"],
    salary: 21000.256,

    // calAgeExpretion:birthYear => new Date().getFullYear() - birthYear,
    // calAgeFunction: function (birthYear) {
    //     // console.log(this.famaily);
    //     return new Date().getFullYear() - birthYear;
    // },

    createAge: function(){
        this.age = new Date().getFullYear() - this.birthYear
    return this.age;
    }
};


function ageCal(birthYear) {
    return new Date().getFullYear() - birthYear;
}
console.log(user_info);
//call object funstion and exprestion 
// console.log(user_info.calAgeExpretion(1996));
// console.log(user_info.calAgeFunction(1996));
// console.log(user_info['calAgeExpretion'](1996));
// console.log(user_info['calAgeFunction'](1996));
console.log(user_info.createAge());
console.log(user_info);


console.log('loops');

//for loop

for(let i = 0; i <= 10; i++){
    console.log('Prasun Experiunce is : '+i);
}


const user_info = ['Prasun' , 'Patidar' ,  26, 21000.35 , true];
const typeOfDatatype = []; 

for(let i = 0; i < user_info.length; i++){
    console.log(user_info[i]);

    // typeOfDatatype [i] = typeof user_info[i];
    typeOfDatatype.push( typeof user_info[i])

}


console.log(typeof user_info);
console.log(typeOfDatatype);



const birthYears = new Array(1972 , 1996, 1995 ,2000 );
const ages = []; 
for (let i = 0; i < birthYears.length; i++) {
    
     ages.push(new Date().getFullYear() - birthYears[i]);

    
}
console.log(birthYears);
console.log(ages);





for (let i = 0; i <= 10; i++) {
   
    if(i===5)continue;
    // if(i===5)break;

    console.log(i);
    
}


//revers loop for 

const birthYears = new Array(1972 , 1996, 1995 ,2000 );



for (let i = birthYears.length-1;  i >=0;  i--) {
    console.log(birthYears[i]);
}


//while loop
//forword
const birthYears = new Array(1972 , 1996, 1995 ,2000 );

let i = 0;

while (i < birthYears.length)  {
    console.log(birthYears[i]);
    i++;
}
//reverse

 i = birthYears.length - 1;

while (i >= 0)  {
    console.log(birthYears[i]);
    i--;
}


let dice = Math.trunc(Math.random() * 6)+1;

console.log(dice);

*/

// const allTeamsScores = [1444,2455,3555,400,555,677,788,8,900];
const allTeamsScores = [0,0];



function calAvrage(paallTeamallTeamsScoressScorerams) {
    let sum = 0;
    for (let index = 0;  index < allTeamsScores.length; index++) {
        
        sum = sum + allTeamsScores[index];
    }
    if (sum >0) {
        return (sum/allTeamsScores.length);
    }else{
        return('there is no no in array or 0 pesent in arrey')
    }

}

console.log(calAvrage(allTeamsScores));