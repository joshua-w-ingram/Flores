// Bella's Flower Finder App!
// This makes the search button work!

function checkMyPhoto() {
    var photoInput = document.getElementById("photoInput");
    var photoArea = document.getElementById("photoArea");
    var file = photoInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            photoArea.innerHTML =
                "<h3>Your Photo:</h3>" +
                "<img src='" + e.target.result + "'>" +
                "<p>What flower is this? Click below!</p>" +
                "<div class='flower-buttons'></div>";

            // Add buttons for each flower
            var buttonsDiv = photoArea.querySelector('.flower-buttons');
            for (var i = 0; i < flowers.length; i++) {
                var btn = document.createElement('button');
                btn.className = 'flower-pick-btn';
                btn.textContent = flowers[i].name;
                btn.onclick = (function(flower) {
                    return function() {
                        showFlowerMatch(flower);
                    };
                })(flowers[i]);
                buttonsDiv.appendChild(btn);
            }
        };
        reader.readAsDataURL(file);
    }
}

function showFlowerMatch(flower) {
    var results = document.getElementById("results");
    results.innerHTML =
        "<div class='flower-card'>" +
        "<h2>🎉 It's a " + flower.name + "!</h2>" +
        "<img src='" + flower.picture + "' alt='" + flower.name + "'>" +
        "<p><b>Colors:</b> " + flower.colors + "</p>" +
        "<p><b>Fun Fact:</b> " + flower.fact + "</p>" +
        "</div>";

    // Scroll to results
    results.scrollIntoView({ behavior: 'smooth' });
}

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
