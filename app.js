// Flores - Flower Identification App
// Made by Bella

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const paymentScreen = document.getElementById('paymentScreen');
    const mainApp = document.getElementById('mainApp');
    const purchaseBtn = document.getElementById('purchaseBtn');
    const tabs = document.querySelectorAll('.tab');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const suggestions = document.getElementById('suggestions');
    const searchResults = document.getElementById('searchResults');
    const identifyResults = document.getElementById('identifyResults');
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
    const previewImage = document.getElementById('previewImage');
    const identifyBtn = document.getElementById('identifyBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Check if user has already purchased
    const hasPurchased = localStorage.getItem('flores_purchased');
    if (hasPurchased) {
        showMainApp();
    }

    // Purchase button click
    purchaseBtn.addEventListener('click', function() {
        // Simulate payment processing
        purchaseBtn.innerHTML = '<span>Processing...</span>';
        purchaseBtn.disabled = true;

        setTimeout(() => {
            // Simulate successful payment
            localStorage.setItem('flores_purchased', 'true');
            localStorage.setItem('flores_purchase_date', new Date().toISOString());

            // Show success animation
            purchaseBtn.innerHTML = '<span>✓ Welcome to Flores!</span>';
            purchaseBtn.style.background = 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)';

            setTimeout(() => {
                showMainApp();
            }, 1000);
        }, 1500);
    });

    function showMainApp() {
        paymentScreen.classList.add('hidden');
        mainApp.classList.remove('hidden');
    }

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Update active content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(targetTab + 'Tab').classList.add('active');
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const query = this.value;
        if (query.length > 0) {
            showSuggestions(query);
        } else {
            hideSuggestions();
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
            hideSuggestions();
        }
    });

    searchBtn.addEventListener('click', function() {
        performSearch(searchInput.value);
        hideSuggestions();
    });

    function showSuggestions(query) {
        const results = getFlowerSuggestions(query);
        if (results.length > 0) {
            suggestions.innerHTML = results.map(flower => `
                <div class="suggestion-item" data-name="${flower.name}">
                    <span class="emoji">${flower.emoji}</span>
                    <span>${flower.name}</span>
                </div>
            `).join('');
            suggestions.classList.remove('hidden');

            // Add click handlers to suggestions
            document.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', function() {
                    const name = this.dataset.name;
                    searchInput.value = name;
                    performSearch(name);
                    hideSuggestions();
                });
            });
        } else {
            hideSuggestions();
        }
    }

    function hideSuggestions() {
        suggestions.classList.add('hidden');
    }

    function performSearch(query) {
        if (!query.trim()) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <span class="no-results-icon">🌸</span>
                    <p>Type a flower name to search</p>
                </div>
            `;
            return;
        }

        // Show loading
        searchResults.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Searching for flowers...</p>
            </div>
        `;

        // Simulate API delay
        setTimeout(() => {
            const results = searchFlowers(query);

            if (results.length > 0) {
                searchResults.innerHTML = results.map(flower => createFlowerCard(flower)).join('');
            } else {
                searchResults.innerHTML = `
                    <div class="no-results">
                        <span class="no-results-icon">🥀</span>
                        <p>No flowers found for "${query}"</p>
                        <p>Try searching for: Rose, Tulip, Sunflower, Lily, or Orchid</p>
                    </div>
                `;
            }
        }, 500);
    }

    function createFlowerCard(flower) {
        return `
            <div class="flower-card">
                <img src="${flower.image}" alt="${flower.name}" class="flower-image" onerror="this.src='https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800'">
                <div class="flower-info">
                    <h2 class="flower-name">${flower.emoji} ${flower.name}</h2>
                    <p class="flower-scientific">${flower.scientificName}</p>
                    <p class="flower-description">${flower.description}</p>
                    <div class="flower-facts">
                        <div class="fact">
                            <span class="fact-label">Colors</span>
                            <span class="fact-value">${flower.colors.join(', ')}</span>
                        </div>
                        <div class="fact">
                            <span class="fact-label">Bloom Season</span>
                            <span class="fact-value">${flower.bloomSeason}</span>
                        </div>
                        <div class="fact">
                            <span class="fact-label">Meaning</span>
                            <span class="fact-value">${flower.meaning}</span>
                        </div>
                        <div class="fact">
                            <span class="fact-label">Care Level</span>
                            <span class="fact-value">${flower.careLevel}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Image upload functionality
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        }
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file);
        }
    });

    function handleImageUpload(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            dropZone.classList.add('hidden');
            previewContainer.classList.remove('hidden');
            identifyResults.innerHTML = '';
        };
        reader.readAsDataURL(file);
    }

    clearBtn.addEventListener('click', () => {
        previewContainer.classList.add('hidden');
        dropZone.classList.remove('hidden');
        fileInput.value = '';
        identifyResults.innerHTML = '';
    });

    identifyBtn.addEventListener('click', () => {
        // Show loading
        identifyResults.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Analyzing your flower...</p>
            </div>
        `;

        // Simulate AI identification
        setTimeout(() => {
            const result = identifyFlower(previewImage.src);
            showIdentificationResult(result);
        }, 2000);
    });

    function showIdentificationResult(result) {
        const { flower, confidence } = result;
        identifyResults.innerHTML = `
            <div class="identify-result">
                <div class="confidence-badge">🎯 ${confidence}% Match</div>
                ${createFlowerCard(flower)}
            </div>
        `;
    }

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
            hideSuggestions();
        }
    });
});
