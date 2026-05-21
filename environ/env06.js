
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

    // Button 3
    $("#btn3").click(function() {
        window.location.href = "lands/sheep2.html";
    });

    // Button 4
    $("#btn4").click(function() {
        window.location.href = "lands/shepard2.html";
    });

}); 

$("#image3").hover(function(){
  alert("Hi I'm Div! I've hacked into the mainframe of your consciousness. Don't worry, I won't be in your head forever, just until you learn what you need to know to navigate this realm. I'm here to help you.");
},
function(){
  alert("Bye for now, we'll talk more later.");
});

$(document).ready(function() {
  $("p").fadeIn(2000); // 2 seconds
});