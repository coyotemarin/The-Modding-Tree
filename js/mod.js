let modInfo = {
	name: "The Ice Cream Tree",
	id: "catyme",
	author: "CatyIceCream",
	pointsName: "funds",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1*",
	name: "The air begins to freeze",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1*</h3><br>
		- Midway between v0.1 and v0.2<br>
	<h3>v0.1</h3><br>
		- Added coldness. Max coldness is currently 33.33<br>
		- Added ice layer.`

let winText = `You won! Come back next update!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	// make Decimal(1) happen if player.points <= 1, make Decimal(1/player.points) happen if player.points > 1

	//let gain = new Decimal(1/(player.points+1))
	let gain = new Decimal(player.points < 10 ? 0.43 : 0.43+(player.points/500))

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
   function () { return `${(player.points/5 - 0.43).toFixed(2)}% of your gain is from your intrest. (${(player.points/500).toFixed(2)})`},
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}