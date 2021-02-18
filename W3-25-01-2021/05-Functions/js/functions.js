function myf(a,b) {

    console.log("in method ");
    var  c = parseInt(a.value)+parseInt(b.value);
    console.log(c);

    document.getElementById("out").innerHTML = "vale is :"+c;
    
}