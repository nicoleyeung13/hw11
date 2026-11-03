/**
 * Bao & Bowl - Asian Food Delivery & Street Eats
 * Interactive p5.js Canvas & Full Web App Controller
 */

// =========================================================
// 1. RESTAURANT & MENU DATABASE
// =========================================================
const RESTAURANTS_DATA = [
  {
    id: "tokyo-ramen",
    name: "Tokyo Ramen & Izakaya",
    cuisineType: "japanese",
    cuisines: ["Japanese", "Ramen", "Noodles", "Izakaya"],
    rating: 4.9,
    reviewsCount: 1420,
    deliveryTime: "20 - 30 min",
    deliveryTimeMinutes: 25,
    deliveryFee: 1.99,
    minOrder: 15,
    isPopular: true,
    isFast: true,
    bannerEmoji: "🍜",
    bannerBg: "linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)",
    description: "Authentic 18-hour simmered Tonkotsu broth, handmade springy noodles, and sizzling yakitori skewers.",
    highlights: "★ #1 Most Ordered Ramen in City • Handmade Nori & Chashu",
    categories: [
      {
        id: "ramen-bowls",
        name: "Artisan Ramen Bowls",
        description: "Served with slow-braised chashu pork, ajitsuke nitamago egg, menma bamboo shoots, scallions and nori.",
        items: [
          {
            id: "tr-1",
            name: "Signature Tonkotsu Ramen",
            price: 15.50,
            emoji: "🍜",
            tags: ["popular"],
            description: "Rich, creamy 18-hour pork bone broth, tender torched chashu, wavy noodles, and black garlic oil drizzle."
          },
          {
            id: "tr-2",
            name: "Fire Dragon Spicy Miso Ramen",
            price: 16.00,
            emoji: "🌶️",
            tags: ["spicy", "popular"],
            description: "Fiery red miso broth, spiced ground pork, sweet butter corn, menma, and house roasted chili rayu."
          },
          {
            id: "tr-3",
            name: "Truffle Shoyu Ramen",
            price: 16.50,
            emoji: "🍄",
            tags: [],
            description: "Clear chicken and dashi broth, aged artisanal Tokyo soy sauce, black truffle glaze, and sous-vide chicken breast."
          },
          {
            id: "tr-4",
            name: "Vegan Creamy Shiitake Ramen",
            price: 14.50,
            emoji: "🥬",
            tags: ["veg"],
            description: "Silky oat milk & roasted sesame broth, grilled king oyster mushrooms, charred baby bok choy, and tofu."
          }
        ]
      },
      {
        id: "izakaya-apps",
        name: "Izakaya Street Appetizers",
        description: "Classic Japanese street snacks & crispy side bites.",
        items: [
          {
            id: "tr-5",
            name: "Crispy Pan-Fried Pork Gyoza (6 pcs)",
            price: 7.95,
            emoji: "🥟",
            tags: ["popular"],
            description: "Crispy lace-bottom dumplings packed with juicy pork, ginger, and scallions. Served with citrus ponzu."
          },
          {
            id: "tr-6",
            name: "Osaka Street Takoyaki (5 pcs)",
            price: 8.50,
            emoji: "🐙",
            tags: ["popular"],
            description: "Battered octopus balls griddled golden, topped with kewpie mayo, sweet takoyaki glaze, and dancing bonito."
          },
          {
            id: "tr-7",
            name: "Sea Salt & Garlic Edamame",
            price: 5.50,
            emoji: "🫛",
            tags: ["veg"],
            description: "Steamed tender soy beans tossed in coarse Okinawa sea salt and toasted sesame garlic oil."
          }
        ]
      },
      {
        id: "drinks-desserts",
        name: "Drinks & Sweets",
        description: "Refreshing drinks and sweet finishes.",
        items: [
          {
            id: "tr-8",
            name: "Iced Uji Ceremonial Matcha Latte",
            price: 5.50,
            emoji: "🍵",
            tags: [],
            description: "First-harvest ceremonial matcha whisked fresh over creamy organic oat milk and light raw sugar cane."
          },
          {
            id: "tr-9",
            name: "Japanese Ramune Soda (Original)",
            price: 3.75,
            emoji: "🥤",
            tags: [],
            description: "Classic marble glass bottle Japanese carbonated lemon-lime soda."
          }
        ]
      }
    ]
  },
  {
    id: "seoul-crunch",
    name: "Seoul Crunch K-Chicken & BBQ",
    cuisineType: "korean",
    cuisines: ["Korean", "Fried Chicken", "Street Bites", "Fast Food"],
    rating: 4.8,
    reviewsCount: 1104,
    deliveryTime: "25 - 35 min",
    deliveryTimeMinutes: 30,
    deliveryFee: 0.00,
    minOrder: 18,
    isPopular: true,
    isFast: false,
    bannerEmoji: "🍗",
    bannerBg: "linear-gradient(135deg, #7f1d1d, #991b1b, #b91c1c)",
    description: "Ultra-crispy double fried chicken, sticky glazed wings, fiery tteokbokki, and sizzling kimchi bowls.",
    highlights: "★ Free Delivery Promo • Double-Fried Shatteringly Crisp Batter",
    categories: [
      {
        id: "fried-chicken",
        name: "Double-Fried Korean Chicken",
        description: "Crunch that stays crispy through delivery. Served with pickled daikon radish cubes.",
        items: [
          {
            id: "sc-1",
            name: "Sweet & Spicy Yangnyeom Wings (8 pcs)",
            price: 16.99,
            emoji: "🍗",
            tags: ["popular", "spicy"],
            description: "Signature crispy wings tossed in caramelized gochujang, crushed peanuts, and honey garlic sauce."
          },
          {
            id: "sc-2",
            name: "Honey Butter Snow Boneless Bites",
            price: 15.99,
            emoji: "🍯",
            tags: ["popular"],
            description: "Crispy boneless chicken thigh nuggets dusted in sweet honey butter snow powder. Irresistible!"
          },
          {
            id: "sc-3",
            name: "Soy Garlic Crisp Drumsticks (5 pcs)",
            price: 16.50,
            emoji: "🍗",
            tags: [],
            description: "Savory garlic and aged soy glaze with toasted sesame seeds and fresh scallion threads."
          }
        ]
      },
      {
        id: "korean-comfort",
        name: "Street Comfort Bowls",
        description: "Hot, filling, and spicy Seoul night market staples.",
        items: [
          {
            id: "sc-4",
            name: "Cheesy Street Tteokbokki",
            price: 11.50,
            emoji: "🧀",
            tags: ["spicy"],
            description: "Chewy cylinder rice cakes and fish cakes simmered in fiery gochujang broth, melted mozzarella on top."
          },
          {
            id: "sc-5",
            name: "Sizzling Kimchi Bacon Fried Rice",
            price: 13.50,
            emoji: "🍳",
            tags: ["popular"],
            description: "Wok-seared aged kimchi with crispy bacon bits, topped with a runny sunny-side-up fried egg and roasted nori."
          },
          {
            id: "sc-6",
            name: "Crispy Kimchi Seafood Pancake",
            price: 12.00,
            emoji: "🥞",
            tags: [],
            description: "Golden griddled savory pancake packed with squid, shrimp, aged kimchi, and scallion strips."
          }
        ]
      },
      {
        id: "korean-drinks",
        name: "Korean Refreshments",
        description: "Cool sips to pair with spicy heat.",
        items: [
          {
            id: "sc-7",
            name: "Binggrae Banana Milk (2 pcs)",
            price: 4.50,
            emoji: "🍌",
            tags: [],
            description: "The beloved sweet and creamy iconic Korean banana-flavored dairy beverage."
          },
          {
            id: "sc-8",
            name: "Korean Pear Juice (Hae-Jang)",
            price: 3.50,
            emoji: "🍐",
            tags: [],
            description: "Sweet, crushed Korean golden pear juice drink with tender pulp."
          }
        ]
      }
    ]
  },
  {
    id: "golden-dragon",
    name: "Golden Dragon Dim Sum & Wok",
    cuisineType: "chinese",
    cuisines: ["Chinese", "Dim Sum", "Cantonese", "Fast Food"],
    rating: 4.9,
    reviewsCount: 1890,
    deliveryTime: "15 - 25 min",
    deliveryTimeMinutes: 20,
    deliveryFee: 1.49,
    minOrder: 15,
    isPopular: true,
    isFast: true,
    bannerEmoji: "🥟",
    bannerBg: "linear-gradient(135deg, #7c2d12, #9a3412, #c2410c)",
    description: "Steaming bamboo baskets, translucent crystal shrimp dumplings, and lightning-fast wok-tossed noodles.",
    highlights: "★ Fastest In Town (15-25m) • Master Dim Sum Chefs with 30+ Years",
    categories: [
      {
        id: "steamed-baskets",
        name: "Steamed Dim Sum Baskets",
        description: "Handcrafted daily from 5am. Steamed fresh to order.",
        items: [
          {
            id: "gd-1",
            name: "Crystal Shrimp Har Gow (4 pcs)",
            price: 7.95,
            emoji: "🥟",
            tags: ["popular"],
            description: "Translucent pleated dough pockets loaded with whole plump tiger shrimp and bamboo shoot crunch."
          },
          {
            id: "gd-2",
            name: "Pork & Shrimp Siu Mai (4 pcs)",
            price: 7.50,
            emoji: "🥟",
            tags: ["popular"],
            description: "Tender open-topped dumplings filled with heritage pork, shrimp, shiitake mushroom, and orange crab roe."
          },
          {
            id: "gd-3",
            name: "Shanghai Xiao Long Bao (Soup Dumplings 6 pcs)",
            price: 9.95,
            emoji: "🥟",
            tags: ["popular"],
            description: "Delicate dumplings bursting with rich, piping hot ginger-pork broth. Ginger black vinegar on the side."
          },
          {
            id: "gd-4",
            name: "BBQ Roast Pork Char Siu Bao (3 pcs)",
            price: 6.95,
            emoji: "🥟",
            tags: [],
            description: "Cloud-soft steamed fluffy white buns overflowing with sweet honey-glazed caramelized roast pork."
          }
        ]
      },
      {
        id: "wok-specials",
        name: "Wok Master Mains",
        description: "High-heat wok breath (Wok Hei) noodles and rice.",
        items: [
          {
            id: "gd-5",
            name: "Cantonese Beef Chow Fun",
            price: 15.50,
            emoji: "🥢",
            tags: ["popular"],
            description: "Smoky wide rice noodles flash-seared with tender marinated flank steak, yellow chives, and crunchy bean sprouts."
          },
          {
            id: "gd-6",
            name: "Szechuan Mapo Tofu with Minced Beef",
            price: 14.00,
            emoji: "🌶️",
            tags: ["spicy"],
            description: "Silken tofu simmered in fermented spicy bean paste, aromatic Szechuan peppercorns with that signature numbing aroma."
          },
          {
            id: "gd-7",
            name: "Crispy Golden Vegetable Spring Rolls (4 pcs)",
            price: 6.25,
            emoji: "🥢",
            tags: ["veg"],
            description: "Ultra-crispy wrapper with shredded cabbage, carrots, wood ear mushrooms, and sweet plum sauce."
          }
        ]
      },
      {
        id: "tea-drinks",
        name: "Beverages",
        description: "Classic tea stall refreshments.",
        items: [
          {
            id: "gd-8",
            name: "Hong Kong Silk Stocking Milk Tea",
            price: 4.75,
            emoji: "🧋",
            tags: ["popular"],
            description: "Rich Ceylon black tea brewed strong and pulled with evaporated milk. Bold, smooth, and authentic."
          }
        ]
      }
    ]
  },
  {
    id: "saigon-street",
    name: "Saigon Street Eats & Pho",
    cuisineType: "vietnamese",
    cuisines: ["Vietnamese", "Pho", "Banh Mi", "Street Bites"],
    rating: 4.8,
    reviewsCount: 890,
    deliveryTime: "20 - 30 min",
    deliveryTimeMinutes: 25,
    deliveryFee: 1.99,
    minOrder: 15,
    isPopular: false,
    isFast: true,
    bannerEmoji: "🥖",
    bannerBg: "linear-gradient(135deg, #064e3b, #047857, #059669)",
    description: "Star-anise spiced 24hr bone broths, crusty French baguette Banh Mi sandwiches, and fresh herb rolls.",
    highlights: "★ Crispy French-Vietnamese Baguettes Baked Every 2 Hours",
    categories: [
      {
        id: "pho-bowls",
        name: "Traditional Pho Noodle Soups",
        description: "Served with fresh culantro, Thai basil, bean sprouts, jalapeños, and lime wedges packaged separately.",
        items: [
          {
            id: "sg-1",
            name: "Pho Dac Biet (House Special Beef Pho)",
            price: 15.50,
            emoji: "🍲",
            tags: ["popular"],
            description: "Rare eye of round steak, slow-braised beef brisket, beef meatballs, and tendon in fragrant star anise broth."
          },
          {
            id: "sg-2",
            name: "Pho Ga (Free-Range Chicken Pho)",
            price: 14.00,
            emoji: "🍲",
            tags: [],
            description: "Tender shredded poached chicken in a fragrant golden ginger coriander broth with flat rice noodles."
          }
        ]
      },
      {
        id: "banh-mi",
        name: "Crispy Banh Mi Sandwiches",
        description: "Fresh baked baguette with French liver pate, house egg mayo, cucumber, pickled daikon, cilantro & chili.",
        items: [
          {
            id: "sg-3",
            name: "Crispy Roast Pork Belly Banh Mi",
            price: 9.75,
            emoji: "🥖",
            tags: ["popular"],
            description: "Crunchy crackling pork belly with five-spice seasoning, maggi seasoning, and crunchy pickled vegetables."
          },
          {
            id: "sg-4",
            name: "Lemongrass Grilled Chicken Banh Mi",
            price: 9.25,
            emoji: "🥖",
            tags: [],
            description: "Charcoal-grilled chicken marinated with crushed lemongrass, garlic, and caramelized fish sauce glaze."
          },
          {
            id: "sg-5",
            name: "Fresh Shrimp & Pork Spring Rolls (Goi Cuon 3 pcs)",
            price: 7.25,
            emoji: "🥬",
            tags: ["popular"],
            description: "Translucent rice paper rolls filled with boiled shrimp, herbs, lettuce, and vermicelli. Rich peanut dipping sauce."
          }
        ]
      },
      {
        id: "viet-coffee",
        name: "Drinks",
        description: "Traditional slow-drip specialties.",
        items: [
          {
            id: "sg-6",
            name: "Ca Phe Sua Da (Vietnamese Iced Coffee)",
            price: 5.25,
            emoji: "☕",
            tags: ["popular"],
            description: "Dark French roast coffee brewed via Phin metal drip filter with sweetened condensed milk and crushed ice."
          }
        ]
      }
    ]
  },
  {
    id: "bangkok-express",
    name: "Bangkok Express Street Wok",
    cuisineType: "thai",
    cuisines: ["Thai", "Curry", "Noodles", "Fast Food"],
    rating: 4.7,
    reviewsCount: 750,
    deliveryTime: "25 - 35 min",
    deliveryTimeMinutes: 30,
    deliveryFee: 2.49,
    minOrder: 15,
    isPopular: false,
    isFast: false,
    bannerEmoji: "🍛",
    bannerBg: "linear-gradient(135deg, #831843, #9d174d, #be185d)",
    description: "Vibrant sweet, sour, salty, and spicy balance. Fragrant lemongrass curries and street Pad Thai.",
    highlights: "★ Hand-crushed Galangal & Kaffir Lime Leaves",
    categories: [
      {
        id: "thai-noodles",
        name: "Bangkok Street Noodles",
        description: "Classic night market wok noodles with crushed peanuts and lime.",
        items: [
          {
            id: "bk-1",
            name: "Classic Shrimp Pad Thai",
            price: 15.00,
            emoji: "🍤",
            tags: ["popular"],
            description: "Stir-fried rice noodles in tangy tamarind sauce with jumbo shrimp, pressed tofu, egg, bean sprouts, and crushed peanuts."
          },
          {
            id: "bk-2",
            name: "Drunken Noodles (Pad Kee Mao)",
            price: 14.50,
            emoji: "🌶️",
            tags: ["spicy", "popular"],
            description: "Smoky wide rice noodles tossed with chicken, holy basil leaves, red bird's eye chilies, bell peppers, and onion."
          }
        ]
      },
      {
        id: "thai-curries",
        name: "Rich Coconut Curries",
        description: "Served with fragrant Thai jasmine rice.",
        items: [
          {
            id: "bk-3",
            name: "Emerald Green Curry with Chicken",
            price: 15.50,
            emoji: "🍛",
            tags: ["spicy"],
            description: "Simmered in velvety coconut milk, green Thai chilies, bamboo shoots, Thai eggplant, and fresh sweet basil."
          },
          {
            id: "bk-4",
            name: "Sweet Mango Sticky Rice",
            price: 8.50,
            emoji: "🥭",
            tags: ["veg", "popular"],
            description: "Warm glutinous rice cooked in salted coconut cream, paired with sweet sliced golden mango and toasted sesame."
          },
          {
            id: "bk-5",
            name: "Cha Yen (Thai Iced Tea with Cream)",
            price: 4.50,
            emoji: "🧋",
            tags: ["popular"],
            description: "Iconic amber spiced Thai black tea with star anise, topped with silky half-and-half cream."
          }
        ]
      }
    ]
  },
  {
    id: "boba-bao",
    name: "Boba & Bao House",
    cuisineType: "boba",
    cuisines: ["Boba", "Taiwanese", "Street Snacks", "Desserts"],
    rating: 4.9,
    reviewsCount: 2310,
    deliveryTime: "15 - 25 min",
    deliveryTimeMinutes: 20,
    deliveryFee: 0.99,
    minOrder: 10,
    isPopular: true,
    isFast: true,
    bannerEmoji: "🧋",
    bannerBg: "linear-gradient(135deg, #134e4a, #0f766e, #14b8a6)",
    description: "Warm brown sugar pearl milk tea, fluffy braised pork belly gua bao, and addictive salt & pepper popcorn chicken.",
    highlights: "★ Slow-Simmered Warm Brown Sugar Boba Cooked Every Hour",
    categories: [
      {
        id: "boba-teas",
        name: "Signature Bubble Teas",
        description: "Cooked with organic tea leaves and chewy tapioca pearls.",
        items: [
          {
            id: "bb-1",
            name: "Tiger Brown Sugar Fresh Milk Boba",
            price: 6.25,
            emoji: "🧋",
            tags: ["popular"],
            description: "Warm, chewy caramelized brown sugar pearls poured into fresh cold organic milk with caramelized flame cream."
          },
          {
            id: "bb-2",
            name: "Velvet Taro Milk Tea with Coconut Jelly",
            price: 6.50,
            emoji: "🧋",
            tags: ["veg"],
            description: "Real mashed taro root blended with jasmine green milk tea, topped with tender coconut jelly cubes."
          },
          {
            id: "bb-3",
            name: "Passionfruit Jasmine Green Tea with Pearls & Aiyu",
            price: 5.95,
            emoji: "🍹",
            tags: ["popular"],
            description: "Zesty tropical passionfruit pulp shaken with high-mountain jasmine green tea, pearls, and silky herbal jelly."
          }
        ]
      },
      {
        id: "street-snacks",
        name: "Taiwan Night Market Snacks",
        description: "Crispy street bites and pillow-soft buns.",
        items: [
          {
            id: "bb-4",
            name: "Taiwanese Popcorn Chicken",
            price: 8.75,
            emoji: "🍗",
            tags: ["popular"],
            description: "Bite-sized chicken thigh tossed in sweet potato starch, flash-fried crispy with fragrant Thai basil and chili five-spice."
          },
          {
            id: "bb-5",
            name: "Braised Pork Belly Gua Bao (2 pcs)",
            price: 9.50,
            emoji: "🥟",
            tags: ["popular"],
            description: "Pillow-soft lotus leaf steamed buns stuffed with melt-in-your-mouth braised pork belly, crushed peanuts, and pickled mustard greens."
          },
          {
            id: "bb-6",
            name: "Crispy Scallion Pancake with Egg & Cheese",
            price: 7.25,
            emoji: "🥞",
            tags: ["veg"],
            description: "Flaky layered Taiwanese street pancake griddled with scrambled egg, cheddar cheese, and sweet spicy garlic paste."
          }
        ]
      }
    ]
  }
];

