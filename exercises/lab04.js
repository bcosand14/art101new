let brodyDog = {
    name: "Brody",
    species: "dog",
    favoriteFood: "bones",
    moods: ["sleepy", "happy", "excited", "sassy", "mad", "confused"]
};

let count = 0;

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = brodyDog.moods[arrayPosition];

    let message = "My current mood is " + currentMood;
    message = message + "<p>My name is " + brodyDog.name + ".</p>";
    message = message + "<p>I am a " + brodyDog.species + ".</p>";
    message = message + "<p>My favorite food is " + brodyDog.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});