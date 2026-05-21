
let brodyDog = {
  name: "Brody",
  species: "dog",
  favoriteFood: "bones",
  moods: ["sleepy", "happy", "excited", "sassy", "mad", "confused"]
};

let moodColors = {
  sleepy: "#b8c9e1",
  happy: "#ffe066",
  excited: "#ffa600",
  sassy: "#c77dff",
  mad: "#ff4444",
  confused: "#80d799"
};

let count = 0;

$(document).ready(function () {

  $("#needy-button").click(function () {
    let currentMood = brodyDog.moods[count];
    $("body").css("background-color", moodColors[currentMood]);
    let message = "My current mood is " + currentMood;
    message = message + "<p>My name is <button id='brody-button'>Brody</button></p>";
    message = message + "<p>I am a <button id='species-button'>dog</button></p>";
    message = message + "<p>My favorite food is <button id='food-button'>bones</button></p>";
    message = message + "<div id='dog-image' style='display:none;'><img src='brody.jpg'></div>";
    message = message + "<div id='species-image' style='display:none;'><img src='dog.jpg'></div>";
    message = message + "<div id='food-image' style='display:none;'><img src='bones.jpg'></div>";
    $("#output").html(message);

    count++;
    if (count >= brodyDog.moods.length) {
      count = 0;
    }
  });

  $(document).on("click", "#brody-button", function () {
    $("#dog-image").fadeToggle(800);
  });

  $(document).on("click", "#species-button", function () {
    $("#species-image").fadeToggle(800);
  });

  $(document).on("click", "#food-button", function () {
    $("#food-image").fadeToggle(800);
  });

});
