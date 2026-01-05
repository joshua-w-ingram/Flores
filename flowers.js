// Bella's Flower Collection!

var flowers = [
    {
        name: "Marigold",
        picture: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Tagetes_erecta_-_Akola_-Moghat.jpg",
        colors: "Orange, Yellow, Red",
        fact: "Marigolds are used in Mexico for Day of the Dead celebrations! They are also called 'Flores de Muerto' which means Flowers of the Dead."
    },
    {
        name: "Cherry Blossom",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cherry_blossoms_in_Vancouver_3_crop.jpg",
        colors: "Pink, White",
        fact: "In Japan, people have picnics under cherry blossom trees! It's called 'Hanami' which means flower watching. The flowers only bloom for about 2 weeks!"
    },
    {
        name: "Rose",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/30/Rosa_Rosa.jpg",
        colors: "Red, Pink, White, Yellow",
        fact: "Roses are the flower of love! People give red roses on Valentine's Day. There are over 30,000 different types of roses!"
    },
    {
        name: "Sunflower",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
        colors: "Yellow, Orange",
        fact: "Sunflowers turn their heads to follow the sun across the sky! Baby sunflowers do this, and it's called heliotropism. They can grow taller than a grown-up!"
    },
    {
        name: "Tulip",
        picture: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tulip_-_floriade_canberra.jpg",
        colors: "Red, Yellow, Pink, Purple, White",
        fact: "Tulips come from Turkey, not Holland! But Holland grows BILLIONS of them now. A long time ago, tulips were worth more than gold!"
    },
    {
        name: "Daisy",
        picture: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Bellis_perennis_white_%28aka%29.jpg",
        colors: "White, Yellow, Pink",
        fact: "Daisies close their petals at night and open them in the morning! Their name means 'day's eye' because they wake up with the sun."
    },
    {
        name: "Orchid",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Orchid_high_resolution.jpg",
        colors: "Purple, White, Pink, Yellow",
        fact: "Orchids are one of the biggest flower families - there are over 25,000 different kinds! Some orchids look like animals, like bees or monkeys!"
    },
    {
        name: "Lily",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Lilium_candidum_1.jpg",
        colors: "White, Orange, Pink, Yellow",
        fact: "Lilies are shaped like trumpets! In stories, fairies sometimes use lily petals as beds. Easter lilies are white and smell amazing!"
    },
    {
        name: "Lavender",
        picture: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Lavender_Field.jpg",
        colors: "Purple, Blue",
        fact: "Lavender smells SO good and makes people feel calm and sleepy! People put it in pillows to help them have sweet dreams."
    },
    {
        name: "Dandelion",
        picture: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Dandelion_in_seed.jpg",
        colors: "Yellow, White",
        fact: "When dandelions turn white and fluffy, you can blow on them and make a wish! Each little floaty thing can grow into a new dandelion."
    },
    {
        name: "Hibiscus",
        picture: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Hibiscus_rosa-sinensis_%27Brilliant%27_2.jpg",
        colors: "Red, Pink, Orange, Yellow",
        fact: "Hibiscus flowers are used to make yummy tea! In Hawaii, girls wear hibiscus flowers behind their ears. It's the state flower of Hawaii!"
    },
    {
        name: "Daffodil",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Daffodil_flower.jpg",
        colors: "Yellow, White, Orange",
        fact: "Daffodils are one of the first flowers to bloom in spring! They pop up even when there's still snow on the ground. So brave!"
    },
    {
        name: "Lotus",
        picture: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg",
        colors: "Pink, White",
        fact: "Lotus flowers grow in muddy water but stay perfectly clean! They are very special in many countries. The seeds can survive for 1,000 years!"
    },
    {
        name: "Violet",
        picture: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Viola_odorata_fg01.jpg",
        colors: "Purple, Blue, White",
        fact: "Violets are tiny but so pretty! The color violet is named after this flower. You can even eat violet flowers on cakes!"
    },
    {
        name: "Poppy",
        picture: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Corn_poppy.jpg",
        colors: "Red, Orange, Yellow, White",
        fact: "Red poppies help us remember brave soldiers. In the Wizard of Oz, Dorothy falls asleep in a field of poppies!"
    },
    {
        name: "Carnation",
        picture: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dianthus_caryophyllus_-_Blumen_-_1.jpg",
        colors: "Pink, Red, White, Purple",
        fact: "Carnations are super ruffly like tutus! They can last in a vase for up to 3 weeks. They are the flower for Mother's Day!"
    },
    {
        name: "Jasmine",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Jasminum_officinale_%22Grandiflorum%22_Closeup.jpg",
        colors: "White, Yellow",
        fact: "Jasmine smells SO sweet, especially at night! It's used to make fancy perfumes. In some countries, brides wear jasmine flowers!"
    },
    {
        name: "Peony",
        picture: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Paeonia_lactiflora_Herkunft.jpg",
        colors: "Pink, White, Red",
        fact: "Peonies are big and fluffy like cotton candy! Ants love them and help them open up. They can live for 100 years!"
    },
    {
        name: "Hydrangea",
        picture: "https://upload.wikimedia.org/wikipedia/commons/9/96/Hydrangea_macrophylla_-_Bigleaf_hydrangea.jpg",
        colors: "Blue, Pink, Purple, White",
        fact: "Hydrangeas are magic! They change color based on the dirt they grow in. Blue in some places, pink in others!"
    },
    {
        name: "Iris",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/43/Iris_germanica_%28Purple_bearded_Iris%29%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg",
        colors: "Purple, Blue, Yellow, White",
        fact: "Iris is named after the Greek goddess of rainbows! The flower comes in almost every color of the rainbow!"
    },
    {
        name: "Magnolia",
        picture: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Magnolia_liliiflora_flower_03.jpg",
        colors: "White, Pink, Purple",
        fact: "Magnolias are SO old - they existed when dinosaurs were alive! They bloom on trees before the leaves even grow!"
    },
    {
        name: "Gardenia",
        picture: "https://upload.wikimedia.org/wikipedia/commons/2/22/Gardenia_jasminoides_%27Chuck_Hayes%27_kz1.jpg",
        colors: "White, Cream",
        fact: "Gardenias smell AMAZING - like the most beautiful perfume! People wear them to fancy dances called proms!"
    },
    {
        name: "Buttercup",
        picture: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Ranunculus_repens_01.jpg",
        colors: "Yellow",
        fact: "If you hold a buttercup under your chin and it glows yellow, it means you like butter! At least that's what people say!"
    },
    {
        name: "Bluebell",
        picture: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg",
        colors: "Blue, Purple",
        fact: "Bluebells carpet the forest floor like a blue ocean! In fairy tales, if you hear a bluebell ring, a fairy is nearby!"
    },
    {
        name: "Snapdragon",
        picture: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Antirrhinum_majus_flowers_close.jpg",
        colors: "Pink, Red, Yellow, Orange, White",
        fact: "If you squeeze a snapdragon, its mouth opens like a dragon! Then it snaps back shut! Try it!"
    },
    {
        name: "Zinnia",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/48/Zinnia_elegans_with_Bombus_01.JPG",
        colors: "Red, Orange, Pink, Purple, Yellow",
        fact: "Zinnias were the FIRST flowers grown in space! Astronauts grew them on the space station! How cool is that?!"
    },
    {
        name: "Pansy",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Pansy_Viola_x_wittrockiana_Flower_2448px.jpg",
        colors: "Purple, Yellow, Orange, White",
        fact: "Pansies look like they have little faces! People say they look like they're thinking. The name means 'thought' in French!"
    },
    {
        name: "Wisteria",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Wisteria_sinensis_in_may.jpg",
        colors: "Purple, Blue, Pink, White",
        fact: "Wisteria hangs down like beautiful purple waterfalls! Some wisteria vines are over 1,000 years old in Japan!"
    },
    {
        name: "Camellia",
        picture: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Camellia_japonica_flower_2.jpg",
        colors: "Red, Pink, White",
        fact: "Camellias bloom in WINTER when most flowers are sleeping! They look like roses but they're not related!"
    },
    {
        name: "Forget-Me-Not",
        picture: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Myosotis_arvensis_close_800.jpg",
        colors: "Blue, Pink",
        fact: "Forget-me-nots are tiny blue flowers. The story says a knight picked them and said 'forget me not!' to his true love!"
    },
    {
        name: "Morning Glory",
        picture: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Ipomoea_purpurea_Tall_Mix%2C_blauw_en_donkerrood.jpg",
        colors: "Blue, Purple, Pink, White",
        fact: "Morning glories open up in the morning and close at night! They're like flowers that go to sleep just like you!"
    },
    {
        name: "Bird of Paradise",
        picture: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Strelitzia_reginae_Habitus.jpg",
        colors: "Orange, Blue, Yellow",
        fact: "Bird of Paradise flowers look like colorful tropical birds flying! They come from South Africa!"
    },
    {
        name: "Chrysanthemum",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/50/Chrysanthemum_grandiflorum_Louvre.jpg",
        colors: "Yellow, White, Pink, Red, Purple",
        fact: "In Japan, there's a special day just for this flower! People call them 'mums' for short!"
    },
    {
        name: "Plumeria",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/11/Plumeria_rubra_-_Frangipani_at_Mayyil.jpg",
        colors: "White, Yellow, Pink",
        fact: "Plumeria flowers are used to make Hawaiian leis - those pretty flower necklaces! They smell like tropical vacation!"
    }
];
