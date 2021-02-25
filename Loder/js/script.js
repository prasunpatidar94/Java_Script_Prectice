function loadingAjax(div_id) {
    var divIdHtml = $("#"+div_id).html();
    $.ajax({
         type: "POST",
         url: "script.php",
         data: "name=John&id=28",
         beforeSend: function() {
            $("#loading-image").show();
         },
         success: function(msg) {
            $("#"+div_id).html(divIdHtml + msg);
            $("#loading-image").hide();
         }
    });
}