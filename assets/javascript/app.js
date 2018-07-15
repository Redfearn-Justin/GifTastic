$(document).ready(function() {

    //variables 

    var topics = ["Captain America", "Thor", "The Hulk", "Ironman"];

    //functions

    function constructButtons() {

        //this will empty button(s) to prevent uploading twice
        $("#buttonsGoHere").empty();

        // Looping through the array of movies
        for (var j = 0; j < topics.length; j++) {

            var generateButton = $("<button>");

            // Altering attributes of generateButton

            generateButton.addClass("btn btn-outline-danger charButtons");

            generateButton.attr("data-name", topics[j]);

            generateButton.text(topics[j]);

            // Adding button to HTML
            $("#buttonsGoHere").append(generateButton);
        }
    }

    //on-click functions

    $("#clickToAdd").on("click", function() {

        event.preventDefault();

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

    $("#buttonsGoHere").on("click", "button", function() {

        console.log("Character Button Pressed");

        var charName = $(this).attr("data-name");
        console.log(this);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          charName + "&api_key=pgX0i1wv9Kowb6SQamm5VYObKPhQYP6F&limit=10";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(json) {

            var results = json.data;

            console.log(json);
  
            for (var j = 0; j < results.length; j++) {
              
              var gifDiv = $("<div>");
  
              var rating = results[j].rating;
  
              var ratingContainer = $("<p>").text("Rating: " + rating);
  
              var charGif = $("<img>");

              charGif.attr("src", results[j].images.fixed_height.url);
  
              gifDiv.prepend(charGif).append(ratingContainer);
  
              $("#gifsGoHere").prepend(gifDiv);
            }
          });


    });


    //function calls

    //to initialize page with buttons
    constructButtons();

    
    //on click function so when user clicks on a gif, it animates
        //!!!! gifs should not automatically load upon load!!
        //if clicked again, should stop gif


}); //document ready function


//other notes

// 2) Update README
// 3) attach to Portfolio

// IF FINISH EARLY: EDIT PAGE WITH CSS!! ADD SOUNDS? REFER TO OTHER BONUS OBJECTIVES
