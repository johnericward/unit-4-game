

/*
pseudocode
link variable to each character
add button around each character
wrap buttons and characters all in one class
if clicked button for character center image and move other 3 off to side
create var hp, var damageGiven
when character clicked, create attack button
when attack button clicked, enemy hp decrease
*/


$(document).ready(function () {
    // ============================ ready statement beginning ^^^ =============================




    var pikachu1 = $("#pikachu1");
    var pikachu2 = $("#pikachu2");
    var pikachu3 = $("#pikachu3");
    var squirtle1 = $("#squirtle1");
    var squirtle2 = $("#squirtle2");
    var squirtle3 = $("#squirtle3");
    var charmander1 = $("#charmander1");
    var charmander2 = $("#charmander2");
    var charmander3 = $("#charmander3");
    var bulbasaur1 = $("#bulbasaur1");
    var bulbasaur2 = $("#bulbasaur2");
    var bulbasaur3 = $("#bulbasaur3");
    var trainerLeft = $("#trainerLeft");
    var trainerRight = $("#trainerRight");
    var attackButton = $("#attackButton");
    var p1HealthText = $("#p1HealthText");
    var p1Health = $("#p1Health");
    var cpuHealthText = $("#cpuHealthText");
    var cpuHealth = $("#cpuHealth");

    var userChoices = [pikachu2, squirtle2, charmander2, bulbasaur2];
    var compChoices = [pikachu3, squirtle3, charmander3, bulbasaur3];



    var characters = {
        "pikachuX": {
            name: "pikachu",
            health: 160,
            attack: 12,
            enemyAttackBack: 25
        },
        "squirtleX": {
            name: "squirtle",
            health: 240,
            attack: 10,
            enemyAttackBack: 20
        },
        "charmanderX": {
            name: "charmander",
            health: 200,
            attack: 15,
            enemyAttackBack: 30
        },
        "bulbasaurX": {
            name: "bulbasaur",
            health: 280,
            attack: 7,
            enemyAttackBack: 15
        },
    };

    var attacker;
    var combatants = [];
    var defender;
    var turnCounter = 0;
    var killCount = 0;

    // var initializeGame = function () { };

    // var cpu;
    // var userHP;
    // var computerHP
    // var damageGiven;

    // left side of field
    pikachu2.animate({ opacity: "0" });
    squirtle2.animate({ opacity: "0" });
    charmander2.animate({ opacity: "0" });
    bulbasaur2.animate({ opacity: "0" });
    attackButton.animate({ opacity: "0" });
    // right side of field
    pikachu3.animate({ opacity: "0" });
    squirtle3.animate({ opacity: "0" });
    charmander3.animate({ opacity: "0" });
    bulbasaur3.animate({ opacity: "0" });
    // fight buttons
    trainerLeft.animate({ opacity: "0" });
    trainerRight.animate({ opacity: "0" });
    //health displays
    p1HealthText.animate({ opacity: "0" });
    cpuHealthText.animate({ opacity: "0" });

    //this allows you to select a character
    //once clicked, they disappear from the list and reappear on the field
    var pokemonChosenFirst = false;
    var pokemonChosenSecond = false;
    var pokemonChosenThird = false;
    var pokemonChosenFourth = false;


    $(document).on("click", ".pokemon", function () {


        if (pokemonChosenSecond === false) {

            if (pokemonChosenFirst === false) {
                if ($(this).attr("value") === "pikachu") {
                    console.log("you picked pikachu");
                    pikachu1.animate({ opacity: "0.00" });
                    pikachu2.animate({ opacity: "1" });
                    pokemonChosenFirst = true;
                    trainerLeft.animate({ opacity: "1" });

                    p1HealthText.animate({ opacity: "1" });
                    attacker = characters.pikachuX;
                    p1Health.append(characters.pikachuX.health);
                    console.log(attacker.name + " is the attacker");
                } else if
                    ($(this).attr("value") === "squirtle") {
                    console.log("squirtle clicked")
                    squirtle1.animate({ opacity: "0.00" });
                    squirtle2.animate({ opacity: "1" });
                    pokemonChosenFirst = true;
                    trainerLeft.animate({ opacity: "1" });

                    p1HealthText.animate({ opacity: "1" });
                    attacker = characters.squirtleX;
                    p1Health.append(characters.squirtleX.health);
                    console.log(attacker.name + " is the attacker");
                } else if
                    ($(this).attr("value") === "charmander") {
                    console.log("charmander clicked");
                    charmander1.animate({ opacity: "0.00" });
                    charmander2.animate({ opacity: "1" });
                    pokemonChosenFirst = true;
                    trainerLeft.animate({ opacity: "1" });

                    p1HealthText.animate({ opacity: "1" });
                    attacker = characters.charmanderX;
                    p1Health.append(characters.charmanderX.health);
                    console.log(attacker.name + " is the attacker");
                } else if
                    ($(this).attr("value") === "bulbasaur") {
                    console.log("bulbasaur clicked");
                    bulbasaur1.animate({ opacity: "0.00" });
                    bulbasaur2.animate({ opacity: "1" });
                    pokemonChosenFirst = true;
                    trainerLeft.animate({ opacity: "1" });

                    p1HealthText.animate({ opacity: "1" });
                    attacker = characters.bulbasaurX;
                    p1Health.append(characters.bulbasaurX.health);
                    console.log(attacker.name + " is the attacker");
                };
            } else {
                if ($(this).attr("value") === "pikachu") {
                    console.log("you picked pikachu");
                    pikachu1.animate({ opacity: "0.00" });
                    pikachu3.animate({ opacity: "1" });
                    pokemonChosenSecond = true;
                    trainerRight.animate({ opacity: "1" });
                    attackButton.animate({ opacity: "1" });
                    cpuHealthText.animate({ opacity: "1" });
                    defender = characters.pikachuX;
                    cpuHealth.append(characters.pikachuX.health);
                    console.log(defender.name);
                } else if
                    ($(this).attr("value") === "squirtle") {
                    console.log("squirtle clicked")
                    squirtle1.animate({ opacity: "0.00" });
                    squirtle3.animate({ opacity: "1" });
                    pokemonChosenSecond = true;
                    trainerRight.animate({ opacity: "1" });
                    attackButton.animate({ opacity: "1" });
                    cpuHealthText.animate({ opacity: "1" });
                    defender = characters.squirtleX;
                    cpuHealth.append(characters.squirtleX.health);
                    console.log(defender.name);
                } else if
                    ($(this).attr("value") === "charmander") {
                    console.log("charmander clicked");
                    charmander1.animate({ opacity: "0.00" });
                    charmander3.animate({ opacity: "1" });
                    pokemonChosenSecond = true;
                    trainerRight.animate({ opacity: "1" });
                    attackButton.animate({ opacity: "1" });
                    cpuHealthText.animate({ opacity: "1" });
                    defender = characters.charmanderX;
                    cpuHealth.append(characters.charmanderX.health);
                    console.log(defender.name);
                } else if
                    ($(this).attr("value") === "bulbasaur") {
                    console.log("bulbasaur clicked");
                    bulbasaur1.animate({ opacity: "0.00" });
                    bulbasaur3.animate({ opacity: "1" });
                    pokemonChosenSecond = true;
                    trainerRight.animate({ opacity: "1" });
                    attackButton.animate({ opacity: "1" });
                    cpuHealthText.animate({ opacity: "1" });
                    defender = characters.bulbasaurX;
                    cpuHealth.append(characters.bulbasaurX.health);
                    console.log(defender.name);

                } else if (pokemonChosenSecond = true) {
                    
                    if ($(this).attr("value") === "pikachu") {
                        console.log("you picked pikachu");
                        pikachu1.animate({ opacity: "0.00" });
                        pikachu3.animate({ opacity: "1" });
                        pokemonChosenThird = true;
                        trainerRight.animate({ opacity: "1" });
                        attackButton.animate({ opacity: "1" });
                        cpuHealthText.animate({ opacity: "1" });
                        defender = characters.pikachuX;
                        cpuHealth.append(characters.pikachuX.health);
                        console.log(defender.name);
                    } else if
                        ($(this).attr("value") === "squirtle") {
                        console.log("squirtle clicked")
                        squirtle1.animate({ opacity: "0.00" });
                        squirtle3.animate({ opacity: "1" });
                        pokemonChosenSecond = true;
                        trainerRight.animate({ opacity: "1" });
                        attackButton.animate({ opacity: "1" });
                        cpuHealthText.animate({ opacity: "1" });
                        defender = characters.squirtleX;
                        cpuHealth.append(characters.squirtleX.health);
                        console.log(defender.name);
                    } else if
                        ($(this).attr("value") === "charmander") {
                        console.log("charmander clicked");
                        charmander1.animate({ opacity: "0.00" });
                        charmander3.animate({ opacity: "1" });
                        pokemonChosenSecond = true;
                        trainerRight.animate({ opacity: "1" });
                        attackButton.animate({ opacity: "1" });
                        cpuHealthText.animate({ opacity: "1" });
                        defender = characters.charmanderX;
                        cpuHealth.append(characters.charmanderX.health);
                        console.log(defender.name);
                    } else if
                        ($(this).attr("value") === "bulbasaur") {
                        console.log("bulbasaur clicked");
                        bulbasaur1.animate({ opacity: "0.00" });
                        bulbasaur3.animate({ opacity: "1" });
                        pokemonChosenSecond = true;
                        trainerRight.animate({ opacity: "1" });
                        attackButton.animate({ opacity: "1" });
                        cpuHealthText.animate({ opacity: "1" });
                        defender = characters.bulbasaurX;
                        cpuHealth.append(characters.bulbasaurX.health);
                        console.log(defender.name);
                    };
                };
            };
        } else {
            console.log("both chosen")
        };

    });



    //ATTACK SEQUENCE!!!!!========================
    $("#attackButton").on("click", function () {
        if (defender) {
            console.log("attackButtonPressed");
            turnCounter++;
            console.log(turnCounter);
            cpuHealth.text(defender.health -= attacker.attack * turnCounter);
            if (defender.health <= 0) {
                console.log("first enemy killed");
                defender = false;
                nextRound

            } else {
                p1Health.text(attacker.health -= defender.enemyAttackBack);
            }
        };
    });
    //END ATTACK SEQUENCE!!!! ====================


    //PAGE READY END
});





