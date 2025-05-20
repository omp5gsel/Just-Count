$('document').ready(function() {
	console.log('Page loaded');
});



function cardClicked(card) {
	console.log('Card clicked:', card);
	// Check if the card is already flipped
	if ($(card).hasClass('flipped')) {
		return; // Ignore if already flipped
	}

	// Flip the card
	$(card).addClass('flipped');

	// Check for a match
	checkForMatch();
}

function checkForMatch() {
	console.log('Checking for match');
}