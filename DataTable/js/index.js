

$(document).ready( function () {
console.log("datatable is running ")


    $('#demo1').DataTable(

        // "processing": true,
        // "serverSide": true,

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            // url: 'https://restcountries.eu/rest/v2/capital',
            method: "GET",
            type:"GET",
            
            // data:'tallinn',
            // success: function (obj) {
            //     console.log("oBJ " +JSON.stringify(obj))
            // },
            "columns": [
                { "data": "userId" },
                { "data": "id" },
                { "data": "title" },
                { "data": "body" }
               
            ]
        })
         

    );
} );



// $(() => {   
 
//     // this is the DataTable initializer where I would like to apply the ajax call 
//     $(".display").DataTable({
//         "ajax":function(data, callback, settings) { 
 
//                 // I don't know what to place here
 
//         }
//     });
 
//     // this ajax function sends credentials required for authorization
//     // and receives the data from the API.
 
     
    // $.ajax({
    //     url: 'https://restcountries.eu/rest/v2/all',
    //     // url: 'https://restcountries.eu/rest/v2/capital',
    //     method: "GET",
    //     type:"GET",
    //     // data:'tallinn',
    //     success: function (obj) {
    //         console.log("oBJ " +JSON.stringify(obj))
    //     }
    // });
     
// });




// // loop data to console to verify it is 
//             // arriving to browser 
//             var data  = 
//             // $.each(data, function(a, b) {
//             //     console.log(b);
//             // });