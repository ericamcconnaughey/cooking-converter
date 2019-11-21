// Back-End

//Gallons to Liters
function convertGallonsToLiters(gallons) {
  return (gallons * 3.8);
}

//Liters to Gallons
function convertLitersToGallons(liters) {
  return (liters / 3.8);
}

//Cups to Milliliters
function convertCupsToMillileters(cups) {
	return (cups * 240)
}

//Milliliters to Cups
function convertMilliletersToCups(mls) {
	return (mls / 240)
}

//Teaspoons to Milliliters
function convertTeaspoonsToMillileters(tsps) {
	return (tsps * 5)
}

//Milliliters to Teaspoons
function convertMilliletersToTeaspoons(mls) {
	return (mls / 5)
}




//Front-End
$(document).ready(function() {
	$("form#galToLit").submit(function(event) {
	event.preventDefault();
	var gallons = parseInt($("#gallons").val());
	
	var result = convertGallonsToLiters(gallons);
	$("#galToLit-output").text(result);
	console.log(result);
})

$("form#litToGal").submit(function(event) {
	event.preventDefault();
	var liters = parseInt($("#liters").val());
	
	var result = convertLitersToGallons(liters);
	$("#litToGal-output").text(result);
	console.log(result);
})

$("form#cupToMill").submit(function(event) {
	event.preventDefault();
	var cups = parseInt($("#cups").val());
	
	var result = convertCupsToMillileters(cups);
	$("#cupToMill-output").text(result);
	console.log(result);
})

$("form#millToCups").submit(function(event) {
	event.preventDefault();
	var milliliters = parseInt($("#milliliters1").val());
	
	var result = convertMilliletersToCups(milliliters);
	$("#millToCups-output").text(result);
	console.log(result);
})

$("form#tspToMill").submit(function(event) {
	event.preventDefault();
	var teaspoons = parseInt($("#teaspoons").val());
	
	var result = convertTeaspoonsToMillileters(teaspoons);
	$("#tspToMill-output").text(result);
	console.log(result);
})

$("form#millToTsps").submit(function(event) {
	event.preventDefault();
	var milliliters = parseInt($("#milliliters2").val());
	
	var result = convertMilliletersToTeaspoons(milliliters);
	$("#millToTsps-output").text(result);
	console.log(result);
})

/*
var inputCups = prompt("Enter a measurement in cups:");
var cupsInt = parseInt(inputCups);



var inputMls = prompt("Enter a measurement in milliliters:");
var mlsInt = parseInt(inputMls);



var inputTeaspoons = prompt("Enter a measurement in teaspoons:");
var teaspoonsInt = parseInt(inputTeaspoons);



var inputMls = prompt("Enter a measurement in milliliters:");
var mlsInt = parseInt(inputMls);




alert(convertLitersToGallons(litersInt));*/

});