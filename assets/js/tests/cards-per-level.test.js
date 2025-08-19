// Copy of original function from game.js **before bug found**
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

/*  Below is the fixed code that was implemented
    after the bugs were confirmed to be resolved

function getPairsForLevel(level) {
	const base = 4;
	if (level <= 5) {
		// Add 1 pair for levels 1-5
		return base + level;
	} else {
		// Level 6+ : cap at 10 pairs
		return base + 6;
	}
}
*/

// Convert pairs to cards by using the level with the above function, then doubling it
const cards = (level) => getPairsForLevel(level) * 2;

// Test levels for expected card counts
// One new pair per level until level 5, then cap at 20 pairs after
describe("Expected card counts per level", () => {
	test("Level 1 = 10 cards", () => expect(cards(1)).toBe(10));
	test("Level 2 = 12 cards", () => expect(cards(2)).toBe(12));
	test("Level 3 = 14 cards", () => expect(cards(3)).toBe(14));
	test("Level 4 = 16 cards", () => expect(cards(4)).toBe(16));
	test("Level 5 = 18 cards", () => expect(cards(5)).toBe(18));

	test("Level 6+ should still be 20 cards", () => {
		expect(cards(6)).toBe(20);
		expect(cards(999)).toBe(20);
	});
});
