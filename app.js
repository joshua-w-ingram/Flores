// Bella's Flower Finder App!
// This makes the search button work!

function searchFlower() {
    // Get what the person typed
    var searchBox = document.getElementById("searchBox");
    var typed = searchBox.value;

    // Where we show the results
    var results = document.getElementById("results");

    // Look for the flower!
    var found = null;

    for (var i = 0; i < flowers.length; i++) {
        if (flowers[i].name.toLowerCase() === typed.toLowerCase()) {
            found = flowers[i];
            break;
        }
    }

    // Show what we found!
    if (found) {
        results.innerHTML =
            "<div class='flower-card'>" +
            "<h2>" + found.name + "</h2>" +
            "<img src='" + found.picture + "' alt='" + found.name + "'>" +
            "<p><b>Colors:</b> " + found.colors + "</p>" +
            "<p><b>Fun Fact:</b> " + found.fact + "</p>" +
            "</div>";
    } else {
        results.innerHTML =
            "<div class='not-found'>" +
            "<p>We don't have that flower yet!</p>" +
            "<p>Maybe Bella will add it soon! 🌸</p>" +
            "</div>";
    }
}
