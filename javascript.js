// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get all the tile elements
    var tiles = document.getElementsByClassName("tile");
    
    // Add click event listener to each tile
    Array.from(tiles).forEach(function(tile) {
      tile.addEventListener("click", function() {
        flipCard(tile);
      });
    });
    
    // Get the play button
    var playButton = document.querySelector(".play");
    
    // Add click event listener to the play button
    playButton.addEventListener("click", function() {
      shuffleCards();
      startTimer();
    });
  });
  
  // Function to flip a card
  function flipCard(tile) {
    tile.classList.toggle("flipped");
  }
  
  // Function to shuffle the cards
  function shuffleCards() {
    var tiles = document.getElementsByClassName("tile");
    Array.from(tiles).forEach(function(tile) {
      tile.style.order = Math.floor(Math.random() * tiles.length).toString();
    });
  }
  
  // Function to start the timer
  function startTimer() {
    var timer = 0;
    var timerElement = document.createElement("div");
    timerElement.classList.add("timer");
    document.body.appendChild(timerElement);
    
    var interval = setInterval(function() {
      timer++;
      timerElement.innerHTML = "Time: " + timer + "s";
    }, 1000);
    
    // Stop the timer after 10 seconds (adjust the duration as needed)
    setTimeout(function() {
      clearInterval(interval);
      timerElement.innerHTML = "Game Over";
    }, 10000);
  }
  