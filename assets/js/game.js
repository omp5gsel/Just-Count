// Global variables
let currentRound = 1; // Current round of the game
let expectedPair = 1; // Expected pair to match
let score = 0; // Player's score
let currentStreak = 0; // Current streak of correct answers
let timeRemaining; // Time remaining for the current round
let timerInterval; // Timer interval for countdown
let cardsClicked = false; // Flag to track if cards have been clicked

// Set 'play' button action
$("#tutorialPlayButton").click(function () {
	// console.log("Play button clicked");
	// Hide the tutorial
	$("#how-to-play").fadeOut("slow", function () {
		// Show the game
		$("#game").fadeIn("slow");
	});
	// Start a new game
	newGame();
});

function newGame() {
	// console.log("New game started");
	// Reset the game state
	currentRound = 1;
	expectedPair = 1;
	score = 0;
	currentStreak = 0;
	timeRemaining = 30;
	cardsClicked = false;
	// Reset the score display
	$("#score").text(score);
	// Reset the timer display
	$("#time").text('00:30');
	// Start the game
	newRound();
}

function newRound() {
	// console.log("New round started");
	// Reset the game state
	$(".card").removeClass("flipped guess wrong correct");
	$(".card").removeAttr("onclick");
	// Shuffle and display cards
	shuffleCards(currentRound);
	// Reset the expected pair
	expectedPair = 1;
}

// Function to randomly generate and shuffle cards
function shuffleCards(level) {
	// Work out how many pairs are required
	const numberOfPairs = getPairsForLevel(level);
	// console.log(`Shuffling ${numberOfPairs} pairs for level ${level}`);

	// Create an array of all pairs by adding each number twice
	const values = [];
	for (let n = 1; n <= numberOfPairs; n++) {
		values.push(n, n);
	}

	// Mix the numbers/pairs up using Math.random
	values.sort(() => Math.random() - 0.5);

	// Set and empty the game area
	const gameArea = $("#game-cards");
	gameArea.empty();

	// Set rows required for the game area, based on level
	const rows = level < 5 ? 2 : level < 10 ? 3 : 4;
	// Calculate how many columns we need
	const cols = Math.ceil(values.length / rows);

	// Create a card for each value
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
			cardClicked(this);
		});

		// Add the card to the game area
		gameArea.append(card);
		// console.log(`Card ${cardId} added with value ${val}`);
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
	// Start timer on first click
	if (!cardsClicked) {
		cardsClicked = true;
		startTimer();
	}

	// console.log("Card clicked:", card);
	// Check how many cards are already flipped
	var flippedCount = $(".flip-card.flipped")
		.not(".correct")
		.not(".wrong").length;
	if (flippedCount >= 2) {
		return; // Ignore until previous actions are complete
	}

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
	// Get all flipped cards that are in play
	var flippedCards = $(".flip-card.flipped").not(".correct").not(".wrong");
	// Check that we have two flipped cards to compare
	if (flippedCards.length !== 2) {
		return; // wait until two cards are flipped
	}

	// Determine the two flipped cards
	var firstCard = flippedCards.eq(0);
	var secondCard = flippedCards.eq(1);

	// Get the value of each card
	var firstValue = firstCard.data("value");
	var secondValue = secondCard.data("value");

	// How many pairs this round
	var totalPairs = getPairsForLevel(currentRound);

	// If they match *and* are the next expected pair
	if (firstValue === secondValue && firstValue === expectedPair) {
		setTimeout(function () {
			// Update classes for correct match
			firstCard.addClass("correct").removeClass("guess");
			secondCard.addClass("correct").removeClass("guess");
			// Calcuaate points and update score
			calculatePoints();
			// Update expected pair to be +1
			expectedPair++;
			// If all pairs are matched, start a new round
			if (expectedPair > totalPairs) {
				currentRound++;
				newRound();
			}
		}, 400);
	} else {
		// Wrong guess
		setTimeout(function () {
			firstCard.add(secondCard).addClass("wrong");
		}, 400);
		// Flip back the cards after a short delay
		setTimeout(function () {
			firstCard.add(secondCard).removeClass("flipped guess wrong");
		}, 800);
		// Reset answer streak
		currentStreak = 0;
	}
}

function calculatePoints() {
	// Update the current streak
	currentStreak++;
	// Set streak multiplier limit at 3x base value
	const multiplier = Math.min(currentStreak, 3);
	// Set base point value
	const basePoints = 10;
	// Calculate and add points
	const pointsGained = basePoints * multiplier;
	// Add new points to the score
	score += pointsGained;
	// Update the onscreen score
	$("#score").text(score);
	// Add 3 seconds per correct match
	addTime(3);
}

// Function to format time in MM:SS format
function formatTime(seconds) {
	// Split time into minutes/seconds
	var minutes = Math.floor(seconds / 60);
	var secs = seconds % 60;

	// Make sure digits have leading zero's for readibility as text
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	// Make sure digits have leading zero's for readibility as text
	if (secs < 10) {
		secs = "0" + secs;
	}

	// Join values with a colon to resemble a digital clock
	return minutes + ":" + secs;
}

// Function to start the timer for the game
function startTimer() {
	clearInterval(timerInterval);
	timeRemaining = 30;
	$("#time").text(formatTime(timeRemaining));

	timerInterval = setInterval(function () {
		timeRemaining--;
		$("#time").text(formatTime(timeRemaining));

		if (timeRemaining <= 0) {
			clearInterval(timerInterval);
			gameOver();
		}
	}, 1000);
}

// Function to add time to the timer
function addTime(seconds) {
	timeRemaining += seconds;
	$("#time").text(formatTime(timeRemaining));
}

// Function to handle the end of the game
function gameOver() {
	// console.warn("Game over!");
	// Update final score
	$("#finalScore").text(score);
	// Show game over message
	$("#game-over").fadeIn("slow", function () {
		// Hide the game area
		$("#game").fadeOut("slow");
	});
	// Reset the game state
	currentRound = 1;
	expectedPair = 1;
	score = 0;
	currentStreak = 0;
	timeRemaining = 30;
	clearInterval(timerInterval);
}

function restartGame() {
	// console.log("Restarting game");
	// Hide the game over message
	$("#game-over").fadeOut("slow", function () {
		// Show the game area
		$("#game").fadeIn("slow");
	});
	// Start a new game
	newGame();
}