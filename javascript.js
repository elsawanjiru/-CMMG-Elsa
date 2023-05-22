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
  });
});

// Function to flip a card
function flipCard(tile) {
  tile.classList.toggle("flipped");
}

// Function to shuffle the cards
function shuffleCards() {
  var tiles = document.getElementsByClassName("tile");
  var arrayTiles = Array.from(tiles);
  
  // Shuffle the array
  arrayTiles.sort(function() {
    return 0.5 - Math.random();
  });
  
  // Reorder the tiles based on the shuffled array
  arrayTiles.forEach(function(tile, index) {
    tile.style.order = index.toString();
  });
}