// =========================================================
// 2. GLOBAL APPLICATION STATE
// =========================================================
let currentView = "restaurants"; // "restaurants" | "menu" | "checkout" | "tracking"
let currentRestaurant = null;
let currentCategoryFilter = "all";
let currentSearchQuery = "";
let cartItems = []; // [{ id, restaurantId, restaurantName, name, price, qty, emoji }]
let appliedPromo = null; // { code: 'ASIANFEAST', discountPercent: 20 }
let selectedTipPercent = 15;
let currentAddress = "742 Evergreen Terrace, Apt 4B";
let lastCompletedOrder = null;

// =========================================================
// 3. P5.JS SKETCH LOGIC & GRAPHICS
// =========================================================

// Visual simulation modes
const P5_MODE_MARKET = "NIGHT_MARKET";
const P5_MODE_DELIVERY = "DELIVERY_SIMULATION";
let canvasMode = P5_MODE_MARKET;

// Simulation objects
let lanterns = [];
let steamParticles = [];
let confettiParticles = [];
let floatingFoodEmojis = [];
let stars = [];
let deliveryScooter = null;
let canvasWidth = 800;
let canvasHeight = 220;

// Scooter Tracker State
let deliveryProgress = 0; // 0 to 1
let deliverySpeed = 0.0012;
let deliveryStatusText = "Chef Preparing Order";

