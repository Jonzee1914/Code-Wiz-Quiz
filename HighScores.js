var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " - " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

// Event listener to clear 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Event listener to return to quiz
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});