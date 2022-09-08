

function saveHighscores() {

    var highscores = JSON.parse(localStorage.getItem("highscores"));
  
    for (var i = 0; i < highscores.length; i++) {
      // make a "scoreboard" to list highscores
      var scoreLi = document.createElement("li");
      scoreLi.textContent = highscores[i].initials + ": " + highscores[i].highscore;
      // show the score on the page
      document.getElementById("highscores").appendChild(scoreLi);
    }
  }
  //still coming up undefined...
  function clearHighscores() {
    localStorage.removeItem("highscores");
    location.reload();
  }
  
  var resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", function () {
    clearHighscores();
  })
  saveHighscores();