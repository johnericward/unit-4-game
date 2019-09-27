

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


    //for JS to talk to HTML through jquery

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
    var messageBar = $("#messageBar");
    var messageBar2 = $("#messageBar2");


    //inivisible to user, only for gameplay to occur
    var characters = {
        "pikachuX": {
            name: "pikachu3",
            health: 160,
            attack: 12,
            enemyAttackBack: 25
        },
        "squirtleX": {
            name: "squirtle3",
            health: 240,
            attack: 10,
            enemyAttackBack: 20
        },
        "charmanderX": {
            name: "charmander3",
            health: 200,
            attack: 15,
            enemyAttackBack: 30
        },
        "bulbasaurX": {
            name: "bulbasaur3",
            health: 280,
            attack: 10,
            enemyAttackBack: 15
        },
    };


    //sets up a generic placeholder for gameplay to keep up with whatever character p1 chose
    var attacker;
    //sets up placeholder for gameplay to handle opponents as user chooses them
    var defender;
    //counts how many turns have happened in order to multiply p1 attack power
    var turnCounter = 0;
    //keeps up with how many opponents have been defeated so it can trigger when the user has won after all opponents are defeated
    var killCount = 0;

    //VISUAL STUFF
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


    //function for selecting your character that didn't work right, but does console log that it writes a message
    function chooseP1() {
        console.log("p1 Func is running, but doesn't do anything other than writing this message");

        //     if ($(this).attr("value") === "pikachu") {
        //         console.log("you picked pikachu");
        //         pikachu1.animate({ opacity: "0.00" });
        //         pikachu2.animate({ opacity: "1" });
        //         pokemonChosenFirst = true;
        //         trainerLeft.animate({ opacity: "1" });

        //         p1HealthText.animate({ opacity: "1" });
        //         attacker = characters.pikachuX;
        //         p1Health.append(characters.pikachuX.health);
        //         console.log(attacker.name + " is the attacker");
        //     } else if
        //         ($(this).attr("value") === "squirtle") {
        //         console.log("squirtle clicked")
        //         squirtle1.animate({ opacity: "0.00" });
        //         squirtle2.animate({ opacity: "1" });
        //         pokemonChosenFirst = true;
        //         trainerLeft.animate({ opacity: "1" });

        //         p1HealthText.animate({ opacity: "1" });
        //         attacker = characters.squirtleX;
        //         p1Health.append(characters.squirtleX.health);
        //         console.log(attacker.name + " is the attacker");
        //     } else if
        //         ($(this).attr("value") === "charmander") {
        //         console.log("charmander clicked");
        //         charmander1.animate({ opacity: "0.00" });
        //         charmander2.animate({ opacity: "1" });
        //         pokemonChosenFirst = true;
        //         trainerLeft.animate({ opacity: "1" });

        //         p1HealthText.animate({ opacity: "1" });
        //         attacker = characters.charmanderX;
        //         p1Health.append(characters.charmanderX.health);
        //         console.log(attacker.name + " is the attacker");
        //     } else if
        //         ($(this).attr("value") === "bulbasaur") {
        //         console.log("bulbasaur clicked");
        //         bulbasaur1.animate({ opacity: "0.00" });
        //         bulbasaur2.animate({ opacity: "1" });
        //         pokemonChosenFirst = true;
        //         trainerLeft.animate({ opacity: "1" });

        //         p1HealthText.animate({ opacity: "1" });
        //         attacker = characters.bulbasaurX;
        //         p1Health.append(characters.bulbasaurX.health);
        //         console.log(attacker.name + " is the attacker");
        //     };

    };


    //click event for choosing character and opponents
    $(document).on("click", ".pokemon", function () {


        if (pokemonChosenSecond === false) {
            if (pokemonChosenFirst === false) {
                chooseP1();
                //choose your character
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

                // opponent choosing
            } else {
                if ($(this).attr("value") === "pikachu") {
                    console.log("you picked pikachu");
                    pikachu1.animate({ opacity: "0.00" });
                    pikachu3.animate({ opacity: "1" });
                    //other opponents are invisible
                    squirtle3.animate({ opacity: "0" });
                    charmander3.animate({ opacity: "0" });
                    bulbasaur3.animate({ opacity: "0" });
                    messageBar.html("");
                    //^^^^
                    pokemonChosenSecond = true;
                    trainerRight.animate({ opacity: "1" });
                    attackButton.animate({ opacity: "1" });
                    cpuHealthText.animate({ opacity: "1" });
                    defender = characters.pikachuX;
                    cpuHealth.html(characters.pikachuX.health);
                    console.log(defender.name + " is the defender");
                } else if
                    ($(this).attr("value") === "squirtle") {
                    console.log("squirtle clicked")
                    squirtle1.animate({ opacity: "0.00" });
                    squirtle3.animate({ opacity: "1" });
                    //other opponents are invisible
                    pikachu3.animate({ opacity: "0" });
                    charmander3.animate({ opacity: "0" });
                    bulbasaur3.animate({ opacity: "0" });
                    messageBar.html("");
                    //^^^^
                    pokemonChosenSecond = true;
                    trainerRight.animate({ opacity: "1" });
                    attackButton.animate({ opacity: "1" });
                    cpuHealthText.animate({ opacity: "1" });
                    defender = characters.squirtleX;
                    cpuHealth.html(characters.squirtleX.health);
                    console.log(defender.name + " is the defender");
                } else if
                    ($(this).attr("value") === "charmander") {
                    console.log("charmander clicked");
                    charmander1.animate({ opacity: "0.00" });
                    charmander3.animate({ opacity: "1" });
                    //other opponents are invisible
                    pikachu3.animate({ opacity: "0" });
                    squirtle3.animate({ opacity: "0" });
                    bulbasaur3.animate({ opacity: "0" });
                    messageBar.html("");
                    //^^^^
                    pokemonChosenSecond = true;
                    trainerRight.animate({ opacity: "1" });
                    attackButton.animate({ opacity: "1" });
                    cpuHealthText.animate({ opacity: "1" });
                    defender = characters.charmanderX;
                    cpuHealth.html(characters.charmanderX.health);
                    console.log(defender.name + " is the defender");
                } else if
                    ($(this).attr("value") === "bulbasaur") {
                    console.log("bulbasaur clicked");
                    bulbasaur1.animate({ opacity: "0.00" });
                    bulbasaur3.animate({ opacity: "1" });
                    //other opponents are invisible
                    pikachu3.animate({ opacity: "0" });
                    squirtle3.animate({ opacity: "0" });
                    charmander3.animate({ opacity: "0" });
                    messageBar.html("");
                    //^^^^
                    pokemonChosenSecond = true;
                    trainerRight.animate({ opacity: "1" });
                    attackButton.animate({ opacity: "1" });
                    cpuHealthText.animate({ opacity: "1" });
                    defender = characters.bulbasaurX;
                    cpuHealth.html(characters.bulbasaurX.health);
                    console.log(defender.name + " is the defender");
                };
            };
        } else {
            console.log("both chosen")
        };

    });



    //ATTACK SEQUENCE!!!!!========================
    $("#attackButton").on("click", function () {
        //if 3 enemies have been killed, all opponents have died and YOU WON! -- thus game is over and will reset
        if (killCount < 3) {
            // if p1 still has health, game can play, otherwise GAME OVER and will reset!
            //redundancy
            if (attacker.health > 0) {

                //if there is an opponent gameplay can happen -- when button is pressed, p1 & cpu take damage
                if (defender) {
                    console.log("attackButtonPressed");
                    turnCounter++;
                    console.log(turnCounter);
                    cpuHealth.text(defender.health -= attacker.attack * turnCounter);
                    p1Health.text(attacker.health -= defender.enemyAttackBack);

                    //if opponent is dead, kill count goes up 1 and their health reads 0
                    //things reset to allow another opponent to be chosen unless all opponents are dead
                    if (defender.health <= 0) {

                        console.log("enemy killed");
                        killCount++
                        if (killCount <= 2) {
                            messageBar.html("Select your next opponent!");
                        };
                        defender = false;
                        cpuHealth.html(0);
                        pokemonChosenSecond = false;

                    };
                    if (attacker.health <= 0) {
                        p1Health.html("You fainted!");

                        messageBar.html("GAME OVER!");
                        messageBar2.html("(reset in 5 seconds)");
                        console.log("game over!")
                        setTimeout(function () { location.reload(); }, 5000);


                        pikachu2.animate({ opacity: "0" });
                        squirtle2.animate({ opacity: "0" });
                        charmander2.animate({ opacity: "0" });
                        bulbasaur2.animate({ opacity: "0" });
                    };
                };

            } else {
                //redundancy
                p1Health.html("You fainted!");

                messageBar.html("GAME OVER!");
                messageBar2.html("(reset in 5 seconds)");
                console.log("game over!")
                setTimeout(function () { location.reload(); }, 5000);


                pikachu2.animate({ opacity: "0" });
                squirtle2.animate({ opacity: "0" });
                charmander2.animate({ opacity: "0" });
                bulbasaur2.animate({ opacity: "0" });
            }

        } else {
            //redundancy
            messageBar.html("YOU WON!")
            messageBar2.html("(reset in 5 seconds)");
            setTimeout(function () { location.reload(); }, 5000);


            pikachu3.animate({ opacity: "0" });
            squirtle3.animate({ opacity: "0" });
            charmander3.animate({ opacity: "0" });
            bulbasaur3.animate({ opacity: "0" });

        };
    });
    //END ATTACK SEQUENCE!!!! ====================


    //PAGE READY END
});





