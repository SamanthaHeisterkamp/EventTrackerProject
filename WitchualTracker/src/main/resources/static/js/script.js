window.addEventListener('load', function(evt) {
	console.log('script.js loaded');
	init();
});

function init() {
	//TODO:
	//Event handlers for buttons and stuff
	loadAllRituals();
	
	

	document.createRitualForm.createRitual.addEventListener('click', function(evt) {
		evt.preventDefault();
		console.log('Adding Ritual');
		let ritual = {
		name: createRitualForm.name.value,
		properties: createRitualForm.properties.value,
		intentions: createRitualForm.intentions.value,
		ingredients: createRitualForm.ingredients.value
		};
		ritual.words = createRitualForm.words.value
		ritual.instructions = createRitualForm.instructions.value;
		ritual.idealtime = createRitualForm.idealtime.value;
		console.log(ritual);
		createRitual(ritual);

	});
	
	document.deleteById.delete.addEventListener('click', (e) => {
		e.preventDefault();
		let id = document.deleteById.id.value;
		deleteById(id);
	});
	
	document.updateRitualForm.submit.addEventListener('click', updateRitual);
	
	document.ritualForm.findById.addEventListener('click', function(event) {
        event.preventDefault();
        let id = document.ritualForm.id.value;
        if (!isNaN(id) && id > 0) {
            getRitual(id);
        }
    });

}


function loadAllRituals() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/rituals");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayEvents(JSON.parse(xhr.responseText));
			}
			else {
				console.error("Error loading events: " + xhr.status);
			}
		}
	};
	xhr.send();
}




function displayEvents(ritualList) {
	let dataDiv = document.getElementById("ritualList");
	dataDiv.textContent = '';
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	for (let ritual of ritualList) {
		let li = document.createElement('li');
		li.textContent = ritual.name;
		ul.appendChild(li);
	}
	}


	function displayRitual(ritual) {
		let dataDiv = document.getElementById('ritualData');

		let h1 = document.createElement('h1');
		h1.textContent = ritual.name;
		dataDiv.appendChild(h1);
	console.log("DataDiv: " + dataDiv);
	console.log("H1: " + h1);
	
		let bq = document.createElement('blockquote');
		bq.textContent = ritual.name;
		dataDiv.appendChild(bq);

		let ul = document.createElement('ul');
		let name = document.createElement('li');
		let properties = document.createElement('li');
		let intentions = document.createElement('li');
		let words = document.createElement('li');
		let ingredients = document.createElement('li');
		let instructions = document.createElement('li');
		let idealtime = document.createElement('li');

		name.textContent = ritual.name;
		properties.textContent = ritual.properties;
		intentions.textContent = ritual.intentions;
		words.textContent = ritual.words;
		ingredients.textContent = ritual.ingredients;
		instructions.textContent = ritual.instructions;
		idealtime.textContent = ritual.idealtime;

		ul.appendChild(name);
		ul.appendChild(properties);
		ul.appendChild(intentions);
		ul.appendChild(words);
		ul.appendChild(ingredients);
		ul.appendChild(instructions);
		ul.appendChild(idealtime);

		dataDiv.appendChild(ul);
	}


	function createRitual(ritual) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/ritual');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 201) {
					console.log("Ritual created.");
					displayRitual(JSON.parse(xhr.responseText));
				}
				else if (xhr.status === 400) {
					displayError('Invalid Data');
				}
				else {
					displayError('Error creating Ritual: ' + xhr.status);
				}
			}
		}
		xhr.setRequestHeader("Content-type", "application/json");
		let ritualJson = JSON.stringify(ritual);
		xhr.send(ritualJson);
	};

function deleteById(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/ritual/' + id)
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dataDiv = document.getElementById('id');
				dataDiv.textContent = 'Ritual has been deleted';
			}else {
				console.log("Ritual not found");
				let dataDiv = document.getElementById('ritualData');
				dataDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				dataDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();
}

function updateRitual(e) {
	e.preventDefault();
	let ritual = {
				
		name:  document.updateRitualForm.name.value,
		properties: document.updateRitualForm.properties.value,
		intentions: document.updateRitualForm.intentions.value,
		ingredients: document.updateRitualForm.ingredients.value,
		words: document.updateRitualForm.words.value,
		instructions: document.updateRitualForm.instructions.value,
		idealtime: document.updateRitualForm.idealtime.value
	};
	console.log(ritual)
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/ritual/' + document.updateRitualForm.id.value, true);
	
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				let ritual = JSON.parse(xhr.responseText);
				console.log(ritual);
				displayRitual(ritual);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ": " + xhr.responseText);
			}
		}
	};
	xhr.send(JSON.stringify(ritual));
}

function getRitual(id) {
    // TODO:
    // * Use XMLHttpRequest to perform a GET request to "api/films/"
    //   with the filmId appended.
    // * On success, if a response was received parse the film data
    //   and pass the film object to displayFilm().
    // * On failure, or if no response text was received, put "Film not found" 
    //   in the filmData div.


    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/id/' + id);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('Ritual found')
                console.log(xhr.responseText)
                let ritual = JSON.parse(xhr.responseText);
                displayRitual(ritual);
            }
            else {
                console.log('Not found')
                displayError('File ' + id + ' not found')
            }
        }
    }
    xhr.send();
}


