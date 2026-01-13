// Bella's Flower Finder App!
// This makes everything work!

// Start everything when page loads
window.onload = function() {
    startFallingPetals();
    startTwinklingStars();
    showFlowerOfDay();
    showFlowerCounter();
    showMiniAchievements();
};

// TWINKLING STARS
function startTwinklingStars() {
    var starsDiv = document.getElementById('stars');
    var starEmojis = ['⭐', '✨', '💫', '🌟'];

    for (var i = 0; i < 15; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        star.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsDiv.appendChild(star);
    }
}

// SECRET FLOWER - Click title 5 times!
var secretClicks = 0;
function secretFlowerClicks() {
    secretClicks++;
    if (secretClicks >= 5) {
        secretClicks = 0;
        showSecretFlower();
    }
}

function showSecretFlower() {
    launchConfetti();
    launchConfetti();
    var results = document.getElementById('results');
    results.innerHTML =
        "<div class='flower-card secret-flower'>" +
        "<h2>🌈✨ SECRET FLOWER FOUND! ✨🌈</h2>" +
        "<h3>The Magical Rainbow Rose!</h3>" +
        "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tinted_rose.jpg/800px-Tinted_rose.jpg' alt='Rainbow Rose'>" +
        "<p><b>Colors:</b> ALL THE COLORS OF THE RAINBOW!</p>" +
        "<p><b>Fun Fact:</b> You found Bella's secret flower! This magical rainbow rose doesn't exist in nature - artists make them by splitting the stem and putting each part in different colored water! You're a TRUE Flores explorer! 🌈</p>" +
        "</div>";
    results.scrollIntoView({ behavior: 'smooth' });
    earnAchievement('secret');
}

// ACHIEVEMENTS SYSTEM
var achievements = {
    first_search: { name: "First Bloom", emoji: "🌱", desc: "Search for your first flower" },
    quiz_master: { name: "Quiz Master", emoji: "🧠", desc: "Get a perfect score in quiz" },
    collector: { name: "Collector", emoji: "📋", desc: "Find 10 flowers in real life" },
    favorite: { name: "Flower Lover", emoji: "❤️", desc: "Add 5 flowers to favorites" },
    speed_demon: { name: "Speed Demon", emoji: "⚡", desc: "Finish speed quiz under 15 seconds" },
    match_winner: { name: "Match Winner", emoji: "🃏", desc: "Win the matching game" },
    secret: { name: "Secret Finder", emoji: "🌈", desc: "Find the secret flower" },
    explorer: { name: "Explorer", emoji: "🔍", desc: "Browse all flowers" },
    color_master: { name: "Color Master", emoji: "🎨", desc: "Search by 3 different colors" }
};

function earnAchievement(id) {
    var earned = JSON.parse(localStorage.getItem('floresAchievements') || '[]');
    if (!earned.includes(id)) {
        earned.push(id);
        localStorage.setItem('floresAchievements', JSON.stringify(earned));
        showAchievementPopup(id);
        showMiniAchievements();
    }
}

function showAchievementPopup(id) {
    var ach = achievements[id];
    alert("🏆 ACHIEVEMENT UNLOCKED!\n\n" + ach.emoji + " " + ach.name + "\n" + ach.desc);
    launchConfetti();
}

function showMiniAchievements() {
    var earned = JSON.parse(localStorage.getItem('floresAchievements') || '[]');
    var bar = document.getElementById('achievements');
    var html = "";

    for (var id in achievements) {
        var isEarned = earned.includes(id);
        html += "<span class='mini-badge " + (isEarned ? "earned" : "") + "' title='" + achievements[id].name + "'>" + achievements[id].emoji + "</span>";
    }

    bar.innerHTML = html;
}

function showAchievements() {
    var earned = JSON.parse(localStorage.getItem('floresAchievements') || '[]');
    var results = document.getElementById('results');

    var html = "<h3>🏆 My Badges & Achievements 🏆</h3>";
    html += "<p>Earned: " + earned.length + " / " + Object.keys(achievements).length + "</p>";

    for (var id in achievements) {
        var ach = achievements[id];
        var isEarned = earned.includes(id);
        html += "<div class='badge-card " + (isEarned ? "" : "locked") + "'>" +
            "<span class='badge-icon'>" + ach.emoji + "</span>" +
            "<div class='badge-info'>" +
            "<h4>" + ach.name + (isEarned ? " ✅" : " 🔒") + "</h4>" +
            "<p>" + ach.desc + "</p>" +
            "</div></div>";
    }

    results.innerHTML = html;
    results.scrollIntoView({ behavior: 'smooth' });
}

