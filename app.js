// Bella's Flower Finder App!
// This makes everything work!

// Start everything when page loads
window.onload = function() {
    startFallingPetals();
    showFlowerOfDay();
    showFlowerCounter();
};

// FLOWER COUNTER
function showFlowerCounter() {
    var counter = document.getElementById('flowerCounter');
    counter.innerHTML = "🌸 " + flowers.length + " flowers and counting! 🌸";
}

// FALLING PETALS
function startFallingPetals() {
    var petals = ['🌸', '🌺', '🌼', '🌷', '💮', '🏵️'];
    var petalsDiv = document.getElementById('petals');

    setInterval(function() {
        var petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
        petalsDiv.appendChild(petal);

        setTimeout(function() {
            petal.remove();
        }, 7000);
    }, 800);
}

// CONFETTI EXPLOSION!
function launchConfetti() {
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9900', '#9900ff'];
    var confettiDiv = document.getElementById('confetti');

    for (var i = 0; i < 50; i++) {
        setTimeout(function() {
            var confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiDiv.appendChild(confetti);

            setTimeout(function() {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

// FLOWER OF THE DAY
function showFlowerOfDay() {
    var today = new Date();
    var dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    var flowerIndex = dayOfYear % flowers.length;
    var todaysFlower = flowers[flowerIndex];

    var flowerOfDayDiv = document.getElementById('flowerOfDay');
    flowerOfDayDiv.innerHTML =
        "<h3>🌟 Flower of the Day! 🌟</h3>" +
        "<img src='" + todaysFlower.picture + "' alt='" + todaysFlower.name + "'>" +
        "<p><b>" + todaysFlower.name + "</b></p>";
}

// SEARCH BY COLOR
function searchByColor() {
    var colorBox = document.getElementById('colorSearch');
    var color = colorBox.value.toLowerCase();
    var results = document.getElementById('results');

    if (!color) {
        results.innerHTML = "<div class='not-found'><p>Type a color like pink, yellow, purple, red, or white!</p></div>";
        return;
    }

    var found = flowers.filter(function(flower) {
        return flower.colors.toLowerCase().includes(color);
    });

    if (found.length > 0) {
        var html = "<h3>🎨 " + found.length + " " + color + " flowers found!</h3><div class='flower-grid'>";
        for (var i = 0; i < found.length; i++) {
            html += createMiniCard(found[i]);
        }
        html += "</div>";
        results.innerHTML = html;
    } else {
        results.innerHTML = "<div class='not-found'><p>No " + color + " flowers found! Try: pink, yellow, purple, red, white, blue, or orange</p></div>";
    }
}

// MINI CARD FOR GRID
function createMiniCard(flower) {
    return "<div class='flower-mini-card' onclick='showFlowerDetails(\"" + flower.name + "\")'>" +
        "<img src='" + flower.picture + "' alt='" + flower.name + "'>" +
        "<h4>" + flower.name + "</h4>" +
        "<p>" + flower.colors + "</p>" +
        "</div>";
}

// SHOW FLOWER DETAILS
function showFlowerDetails(name) {
    var flower = flowers.find(function(f) { return f.name === name; });
    if (flower) {
        var results = document.getElementById('results');
        results.innerHTML = createFlowerCard(flower);
        results.scrollIntoView({ behavior: 'smooth' });
    }
}

// RANDOM FLOWER
function randomFlower() {
    var randomIndex = Math.floor(Math.random() * flowers.length);
    var flower = flowers[randomIndex];

    var results = document.getElementById("results");
    results.innerHTML = createFlowerCard(flower, true);
    results.scrollIntoView({ behavior: 'smooth' });

    // Make it spin!
    setTimeout(function() {
        var img = results.querySelector('img');
        if (img) img.classList.add('spin');
    }, 100);
}

// BROWSE ALL FLOWERS
function showAllFlowers() {
    var results = document.getElementById('results');
    var html = "<h3>🌺 All " + flowers.length + " Flowers! 🌺</h3><div class='flower-grid'>";

    for (var i = 0; i < flowers.length; i++) {
        html += createMiniCard(flowers[i]);
    }

    html += "</div>";
    results.innerHTML = html;
    results.scrollIntoView({ behavior: 'smooth' });
}

// CREATE FLOWER CARD WITH FAVORITE BUTTON
function createFlowerCard(flower, isRandom) {
    var favorites = JSON.parse(localStorage.getItem('floresFavorites') || '[]');
    var isFav = favorites.includes(flower.name);
    var starEmoji = isFav ? '❤️' : '🤍';

    return "<div class='flower-card'>" +
        "<span class='fav-star' onclick='toggleFavorite(\"" + flower.name + "\")' title='Add to favorites'>" + starEmoji + "</span>" +
        "<h2>" + (isRandom ? "🎲 Surprise! " : "") + flower.name + "</h2>" +
        "<img src='" + flower.picture + "' alt='" + flower.name + "' onclick='this.classList.toggle(\"spin\")'>" +
        "<p><b>Colors:</b> " + flower.colors + "</p>" +
        "<p><b>Fun Fact:</b> " + flower.fact + "</p>" +
        "</div>";
}

// FAVORITES SYSTEM
function toggleFavorite(name) {
    var favorites = JSON.parse(localStorage.getItem('floresFavorites') || '[]');
    var index = favorites.indexOf(name);

    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(name);
        launchConfetti(); // Confetti when you favorite!
    }

    localStorage.setItem('floresFavorites', JSON.stringify(favorites));

    // Refresh the card
    var flower = flowers.find(function(f) { return f.name === name; });
    if (flower) {
        document.getElementById('results').innerHTML = createFlowerCard(flower);
    }
}

function showFavorites() {
    var favorites = JSON.parse(localStorage.getItem('floresFavorites') || '[]');
    var results = document.getElementById('results');

    if (favorites.length === 0) {
        results.innerHTML = "<div class='not-found'><p>❤️ No favorites yet!</p><p>Click the heart on any flower to add it!</p></div>";
        return;
    }

    var html = "<h3>❤️ Your " + favorites.length + " Favorite Flowers! ❤️</h3><div class='flower-grid'>";

    for (var i = 0; i < favorites.length; i++) {
        var flower = flowers.find(function(f) { return f.name === favorites[i]; });
        if (flower) {
            html += createMiniCard(flower);
        }
    }

    html += "</div>";
    results.innerHTML = html;
    results.scrollIntoView({ behavior: 'smooth' });
}

// COLLECTION (Flowers you've seen in real life!)
function showCollection() {
    var collection = JSON.parse(localStorage.getItem('floresCollection') || '[]');
    var results = document.getElementById('results');

    var html = "<h3>📋 My Flower Collection</h3>";
    html += "<p>Check off flowers you've seen in real life!</p>";
    html += "<div class='score-box'>Found: " + collection.length + " / " + flowers.length + "</div>";

    for (var i = 0; i < flowers.length; i++) {
        var isCollected = collection.includes(flowers[i].name);
        html += "<div class='collection-item " + (isCollected ? "collected" : "") + "'>" +
            "<input type='checkbox' class='collection-checkbox' " + (isCollected ? "checked" : "") +
            " onchange='toggleCollection(\"" + flowers[i].name + "\")'>" +
            "<img src='" + flowers[i].picture + "' alt='" + flowers[i].name + "'>" +
            "<span><b>" + flowers[i].name + "</b></span>" +
            "</div>";
    }

    results.innerHTML = html;
    results.scrollIntoView({ behavior: 'smooth' });
}

function toggleCollection(name) {
    var collection = JSON.parse(localStorage.getItem('floresCollection') || '[]');
    var index = collection.indexOf(name);

    if (index > -1) {
        collection.splice(index, 1);
    } else {
        collection.push(name);
        launchConfetti();
    }

    localStorage.setItem('floresCollection', JSON.stringify(collection));
    showCollection();
}

// MATCHING GAME
var matchCards = [];
var flippedCards = [];
var matchedPairs = 0;

function startMatchingGame() {
    matchedPairs = 0;
    flippedCards = [];

    // Pick 8 random flowers for 16 cards (8 pairs)
    var shuffled = flowers.slice().sort(function() { return 0.5 - Math.random(); });
    var gameFlowers = shuffled.slice(0, 8);

    // Create pairs
    matchCards = [];
    for (var i = 0; i < gameFlowers.length; i++) {
        matchCards.push({ id: i * 2, flower: gameFlowers[i], matched: false });
        matchCards.push({ id: i * 2 + 1, flower: gameFlowers[i], matched: false });
    }

    // Shuffle cards
    matchCards.sort(function() { return 0.5 - Math.random(); });

    var gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = "<div class='quiz-box'>" +
        "<h3>🃏 Flower Matching Game!</h3>" +
        "<p>Find all the matching pairs!</p>" +
        "<div class='score-box'>Pairs found: <span id='matchScore'>0</span> / 8</div>" +
        "<div class='matching-grid' id='matchingGrid'></div>" +
        "</div>";

    var grid = document.getElementById('matchingGrid');
    for (var j = 0; j < matchCards.length; j++) {
        var card = document.createElement('div');
        card.className = 'match-card';
        card.dataset.index = j;
        card.innerHTML = '🌸';
        card.onclick = function() { flipCard(this); };
        grid.appendChild(card);
    }

    gameArea.scrollIntoView({ behavior: 'smooth' });
}

function flipCard(cardElement) {
    var index = parseInt(cardElement.dataset.index);
    var card = matchCards[index];

    if (card.matched || flippedCards.length >= 2 || flippedCards.includes(index)) {
        return;
    }

    // Flip the card
    cardElement.classList.add('flipped');
    cardElement.innerHTML = "<img src='" + card.flower.picture + "' alt='" + card.flower.name + "'>";
    flippedCards.push(index);

    if (flippedCards.length === 2) {
        // Check for match
        var card1 = matchCards[flippedCards[0]];
        var card2 = matchCards[flippedCards[1]];

        if (card1.flower.name === card2.flower.name) {
            // Match!
            card1.matched = true;
            card2.matched = true;
            matchedPairs++;
            document.getElementById('matchScore').textContent = matchedPairs;

            var cards = document.querySelectorAll('.match-card');
            cards[flippedCards[0]].classList.add('matched');
            cards[flippedCards[1]].classList.add('matched');

            launchConfetti();
            flippedCards = [];

            if (matchedPairs === 8) {
                setTimeout(function() {
                    alert('🎉 You found all the pairs! You WIN! 🎉');
                }, 500);
            }
        } else {
            // No match - flip back
            setTimeout(function() {
                var cards = document.querySelectorAll('.match-card');
                cards[flippedCards[0]].classList.remove('flipped');
                cards[flippedCards[0]].innerHTML = '🌸';
                cards[flippedCards[1]].classList.remove('flipped');
                cards[flippedCards[1]].innerHTML = '🌸';
                flippedCards = [];
            }, 1000);
        }
    }
}

// FLOWER QUIZ
var quizScore = 0;
var quizQuestion = 0;
var quizFlowers = [];

function startQuiz() {
    quizScore = 0;
    quizQuestion = 0;

    var shuffled = flowers.slice().sort(function() { return 0.5 - Math.random(); });
    quizFlowers = shuffled.slice(0, 5);

    showQuizQuestion();
}

function showQuizQuestion() {
    if (quizQuestion >= quizFlowers.length) {
        endQuiz();
        return;
    }

    var correctFlower = quizFlowers[quizQuestion];

    var wrongAnswers = flowers.filter(function(f) {
        return f.name !== correctFlower.name;
    }).sort(function() { return 0.5 - Math.random(); }).slice(0, 3);

    var options = wrongAnswers.concat([correctFlower]).sort(function() { return 0.5 - Math.random(); });

    var quizArea = document.getElementById('quizArea');
    quizArea.innerHTML =
        "<div class='quiz-box'>" +
        "<div class='score-box'>Score: " + quizScore + " / " + quizFlowers.length + "</div>" +
        "<h3>Question " + (quizQuestion + 1) + " of " + quizFlowers.length + "</h3>" +
        "<p>What flower is this?</p>" +
        "<img src='" + correctFlower.picture + "' alt='Mystery flower'>" +
        "<div id='quizOptions'></div>" +
        "</div>";

    var optionsDiv = document.getElementById('quizOptions');
    for (var i = 0; i < options.length; i++) {
        var btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = options[i].name;
        btn.onclick = (function(selectedName, correctName) {
            return function() {
                checkAnswer(selectedName, correctName, this);
            };
        })(options[i].name, correctFlower.name);
        optionsDiv.appendChild(btn);
    }

    quizArea.scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer(selected, correct, button) {
    var allButtons = document.querySelectorAll('.quiz-option');

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].onclick = null;
        if (allButtons[i].textContent === correct) {
            allButtons[i].className += ' quiz-correct';
        }
    }

    if (selected === correct) {
        quizScore++;
        button.className += ' quiz-correct';
        launchConfetti(); // Confetti for correct answer!
    } else {
        button.className += ' quiz-wrong';
    }

    setTimeout(function() {
        quizQuestion++;
        showQuizQuestion();
    }, 1500);
}

function endQuiz() {
    var quizArea = document.getElementById('quizArea');
    var message = "";

    if (quizScore === 5) {
        message = "🏆 PERFECT! You're a Flower GENIUS! 🏆";
        launchConfetti();
    } else if (quizScore >= 3) {
        message = "🌟 Great job! You know your flowers! 🌟";
    } else {
        message = "🌱 Keep learning! You'll be a flower expert soon! 🌱";
    }

    quizArea.innerHTML =
        "<div class='quiz-box'>" +
        "<h3>Quiz Complete!</h3>" +
        "<div class='score-box'>Final Score: " + quizScore + " / 5</div>" +
        "<p>" + message + "</p>" +
        "<button onclick='startQuiz()' class='quiz-btn'>Play Again!</button>" +
        "</div>";
}

// MY PHOTOS
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
    results.innerHTML = createFlowerCard(flower);
    results.scrollIntoView({ behavior: 'smooth' });
    launchConfetti();
}

// SEARCH
function searchFlower() {
    var searchBox = document.getElementById("searchBox");
    var typed = searchBox.value;
    var results = document.getElementById("results");

    var found = null;

    for (var i = 0; i < flowers.length; i++) {
        if (flowers[i].name.toLowerCase() === typed.toLowerCase()) {
            found = flowers[i];
            break;
        }
    }

    if (found) {
        results.innerHTML = createFlowerCard(found);
    } else {
        results.innerHTML =
            "<div class='not-found'>" +
            "<p>We don't have that flower yet!</p>" +
            "<p>Maybe Bella will add it soon! 🌸</p>" +
            "</div>";
    }

    results.scrollIntoView({ behavior: 'smooth' });
}
