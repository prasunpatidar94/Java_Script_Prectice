function myf() {

    let text = "prasun patidar !!!!!";
    document.getElementById("out1").innerHTML = text.length;
    
}


let intN = 10;
let floatN = 10.555;
let longN =  9999999999999999;//10000000000000000
    longN =  999999999999999;//999999999999999
// The maximum number of decimals is 17,
//  but floating point arithmetic is not 
// always 100% accurate:

console.log(intN , floatN , longN);

// let x = "100";
// let y = 50;
// let p = "app"
// let nand = NaN;
// let z = x-y;
// console.log(z , typeof(z));
// console.log(y/p);
// console.log(isNaN(x))
// console.log(2*nand )
// console.log(typeof(nand))

let no = 1000;
if (no != Infinity) {
 console.log("not "+no)    
} else {
    console.log("is "+no)    

}

if (!isFinite(no)) {
    console.log("not "+no)    
   } else {
       console.log("is "+no)    
   
   }
   
console.log(Infinity/-2)


console.log(0xFF);

let data = 1000;
let objdata = new Number(1000);
let objdata1 = new Number(1000);


console.log(objdata1 === objdata);
console.log(objdata1.value === objdata.value);
console.log(objdata1.value == objdata.value);



















