

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


$(document).ready(function() {
   // ============================ ready statement beginning ^^^ =============================
        
      
        // var pikachuPic = $('#pikachu').html('<img id="pikachu" src="assets/images/pikachu.png" />');
        // var squirtlePic = $('#squirtle').append('<img id="squirtle" src="assets/images/squirtle.png" />');
        // var charmanderPic = $('#charmander').append('<img id="charmander" src="assets/images/charmander.png" />');
        // var bulbasaurPic = $('#bulbasaur').append('<img id="bulbasaur" src="assets/images/bulbasaur.png" />');
    
    var pikachu = $("#pikachu");
    var pikachu2 = $("#pikachu2");
    var pikachu3 = $("#pikachu3");
    var squirtle = $("#squirtle");
    var squirtle2 = $("#squirtle2");
    var squirtle3 = $("#squirtle3");
    var charmander = $("#charmander");
    var charmander2 = $("#charmander2");
    var charmander3 = $("#charmander3");
    var bulbasaur = $("#bulbasaur");
    var bulbasaur2 = $("#bulbasaur2");
    var bulbasaur3 = $("#bulbasaur3");

    var charcterChoices = [pikachu2, squirtle2, charmander2, bulbasaur2];

    var userCharacter;
    var cpu;
    var hp;
    var damageGiven;
    
    // left side of field
    pikachu2.animate({ opacity: "0" });
    squirtle2.animate({ opacity: "0" });
    charmander2.animate({ opacity: "0" });
    bulbasaur2.animate({ opacity: "0" });
    // right side of field
    pikachu3.animate({ opacity: "0" });
    squirtle3.animate({ opacity: "0" });
    charmander3.animate({ opacity: "0" });
    bulbasaur3.animate({ opacity: "0" });
    
    


        $("#pikachu").on("click", function() {
            pikachu.animate({ opacity: "0.00" });
            console.log("pika works");
            pikachu2.animate({ opacity: "1" });
            pikachu3.animate({ opacity: "1" });
        });
    
        $("#squirtle").on("click", function() {
            squirtle.animate({ opacity: "0.00" });
            console.log("squi works");
            squirtle2.animate({ opacity: "1" });
            squirtle3.animate({ opacity: "1" });
        });
    
        $("#charmander").on("click", function() {
            charmander.animate({ opacity: "0.00" });
            console.log("char works");
            charmander2.animate({ opacity: "1" });
            charmander3.animate({ opacity: "1" });
        });
    
        $("#bulbasaur").on("click", function() {
            bulbasaur.animate({ opacity: "0.00" });
            console.log("bulba works");
            bulbasaur2.animate({ opacity: "1" });
            bulbasaur3.animate({ opacity: "1" });
        });
    
    
   

    


// ========================= ready statement ending vvv ============================
        });

       


   
   