function setup() {
  const container = document.getElementById("p5-canvas-container");
  canvasWidth = container.clientWidth || 800;
  canvasHeight = container.clientHeight || 220;

  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("p5-canvas-container");
  
  // Set drawing settings
  textAlign(CENTER, CENTER);
  textFont("Plus Jakarta Sans, sans-serif");

  initNightMarketScene();
  initDeliverySimulation();
}

function windowResized() {
  const container = document.getElementById("p5-canvas-container");
  if (container) {
    canvasWidth = container.clientWidth;
    canvasHeight = container.clientHeight || 220;
    resizeCanvas(canvasWidth, canvasHeight);
    initNightMarketScene();
  }
}

// Initialize Night Market Scene
function initNightMarketScene() {
  lanterns = [];
  steamParticles = [];
  stars = [];

  // Starry sky
  for (let i = 0; i < 45; i++) {
    stars.push({
      x: random(canvasWidth),
      y: random(canvasHeight * 0.65),
      size: random(1, 2.5),
      brightness: random(150, 255),
      speed: random(0.01, 0.03),
      phase: random(TWO_PI)
    });
  }

  // Hanging glowing lanterns across the top wire
  const lanternCount = Math.max(5, Math.floor(canvasWidth / 120));
  for (let i = 0; i < lanternCount; i++) {
    const spacing = canvasWidth / (lanternCount + 1);
    lanterns.push({
      x: spacing * (i + 1),
      wireY: 15,
      stringLen: random(28, 48),
      size: random(20, 26),
      angle: random(-0.15, 0.15),
      angleSpeed: random(0.02, 0.04),
      color: i % 2 === 0 ? [225, 29, 72] : [245, 158, 11], // Red & Gold
      label: i % 2 === 0 ? "福" : "春",
      glowIntensity: random(15, 30)
    });
  }
}

// Initialize Delivery Simulation Model
function initDeliverySimulation() {
  deliveryProgress = 0.05;
  deliveryScooter = {
    x: 60,
    y: canvasHeight - 55,
    targetY: canvasHeight - 55,
    wheelAngle: 0,
    exhaustTimer: 0,
    honkTimer: 0
  };
}

// Master p5 draw loop
function draw() {
  if (canvasMode === P5_MODE_MARKET) {
    drawNightMarketScene();
  } else {
    drawDeliverySimulationScene();
  }

  // Always update and draw floating click/add-to-cart reactions
  drawFloatingFoodEmojis();

  // Draw celebratory confetti if active
  drawConfettiParticles();
}

