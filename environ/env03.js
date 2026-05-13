
$(document).ready(function() {

    // Data stored in JavaScript
    const data = {
        sheep: "pros: open minded, creative, understanding<br>cons: naive, easily influenced, indecisive",
        shepard: "pros: organized, efficient, relibale <br>cons: rigid, uncreative, controlling",
        help: "Click a button to display information."
    };

    // Button 1
    $("#btn1").click(function() {
        $("#output").html(data.sheep);
    });

    // Button 2
    $("#btn2").click(function() {
        $("#output").html(data.shepard);
    });


    
});