// Global variables
let currentRound = 1;

// Set 'play' button action
$("#tutorialPlayButton").click(function () {
	console.log("Play button clicked");
	// Hide the tutorial
	$("#how-to-play").fadeOut("slow", function () {
		// Show the game
		$("#game").fadeIn("slow");
	});
	// Start a new game
	newGame();
});

function newGame() {
	console.log("New game started");
	// Reset the game state
	$(".card").removeClass("flipped guess wrong correct");
	$(".card").removeAttr("onclick");
	// Shuffle and display cards
	shuffleCards();
}

// Function to randomly generate and shuffle cards
function shuffleCards(level) {
	// Work out how many pairs are required
	const numberOfPairs = getPairsForLevel(level);
	console.log(`Shuffling ${numberOfPairs} pairs for level ${level}`);

	// Create an array of all pairs by adding each number twice
	const values = [];
	for (let n = 1; n <= numberOfPairs; n++) {
		values.push(n, n);
	}

	// Mix the numbers/pairs up using Math.random
	values.sort(() => Math.random() - 0.5);

	// Add cards into the game view
	const gameArea = $("#game-cards");
	gameArea.empty();

	values.forEach((val, idReq) => {
		// ` required for multi-line strings and strings with variables
		const cardId = `gameCard${idReq + 1}`;
		const card =
			$(`<div id="${cardId}" class="flip-card" data-value="${val}">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<i class="fas fa-question"></i>
				</div>
				<div class="flip-card-back">
					<h1>${val}</h1>
				</div>
			</div>
		</div>`);

		// Make the cards clickable
		card.on("click", function () {
			gameCardClicked(this);
		});

		gameArea.append(card);
		console.log(`Card ${cardId} added with value ${val}`);
	});
}

// Function to determine the number of pairs based on the level
function getPairsForLevel(level) {
	const base = 4;
	if (level < 5) {
		// Add 1 pair for levels 1-5
		return base + level;
	} else {
		// Level 6+ : cap at 20 pairs
		return base + 16;
	}
}

// Function to handle card clicks
function cardClicked(card) {
	console.log("Card clicked:", card);
	// Check if the card is already flipped
	if ($(card).hasClass("flipped")) {
		return; // Ignore if already flipped
	}

	// Flip the card
	$(card).addClass("flipped guess");

	// Check for a match
	checkForMatch();
}

function checkForMatch() {
	console.log("Checking for match");
}
