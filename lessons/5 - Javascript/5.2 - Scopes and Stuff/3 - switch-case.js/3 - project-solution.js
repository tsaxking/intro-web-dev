const favoriteColor = "red";

// Using toLowerCase in case some people capitalized things
switch (favoriteColor.toLowerCase()) {
    case "red":
        console.log("7/10 - Primary Color and looks decent");
        break;
    case "orange":
        console.log("5/10 - Mid");
        break;
    case "yellow":
        console.log("1/10 - Cringe, (fake primary color)");
        break;
    case "green":
        console.log("10/10 - One of the real primary colors (unlike yellow)");
        break;
    case "blue":
        console.log("8/10 - Well-rounded color, primary color.");
        break;
    case "purple":
        console.log("4/10 - Keep forgetting purple exists.");
        break;
    case "grey":
        console.log("5/10 - Literally Mid");
        break;
    case "white":
        console.log("9/10 - Used a lot.");
        break;
    case "black":
        console.log("10/10 - Also used a lot.");
    default:
        console.log("Your favorite color is too obscure.");
        break;
}