// ---------------------------------------------------------
// P5 SCENE 1: Night Market Hero Scene
// ---------------------------------------------------------
function drawNightMarketScene() {
  // Gradient night sky
  background(11, 15, 25);

  // Background skyline silhouettes
  noStroke();
  fill(18, 25, 42);
  rect(0, canvasHeight - 90, canvasWidth, 90);
  
  // Distant buildings
  fill(15, 21, 36);
  for (let i = 0; i < canvasWidth; i += 70) {
    const bHeight = 35 + ((i * 37) % 55);
    rect(i + 5, canvasHeight - 75 - bHeight, 55, bHeight);
    
    // Distant yellow windows
    fill(245, 158, 11, 40);
    for (let wy = canvasHeight - 70 - bHeight + 6; wy < canvasHeight - 80; wy += 14) {
      rect(i + 14, wy, 8, 8, 2);
      rect(i + 32, wy, 8, 8, 2);
    }
    fill(15, 21, 36);
  }

  // Draw twinkling stars
  noStroke();
  for (let s of stars) {
    const twinkle = 180 + sin(frameCount * s.speed + s.phase) * 75;
    fill(255, 255, 255, twinkle);
    circle(s.x, s.y, s.size);
  }

  // Street wire
  stroke(60, 75, 100);
  strokeWeight(1.5);
  noFill();
  beginShape();
  vertex(0, 20);
  for (let i = 0; i <= canvasWidth; i += 60) {
    const dip = sin((i / canvasWidth) * PI) * 12;
    vertex(i, 20 + dip);
  }
  endShape();

  // Draw swinging lanterns
  for (let lantern of lanterns) {
    lantern.angle = sin(frameCount * lantern.angleSpeed) * 0.12;

    push();
    translate(lantern.x, lantern.wireY + sin((lantern.x / canvasWidth) * PI) * 12);
    rotate(lantern.angle);

    // Hanging string
    stroke(80, 90, 110);
    strokeWeight(1.2);
    line(0, 0, 0, lantern.stringLen);

    // Lantern Glow
    noStroke();
    fill(lantern.color[0], lantern.color[1], lantern.color[2], 25);
    circle(0, lantern.stringLen + lantern.size * 0.5, lantern.size * 2.8);
    fill(lantern.color[0], lantern.color[1], lantern.color[2], 40);
    circle(0, lantern.stringLen + lantern.size * 0.5, lantern.size * 1.8);

    // Lantern Body
    fill(lantern.color[0], lantern.color[1], lantern.color[2]);
    ellipse(0, lantern.stringLen + lantern.size * 0.5, lantern.size, lantern.size * 1.25);

    // Lantern Golden caps
    fill(245, 158, 11);
    rect(-lantern.size * 0.28, lantern.stringLen - 2, lantern.size * 0.56, 4, 2);
    rect(-lantern.size * 0.28, lantern.stringLen + lantern.size * 1.15, lantern.size * 0.56, 4, 2);

    // Tassel
    stroke(245, 158, 11);
    strokeWeight(2);
    line(0, lantern.stringLen + lantern.size * 1.25, 0, lantern.stringLen + lantern.size * 1.6);

    // Kanji calligraphy on lantern
    noStroke();
    fill(255, 245, 200);
    textSize(lantern.size * 0.45);
    text(lantern.label, 0, lantern.stringLen + lantern.size * 0.5);

    pop();
  }

  // Street Pavement / Road
  noStroke();
  fill(25, 33, 50);
  rect(0, canvasHeight - 65, canvasWidth, 65);
  stroke(40, 52, 75);
  strokeWeight(2);
  line(0, canvasHeight - 65, canvasWidth, canvasHeight - 65);

  // Steaming noodle stall on the left
  drawFoodStall(80, canvasHeight - 65, "🍜 RAMEN & BAO", "♨️ 點心");

  // Neon Boba Tea shop on the right
  drawFoodStall(canvasWidth - 140, canvasHeight - 65, "🧋 BOBA POP", "波霸奶茶");

  // Spawn rising steam particles
  if (frameCount % 4 === 0) {
    steamParticles.push({
      x: 80 + random(-15, 15),
      y: canvasHeight - 92,
      vx: random(-0.3, 0.4),
      vy: random(-1.2, -1.8),
      size: random(6, 12),
      alpha: 140
    });
  }

  // Update & draw steam particles
  noStroke();
  for (let i = steamParticles.length - 1; i >= 0; i--) {
    let p = steamParticles[i];
    p.x += p.vx + sin(frameCount * 0.05 + p.y * 0.05) * 0.4;
    p.y += p.vy;
    p.size += 0.25;
    p.alpha -= 1.8;

    fill(255, 255, 255, Math.max(0, p.alpha));
    circle(p.x, p.y, p.size);

    if (p.alpha <= 0 || p.y < 30) {
      steamParticles.splice(i, 1);
    }
  }

  // Ambient delivery scooter riding across the market street
  const marketScooterX = (frameCount * 2.2) % (canvasWidth + 120) - 60;
  drawDeliveryScooterVisual(marketScooterX, canvasHeight - 40, 0.85, true);

  // Floating hint in night market
  fill(148, 163, 184, 160);
  textSize(11);
  noStroke();
  text("Click lanterns, food stalls, or road for sparks & treats!", canvasWidth / 2, canvasHeight - 14);
}

// Helper: Food stall graphic
function drawFoodStall(x, groundY, englishName, kanji) {
  push();
  translate(x, groundY);

  // Stall shelter roof (striped awning)
  const roofW = 110;
  fill(225, 29, 72);
  rect(-roofW / 2, -55, roofW, 14, 3);
  fill(245, 158, 11);
  for (let s = -roofW / 2 + 10; s < roofW / 2; s += 22) {
    rect(s, -55, 11, 14);
  }

  // Counter
  fill(45, 55, 75);
  rect(-roofW / 2 + 6, -41, roofW - 12, 41, 2);

  // Glowing neon sign board
  fill(15, 23, 42);
  rect(-roofW / 2 + 12, -35, roofW - 24, 20, 4);
  
  // Neon text glow
  const neonPulse = 190 + sin(frameCount * 0.08) * 65;
  fill(244, 63, 94, neonPulse);
  textSize(8.5);
  textStyle(BOLD);
  text(englishName, 0, -25);

  // Steaming pot on counter
  fill(100, 116, 139);
  rect(-20, -47, 18, 9, 2);
  fill(225, 29, 72);
  rect(-22, -49, 22, 2, 1);

  pop();
}

// ---------------------------------------------------------
// P5 SCENE 2: Live Delivery Simulation & Tracker Scene
// ---------------------------------------------------------
function drawDeliverySimulationScene() {
  // Day-to-dusk gradient sky for delivery map
  background(15, 23, 42);

  // Road background
  const roadY = canvasHeight - 65;
  const roadH = 55;

  // Distant city silhouette
  fill(30, 41, 59);
  noStroke();
  rect(0, roadY - 45, canvasWidth, 45);
  for (let i = 0; i < canvasWidth; i += 60) {
    const bh = 20 + ((i * 17) % 40);
    rect(i, roadY - 45 - bh, 45, bh);
  }

  // Restaurant Departure Point (Left)
  drawOriginRestaurantMarker(65, roadY);

  // Destination House (Right)
  drawDestinationHomeMarker(canvasWidth - 75, roadY);

  // Main Asphalt Delivery Highway
  fill(30, 36, 50);
  rect(0, roadY, canvasWidth, roadH);

  // Road markings / dashed line
  stroke(245, 158, 11);
  strokeWeight(2.5);
  const dashOffset = (frameCount * 3) % 40;
  for (let x = -dashOffset; x < canvasWidth; x += 40) {
    line(x, roadY + roadH / 2, x + 20, roadY + roadH / 2);
  }

  // Progress Bar Header on Canvas
  drawLiveRouteProgressBar();

  // Update scooter delivery progress
  if (deliveryProgress < 0.95) {
    deliveryProgress += deliverySpeed;
  } else {
    deliveryProgress = 1.0;
    // On arrival, trigger confetti burst once
    if (frameCount % 60 === 0 && confettiParticles.length < 50) {
      triggerConfettiBurst();
    }
  }

  // Compute Scooter position
  const startX = 110;
  const endX = canvasWidth - 130;
  const currentScooterX = lerp(startX, endX, deliveryProgress);

  // Draw delivery scooter
  drawDeliveryScooterVisual(currentScooterX, roadY + 28, 1.0, false);

  // Speech bubble over driver
  drawDriverStatusBubble(currentScooterX, roadY - 10);
}

