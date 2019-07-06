

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
    var squirtle = $("#squirtle");
    var charmander = $("#charmander");
    var bulbasaur = $("#bulbasaur");

    var charcterChoices = [pikachu, squirtle, charmander, bulbasaur];

    var userCharacter;
    var cpu;
    var hp;
    var damageGiven;
    


    
  
        $("#pikachu").on("click", function() {
            pikachu.animate({ opacity: "0.05" });

            console.log("pika works");
        });
    
        $("#squirtle").on("click", function() {
            squirtle.animate({ opacity: "0.05" });
            console.log("squi works");
        });
    
        $("#charmander").on("click", function() {
            charmander.animate({ opacity: "0.05" });
            console.log("char works");
        });
    
        $("#bulbasaur").on("click", function() {
            bulbasaur.animate({ opacity: "0.05" });
            console.log("bulba works");
        });
    
    
    console.log("if then works!");

    


// ========================= ready statement ending vvv ============================
        });