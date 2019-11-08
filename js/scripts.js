//Gallons to Liters
function convertGallonsToLiters(gallons) {
  return (gallons * 3.8);
}

var inputGallons = prompt("Enter a measurement in gallons:");

var gallonsInt = parseInt(inputGallons);

//Liters to Gallons
function convertLitersToGallons(liters) {
  return (liters / 3.8);
}

var inputLiters = prompt("Enter a measurement in liters:");
var litersInt = parseInt(inputLiters);

//Cups to Milliliters
function convertCupsToMillileters(cups) {
	return (cups * 240)
}

var inputCups = prompt("Enter a measurement in cups:");
var cupsInt = parseInt(inputCups);

//Milliliters to Cups
function convertMilliletersToCups(mls) {
	return (mls / 240)
}

var inputMls = prompt("Enter a measurement in milliliters:");
var mlsInt = parseInt(inputMls);

//Teaspoons to Milliliters
function convertTeaspoonsToMillileters(tsps) {
	return (tsps / 5)
}

var inputTeaspoons = prompt("Enter a measurement in teaspoons:");
var teaspoonsInt = parseInt(inputTeaspoons);

//Milliliters to Teaspoons
function convertMilliletersToTeaspoons(mls) {
	return (mls / 5)
}

var inputMls = prompt("Enter a measurement in milliliters:");
var mlsInt = parseInt(inputMls);




alert(convertLitersToGallons(litersInt));