// SPEED QUIZ
var speedQuizScore = 0;
var speedQuizQuestion = 0;
var speedStartTime = 0;
var speedTimer = null;

function startSpeedQuiz() {
    speedQuizScore = 0;
    speedQuizQuestion = 0;
    speedStartTime = Date.now();

    var shuffled = flowers.slice().sort(function() { return 0.5 - Math.random(); });
    quizFlowers = shuffled.slice(0, 5);

    showSpeedQuizQuestion();
}

function showSpeedQuizQuestion() {
    if (speedQuizQuestion >= quizFlowers.length) {
        endSpeedQuiz();
        return;
    }

    var elapsed = ((Date.now() - speedStartTime) / 1000).toFixed(1);
    var correctFlower = quizFlowers[speedQuizQuestion];

    var wrongAnswers = flowers.filter(function(f) {
        return f.name !== correctFlower.name;
    }).sort(function() { return 0.5 - Math.random(); }).slice(0, 3);

    var options = wrongAnswers.concat([correctFlower]).sort(function() { return 0.5 - Math.random(); });

    var quizArea = document.getElementById('quizArea');
    quizArea.innerHTML =
        "<div class='quiz-box'>" +
        "<div class='timer'>⏱️ " + elapsed + "s</div>" +
        "<h3>Question " + (speedQuizQuestion + 1) + " of 5 - GO FAST!</h3>" +
        "<img src='" + correctFlower.picture + "' alt='Mystery flower' style='width:150px;height:150px;object-fit:cover;border-radius:10px;'>" +
        "<div id='speedOptions'></div>" +
        "</div>";

    var optionsDiv = document.getElementById('speedOptions');
    for (var i = 0; i < options.length; i++) {
        var btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = options[i].name;
        btn.onclick = (function(selectedName, correctName) {
            return function() {
                checkSpeedAnswer(selectedName, correctName, this);
            };
        })(options[i].name, correctFlower.name);
        optionsDiv.appendChild(btn);
    }

    quizArea.scrollIntoView({ behavior: 'smooth' });

    // Update timer every 100ms
    clearInterval(speedTimer);
    speedTimer = setInterval(function() {
        var elapsed = ((Date.now() - speedStartTime) / 1000).toFixed(1);
        var timerEl = document.querySelector('.timer');
        if (timerEl) timerEl.textContent = "⏱️ " + elapsed + "s";
    }, 100);
}

function checkSpeedAnswer(selected, correct, button) {
    clearInterval(speedTimer);

    if (selected === correct) {
        speedQuizScore++;
        launchConfetti();
    }

    speedQuizQuestion++;
    setTimeout(showSpeedQuizQuestion, 300);
}

function endSpeedQuiz() {
    clearInterval(speedTimer);
    var totalTime = ((Date.now() - speedStartTime) / 1000).toFixed(1);

    var quizArea = document.getElementById('quizArea');
    var message = "";

    if (speedQuizScore === 5 && totalTime < 15) {
        message = "⚡ LIGHTNING FAST! You're a SPEED DEMON! ⚡";
        earnAchievement('speed_demon');
    } else if (speedQuizScore === 5) {
        message = "🎉 Perfect score! Try to go faster next time!";
    } else if (speedQuizScore >= 3) {
        message = "👍 Good job! Keep practicing!";
    } else {
        message = "🌱 Keep learning and try again!";
    }

    quizArea.innerHTML =
        "<div class='quiz-box'>" +
        "<h3>⚡ Speed Quiz Complete! ⚡</h3>" +
        "<div class='score-box'>Score: " + speedQuizScore + " / 5</div>" +
        "<div class='timer'>Time: " + totalTime + " seconds</div>" +
        "<p>" + message + "</p>" +
        "<button onclick='startSpeedQuiz()' class='speed-btn'>Try Again!</button>" +
        "</div>";
}

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
    earnAchievement('explorer');
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
                    earnAchievement('match_winner');
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
        earnAchievement('quiz_master');
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
        earnAchievement('first_search');
    } else {
        results.innerHTML =
            "<div class='not-found'>" +
            "<p>We don't have that flower yet!</p>" +
            "<p>Maybe Bella will add it soon! 🌸</p>" +
            "</div>";
    }

    results.scrollIntoView({ behavior: 'smooth' });
}