// Draw Origin Restaurant Marker
function drawOriginRestaurantMarker(x, y) {
  push();
  translate(x, y);

  // Stall
  fill(225, 29, 72);
  rect(-35, -50, 70, 50, 6);
  fill(255, 255, 255);
  textSize(22);
  text("🍜", 0, -28);

  // Label tag
  fill(15, 23, 42);
  rect(-45, -70, 90, 18, 999);
  fill(255, 255, 255);
  textSize(9);
  textStyle(BOLD);
  text("RESTAURANT", 0, -61);

  pop();
}

// Draw Destination Home Marker
function drawDestinationHomeMarker(x, y) {
  push();
  translate(x, y);

  // House body
  fill(13, 148, 136);
  rect(-35, -45, 70, 45, 4);

  // Roof
  fill(15, 118, 110);
  triangle(-42, -45, 0, -68, 42, -45);

  // Door & glowing porch light
  fill(254, 240, 138);
  rect(-10, -26, 20, 26, 2);

  // Label tag
  fill(15, 23, 42);
  rect(-35, -84, 70, 18, 999);
  fill(255, 255, 255);
  textSize(9);
  textStyle(BOLD);
  text("YOUR HOME", 0, -75);

  pop();
}

// Delivery Progress Route Bar
function drawLiveRouteProgressBar() {
  const barW = Math.min(canvasWidth - 160, 550);
  const barH = 10;
  const barX = (canvasWidth - barW) / 2;
  const barY = 22;

  // Background track
  fill(30, 41, 59);
  noStroke();
  rect(barX, barY, barW, barH, 999);

  // Filled progress
  fill(225, 29, 72);
  rect(barX, barY, barW * deliveryProgress, barH, 999);

  // Percentage badge
  fill(255);
  textSize(11);
  textStyle(BOLD);
  const pct = Math.floor(deliveryProgress * 100);
  text(`⚡ DELIVERY PROGRESS: ${pct}%`, canvasWidth / 2, barY - 10);
}

// Draw Delivery Scooter graphic
function drawDeliveryScooterVisual(x, y, scaleFactor = 1.0, isAmbient = false) {
  push();
  translate(x, y);
  scale(scaleFactor);

  // Scooter body
  fill(225, 29, 72); // Dragon Red
  noStroke();

  // Wheels
  fill(15, 23, 42);
  circle(-18, 12, 14);
  circle(18, 12, 14);

  // Wheel rims
  fill(203, 213, 225);
  circle(-18, 12, 7);
  circle(18, 12, 7);

  // Frame & Footrest
  stroke(225, 29, 72);
  strokeWeight(5);
  line(-14, 6, 12, 6);
  line(4, 6, 14, -8);
  line(-8, 6, -14, -6);

  // Thermal insulated delivery cube backpack
  noStroke();
  fill(245, 158, 11); // Golden yellow box
  rect(-25, -18, 16, 18, 3);
  fill(15, 23, 42);
  textSize(7);
  textStyle(BOLD);
  text("BAO", -17, -9);

  // Courier driver (helmet & jacket)
  fill(2, 132, 199); // Blue jacket
  circle(-2, -8, 12);
  fill(244, 63, 94); // Red helmet
  circle(0, -18, 13);
  fill(15, 23, 42); // Visor
  rect(2, -20, 5, 4, 1);

  // Handlebars
  stroke(148, 163, 184);
  strokeWeight(2);
  line(14, -8, 16, -14);
  line(12, -14, 20, -14);

  // Headlight beam
  noStroke();
  fill(254, 240, 138, 70);
  triangle(18, -4, 55, -16, 55, 12);

  // Puffs of exhaust smoke
  if (frameCount % 6 === 0) {
    fill(203, 213, 225, 120);
    circle(-28, 8, random(4, 7));
  }

  pop();
}

// Driver Status Speech Bubble
function drawDriverStatusBubble(x, y) {
  let msg = "On the way! 🛵";
  if (deliveryProgress < 0.25) {
    msg = "Chef packing order! 🥟";
  } else if (deliveryProgress < 0.6) {
    msg = "Cruising downtown Ave 🛵💨";
  } else if (deliveryProgress < 0.95) {
    msg = "Turning onto your street! 📍";
  } else {
    msg = "Arrived at your door! 🥢 Enjoy!";
  }

  push();
  translate(x, y - 24);

  // Bubble background
  fill(255, 255, 255);
  stroke(225, 29, 72);
  strokeWeight(1.5);
  rect(-75, -14, 150, 26, 999);

  // Triangle pointer
  noStroke();
  fill(255, 255, 255);
  triangle(-4, 12, 4, 12, 0, 18);

  // Bubble text
  fill(15, 23, 42);
  textSize(10);
  textStyle(BOLD);
  text(msg, 0, -1);

  pop();
}

// ---------------------------------------------------------
// P5 INTERACTION: Floating reactions & Confetti
// ---------------------------------------------------------
function mousePressed() {
  const container = document.getElementById("p5-canvas-container");
  const rect = container.getBoundingClientRect();
  
  // Check if click was inside canvas
  if (
    mouseX >= 0 &&
    mouseX <= width &&
    mouseY >= 0 &&
    mouseY <= height
  ) {
    // Spawn floating food emoji & sparkle stars
    const foodEmojis = ["🥟", "🍜", "🧋", "🍗", "🍣", "🥢", "✨", "🔥"];
    const chosenEmoji = foodEmojis[Math.floor(random(foodEmojis.length))];
    
    floatingFoodEmojis.push({
      x: mouseX,
      y: mouseY,
      emoji: chosenEmoji,
      vy: random(-2.5, -4.0),
      vx: random(-1.0, 1.0),
      alpha: 255,
      size: random(22, 32)
    });

    // Play subtle audio pop
    playBeepSound(440 + random(200), 0.08);

    // If in delivery simulation, honk!
    if (canvasMode === P5_MODE_DELIVERY) {
      honkScooterHorn();
    }
  }
}

function drawFloatingFoodEmojis() {
  for (let i = floatingFoodEmojis.length - 1; i >= 0; i--) {
    let item = floatingFoodEmojis[i];
    item.x += item.vx;
    item.y += item.vy;
    item.alpha -= 4;

    push();
    textSize(item.size);
    fill(255, 255, 255, item.alpha);
    text(item.emoji, item.x, item.y);
    pop();

    if (item.alpha <= 0) {
      floatingFoodEmojis.splice(i, 1);
    }
  }
}

function triggerConfettiBurst() {
  const colors = [
    [225, 29, 72],
    [245, 158, 11],
    [16, 185, 129],
    [59, 130, 246],
    [168, 85, 247],
    [255, 255, 255]
  ];

  for (let i = 0; i < 60; i++) {
    confettiParticles.push({
      x: canvasWidth / 2 + random(-60, 60),
      y: canvasHeight - 40,
      vx: random(-6, 6),
      vy: random(-7, -13),
      gravity: 0.35,
      w: random(6, 10),
      h: random(8, 14),
      color: colors[Math.floor(random(colors.length))],
      angle: random(TWO_PI),
      spin: random(-0.2, 0.2),
      alpha: 255
    });
  }

  playBeepSound(659, 0.12);
  setTimeout(() => playBeepSound(880, 0.2), 120);
}

function drawConfettiParticles() {
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    let c = confettiParticles[i];
    c.x += c.vx;
    c.y += c.vy;
    c.vy += c.gravity;
    c.angle += c.spin;
    c.alpha -= 2.5;

    push();
    translate(c.x, c.y);
    rotate(c.angle);
    noStroke();
    fill(c.color[0], c.color[1], c.color[2], c.alpha);
    rect(-c.w / 2, -c.h / 2, c.w, c.h, 2);
    pop();

    if (c.alpha <= 0 || c.y > canvasHeight + 20) {
      confettiParticles.splice(i, 1);
    }
  }
}

