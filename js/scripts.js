function convertGallonsToLiters(gallons) {
  return (gallons * 3.8);
}

var inputGallons = prompt("Enter a measurement in gallons:");

var gallonsInt = parseInt(inputGallons);



function convertLitersToGallons(liters) {
  return (liters / 3.8);
}

var inputLiters = prompt("Enter a measurement in liters:");
var litersInt = parseInt(inputLiters);



function convertCupstoMillileters(cups) {
	return (cups * 240)
}



alert(convertLitersToGallons(litersInt));