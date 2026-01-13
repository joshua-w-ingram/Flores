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
    },
    {
        name: "Azalea",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Azalea_japonica.jpg",
        colors: "Pink, Red, White, Purple",
        fact: "Azaleas bloom so much they can cover an entire bush in flowers! In some places, there are huge festivals just for azaleas!"
    },
    {
        name: "Crocus",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/41/Krokus_-_Teknansen.jpg",
        colors: "Purple, Yellow, White",
        fact: "Crocuses are tiny flowers that pop up in EARLY spring - sometimes through snow! They're like little colorful surprises!"
    },
    {
        name: "Begonia",
        picture: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Begonia_x_semperflorens-cultorum.jpg",
        colors: "Red, Pink, White, Orange",
        fact: "Begonias have leaves that look like angel wings! Some have polka dots on them. They're great for shady spots!"
    },
    {
        name: "Geranium",
        picture: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Geranium_psilostemon.jpg",
        colors: "Red, Pink, White, Purple",
        fact: "Geraniums are super popular in window boxes! Their leaves smell lemony when you rub them. Butterflies love them!"
    },
    {
        name: "Petunia",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/43/Petunia_nyctaginiflora.jpg",
        colors: "Purple, Pink, Red, White, Yellow",
        fact: "Petunias come in SO many colors - even striped ones! They're related to tomatoes and potatoes. How weird is that?!"
    },
    {
        name: "Foxglove",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Digitalis_purpurea2.jpg",
        colors: "Purple, Pink, White, Yellow",
        fact: "Foxgloves have flowers shaped like little bells that fairies might wear as hats! They grow super tall - taller than you!"
    },
    {
        name: "Delphinium",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Delphinium_elatum.jpg",
        colors: "Blue, Purple, Pink, White",
        fact: "Delphiniums grow in tall spikes that look like towers of flowers! The name comes from 'dolphin' because the buds look like dolphins!"
    },
    {
        name: "Aster",
        picture: "https://upload.wikimedia.org/wikipedia/commons/2/21/Aster_%27October_Skies%27_Flower_2700px.jpg",
        colors: "Purple, Pink, Blue, White",
        fact: "Asters look like little stars! The name means 'star' in Greek. They bloom in fall when most other flowers are done!"
    },
    {
        name: "Coneflower",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/18/Echinacea_purpurea_002.JPG",
        colors: "Purple, Pink, White, Yellow",
        fact: "Coneflowers have a spiky center that looks like a hedgehog! Bees and butterflies LOVE them. They help you not get sick!"
    },
    {
        name: "Black-Eyed Susan",
        picture: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Rudbeckia_hirta_Indian_Summer_flowers.jpg",
        colors: "Yellow, Orange",
        fact: "Black-Eyed Susans have a dark brown center that looks like an eye! They're super tough and grow in hot summer sun!"
    },
    {
        name: "Hollyhock",
        picture: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Alcea_rosea_-_p%C3%A4iv%C3%A4%29.jpg",
        colors: "Pink, Red, Yellow, White, Purple",
        fact: "Hollyhocks can grow as tall as a house! People used to make dolls out of them with the flowers as the dresses!"
    },
    {
        name: "Sweet Pea",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/46/Lathyrus_odoratus.jpg",
        colors: "Pink, Purple, White, Red",
        fact: "Sweet peas smell like honey and candy mixed together! They climb up fences and trellises with curly little tendrils!"
    },
    {
        name: "Cosmos",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/12/Cosmos_bipinnatus_%28Burdeos%29_D.jpg",
        colors: "Pink, White, Red, Orange",
        fact: "Cosmos flowers look delicate like they're dancing in the wind! The name means 'beautiful' in Greek!"
    },
    {
        name: "Anemone",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Anemone_coronaria_De_Caen.jpg",
        colors: "Red, Pink, Purple, White, Blue",
        fact: "Anemones are called 'windflowers' because their petals sway in the breeze! Greek myths say they grew from a goddess's tears!"
    },
    {
        name: "Ranunculus",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ranunculus_asiaticus_0574.jpg",
        colors: "Red, Pink, Orange, Yellow, White",
        fact: "Ranunculus have SO many petals - they look like tissue paper flowers! They're super popular for weddings!"
    },
    {
        name: "Protea",
        picture: "https://upload.wikimedia.org/wikipedia/commons/7/78/Protea_cynaroides_1.jpg",
        colors: "Pink, Red, White, Orange",
        fact: "Proteas are HUGE flowers from South Africa! They look like they're from another planet. They're super ancient - older than dinosaurs!"
    },
    {
        name: "Freesia",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Freesia_alba.jpg",
        colors: "White, Yellow, Pink, Purple, Red",
        fact: "Freesias smell like honey and strawberries! They grow from bulbs and the flowers bend in a pretty curve!"
    },
    {
        name: "Calla Lily",
        picture: "https://upload.wikimedia.org/wikipedia/commons/0/07/Zantedeschia_aethiopica_-_Kew_1.jpg",
        colors: "White, Pink, Yellow, Purple, Orange",
        fact: "Calla lilies aren't actually lilies! They're shaped like fancy trumpets. Brides love them in bouquets!"
    },
    {
        name: "Amaryllis",
        picture: "https://upload.wikimedia.org/wikipedia/commons/7/76/Red_and_white_amaryllis.jpg",
        colors: "Red, White, Pink, Orange",
        fact: "Amaryllis flowers are HUGE - as big as your face! People grow them inside during winter to have beautiful flowers when it's cold outside!"
    },
    {
        name: "Snowdrop",
        picture: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Galanthus_nivalis.jpg",
        colors: "White",
        fact: "Snowdrops are tiny white flowers that bloom when there's still SNOW on the ground! They're like little bells saying spring is coming!"
    },
    {
        name: "Lilac",
        picture: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Lilac_flower.jpg",
        colors: "Purple, Pink, White",
        fact: "Lilacs smell SO good - one of the best smells ever! The color 'lilac' is named after this flower! They only bloom for a few weeks!"
    },
    {
        name: "Honeysuckle",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lonicera_periclymenum.jpg",
        colors: "White, Yellow, Pink, Orange",
        fact: "You can actually suck the sweet nectar out of honeysuckle flowers! That's how they got their name! Hummingbirds love them!"
    },
    {
        name: "Clover",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Red_clover_closeup.jpg",
        colors: "Pink, Purple, White",
        fact: "Clovers usually have 3 leaves, but if you find one with 4 leaves, it's SUPER lucky! Bees make yummy honey from clover!"
    },
    {
        name: "Bleeding Heart",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/53/Lamprocapnos_spectabilis_flowers.jpg",
        colors: "Pink, White, Red",
        fact: "Bleeding hearts are shaped like little pink hearts with a drop coming out! They look like Valentine's Day flowers!"
    },
    {
        name: "Passionflower",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Passiflora_incarnata_flower.jpg",
        colors: "Purple, Blue, White",
        fact: "Passionflowers are SO weird and cool looking - like alien flowers! They have curly tentacles and make yummy passionfruit!"
    },
    {
        name: "Bougainvillea",
        picture: "https://upload.wikimedia.org/wikipedia/commons/4/42/Bougainvillea_spectabilis.JPG",
        colors: "Pink, Purple, Red, Orange, White",
        fact: "Bougainvillea is so bright and colorful - but the colorful parts are actually leaves, not petals! The real flowers are tiny and white!"
    },
    {
        name: "Lantana",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Lantana_camara_003.JPG",
        colors: "Yellow, Orange, Pink, Red, Purple",
        fact: "Lantana flowers are like tiny bouquets of different colors all in one! Butterflies go CRAZY for them!"
    },
    {
        name: "Impatiens",
        picture: "https://upload.wikimedia.org/wikipedia/commons/3/39/Impatiens_walleriana.jpg",
        colors: "Pink, Red, White, Orange, Purple",
        fact: "When you touch impatiens seed pods, they EXPLODE and shoot seeds everywhere! That's why they're called 'touch-me-nots'!"
    },
    {
        name: "Columbine",
        picture: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Aquilegia_caerulea.jpg",
        colors: "Blue, Purple, Red, Yellow, White",
        fact: "Columbines have spurs that stick out the back like little hats or jester bells! Hummingbirds drink nectar from the spurs!"
    }
];
