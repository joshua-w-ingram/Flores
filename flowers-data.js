// Flores - Flower Database
// A comprehensive collection of flowers with images and information

const flowersDatabase = [
    {
        id: 1,
        name: "Rose",
        scientificName: "Rosa",
        emoji: "🌹",
        description: "Roses are one of the most beloved flowers in the world, known for their beauty and fragrance. They symbolize love, passion, and romance. With over 30,000 varieties, roses come in almost every color imaginable.",
        image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800",
        colors: ["Red", "Pink", "White", "Yellow", "Orange"],
        bloomSeason: "Spring to Fall",
        meaning: "Love & Romance",
        careLevel: "Moderate"
    },
    {
        id: 2,
        name: "Tulip",
        scientificName: "Tulipa",
        emoji: "🌷",
        description: "Tulips are elegant spring flowers originating from Central Asia. They became famous during the Dutch Golden Age and caused 'Tulip Mania.' Today, the Netherlands produces billions of tulips annually.",
        image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800",
        colors: ["Red", "Yellow", "Purple", "Pink", "White"],
        bloomSeason: "Spring",
        meaning: "Perfect Love",
        careLevel: "Easy"
    },
    {
        id: 3,
        name: "Sunflower",
        scientificName: "Helianthus annuus",
        emoji: "🌻",
        description: "Sunflowers are known for their large, bright yellow heads that follow the sun across the sky. Native to the Americas, they can grow up to 12 feet tall. Their seeds are a popular snack and source of oil.",
        image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800",
        colors: ["Yellow", "Orange", "Red", "Brown"],
        bloomSeason: "Summer",
        meaning: "Adoration & Loyalty",
        careLevel: "Easy"
    },
    {
        id: 4,
        name: "Lily",
        scientificName: "Lilium",
        emoji: "🌸",
        description: "Lilies are majestic flowers with large, prominent blooms and a sweet fragrance. They have been cultivated for thousands of years and appear in art and literature across many cultures.",
        image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800",
        colors: ["White", "Pink", "Orange", "Yellow", "Red"],
        bloomSeason: "Summer",
        meaning: "Purity & Renewal",
        careLevel: "Moderate"
    },
    {
        id: 5,
        name: "Orchid",
        scientificName: "Orchidaceae",
        emoji: "🌺",
        description: "Orchids are one of the largest flowering plant families with over 25,000 species. Known for their exotic beauty and intricate patterns, they can be found on every continent except Antarctica.",
        image: "https://images.unsplash.com/photo-1566836610593-62a64888c216?w=800",
        colors: ["Purple", "White", "Pink", "Yellow", "Blue"],
        bloomSeason: "Year-round",
        meaning: "Luxury & Beauty",
        careLevel: "Challenging"
    },
    {
        id: 6,
        name: "Daisy",
        scientificName: "Bellis perennis",
        emoji: "🌼",
        description: "Daisies are cheerful, simple flowers that symbolize innocence and purity. The name comes from 'day's eye' because the flower opens at dawn. They're found in meadows worldwide.",
        image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800",
        colors: ["White", "Yellow", "Pink", "Purple"],
        bloomSeason: "Spring to Fall",
        meaning: "Innocence & Purity",
        careLevel: "Easy"
    },
    {
        id: 7,
        name: "Lavender",
        scientificName: "Lavandula",
        emoji: "💜",
        description: "Lavender is famous for its calming fragrance and beautiful purple flowers. Used for centuries in aromatherapy, it's also popular in cooking, cosmetics, and as a natural remedy for relaxation.",
        image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800",
        colors: ["Purple", "Blue", "Pink", "White"],
        bloomSeason: "Summer",
        meaning: "Serenity & Grace",
        careLevel: "Easy"
    },
    {
        id: 8,
        name: "Peony",
        scientificName: "Paeonia",
        emoji: "🌸",
        description: "Peonies are lush, romantic flowers with layers of delicate petals. In Chinese culture, they're known as the 'king of flowers.' They have a wonderful fragrance and are popular in wedding bouquets.",
        image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800",
        colors: ["Pink", "White", "Red", "Coral", "Yellow"],
        bloomSeason: "Late Spring",
        meaning: "Prosperity & Romance",
        careLevel: "Moderate"
    },
    {
        id: 9,
        name: "Hydrangea",
        scientificName: "Hydrangea",
        emoji: "💙",
        description: "Hydrangeas produce large, showy flower heads in stunning colors. Interestingly, their color can change based on soil pH - acidic soil produces blue flowers, while alkaline soil creates pink ones.",
        image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800",
        colors: ["Blue", "Pink", "Purple", "White", "Green"],
        bloomSeason: "Summer to Fall",
        meaning: "Gratitude & Heartfelt",
        careLevel: "Moderate"
    },
    {
        id: 10,
        name: "Carnation",
        scientificName: "Dianthus caryophyllus",
        emoji: "🌸",
        description: "Carnations are ruffled, fragrant flowers that have been cultivated for over 2,000 years. They're one of the most popular cut flowers and are often used in boutonnieres and corsages.",
        image: "https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=800",
        colors: ["Red", "Pink", "White", "Yellow", "Purple"],
        bloomSeason: "Spring to Summer",
        meaning: "Fascination & Love",
        careLevel: "Easy"
    },
    {
        id: 11,
        name: "Cherry Blossom",
        scientificName: "Prunus serrulata",
        emoji: "🌸",
        description: "Cherry blossoms are iconic flowers in Japanese culture, symbolizing the fleeting nature of life. Every spring, millions gather for 'hanami' - the tradition of enjoying their transient beauty.",
        image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800",
        colors: ["Pink", "White"],
        bloomSeason: "Spring",
        meaning: "Renewal & Hope",
        careLevel: "Moderate"
    },
    {
        id: 12,
        name: "Dahlia",
        scientificName: "Dahlia",
        emoji: "🌺",
        description: "Dahlias are show-stopping flowers with intricate petal patterns. Native to Mexico, they come in every color except blue. Some varieties can grow dinner-plate sized blooms up to 12 inches across!",
        image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800",
        colors: ["Red", "Orange", "Pink", "Purple", "White", "Yellow"],
        bloomSeason: "Summer to Fall",
        meaning: "Elegance & Dignity",
        careLevel: "Moderate"
    },
    {
        id: 13,
        name: "Iris",
        scientificName: "Iris",
        emoji: "💜",
        description: "Named after the Greek goddess of the rainbow, irises come in nearly every color. Their distinctive three-petaled shape has made them popular in art, from ancient Egypt to Van Gogh's famous paintings.",
        image: "https://images.unsplash.com/photo-1590164537687-b0d4b1c12a99?w=800",
        colors: ["Purple", "Blue", "Yellow", "White", "Orange"],
        bloomSeason: "Spring",
        meaning: "Wisdom & Hope",
        careLevel: "Easy"
    },
    {
        id: 14,
        name: "Marigold",
        scientificName: "Tagetes",
        emoji: "🌼",
        description: "Marigolds are vibrant, hardy flowers that brighten gardens with their golden hues. They're essential in Day of the Dead celebrations in Mexico, where they're believed to guide spirits home.",
        image: "https://images.unsplash.com/photo-1611916656173-875e4277bea5?w=800",
        colors: ["Orange", "Yellow", "Red", "Gold"],
        bloomSeason: "Summer to Fall",
        meaning: "Passion & Creativity",
        careLevel: "Easy"
    },
    {
        id: 15,
        name: "Jasmine",
        scientificName: "Jasminum",
        emoji: "🤍",
        description: "Jasmine is treasured for its intensely sweet fragrance, especially at night. It's used in perfumes, teas, and traditional ceremonies across Asia. The flowers are often strung into garlands.",
        image: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=800",
        colors: ["White", "Yellow", "Pink"],
        bloomSeason: "Spring to Summer",
        meaning: "Love & Sensuality",
        careLevel: "Moderate"
    },
    {
        id: 16,
        name: "Hibiscus",
        scientificName: "Hibiscus rosa-sinensis",
        emoji: "🌺",
        description: "Hibiscus flowers are tropical beauties with large, trumpet-shaped blooms. They're the state flower of Hawaii and are used worldwide to make refreshing hibiscus tea rich in vitamin C.",
        image: "https://images.unsplash.com/photo-1595351298020-038700609878?w=800",
        colors: ["Red", "Pink", "Orange", "Yellow", "White"],
        bloomSeason: "Summer",
        meaning: "Delicate Beauty",
        careLevel: "Moderate"
    },
    {
        id: 17,
        name: "Magnolia",
        scientificName: "Magnolia",
        emoji: "🤍",
        description: "Magnolias are ancient flowers that existed before bees, so they evolved to be pollinated by beetles. Their large, fragrant blooms and glossy leaves make them stunning ornamental trees.",
        image: "https://images.unsplash.com/photo-1518882605630-8a6d9a4ddfc7?w=800",
        colors: ["White", "Pink", "Purple", "Yellow"],
        bloomSeason: "Spring",
        meaning: "Nobility & Dignity",
        careLevel: "Moderate"
    },
    {
        id: 18,
        name: "Poppy",
        scientificName: "Papaver",
        emoji: "🌺",
        description: "Poppies are delicate flowers with paper-thin petals. Red poppies became a symbol of remembrance for fallen soldiers after World War I, when they bloomed across the battlefields of Flanders.",
        image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800",
        colors: ["Red", "Orange", "Yellow", "White", "Pink"],
        bloomSeason: "Spring to Summer",
        meaning: "Remembrance & Peace",
        careLevel: "Easy"
    },
    {
        id: 19,
        name: "Daffodil",
        scientificName: "Narcissus",
        emoji: "💛",
        description: "Daffodils are cheerful harbingers of spring with their sunny yellow trumpets. Native to Europe, they naturalize easily and can bloom for decades. They're the national flower of Wales.",
        image: "https://images.unsplash.com/photo-1550159930-40066082f25c?w=800",
        colors: ["Yellow", "White", "Orange"],
        bloomSeason: "Early Spring",
        meaning: "New Beginnings",
        careLevel: "Easy"
    },
    {
        id: 20,
        name: "Chrysanthemum",
        scientificName: "Chrysanthemum",
        emoji: "🌼",
        description: "Chrysanthemums, or 'mums,' have been cultivated in China for over 2,500 years. They're symbols of autumn and are celebrated during festivals in Japan. Tea made from them is believed to have health benefits.",
        image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800",
        colors: ["Yellow", "White", "Pink", "Red", "Purple", "Orange"],
        bloomSeason: "Fall",
        meaning: "Longevity & Joy",
        careLevel: "Easy"
    },
    {
        id: 21,
        name: "Gardenia",
        scientificName: "Gardenia jasminoides",
        emoji: "🤍",
        description: "Gardenias are known for their creamy white petals and intoxicating fragrance. Popular in Southern gardens, they're often worn as corsages and used in perfumery. Billie Holiday famously wore them in her hair.",
        image: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?w=800",
        colors: ["White", "Cream", "Yellow"],
        bloomSeason: "Spring to Summer",
        meaning: "Secret Love",
        careLevel: "Challenging"
    },
    {
        id: 22,
        name: "Camellia",
        scientificName: "Camellia japonica",
        emoji: "🌺",
        description: "Camellias are elegant flowers that bloom in winter when few other plants flower. They've been cultivated in Asia for centuries, and their cousin, Camellia sinensis, gives us tea!",
        image: "https://images.unsplash.com/photo-1548431599-8b8c4a1d8a85?w=800",
        colors: ["Red", "Pink", "White"],
        bloomSeason: "Winter to Spring",
        meaning: "Admiration & Perfection",
        careLevel: "Moderate"
    },
    {
        id: 23,
        name: "Wisteria",
        scientificName: "Wisteria",
        emoji: "💜",
        description: "Wisteria is a stunning climbing vine with cascading clusters of fragrant flowers. Some wisteria vines in Japan are over 1,200 years old and supported by elaborate wooden trellises.",
        image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=800",
        colors: ["Purple", "Blue", "Pink", "White"],
        bloomSeason: "Spring",
        meaning: "Romance & Poetry",
        careLevel: "Moderate"
    },
    {
        id: 24,
        name: "Freesia",
        scientificName: "Freesia",
        emoji: "🌸",
        description: "Freesias are beloved for their sweet, citrusy fragrance and delicate funnel-shaped blooms. Native to South Africa, they're popular in wedding bouquets and as long-lasting cut flowers.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
        colors: ["White", "Yellow", "Pink", "Red", "Purple", "Orange"],
        bloomSeason: "Spring",
        meaning: "Friendship & Trust",
        careLevel: "Moderate"
    },
    {
        id: 25,
        name: "Anemone",
        scientificName: "Anemone",
        emoji: "🌸",
        description: "Anemones, also called windflowers, have delicate petals that seem to dance in the breeze. In Greek mythology, they sprang from the tears of Aphrodite as she mourned Adonis.",
        image: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800",
        colors: ["Red", "Pink", "Purple", "White", "Blue"],
        bloomSeason: "Spring",
        meaning: "Anticipation & Protection",
        careLevel: "Moderate"
    },
    {
        id: 26,
        name: "Lotus",
        scientificName: "Nelumbo nucifera",
        emoji: "🪷",
        description: "The lotus is a sacred flower in many Asian cultures, symbolizing spiritual enlightenment. It grows from muddy water yet produces pristine blooms - a metaphor for rising above adversity.",
        image: "https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=800",
        colors: ["Pink", "White", "Yellow", "Blue"],
        bloomSeason: "Summer",
        meaning: "Purity & Enlightenment",
        careLevel: "Challenging"
    },
    {
        id: 27,
        name: "Zinnia",
        scientificName: "Zinnia elegans",
        emoji: "🌺",
        description: "Zinnias are vibrant, easy-to-grow flowers that attract butterflies. They were the first flowers grown in space, blooming aboard the International Space Station in 2016!",
        image: "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?w=800",
        colors: ["Red", "Orange", "Yellow", "Pink", "Purple", "White"],
        bloomSeason: "Summer to Fall",
        meaning: "Lasting Friendship",
        careLevel: "Easy"
    },
    {
        id: 28,
        name: "Bluebell",
        scientificName: "Hyacinthoides non-scripta",
        emoji: "💙",
        description: "Bluebells carpet ancient woodlands with their distinctive nodding blue flowers each spring. In British folklore, hearing a bluebell ring means a fairy is nearby.",
        image: "https://images.unsplash.com/photo-1588624618842-3c0cd85cfafe?w=800",
        colors: ["Blue", "Purple", "Pink", "White"],
        bloomSeason: "Spring",
        meaning: "Humility & Constancy",
        careLevel: "Easy"
    },
    {
        id: 29,
        name: "Bird of Paradise",
        scientificName: "Strelitzia reginae",
        emoji: "🧡",
        description: "Bird of Paradise flowers look like exotic tropical birds in flight. Native to South Africa, they're popular in floral arrangements and can last up to two weeks when cut.",
        image: "https://images.unsplash.com/photo-1520525003249-2b9cdda513bc?w=800",
        colors: ["Orange", "Blue", "Yellow", "White"],
        bloomSeason: "Year-round",
        meaning: "Freedom & Joy",
        careLevel: "Moderate"
    },
    {
        id: 30,
        name: "Ranunculus",
        scientificName: "Ranunculus asiaticus",
        emoji: "🌸",
        description: "Ranunculus have tissue-paper thin petals layered like roses. Also called Persian buttercups, they're favorites for wedding flowers and come in an incredible range of colors.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
        colors: ["Pink", "Red", "Orange", "Yellow", "White", "Purple"],
        bloomSeason: "Spring",
        meaning: "Charm & Radiance",
        careLevel: "Moderate"
    },
    {
        id: 31,
        name: "Violet",
        scientificName: "Viola",
        emoji: "💜",
        description: "Violets are dainty, fragrant flowers that have been adored since ancient Greece. They were Napoleon's favorite flower, and he was known as 'Corporal Violet' by his supporters.",
        image: "https://images.unsplash.com/photo-1518882605630-8a6d9a4ddfc7?w=800",
        colors: ["Purple", "Blue", "White", "Yellow"],
        bloomSeason: "Spring",
        meaning: "Modesty & Faithfulness",
        careLevel: "Easy"
    },
    {
        id: 32,
        name: "Calla Lily",
        scientificName: "Zantedeschia",
        emoji: "🤍",
        description: "Calla lilies have elegant, trumpet-shaped blooms that symbolize magnificent beauty. Despite their name, they're not true lilies. Georgia O'Keeffe famously painted their sculptural forms.",
        image: "https://images.unsplash.com/photo-1568187846181-b8f69cdea1ad?w=800",
        colors: ["White", "Pink", "Yellow", "Orange", "Purple", "Black"],
        bloomSeason: "Spring to Summer",
        meaning: "Magnificent Beauty",
        careLevel: "Moderate"
    },
    {
        id: 33,
        name: "Forget-Me-Not",
        scientificName: "Myosotis",
        emoji: "💙",
        description: "Forget-me-nots are tiny blue flowers with yellow centers that grow in clusters. According to legend, a knight fell into a river picking these flowers and called out 'Forget me not!' to his love.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
        colors: ["Blue", "Pink", "White"],
        bloomSeason: "Spring to Summer",
        meaning: "True Love & Memories",
        careLevel: "Easy"
    },
    {
        id: 34,
        name: "Snapdragon",
        scientificName: "Antirrhinum majus",
        emoji: "🌺",
        description: "Snapdragons get their name from flowers that open and close like a dragon's mouth when squeezed. They come in tall spires of colorful blooms and are excellent cut flowers.",
        image: "https://images.unsplash.com/photo-1593003813114-c8b8a2e42f63?w=800",
        colors: ["Red", "Pink", "Yellow", "Orange", "White", "Purple"],
        bloomSeason: "Spring to Fall",
        meaning: "Grace & Strength",
        careLevel: "Easy"
    },
    {
        id: 35,
        name: "Plumeria",
        scientificName: "Plumeria",
        emoji: "🌺",
        description: "Plumeria, also called frangipani, are tropical flowers with an intoxicating fragrance. They're used to make Hawaiian leis and have become symbols of the islands.",
        image: "https://images.unsplash.com/photo-1596709715304-f9fb55c3a1c4?w=800",
        colors: ["White", "Yellow", "Pink", "Red"],
        bloomSeason: "Spring to Fall",
        meaning: "Beauty & Charm",
        careLevel: "Moderate"
    }
];

// Helper function to search flowers
function searchFlowers(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return [];

    return flowersDatabase.filter(flower =>
        flower.name.toLowerCase().includes(searchTerm) ||
        flower.scientificName.toLowerCase().includes(searchTerm) ||
        flower.colors.some(color => color.toLowerCase().includes(searchTerm)) ||
        flower.description.toLowerCase().includes(searchTerm)
    );
}

// Helper function to get flower suggestions
function getFlowerSuggestions(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) return [];

    return flowersDatabase
        .filter(flower => flower.name.toLowerCase().startsWith(searchTerm))
        .slice(0, 5);
}

// Helper function to identify flower from image (simulated)
function identifyFlower(imageData) {
    // In a real app, this would call an AI/ML API
    // For demo, we'll return a random flower with confidence
    const randomIndex = Math.floor(Math.random() * flowersDatabase.length);
    const flower = flowersDatabase[randomIndex];
    const confidence = Math.floor(Math.random() * 20) + 80; // 80-99%

    return {
        flower: flower,
        confidence: confidence
    };
}

// Export for use in app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { flowersDatabase, searchFlowers, getFlowerSuggestions, identifyFlower };
}