// Trigger canvas special fireworks
function triggerCanvasSpecial() {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      const x = random(100, canvasWidth - 100);
      const y = random(40, 120);
      for (let k = 0; k < 20; k++) {
        floatingFoodEmojis.push({
          x: x,
          y: y,
          emoji: ["✨", "🏮", "⭐", "🎉"][Math.floor(random(4))],
          vy: random(-3, 3),
          vx: random(-3, 3),
          alpha: 255,
          size: 20
        });
      }
      playBeepSound(523 + i * 80, 0.08);
    }, i * 150);
  }
}

// Toggle Canvas Feature Mode
function toggleCanvasFeature() {
  if (canvasMode === P5_MODE_MARKET) {
    canvasMode = P5_MODE_DELIVERY;
    document.getElementById("canvasTitleText").innerText = "🛵 Live Delivery Radar Simulation";
    document.getElementById("canvasHintText").innerText = "💡 Click road to honk or drop cheers!";
    document.getElementById("canvasModeBtn").innerHTML = '<span class="btn-icon">🏮</span><span class="btn-text">Night Market</span>';
  } else {
    canvasMode = P5_MODE_MARKET;
    document.getElementById("canvasTitleText").innerText = "Tokyo & Seoul Night Market • Live Interactive Scene";
    document.getElementById("canvasHintText").innerText = "💡 Click street lanterns or food stalls to interact!";
    document.getElementById("canvasModeBtn").innerHTML = '<span class="btn-icon">🎨</span><span class="btn-text">Mini City</span>';
  }
}

// Web Audio API Sound Synthesizer (Zero External MP3 dependencies)
function playBeepSound(freq, duration) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio context may be restricted before user gesture
  }
}

// Honk Horn
function honkScooterHorn() {
  playBeepSound(480, 0.12);
  setTimeout(() => playBeepSound(480, 0.16), 140);
  showToast("🛵 BEEP BEEP! Driver signaling priority delivery!");
  
  if (deliveryScooter) {
    floatingFoodEmojis.push({
      x: canvasWidth / 2,
      y: canvasHeight - 75,
      emoji: "📢 BEEP!",
      vy: -2,
      vx: 0,
      alpha: 255,
      size: 22
    });
  }
}

// Fast forward delivery for testing
function fastForwardDelivery() {
  deliverySpeed = 0.006;
  showToast("⚡ Turbo Nitro boosted! Driver accelerating!");
  setTimeout(() => {
    deliverySpeed = 0.0012;
  }, 3000);
}

// =========================================================
// 4. WEB APPLICATION & STORE CONTROLLER
// =========================================================

// Initialize DOM on Load
document.addEventListener("DOMContentLoaded", () => {
  renderRestaurantCards(RESTAURANTS_DATA);
  updateCartUI();
});

