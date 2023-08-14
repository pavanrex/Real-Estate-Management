function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "show properties") {
        return "find properties on our website!";       
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "hello"){
        return "hello there";
    }
    else if (input == "available amenities"){
        return "check the homepage for building amenities";
    }
    else if (input == "name your creators"){
        return "Bobby,pavan,madhur,aryan are my creators";
    }
    else if (input == "how to contact"){
        return "please scroll to the bottom of our page for contact form";
    }

    else {
        return "Try asking something else!";
    }

    if (input == "show properties") {
        return "find properties on our website!";
    } else if (input == "dad") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}