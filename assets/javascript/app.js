$(document).ready(function() {

    //variables 

    var topics = ["Captain America", "Thor", "The Hulk", "Ironman"];

    //functions

    function constructButtons() {

        //empty button(s) to prevent uploading twice
        $("#buttonsGoHere").empty();

        // Looping through the array of movies
        for (var j = 0; j < topics.length; j++) {

            var generateButton = $("<button>");

            // Altering attributes of generateButton

            generateButton.addClass("btn btn-danger charButtons");

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

        // if user should attempt to add a blank field, below conditional will prevent that

        if ( $("#charRequest").val() === "") {

          return null;

        }

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

              //setting multiple attributes for the gifs pulled from API

              charGif.attr( {

                  src: results[j].images.fixed_height_still.url,
                  'data-still': results[j].images.fixed_height_still.url,
                  'data-animate': results[j].images.fixed_height.url,
                  'data-state': "still",
                  class: "gif",

                });
  
              gifDiv.prepend(charGif).append(ratingContainer);
  
              $("#gifsGoHere").prepend(gifDiv);

            }

        });

    }); 

    $("#gifsGoHere").on("click", ".gif", function() {

        var state = $(this).attr("data-state");

        if (state === "still") {

          $(this).attr("src", $(this).attr("data-animate"));

          $(this).attr("data-state", "animate");

        } 
        
        else {

          $(this).attr("src", $(this).attr("data-still"));

          $(this).attr("data-state", "still");

        }

    });


    //function calls

    //to initialize page with buttons

    constructButtons();

});