// Switch Main App Views
function showView(viewId) {
  currentView = viewId;
  
  document.getElementById("restaurantsView").classList.remove("active");
  document.getElementById("menuView").classList.remove("active");
  document.getElementById("checkoutView").classList.remove("active");
  document.getElementById("trackingView").classList.remove("active");

  const targetView = document.getElementById(viewId + "View");
  if (targetView) {
    targetView.classList.add("active");
  }

  // Manage p5 Canvas hero display according to view
  const heroSection = document.getElementById("canvasHeroSection");
  if (viewId === "tracking") {
    // Automatically switch canvas to delivery tracker
    canvasMode = P5_MODE_DELIVERY;
    document.getElementById("canvasTitleText").innerText = "🛵 Live Delivery Radar Simulation";
    document.getElementById("canvasHintText").innerText = "💡 Click road to honk or drop cheers!";
    document.getElementById("canvasModeBtn").innerHTML = '<span class="btn-icon">🏮</span><span class="btn-text">Night Market</span>';
    heroSection.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (viewId === "checkout") {
    heroSection.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    heroSection.style.display = "block";
  }
}

// Render Restaurant Listings
function renderRestaurantCards(restaurants) {
  const container = document.getElementById("restaurantGrid");
  container.innerHTML = "";

  if (restaurants.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <span style="font-size: 3.5rem; display: block; margin-bottom: 12px;">🔍</span>
        <h3>No restaurants found</h3>
        <p style="color: #64748b;">Try searching for "ramen", "wings", "pho", or clear your category filter.</p>
      </div>
    `;
    return;
  }

  restaurants.forEach(rest => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.onclick = () => openRestaurantMenu(rest.id);

    const feeText = rest.deliveryFee === 0 
      ? '<span class="fee-free">Free Delivery</span>' 
      : `$${rest.deliveryFee.toFixed(2)} Delivery`;

    card.innerHTML = `
      <div class="restaurant-banner" style="background: ${rest.bannerBg};">
        <div class="banner-badge-stack">
          ${rest.isPopular ? '<span class="badge-pill badge-popular">🔥 Popular</span>' : ''}
          ${rest.isFast ? '<span class="badge-pill badge-fast">⚡ Fast Delivery</span>' : ''}
        </div>
        <div class="delivery-eta-badge">
          <span>🕒 ${rest.deliveryTime}</span>
        </div>
      </div>
      <div class="restaurant-body">
        <div class="restaurant-header-row">
          <h3 class="restaurant-title">${rest.name}</h3>
          <div class="rating-badge">
            <span>★</span> ${rest.rating.toFixed(1)}
          </div>
        </div>
        <div class="restaurant-cuisines">
          ${rest.cuisines.join(" • ")}
        </div>
        <div class="restaurant-highlights">
          ${rest.highlights}
        </div>
        <div class="restaurant-footer-meta">
          <span>${feeText}</span>
          <button class="view-menu-btn" type="button">View Menu →</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Category Filter Handling
function filterCategory(cat) {
  currentCategoryFilter = cat;
  
  // Update chip styles
  const chips = document.querySelectorAll(".cat-chip");
  chips.forEach(chip => {
    if (chip.dataset.cat === cat) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  applyFilters();
}

// Search handling
function handleSearch(val) {
  currentSearchQuery = val.trim().toLowerCase();
  const clearBtn = document.getElementById("searchClearBtn");
  clearBtn.style.display = currentSearchQuery ? "flex" : "none";
  applyFilters();
}

function clearSearch() {
  document.getElementById("foodSearchInput").value = "";
  currentSearchQuery = "";
  document.getElementById("searchClearBtn").style.display = "none";
  applyFilters();
}

// Filter and Sort Combine
function applyFilters() {
  let filtered = [...RESTAURANTS_DATA];

  // Category filter
  if (currentCategoryFilter !== "all") {
    filtered = filtered.filter(r => r.cuisineType === currentCategoryFilter);
  }

  // Search filter (searches restaurant names, cuisines, or dish names!)
  if (currentSearchQuery) {
    filtered = filtered.filter(r => {
      const matchesRestaurant = r.name.toLowerCase().includes(currentSearchQuery) ||
        r.cuisines.some(c => c.toLowerCase().includes(currentSearchQuery));
      
      const matchesDishes = r.categories.some(cat => 
        cat.items.some(item => 
          item.name.toLowerCase().includes(currentSearchQuery) ||
          item.description.toLowerCase().includes(currentSearchQuery)
        )
      );

      return matchesRestaurant || matchesDishes;
    });
  }

  renderRestaurantCards(filtered);
}

// Sorting logic
function sortRestaurants(criteria) {
  let sorted = [...RESTAURANTS_DATA];
  
  if (criteria === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  } else if (criteria === "deliveryTime") {
    sorted.sort((a, b) => a.deliveryTimeMinutes - b.deliveryTimeMinutes);
  } else if (criteria === "priceLow") {
    sorted.sort((a, b) => a.deliveryFee - b.deliveryFee);
  }

  renderRestaurantCards(sorted);
}

// Open Restaurant Menu View
function openRestaurantMenu(restaurantId) {
  const rest = RESTAURANTS_DATA.find(r => r.id === restaurantId);
  if (!rest) return;

  currentRestaurant = rest;
  
  // Populate Header
  const headerContainer = document.getElementById("restaurantDetailHeader");
  headerContainer.innerHTML = `
    <div class="detail-cover" style="background: ${rest.bannerBg};">
      <div class="detail-cover-overlay">
        <div>
          <span style="font-size: 3rem; display: block; margin-bottom: 6px;">${rest.bannerEmoji}</span>
          <h1 style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-heading);">${rest.name}</h1>
          <p style="opacity: 0.9; font-size: 0.95rem;">${rest.description}</p>
        </div>
      </div>
    </div>
    <div class="detail-info-block">
      <div class="detail-tags-row">
        <span class="detail-tag-item">★ <strong>${rest.rating.toFixed(1)}</strong> (${rest.reviewsCount}+ reviews)</span>
        <span>•</span>
        <span class="detail-tag-item">🕒 <strong>${rest.deliveryTime}</strong></span>
        <span>•</span>
        <span class="detail-tag-item">🛵 Delivery: <strong>${rest.deliveryFee === 0 ? 'Free' : '$' + rest.deliveryFee.toFixed(2)}</strong></span>
        <span>•</span>
        <span class="detail-tag-item">🥢 Min Order: <strong>$${rest.minOrder}</strong></span>
      </div>
    </div>
  `;

  // Populate Menu Subnav & Items
  const subnavContainer = document.getElementById("menuSubnav");
  const itemsContainer = document.getElementById("menuItemsContainer");
  subnavContainer.innerHTML = '<span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800; color: #94a3b8; padding: 4px 10px;">Menu Sections</span>';
  itemsContainer.innerHTML = "";

  rest.categories.forEach((cat, index) => {
    // Nav link
    const navLink = document.createElement("a");
    navLink.className = `menu-nav-link ${index === 0 ? 'active' : ''}`;
    navLink.href = `#cat-${cat.id}`;
    navLink.innerText = cat.name;
    subnavContainer.appendChild(navLink);

    // Category Section
    const section = document.createElement("section");
    section.className = "menu-category-section";
    section.id = `cat-${cat.id}`;

    let itemsGridHtml = "";
    cat.items.forEach(dish => {
      let badgeHtml = "";
      if (dish.tags.includes("spicy")) badgeHtml += '<span class="dish-diet-badge badge-spicy">🌶️ Spicy</span>';
      if (dish.tags.includes("veg")) badgeHtml += '<span class="dish-diet-badge badge-veg">🥬 Vegetarian</span>';
      if (dish.tags.includes("popular")) badgeHtml += '<span class="dish-diet-badge badge-popular-dish">⭐ Popular</span>';

      itemsGridHtml += `
        <div class="dish-card">
          <div class="dish-content">
            <div class="dish-title-row">
              <h4 class="dish-name">${dish.name}</h4>
              ${badgeHtml}
            </div>
            <p class="dish-desc">${dish.description}</p>
            <div class="dish-price">$${dish.price.toFixed(2)}</div>
          </div>
          <div class="dish-visual">
            <div class="dish-thumb">${dish.emoji}</div>
            <button class="add-dish-btn" onclick="addToCart('${rest.id}', '${dish.id}', event)">
              + Add to Cart
            </button>
          </div>
        </div>
      `;
    });

    section.innerHTML = `
      <h3 class="menu-cat-title">${cat.name}</h3>
      <p class="menu-cat-desc">${cat.description}</p>
      <div class="menu-items-grid">
        ${itemsGridHtml}
      </div>
    `;

    itemsContainer.appendChild(section);
  });

  showView("menu");
  window.scrollTo({ top: 220, behavior: "smooth" });
}

// =========================================================
// 5. SHOPPING CART MANAGEMENT
// =========================================================

function addToCart(restaurantId, dishId, event) {
  const rest = RESTAURANTS_DATA.find(r => r.id === restaurantId);
  if (!rest) return;

  // If user orders from a different restaurant, confirm cart reset
  if (cartItems.length > 0 && cartItems[0].restaurantId !== restaurantId) {
    const confirmSwitch = confirm(`Your cart contains items from "${cartItems[0].restaurantName}". Clear your cart to order from "${rest.name}"?`);
    if (!confirmSwitch) return;
    cartItems = [];
  }

  // Find dish
  let dish = null;
  for (let cat of rest.categories) {
    const found = cat.items.find(i => i.id === dishId);
    if (found) {
      dish = found;
      break;
    }
  }
  if (!dish) return;

  // Add or increment
  const existingIndex = cartItems.findIndex(i => i.id === dish.id);
  if (existingIndex > -1) {
    cartItems[existingIndex].qty += 1;
  } else {
    cartItems.push({
      id: dish.id,
      restaurantId: rest.id,
      restaurantName: rest.name,
      name: dish.name,
      price: dish.price,
      emoji: dish.emoji,
      qty: 1
    });
  }

  // Visual reaction: trigger flying particle into cart
  if (event) {
    triggerCartFlyEffect(event.clientX, event.clientY, dish.emoji);
  }

  // Play audio chime
  playBeepSound(600, 0.08);

  showToast(`Added ${dish.name} to cart!`);
  updateCartUI();
}

function updateItemQuantity(dishId, delta) {
  const itemIndex = cartItems.findIndex(i => i.id === dishId);
  if (itemIndex === -1) return;

  cartItems[itemIndex].qty += delta;
  if (cartItems[itemIndex].qty <= 0) {
    cartItems.splice(itemIndex, 1);
  }

  updateCartUI();
}

function updateCartUI() {
  const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  // Update Navbar badges
  document.getElementById("cartCountBadge").innerText = totalCount;
  document.getElementById("cartNavTotal").innerText = `$${subtotal.toFixed(2)}`;

  // Cart Drawer Body
  const cartBody = document.getElementById("cartBody");
  const cartRestaurantTag = document.getElementById("cartRestaurantTag");
  const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");

  if (cartItems.length === 0) {
    cartRestaurantTag.style.display = "none";
    cartBody.innerHTML = `
      <div class="empty-cart-state">
        <span class="empty-cart-emoji">🥢</span>
        <h3>Your food bag is empty</h3>
        <p>Explore artisan ramen, sizzling wings, and fresh boba to begin your feast!</p>
      </div>
    `;
    document.getElementById("cartDrawerSubtotal").innerText = "$0.00";
    document.getElementById("cartCheckoutTotal").innerText = "$0.00";
    cartCheckoutBtn.disabled = true;
    cartCheckoutBtn.style.opacity = "0.5";
  } else {
    cartRestaurantTag.style.display = "block";
    document.getElementById("cartRestaurantName").innerText = cartItems[0].restaurantName;
    cartCheckoutBtn.disabled = false;
    cartCheckoutBtn.style.opacity = "1";

    let itemsHtml = "";
    cartItems.forEach(item => {
      itemsHtml += `
        <div class="cart-item-row">
          <div class="cart-item-emoji">${item.emoji}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)} ($${item.price.toFixed(2)} ea)</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateItemQuantity('${item.id}', -1)">-</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateItemQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
      `;
    });

    cartBody.innerHTML = itemsHtml;
    document.getElementById("cartDrawerSubtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("cartCheckoutTotal").innerText = `$${subtotal.toFixed(2)}`;
  }

  // Free delivery calculation ($35 threshold)
  const freeDeliveryThreshold = 35;
  const remainingForFree = Math.max(0, freeDeliveryThreshold - subtotal);
  const percentFill = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  const freeMsg = document.getElementById("freeDeliveryMsg");
  const freeFill = document.getElementById("freeDeliveryFill");

  if (subtotal >= freeDeliveryThreshold) {
    freeMsg.innerHTML = "🎉 You've unlocked <strong>FREE Delivery!</strong>";
    freeFill.style.width = "100%";
    freeFill.style.backgroundColor = "#10b981";
  } else {
    freeMsg.innerHTML = `Add <strong>$${remainingForFree.toFixed(2)}</strong> more for <strong>FREE Delivery!</strong>`;
    freeFill.style.width = `${percentFill}%`;
    freeFill.style.backgroundColor = "var(--primary)";
  }
}

// Drawer Toggle
function toggleCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  drawer.classList.toggle("open");
  backdrop.classList.toggle("open");
}

// Proceed to checkout
function goToCheckout() {
  if (cartItems.length === 0) {
    showToast("Your cart is empty! Add some delicious food first.");
    return;
  }

  // Close drawer
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  drawer.classList.remove("open");
  backdrop.classList.remove("open");

  // Populate checkout screen
  renderCheckoutSummary();
  showView("checkout");
}

// Particle flight to cart
function triggerCartFlyEffect(startX, startY, emoji) {
  const cartBtn = document.getElementById("cartBtn");
  const cartRect = cartBtn.getBoundingClientRect();
  const targetX = cartRect.left + cartRect.width / 2;
  const targetY = cartRect.top + cartRect.height / 2;

  const flyer = document.createElement("div");
  flyer.innerText = emoji;
  flyer.style.position = "fixed";
  flyer.style.left = `${startX}px`;
  flyer.style.top = `${startY}px`;
  flyer.style.fontSize = "28px";
  flyer.style.zIndex = "9999";
  flyer.style.pointerEvents = "none";
  flyer.style.transition = "all 0.65s cubic-bezier(0.18, 0.89, 0.32, 1.28)";
  flyer.style.transform = "scale(1.2)";

  document.body.appendChild(flyer);

  setTimeout(() => {
    flyer.style.left = `${targetX}px`;
    flyer.style.top = `${targetY}px`;
    flyer.style.transform = "scale(0.3) rotate(360deg)";
    flyer.style.opacity = "0.2";
  }, 20);

  setTimeout(() => {
    flyer.remove();
    // Pulse cart button
    cartBtn.style.transform = "scale(1.15)";
    setTimeout(() => { cartBtn.style.transform = "none"; }, 150);
  }, 680);
}

// =========================================================
// 6. CHECKOUT SCREEN LOGIC & CALCULATIONS
// =========================================================

function renderCheckoutSummary() {
  const summaryList = document.getElementById("checkoutItemsList");
  summaryList.innerHTML = "";

  cartItems.forEach(item => {
    const row = document.createElement("div");
    row.className = "co-item-row";
    row.innerHTML = `
      <span class="co-item-name">${item.qty}x ${item.name}</span>
      <span class="co-item-price">$${(item.price * item.qty).toFixed(2)}</span>
    `;
    summaryList.appendChild(row);
  });

  recalculateCheckoutTotals();
}

function recalculateCheckoutTotals() {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  
  // Discount
  let discountAmount = 0;
  if (appliedPromo) {
    discountAmount = (subtotal * appliedPromo.discountPercent) / 100;
    document.getElementById("coDiscountRow").style.display = "flex";
    document.getElementById("coDiscountLabel").innerText = `${appliedPromo.discountPercent}% off (${appliedPromo.code})`;
    document.getElementById("coDiscount").innerText = `-$${discountAmount.toFixed(2)}`;
  } else {
    document.getElementById("coDiscountRow").style.display = "none";
  }

  const discountedSubtotal = Math.max(0, subtotal - discountAmount);

  // Delivery fee: Free if over $35 or if restaurant has free delivery
  let baseDeliveryFee = 2.99;
  if (cartItems.length > 0) {
    const rest = RESTAURANTS_DATA.find(r => r.id === cartItems[0].restaurantId);
    if (rest) baseDeliveryFee = rest.deliveryFee;
  }
  const deliveryFee = (subtotal >= 35) ? 0 : baseDeliveryFee;

  // Tax 8.5%
  const tax = discountedSubtotal * 0.085;

  // Courier Tip
  const tipAmount = (subtotal * selectedTipPercent) / 100;

  // Grand Total
  const grandTotal = discountedSubtotal + deliveryFee + tax + tipAmount;

  document.getElementById("coSubtotal").innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById("coTax").innerText = `$${tax.toFixed(2)}`;
  document.getElementById("coDelivery").innerText = deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`;
  document.getElementById("coTip").innerText = `$${tipAmount.toFixed(2)}`;
  document.getElementById("coGrandTotal").innerText = `$${grandTotal.toFixed(2)}`;
}

// Payment method tab handling
function handlePaymentChange(method) {
  document.getElementById("cardInputs").style.display = method === "card" ? "block" : "none";
  document.getElementById("digitalWalletNotice").style.display = method === "applepay" ? "block" : "none";
  document.getElementById("cashNotice").style.display = method === "cash" ? "block" : "none";
}

// Tip selection
function setTipPercent(pct) {
  selectedTipPercent = pct;
  const tipButtons = document.querySelectorAll(".tip-btn");
  tipButtons.forEach(btn => {
    if (parseInt(btn.dataset.tip) === pct) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  recalculateCheckoutTotals();
}

// Promo code application
function applyPromoCode() {
  const codeInput = document.getElementById("promoInput").value.trim().toUpperCase();
  const feedback = document.getElementById("promoFeedback");

  if (codeInput === "ASIANFEAST") {
    appliedPromo = { code: "ASIANFEAST", discountPercent: 20 };
    feedback.className = "promo-feedback success";
    feedback.innerText = "✓ 20% discount coupon applied successfully!";
    recalculateCheckoutTotals();
  } else if (codeInput === "FREESHIP") {
    appliedPromo = { code: "FREESHIP", discountPercent: 10 };
    feedback.className = "promo-feedback success";
    feedback.innerText = "✓ 10% discount applied!";
    recalculateCheckoutTotals();
  } else {
    feedback.className = "promo-feedback error";
    feedback.innerText = "✕ Invalid coupon code. Try ASIANFEAST!";
  }
}

function applyPromoCodeDirect(code) {
  const input = document.getElementById("promoInput");
  if (input) {
    input.value = code;
  }
  showToast(`Promo code "${code}" copied! Opening checkout...`);
  if (cartItems.length > 0) {
    goToCheckout();
    applyPromoCode();
  } else {
    showToast("Add some dishes to your cart first to use the code!");
  }
}

// Place Order
function placeOrder() {
  const name = document.getElementById("checkoutName").value.trim() || "Alex Chen";
  const street = document.getElementById("checkoutStreet").value.trim() || "742 Evergreen Terrace";
  const apt = document.getElementById("checkoutApt").value.trim();
  const fullAddress = apt ? `${street}, ${apt}` : street;
  const note = document.getElementById("checkoutNotes").value.trim() || "Leave at door";

  // Generate random order ID
  const orderId = `AB-${Math.floor(1000 + Math.random() * 9000)}`;
  const restaurantName = cartItems.length > 0 ? cartItems[0].restaurantName : "Tokyo Ramen & Izakaya";
  const grandTotal = document.getElementById("coGrandTotal").innerText;

  lastCompletedOrder = {
    orderId,
    customerName: name,
    customerAddress: fullAddress,
    deliveryNote: note,
    restaurantName,
    totalPaid: grandTotal,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  // Populate tracking view
  document.getElementById("trackOrderId").innerText = `Order #${orderId}`;
  document.getElementById("trackCustomerName").innerText = name;
  document.getElementById("trackCustomerAddress").innerText = fullAddress;
  document.getElementById("trackCustomerNote").innerText = note;
  document.getElementById("trackRestaurantName").innerText = restaurantName;
  document.getElementById("trackPaidTotal").innerText = grandTotal;
  document.getElementById("stepTime1").innerText = lastCompletedOrder.timestamp;

  // Reset p5 delivery simulation to beginning
  initDeliverySimulation();

  // Clear cart
  cartItems = [];
  updateCartUI();

  // Play fanfare
  playBeepSound(523, 0.15);
  setTimeout(() => playBeepSound(659, 0.15), 150);
  setTimeout(() => playBeepSound(784, 0.3), 300);

  // Switch to live tracking
  showToast(`🎉 Order #${orderId} confirmed! Wok is heating up!`);
  showView("tracking");
}

function resetToNewOrder() {
  appliedPromo = null;
  showView("restaurants");
  showToast("Ready for your next feast! 🥢");
}

// =========================================================
// 7. TOASTS & ADDRESS MODAL
// =========================================================

function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>🥢</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-20px)";
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function openAddressModal() {
  document.getElementById("addressModalOverlay").classList.add("open");
}

function closeAddressModal() {
  document.getElementById("addressModalOverlay").classList.remove("open");
}

function setQuickAddress(addr) {
  document.getElementById("addressInputModal").value = addr;
}

function saveAddressFromModal() {
  const newAddr = document.getElementById("addressInputModal").value.trim();
  if (newAddr) {
    currentAddress = newAddr;
    document.getElementById("navAddressDisplay").innerText = newAddr;
    document.getElementById("checkoutStreet").value = newAddr;
    showToast(`Delivery location updated to: ${newAddr}`);
  }
  closeAddressModal();
}

