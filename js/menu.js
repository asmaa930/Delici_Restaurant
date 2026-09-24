
var BreakFast = [
  {
    id: 1,
    name: "Everyday Pancakes",
    images: ["BF-1.webp"],
    price: 35.92,
    type: "BreakFast",
    miniDescription:
      "Fluffy buttermilk pancakes stacked high, drizzled with maple syrup",
    description: `Fluffy buttermilk pancakes stacked high and griddled to a perfect golden brown, with crisp lacy edges and a soft, airy center that pulls apart in warm, pillowy layers.Made from a simple batter that's rested to develop the lightest crumb, each pancake is cooked low and slow so the outside caramelizes just enough without drying out the inside. Served with a generous pat of melting butter, a slow pour of warm maple syrup and a handful of fresh seasonal berries on top. A simple, nostalgic breakfast classic that never goes out of style, best enjoyed hot off the griddle alongside a steaming cup of coffee.`,
  },
  {
    id: 2,
    name: "Waffles",
    images: ["BF-2.webp"],
    price: 38.36,
    type: "BreakFast",
    miniDescription:
      "Golden Belgian waffles with a crisp outside and airy center",
    description: `Golden Belgian waffles baked in deep, honeycomb-like pockets until the outside turns shatteringly crisp while the inside stays light, airy and tender. The batter is enriched with a touch of vanilla and a hint of malt for extra flavor and a beautifully even golden color across every square. Topped with a generous cloud of freshly whipped cream and a colorful mix of seasonal berries and sliced banana, then finished with a slow, warm pour of maple syrup and a light dusting of powdered sugar for a breakfast that genuinely feels like dessert.`,
  },
  {
    id: 3,
    name: "French Toast",
    images: ["BF-3.webp"],
    price: 47.88,
    type: "BreakFast",
    miniDescription:
      "Thick brioche soaked in cinnamon batter, pan-fried until golden",
    description: `Thick-cut slices of buttery brioche soaked overnight in a sweet cinnamon and vanilla egg batter, allowing every slice to fully absorb the custardy mixture before it hits the pan. Pan-fried in butter until golden and beautifully caramelized on both sides, the result is a crisp exterior giving way to a soft, custard-like center. Finished with a generous dusting of powdered sugar, a pat of soft butter and a warm pour of syrup, with a handful of fresh berries served alongside for a bright, classic touch that balances the richness.`,
  },
  {
    id: 4,
    name: "Shakshuka With Feta",
    images: ["BF-4.webp"],
    price: 31.95,
    type: "BreakFast",
    miniDescription:
      "Farm eggs poached in a rich, spiced tomato sauce with feta",
    description: `Farm-fresh eggs gently cracked and poached directly in a rich, slow-simmered tomato and bell pepper sauce, built with sauteed onions, garlic and a warming blend of cumin, paprika and a touch of chili. The sauce is left to reduce until deeply flavorful and slightly sweet, then the eggs are nestled in and gently cooked until the whites set and the yolks stay soft and runny. Topped with generous crumbles of tangy feta cheese, fresh chopped parsley and a finishing drizzle of good olive oil, and served bubbling hot straight from the pan with warm, crusty bread for scooping up every bite of sauce.`,
  },
  {
    id: 5,
    name: "Avocado Toast",
    images: ["BF-5.webp"],
    price: 43.78,
    type: "BreakFast",
    miniDescription:
      "Smashed avocado on toasted sourdough with a soft poached egg",
    description: `Creamy, perfectly ripe avocado smashed and spread thick over a hearty slice of toasted sourdough, brightened with a generous squeeze of fresh lemon juice, a pinch of chili flakes and a scatter of flaky sea salt. Topped with a soft, jammy poached egg with a golden runny center that spills over the avocado when cut into. Finished with a light drizzle of extra virgin olive oil, a few cracks of black pepper and a scattering of microgreens for texture, making for a simple, wholesome breakfast that's as satisfying as it is fresh.`,
  },
  {
    id: 6,
    name: "Scallion Egg Wrap",
    images: ["BF-6.webp"],
    price: 31.2,
    type: "BreakFast",
    miniDescription:
      "Warm tortilla filled with fluffy scrambled eggs and scallions",
    description: `A warm, soft flour tortilla wrapped snugly around fluffy, gently scrambled eggs, plenty of crisp chopped scallions and a generous melty layer of sharp cheddar cheese. The eggs are cooked low and slow to stay soft and custardy rather than dry, then folded together with the scallions right before wrapping. Rolled up tight and lightly toasted on the griddle until the outside turns golden and slightly crisp, making it a quick, satisfying and easily portable savory bite that's perfect for busy mornings on the go.`,
  },
];

