// The tutorial follows a set path, no randomness, no checks required.
// - Everything is pre-defined.

function tutorial() {
	// Set path to DOM item to identify current tutorial section
	const currentTutorial = $("h5#tutorialTitle");

	// Find the tutorial section and set expectations
	if (currentTutorial.text() === "1. Flip a card") {
		console.log("Flip first card");
		// Update title
		$("h5#tutorialTitle").text("2. Flip another card");
		// Add the ability to click the next card
		$("#tutorialCard1")
			.addClass("click-me")
			.attr("onclick", "tutorialCardClicked(this)");
	} else if (currentTutorial.text() === "2. Flip another card") {
		console.log("Flip second card, incorrect guess");
		// Wait so player can see flipped card
		setTimeout(function () {
			$("#tutorialCard1, #tutorialCard3").addClass("wrong");
		}, 500);

		// Reset both cards and move to step 3
		setTimeout(function () {
			$("#tutorialCard1, #tutorialCard3").removeClass(
				"wrong flipped guess"
			);
			// Update title
			$("h5#tutorialTitle").text("3. Match pairs in order");

			// Add the ability to click the next card
			$("#tutorialCard3, #tutorialCard4")
				.addClass("click-me")
				.attr("onclick", "tutorialCardClicked(this)");
		}, 1000);
	} else if (currentTutorial.text() === "3. Match pairs in order") {
		if ($(".flipped").length === 2) {
			console.log("Two cards flipped, correct guess");
			// Wait so player can see flipped card
			setTimeout(function () {
				$("#tutorialCard3, #tutorialCard4").addClass("correct");
			}, 500);
			// Update title
			$("h5#tutorialTitle").text(
				'Easy right? Press "Lets Go!" to start!'
			);
			// Change button to play
			$(".btn.btn-secondary")
				.removeClass("btn-secondary")
				.addClass("btn-success")
				.text("Let's go!");
		} else {
			console.log("Wait for two cards to flip");
		}
	}
}

function tutorialCardClicked(card) {
	// Remove the ability and prompt to click the same card again
	$(card).removeAttr("onclick");
	$(card).removeClass("click-me");

	// Flip the card
	$(card).addClass("flipped guess");

	// Run the tutorial function to update the tutorial section
	tutorial();
}
