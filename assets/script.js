// ESERCIZIO 1 //


class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }

    comparAge = function (age) {
        if(userNumber1.age > userNumber2.age) {
            console.log ("Il primo è più vecchio")
        } else if (userNumber1.age === userNumber2.age) {
            console.log("hanno la stessa età")
        } else {
            console.log ("il secondo è più vecchio")
        }
    }
}
  
const userNumber1 = new User("Antonio", "Rossi", 22, "Milano")
const userNumber2 = new User("Giovanni", "Mosca", 8, "Novara")


// ESERCIZIO 2 

class Pet {         //creato classe pet 
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {  //creato il metodo che confronta se il padone é lo stesso
        return this.ownerName === otherPet.ownerName;
    }
}

const petList = []; //creo lista array vuota per contenerci i prossimi animali che andró a creare

function createPet() {  //funzione "attivata dall add pet nel form"
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed); //creo un nuoovo oggetto pet

    // Verifica se il nuovo animale condivide lo stesso padrone con uno degli animali esistenti

    petList.forEach(existingPet => {
        if (newPet.hasSameOwner(existingPet)) {
            console.log("Stesso padrone!")
        }
    })

    petList.push(newPet); //aggiungo la bestia alla petlist
    displayPetList(); //chiamata alla funzione per mostrare la lista
    resetForm(); //chiamata alla funzione per pulire il form
}

function displayPetList() { //visualizza la lista degli animali inseriti
    const petListContainer = document.getElementById('petList');
    petListContainer.innerHTML = '';

    petList.forEach(pet => { //crea un nuovo elemento li
        const listItem = document.createElement('li');
        listItem.textContent = Pet Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed};
        petListContainer.appendChild(listItem);
    });
}

function resetForm() {
    document.getElementById('petForm').reset();
}