var Lunch = [
  {
    id: 7,
    name: "Bean Quesadillas",
    images: ["L-1.png"],
    price: 30.43,
    type: "Lunch",
    miniDescription:
      "Crispy folded tortillas stuffed with black beans and cheese",
    description: `Crispy folded flour tortillas stuffed generously with well-seasoned black beans mashed with garlic, cumin and a squeeze of lime, layered with melted Monterey Jack cheese for a gooey, satisfying bite. Grilled in a hot pan until the outside turns deeply golden and crunchy while the filling stays warm, melty and flavorful inside. Sliced into hearty wedges and served with a side of fresh tomato salsa, a cool dollop of sour cream and a few slices of avocado for a quick, satisfying lunch that's full of flavor.`,
  },
  {
    id: 8,
    name: "Creamy Mushroom",
    images: ["L-2.png"],
    price: 29.51,
    type: "Lunch",
    miniDescription:
      "A velvety blend of sauteed mushrooms simmered with garlic",
    description: `A velvety, deeply comforting soup made from a hearty medley of cremini and button mushrooms, sauteed in butter until deeply golden and caramelized to bring out their earthy flavor. Simmered slowly with garlic, shallots, fresh thyme and rich vegetable stock until the flavors meld together beautifully, then blended until silky smooth. Finished with a generous swirl of cream, freshly cracked black pepper and a scattering of chopped chives on top, this warming bowl is perfect for a chilly day or a cozy lunch break.`,
  },
  {
    id: 9,
    name: "Noodle Salad",
    images: ["L-3.png"],
    price: 31.66,
    type: "Lunch",
    miniDescription:
      "Chilled rice noodles tossed with crunchy vegetables and herbs",
    description: `Chilled rice noodles tossed together with julienned carrots, crisp cucumber ribbons, crunchy bean sprouts and a generous handful of fresh mint and cilantro leaves for maximum freshness. Dressed in a tangy sesame-lime vinaigrette with a touch of chili and a hint of garlic for warmth and depth, then finished with a generous scattering of crushed roasted peanuts for crunch. A light, vibrant and refreshing lunch that's especially satisfying on a warm day, with plenty of texture in every bite.`,
  },
  {
    id: 10,
    name: "Feta Grilled Cheese",
    images: ["L-4.png"],
    price: 42.17,
    type: "Lunch",
    miniDescription:
      "Toasted sourdough packed with melted feta and mozzarella",
    description: `Thick slices of hearty toasted sourdough packed generously with melted tangy feta and stretchy mozzarella, sweetened with a light drizzle of honey and a scattering of fresh thyme leaves for a subtle herbal note. Grilled slowly in butter over medium heat until the bread turns a deep golden brown and shatteringly crisp, while the cheese inside stays warm, gooey and irresistibly pulls apart with every bite. A simple combination that balances salty, sweet and savory perfectly.`,
  },
  {
    id: 11,
    name: "Chicken Pasta",
    images: ["L-5.png"],
    price: 25.22,
    type: "Lunch",
    miniDescription:
      "Tender grilled chicken tossed with pasta in a garlic sauce",
    description: `Tender grilled chicken breast, seasoned well and sliced thin, tossed over al dente pasta in a rich and creamy garlic parmesan sauce that clings beautifully to every strand. The sauce is built with butter, garlic, cream and freshly grated parmesan, simmered until silky and thick enough to coat the pasta perfectly. Finished with a generous scattering of fresh chopped basil, a sprinkle of cracked black pepper and extra shaved parmesan on top for a comforting, satisfying lunch that feels like a warm hug.`,
  },
  {
    id: 12,
    name: "Sausage Pasta",
    images: ["L-6.png"],
    price: 43.46,
    type: "Lunch",
    miniDescription:
      "Savory Italian sausage simmered in a rich tomato sauce",
    description: `Savory Italian sausage, crumbled and browned until deeply caramelized, simmered slowly in a rich, slow-cooked tomato sauce built with garlic, onions, a pinch of red pepper flakes and a bundle of fresh herbs. The sauce is left to reduce until thick and full-bodied, then tossed with pasta until every piece is generously coated. Topped with a heavy hand of shaved parmesan cheese and torn fresh basil leaves for a hearty, rustic Italian-style lunch that's rich and deeply satisfying.`,
  },
];

