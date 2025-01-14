var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

// Start the game on keypress
$(document).keypress(function () {
    if (!gameStarted) {
        level = 0; // Reset level to 0
        gamePattern = []; // Clear game pattern
        $("#level-title").text("Level " + level);
        nextSequence(); // Start the first sequence
        gameStarted = true; // Set the game as started
    }
});

// Button click event
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour); // Play sound
    animatePress(userChosenColour); // Animate button press
    checkAnswer(userClickedPattern.length - 1); // Check the answer
});

// Generate next sequence
function nextSequence() {
    userClickedPattern = []; // Reset user clicks for the new level
    level++; // Increase level by 1
    $("#level-title").text("Level " + level); // Update level in UI

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // Flash animation
    playSound(randomChosenColour); // Play sound for the generated sequence
}

// Play sound for a given color
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Animate button press
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Check user answer
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence(); // Move to next sequence
            }, 1000);
        }
    } else {
        playSound("wrong"); // Play wrong sound
        $("body").addClass("game-over"); // Add a red flash to indicate game over
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver(); // Restart the game
    }
}

// Restart the game
function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}
