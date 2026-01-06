// Bella's Flower Finder App!
// This makes everything work!

// Start falling petals and flower of the day when page loads
window.onload = function() {
    startFallingPetals();
    showFlowerOfDay();
};

// FALLING PETALS - so pretty!
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

        // Remove petal after it falls
        setTimeout(function() {
            petal.remove();
        }, 7000);
    }, 800);
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

// RANDOM FLOWER - Surprise!
function randomFlower() {
    var randomIndex = Math.floor(Math.random() * flowers.length);
    var flower = flowers[randomIndex];

    var results = document.getElementById("results");
    results.innerHTML =
        "<div class='flower-card'>" +
        "<h2>🎲 Surprise! It's a " + flower.name + "!</h2>" +
        "<img src='" + flower.picture + "' alt='" + flower.name + "'>" +
        "<p><b>Colors:</b> " + flower.colors + "</p>" +
        "<p><b>Fun Fact:</b> " + flower.fact + "</p>" +
        "</div>";

    results.scrollIntoView({ behavior: 'smooth' });
}

// FLOWER QUIZ
var quizScore = 0;
var quizQuestion = 0;
var quizFlowers = [];

function startQuiz() {
    quizScore = 0;
    quizQuestion = 0;

    // Pick 5 random flowers for the quiz
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

    // Get 3 wrong answers
    var wrongAnswers = flowers.filter(function(f) {
        return f.name !== correctFlower.name;
    }).sort(function() { return 0.5 - Math.random(); }).slice(0, 3);

    // Mix correct and wrong answers
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

    // Disable all buttons
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].onclick = null;
        if (allButtons[i].textContent === correct) {
            allButtons[i].className += ' quiz-correct';
        }
    }

    if (selected === correct) {
        quizScore++;
        button.className += ' quiz-correct';
    } else {
        button.className += ' quiz-wrong';
    }

    // Next question after 1.5 seconds
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
    results.innerHTML =
        "<div class='flower-card'>" +
        "<h2>🎉 It's a " + flower.name + "!</h2>" +
        "<img src='" + flower.picture + "' alt='" + flower.name + "'>" +
        "<p><b>Colors:</b> " + flower.colors + "</p>" +
        "<p><b>Fun Fact:</b> " + flower.fact + "</p>" +
        "</div>";

    results.scrollIntoView({ behavior: 'smooth' });
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

    results.scrollIntoView({ behavior: 'smooth' });
}
