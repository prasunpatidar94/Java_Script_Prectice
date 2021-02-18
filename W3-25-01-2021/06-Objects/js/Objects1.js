function person(name , age ,doc ,city ) {


    var person = {
        name : name.value,
        age : age.value,
        doc : doc.value,
        city : city.value,
        NameAndAge : function(){
            return "this is : "  + this.name +"  and his age is : "+this.age
            +" and his doc name is : "+ this.doc +"  and he is belong to : "+ this.city;
        }
    };

    // var person = {
    //     firstName: "John",
    //     lastName : "Doe",
    //     id       : 5566,
    //     fullName : function() {
    //       return this.firstName.valueOf() + " " + this.lastName.valueOf()    ;
    //     }
    //   };
    
      document.getElementById("out").innerHTML = person.NameAndAge();
   

}