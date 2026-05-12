// add creature to the garden
$("#crAdd").click( function() {

    let crName=$("#crName").val(); 
    console.log(crName); 

if( crName.length > 5) {
 $("#creature-list").append("<div>" + crName + "</div>"); 
}

    $("#creature-list").append("<div>" + crName + "</div>"); 




     $("#crName").val("");

}); 