var Dinner = [
  {
    id: 13,
    name: "Creamy Beans",
    images: ["Di-1.webp"],
    price: 42.85,
    type: "Dinner",
    miniDescription:
      "Slow-simmered white beans in a creamy garlic sauce",
    description: `Slow-simmered white beans bathed in a creamy garlic and herb sauce, gently cooked for hours with rosemary, bay leaf, a splash of white wine and a generous knob of butter until the beans turn wonderfully tender and creamy on their own. The sauce reduces slowly, allowing the herbs and garlic to infuse deeply into every bean. Finished with a touch of grated parmesan, a drizzle of good olive oil and freshly cracked pepper, this dish works beautifully as a comforting dinner side or a satisfying light main on its own with crusty bread.`,
  },
  {
    id: 14,
    name: "Classic Shrimp",
    images: ["Di-2.webp"],
    price: 49.42,
    type: "Dinner",
    miniDescription:
      "Plump shrimp sauteed in garlic butter with parsley",
    description: `Plump, juicy shrimp sauteed quickly over high heat in generous garlic butter and a splash of dry white wine, cooked just until pink and tender without a hint of chewiness. The pan sauce reduces and thickens slightly as the shrimp cook, picking up all the garlicky, buttery flavor along the way. Finished with a generous scattering of fresh chopped parsley, a bright squeeze of lemon and a pinch of red pepper flakes for warmth, and served with crusty bread to soak up every last drop of the buttery pan sauce.`,
  },
  {
    id: 15,
    name: "Kung Pao Chicken",
    images: ["Di-3.webp"],
    price: 28.16,
    type: "Dinner",
    miniDescription:
      "Diced chicken stir-fried with peanuts and dried chilies",
    description: `Diced chicken stir-fried quickly over high heat with roasted peanuts, dried chilies and fresh scallions, all coated in a bold, savory-sweet Kung Pao sauce built from soy sauce, black vinegar, sugar and a subtle tingling hint of Sichuan peppercorn. Wok-tossed rapidly to keep the chicken tender and juicy while the peanuts stay crunchy and the chilies release their smoky heat throughout the dish. Served hot over a bed of fluffy steamed jasmine rice for a satisfying, flavor-packed dinner.`,
  },
  {
    id: 16,
    name: "Elena Sandwich",
    images: ["Di-4.webp"],
    price: 29.0,
    type: "Dinner",
    miniDescription:
      "Layers of roasted turkey, melted cheese and tomato",
    description: `Layers of thinly sliced roasted turkey, melted Swiss cheese, crisp lettuce and juicy ripe tomato, stacked generously high on thick slices of toasted artisan bread for a truly hearty build. Each layer is added with care to keep every bite balanced between savory turkey, melty cheese and fresh crunch. Finished with a smooth spread of house-made garlic aioli and a pinch of cracked black pepper on both sides of the bread, making for a satisfying, well-rounded sandwich that's perfect for a relaxed dinner.`,
  },
  {
    id: 17,
    name: "Turmeric Chicken",
    images: ["Di-5.webp"],
    price: 45.23,
    type: "Dinner",
    miniDescription:
      "Chicken marinated in turmeric and warm spices, then roasted",
    description: `Chicken marinated overnight in turmeric, garlic, fresh ginger and a warm blend of spices including cumin and coriander, allowing the flavors to fully penetrate the meat before cooking. Roasted low and slow until deeply golden on the outside and tender and juicy throughout, with the turmeric giving it a vibrant, earthy color and flavor. Served with a bright, cooling yogurt herb sauce, a wedge of fresh lemon and a scattering of chopped cilantro for a fragrant, well-rounded dinner plate that's both comforting and vibrant.`,
  },
  {
    id: 18,
    name: "Original Nachos",
    images: ["Di-6.webp"],
    price: 26.45,
    type: "Dinner",
    miniDescription:
      "Crispy tortilla chips loaded with melted cheese and beans",
    description: `Crispy tortilla chips loaded high, layer upon layer, with a generous blend of melted cheddar and Monterey Jack cheese, pickled jalapenos, seasoned black beans and fresh pico de gallo made with ripe tomatoes and onion. Baked until the cheese is perfectly bubbly, golden and melted evenly across every chip, ensuring no bite is left plain. Served with a generous side of cool sour cream and creamy guacamole for dipping, this shareable plate is a satisfying way to start or round out a dinner.`,
  },
];

