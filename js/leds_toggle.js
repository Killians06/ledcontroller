// Toggle Switch de la LED 13
	document.getElementById("toggle13").addEventListener("click", function() {
	//console.log(stateLED13 + ' a instant du click' );

		if(stateLED13 === false) { // Si la LED est ON // -> Passer la led en mode OFF avec l'appel de fonction
			document.getElementById("toggle13").innerText = "DÉVERROUILLÉE"; // Changer le texte
			document.getElementById("toggle13").className = "on btn btn-success btn-lg"; // Changer la couleur en modifiant la classe
			httpGet('http://localhost:8080/?serverfunction=ledSwitch13&value=1')
			stateLED13 = true; // = OFF
			console.log('LED pin 13 = ON, ( ' + stateLED13 + ' )');

		} else if(stateLED13 === true){ // -> passer la led en mode ON avec l'appel de fonction
			document.getElementById("toggle13").innerText = "VERROUILLÉE";
			document.getElementById("toggle13").className = "off btn btn-danger btn-lg";
			httpGet('http://localhost:8080/?serverfunction=ledSwitch13&value=0')
			stateLED13 = false;
			console.log('LED pin 13 = OFF, ( ' + stateLED13 + ' )');
		}

	});

// Toggle Switch de la LED 12
	document.getElementById("toggle12").addEventListener("click", function() {
	//console.log(stateLED12 + ' a instant du click' );

		if(stateLED12 === false) { // Si la LED est ON // -> Passer la led en mode OFF avec l'appel de fonction
			document.getElementById("toggle12").innerText = "DÉVERROUILLÉE"; // Changer le texte
			document.getElementById("toggle12").className = "on btn btn-success btn-lg"; // Changer la couleur en modifiant la classe
			httpGet('http://localhost:8080/?serverfunction=ledSwitch12&value=1')
			stateLED12 = true; // = OFF
			console.log('LED pin 12 = ON, ( ' + stateLED12 + ' )');

		} else if(stateLED12 === true){ // -> passer la led en mode ON avec l'appel de fonction
			document.getElementById("toggle12").innerText = "VERROUILLÉE";
			document.getElementById("toggle12").className = "off btn btn-danger btn-lg";
			httpGet('http://localhost:8080/?serverfunction=ledSwitch12&value=0')
			stateLED12 = false;
			console.log('LED pin 12 = OFF, ( ' + stateLED12 + ' )');
		}

	});

// Toggle Switch de la LED 11
	document.getElementById("toggle11").addEventListener("click", function() {
	//console.log(stateLED11 + ' a instant du click' );

		if(stateLED11 === false) { // Si la LED est ON // -> Passer la led en mode OFF avec l'appel de fonction
			document.getElementById("toggle11").innerText = "DÉVERROUILLÉE"; // Changer le texte
			document.getElementById("toggle11").className = "on btn btn-success btn-lg"; // Changer la couleur en modifiant la classe
			httpGet('http://localhost:8080/?serverfunction=ledSwitch11&value=1')
			stateLED11 = true; // = OFF
			console.log('LED pin 11 = ON, ( ' + stateLED11 + ' )');

		} else if(stateLED11 === true){ // -> passer la led en mode ON avec l'appel de fonction
			document.getElementById("toggle11").innerText = "VERROUILLÉE";
			document.getElementById("toggle11").className = "off btn btn-danger btn-lg";
			httpGet('http://localhost:8080/?serverfunction=ledSwitch11&value=0')
			stateLED11 = false;
			console.log('LED pin 11 = OFF, ( ' + stateLED11 + ' )');
		}

	});

// Toggle Switch de la LED 10
	document.getElementById("toggle10").addEventListener("click", function() {
	//console.log(stateLED10 + ' a instant du click' );

		if(stateLED10 === false) { // Si la LED est ON // -> Passer la led en mode OFF avec l'appel de fonction
			document.getElementById("toggle10").innerText = "DÉVERROUILLÉE"; // Changer le texte
			document.getElementById("toggle10").className = "on btn btn-success btn-lg"; // Changer la couleur en modifiant la classe
			httpGet('http://localhost:8080/?serverfunction=ledSwitch10&value=1')
			stateLED10 = true; // = OFF
			console.log('LED pin 10 = ON, ( ' + stateLED10 + ' )');

		} else if(stateLED10 === true){ // -> passer la led en mode ON avec l'appel de fonction
			document.getElementById("toggle10").innerText = "VERROUILLÉE";
			document.getElementById("toggle10").className = "off btn btn-danger btn-lg";
			httpGet('http://localhost:8080/?serverfunction=ledSwitch10&value=0')
			stateLED10 = false;
			console.log('LED pin 10 = OFF, ( ' + stateLED10 + ' )');
		}

	});