$(document).ready(function() {

    //variables 

    var topics = ["Captain America", "Thor", "The Hulk", "Ironman"];

    //take indexes in "topics" array and create buttons
       ///you should use a for loop (each jQ method) for this


    //functions

    function constructButtons() {

        //this will empty button(s) to prevent uploading twice
        $("#buttonsGoHere").empty();

        // Looping through the array of movies
        for (var j = 0; j < topics.length; j++) {

            var generateButton = $("<button>");

            // Altering attributes of generateButton

            generateButton.addClass("btn btn-outline-danger");

            generateButton.attr("data-name", topics[j]);

            generateButton.text(topics[j]);

            // Adding button to HTML
            $("#buttonsGoHere").append(generateButton);
        }
    }

    //on-click functions

    $("#clickToAdd").on("click", function() {

        //event.preventDefault();

        console.log("button pressed");

        var newRequest = $("#charRequest").val().trim();

        //verifying new character has been registered

        console.log(newRequest);

        //======

        topics.push(newRequest);

        //verifying topic array has added new character

        console.log(topics);

        //===============

        constructButtons();
    });


    //function calls

    constructButtons();




    //on click function when user clicks button: summons 10 gifs of said hero/villian

    
    //on click function so when user clicks on a gif, it animates
        //!!!! gifs should not automatically load upon load!!
        //if clicked again, should stop gif

    //manifest function that will:
        //A) "push" the new entry into the array
        //B) a for loop (each jQ method) that will cycle through the array and create new buttons (should only be the newest addition to pop up)

    //under every gif, display its rating 
        //this information is supplied by Giphy





}); //document ready function


//other notes
// 1) make sure to use the following Giphy parameters: q, limit (for how many gifs to appear), and rating (to display the rating)
// 2) Update README
// 3) attach to Portfolio
//  use .val().trim() when getting input from "add here" field
//  remember to use "this"!!!
// IF FINISH EARLY: EDIT PAGE WITH CSS!! ADD SOUNDS? REFER TO OTHER BONUS OBJECTIVES