var Drinks = [
  {
    id: 19,
    name: "Blueberry Lemonade",
    images: ["Dr-1.webp"],
    price: 36.49,
    type: "Drinks",
    miniDescription:
      "Freshly squeezed lemonade blended with muddled blueberries",
    description: `Freshly squeezed lemonade made with real lemon juice, blended with sweet muddled blueberries and a handful of fresh mint leaves, shaken well until frothy and served over plenty of crushed ice. The blueberries are muddled just enough to release their juice without turning the drink cloudy, adding a deep, fruity sweetness that balances the lemon's natural tang perfectly. A refreshing, vibrant sipper with a beautiful purple hue, perfect for a warm afternoon on the patio or with a light lunch.`,
  },
  {
    id: 20,
    name: "Frozen Lemonade",
    images: ["Dr-2.webp"],
    price: 41.5,
    type: "Drinks",
    miniDescription:
      "Classic lemonade blended with ice into a slushy treat",
    description: `Classic fresh-squeezed lemonade blended thoroughly with plenty of crushed ice until it transforms into a thick, slushy and wonderfully refreshing frozen treat with just the right texture, not too watery and not too icy. Garnished with a bright lemon wheel perched on the rim and a sprig of fresh mint for a fragrant finish, this icy, tangy drink is the perfect cool-down on a hot day, striking just the right balance between sweet and sour in every spoonful.`,
  },
  {
    id: 21,
    name: "Raspberry Lemonade",
    images: ["Dr-3.webp"],
    price: 48.14,
    type: "Drinks",
    miniDescription:
      "Bright lemonade swirled with fresh raspberry puree",
    description: `Bright, fresh-squeezed lemonade swirled beautifully with sweet homemade raspberry puree, creating gorgeous ribbons of color as it's poured over plenty of ice and served well chilled. The raspberry puree is made fresh, straining out the seeds for a perfectly smooth finish that blends seamlessly with the tart lemonade. The result is a perfectly balanced drink that's tart, fruity and naturally vibrant in color, with bold berry flavor in every sip, making it a refreshing, crowd-pleasing choice for any time of day.`,
  },
  {
    id: 22,
    name: "Raspberry Lemonade",
    images: ["Dr-4.webp"],
    price: 46.99,
    type: "Drinks",
    miniDescription:
      "A vibrant twist on lemonade, blended with raspberries",
    description: `A vibrant twist on classic lemonade, blended smooth with sweet fresh raspberries and torn mint leaves for an extra layer of brightness, fragrance and a subtle herbal edge that lifts the whole drink. The raspberries add natural sweetness and a gorgeous pink hue, while the mint keeps every sip feeling cool and refreshing. Served ice cold in a tall glass with a fresh raspberry garnish resting on the rim, this fruity, fragrant sipper is as refreshing to drink as it is beautiful to look at.`,
  },
  {
    id: 23,
    name: "Honeydew Melon",
    images: ["Dr-5.webp"],
    price: 43.41,
    type: "Drinks",
    miniDescription:
      "Ripe honeydew melon blended into a naturally sweet cooler",
    description: `Ripe, fragrant honeydew melon blended into a light, naturally sweet and wonderfully refreshing cooler, made with minimal added sugar to let the melon's delicate flavor shine through. Served well chilled over plenty of ice, it's finished with a bright splash of fresh lime juice and a few torn mint leaves for a clean, hydrating sip that's subtly sweet and never cloying. A perfect way to cool off on a hot day, with a pale green color that's as inviting as its flavor.`,
  },
  {
    id: 24,
    name: "Changing Lemonade",
    images: ["Dr-6.webp"],
    price: 42.42,
    type: "Drinks",
    miniDescription:
      "A playful lemonade that shifts color as it's stirred",
    description: `A playful, eye-catching lemonade that magically shifts from a deep, dreamy blue to a soft purple hue right before your eyes as it's stirred, made with butterfly pea flower tea, fresh lemon juice and a touch of honey for gentle sweetness. The color change happens because the acidity of the lemon reacts with the natural pea flower pigment, creating a little bit of edible magic in every glass. As fun to watch as it is refreshing to drink, this colorful, Instagram-worthy sip is a memorable way to cool down and impress at the same time.`,
  },
];

var allMenu = [...BreakFast, ...Lunch, ...Dinner, ...Drinks];

var colors = [
  {
    id: 1,
    color: "red",
    type: "colors",
    character: "",
  },
];
