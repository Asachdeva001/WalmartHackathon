import { Product, User, StoreCode } from './types'
export const sampleProducts: Product[] = [
  /* ---------- FRUITS ---------- */
  {
    id: '1',
    name: 'Organic Bananas',
    description: 'Fresh organic bananas from local farms. Perfect for smoothies, baking, or a healthy snack.',
    price: 2.99,
    originalPrice: 3.49,
    image: 'https://source.unsplash.com/600x600/?bananas',
    category: 'Fruits',
    tags: ['organic', 'fresh', 'healthy'],
    variants: [
      { id: '1-1', name: 'Small Bunch (6-8)', price: 2.99, inStock: true },
      { id: '1-2', name: 'Large Bunch (10-12)', price: 4.49, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: '2',
    name: 'Honeycrisp Apples',
    description: 'Crisp, juicy Honeycrisp apples with a perfect sweet-tart balance.',
    price: 3.79,
    image: 'https://source.unsplash.com/600x600/?apples',
    category: 'Fruits',
    tags: ['fresh', 'juicy', 'snack'],
    variants: [
      { id: '2-1', name: '3-lb Bag', price: 3.79, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 212
  },
  {
    id: '3',
    name: 'Navel Oranges',
    description: 'Seedless Navel oranges packed with vitamin C for daily wellness.',
    price: 4.29,
    image: 'https://source.unsplash.com/600x600/?oranges',
    category: 'Fruits',
    tags: ['vitamin c', 'citrus', 'fresh'],
    variants: [
      { id: '3-1', name: '4-lb Bag', price: 4.29, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 143
  },
  {
    id: '4',
    name: 'Blueberries Pint',
    description: 'Sweet antioxidant-rich blueberries perfect for cereal and baking.',
    price: 3.49,
    image: 'https://source.unsplash.com/600x600/?blueberries',
    category: 'Fruits',
    tags: ['berries', 'antioxidants', 'fresh'],
    variants: [
      { id: '4-1', name: '1-pint', price: 3.49, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 178
  },
  {
    id: '5',
    name: 'Avocados',
    description: 'Ripe Hass avocados. Perfect for guacamole, salads, or toast.',
    price: 3.99,
    image: 'https://source.unsplash.com/600x600/?avocado',
    category: 'Fruits',
    tags: ['fresh', 'healthy', 'organic'],
    variants: [
      { id: '5-1', name: '3-Pack', price: 3.99, inStock: true },
      { id: '5-2', name: '4-Pack', price: 5.49, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 94
  },

  /* ---------- VEGETABLES ---------- */
  {
    id: '6',
    name: 'Baby Spinach',
    description: 'Triple-washed baby spinach leaves packed with iron and vitamins.',
    price: 2.79,
    image: 'https://source.unsplash.com/600x600/?spinach',
    category: 'Vegetables',
    tags: ['leafy', 'iron', 'fresh'],
    variants: [
      { id: '6-1', name: '5-oz Clamshell', price: 2.79, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 121
  },
  {
    id: '7',
    name: 'Organic Carrots',
    description: 'Crunchy organic carrots perfect for snacking or roasting.',
    price: 1.99,
    image: 'https://source.unsplash.com/600x600/?carrots',
    category: 'Vegetables',
    tags: ['organic', 'beta-carotene', 'fresh'],
    variants: [
      { id: '7-1', name: '1-lb Bag', price: 1.99, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 88
  },
  {
    id: '8',
    name: 'Broccoli Crowns',
    description: 'Fresh broccoli crowns packed with fiber and vitamin K.',
    price: 2.49,
    image: 'https://source.unsplash.com/600x600/?broccoli',
    category: 'Vegetables',
    tags: ['fresh', 'fiber', 'healthy'],
    variants: [
      { id: '8-1', name: 'Per lb', price: 2.49, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 67
  },
  {
    id: '9',
    name: 'Vine Tomatoes',
    description: 'Juicy tomatoes on the vine for salads and sauces.',
    price: 2.99,
    image: 'https://source.unsplash.com/600x600/?tomatoes',
    category: 'Vegetables',
    tags: ['juicy', 'fresh', 'salad'],
    variants: [
      { id: '9-1', name: 'Per lb', price: 2.99, inStock: true }
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 54
  },
  {
    id: '10',
    name: 'Mixed Bell Peppers',
    description: 'Colorful bell peppers great for grilling and stir-fries.',
    price: 4.49,
    image: 'https://source.unsplash.com/600x600/?bell-peppers',
    category: 'Vegetables',
    tags: ['colorful', 'vitamin c', 'fresh'],
    variants: [
      { id: '10-1', name: '3-Pack', price: 4.49, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 112
  },

  /* ---------- DAIRY ---------- */
  {
    id: '11',
    name: 'Greek Yogurt',
    description: 'Creamy Greek yogurt with live cultures. High in protein and perfect for breakfast or snacks.',
    price: 5.49,
    image: 'https://source.unsplash.com/600x600/?yogurt',
    category: 'Dairy',
    tags: ['protein', 'probiotic', 'healthy'],
    variants: [
      { id: '11-1', name: 'Plain 32 oz', price: 5.49, inStock: true },
      { id: '11-2', name: 'Vanilla 32 oz', price: 5.99, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '12',
    name: 'Sharp Cheddar Cheese',
    description: 'Aged sharp cheddar cheese with rich flavor—perfect for sandwiches or snacking.',
    price: 4.79,
    image: 'https://source.unsplash.com/600x600/?cheddar',
    category: 'Dairy',
    tags: ['cheese', 'aged', 'rich flavor'],
    variants: [
      { id: '12-1', name: '8-oz Block', price: 4.79, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 97
  },
  {
    id: '13',
    name: '2% Reduced-Fat Milk',
    description: 'Fresh pasteurized 2% milk sourced from family farms.',
    price: 3.19,
    image: 'https://source.unsplash.com/600x600/?milk',
    category: 'Dairy',
    tags: ['calcium', 'protein', 'fresh'],
    variants: [
      { id: '13-1', name: '1-Gallon', price: 3.19, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 83
  },
  {
    id: '14',
    name: 'Creamy Unsalted Butter',
    description: 'Churned from fresh cream—ideal for baking and cooking.',
    price: 3.99,
    image: 'https://source.unsplash.com/600x600/?butter',
    category: 'Dairy',
    tags: ['baking', 'creamy', 'unsalted'],
    variants: [
      { id: '14-1', name: '4 Sticks', price: 3.99, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 142
  },
  {
    id: '15',
    name: 'Free-Range Eggs',
    description: 'Grade A large free-range eggs with rich yellow yolks.',
    price: 2.89,
    image: 'https://source.unsplash.com/600x600/?eggs',
    category: 'Dairy',
    tags: ['protein', 'breakfast', 'free-range'],
    variants: [
      { id: '15-1', name: 'Dozen', price: 2.89, inStock: true }
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 230
  },

  /* ---------- BAKERY ---------- */
  {
    id: '16',
    name: 'Whole Grain Bread',
    description: 'Freshly baked whole grain bread with seeds and nuts. High in fiber and protein.',
    price: 4.99,
    image: 'https://source.unsplash.com/600x600/?bread',
    category: 'Bakery',
    tags: ['whole grain', 'fresh', 'healthy'],
    variants: [
      { id: '16-1', name: 'Regular Loaf', price: 4.99, inStock: true },
      { id: '16-2', name: 'Large Loaf', price: 6.99, inStock: true }
    ],
    inStock: true,
    rating: 4.3,
    reviewCount: 89
  },
  {
    id: '17',
    name: 'Butter Croissants',
    description: 'Flaky French croissants baked fresh every morning.',
    price: 5.49,
    image: 'https://source.unsplash.com/600x600/?croissant',
    category: 'Bakery',
    tags: ['flaky', 'buttery', 'fresh'],
    variants: [
      { id: '17-1', name: '6-Pack', price: 5.49, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 75
  },
  {
    id: '18',
    name: 'Blueberry Muffins',
    description: 'Moist muffins bursting with real blueberries.',
    price: 4.29,
    image: 'https://source.unsplash.com/600x600/?muffins',
    category: 'Bakery',
    tags: ['sweet', 'breakfast', 'baked'],
    variants: [
      { id: '18-1', name: '4-Pack', price: 4.29, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 61
  },
  {
    id: '19',
    name: 'Everything Bagels',
    description: 'Chewy bagels topped with sesame, poppy, onion, and garlic.',
    price: 3.99,
    image: 'https://source.unsplash.com/600x600/?bagel',
    category: 'Bakery',
    tags: ['breakfast', 'snack', 'baked'],
    variants: [
      { id: '19-1', name: '6-Pack', price: 3.99, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 104
  },
  {
    id: '20',
    name: 'Chocolate Chip Cookies',
    description: 'Classic chewy cookies loaded with chocolate chips.',
    price: 2.99,
    image: 'https://source.unsplash.com/600x600/?cookies',
    category: 'Bakery',
    tags: ['dessert', 'sweet', 'snack'],
    variants: [
      { id: '20-1', name: '12-Pack', price: 2.99, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 90
  },

  /* ---------- MEAT & SEAFOOD ---------- */
  {
    id: '21',
    name: 'Chicken Breast',
    description: 'Fresh boneless, skinless chicken breast—perfect for grilling, baking, or stir-frying.',
    price: 12.99,
    originalPrice: 15.99,
    image: 'https://source.unsplash.com/600x600/?chicken-breast',
    category: 'Meat',
    tags: ['protein', 'lean', 'fresh'],
    variants: [
      { id: '21-1', name: '1-lb Package', price: 12.99, inStock: true },
      { id: '21-2', name: '2-lb Package', price: 23.99, inStock: true }
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 203
  },
  {
    id: '22',
    name: 'Grass-Fed Ground Beef',
    description: '85% lean grass-fed ground beef for flavorful burgers.',
    price: 7.99,
    image: 'https://source.unsplash.com/600x600/?ground-beef',
    category: 'Meat',
    tags: ['protein', 'grass-fed', 'fresh'],
    variants: [
      { id: '22-1', name: '1-lb Pack', price: 7.99, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 132
  },
  {
    id: '23',
    name: 'Center-Cut Pork Chops',
    description: 'Thick, juicy pork chops perfect for pan-searing.',
    price: 8.49,
    image: 'https://source.unsplash.com/600x600/?pork-chops',
    category: 'Meat',
    tags: ['protein', 'juicy', 'fresh'],
    variants: [
      { id: '23-1', name: '2-Pack', price: 8.49, inStock: true }
    ],
    inStock: true,
    rating: 4.3,
    reviewCount: 77
  },
  {
    id: '24',
    name: 'Applewood Smoked Bacon',
    description: 'Thick-cut applewood smoked bacon with rich flavor.',
    price: 6.99,
    image: 'https://source.unsplash.com/600x600/?bacon',
    category: 'Meat',
    tags: ['smoked', 'breakfast', 'rich flavor'],
    variants: [
      { id: '24-1', name: '12-oz Pack', price: 6.99, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 165
  },
  {
    id: '25',
    name: 'Wild-Caught Salmon Fillet',
    description: 'Omega-3-rich wild Alaskan salmon fillet.',
    price: 14.99,
    image: 'https://source.unsplash.com/600x600/?salmon',
    category: 'Seafood',
    tags: ['omega-3', 'fresh', 'wild-caught'],
    variants: [
      { id: '25-1', name: '1-lb Fillet', price: 14.99, inStock: true }
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 189
  },
  {
    id: '26',
    name: 'Raw Shrimp (Peeled & Deveined)',
    description: 'Tail-on raw shrimp ready for quick cooking.',
    price: 12.49,
    image: 'https://source.unsplash.com/600x600/?shrimp',
    category: 'Seafood',
    tags: ['protein', 'seafood', 'quick cook'],
    variants: [
      { id: '26-1', name: '1-lb Bag', price: 12.49, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 98
  },

  /* ---------- FROZEN ---------- */
  {
    id: '27',
    name: 'Classic Pepperoni Pizza',
    description: 'Stone-baked frozen pizza loaded with mozzarella and pepperoni.',
    price: 6.49,
    image: 'https://source.unsplash.com/600x600/?frozen-pizza',
    category: 'Frozen',
    tags: ['convenience', 'cheesy', 'dinner'],
    variants: [
      { id: '27-1', name: '12-inch', price: 6.49, inStock: true }
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 145
  },
  {
    id: '28',
    name: 'Vanilla Bean Ice Cream',
    description: 'Creamy vanilla ice cream made with real vanilla beans.',
    price: 4.99,
    image: 'https://source.unsplash.com/600x600/?ice-cream',
    category: 'Frozen',
    tags: ['dessert', 'creamy', 'sweet'],
    variants: [
      { id: '28-1', name: '1.5-qt', price: 4.99, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 172
  },
  {
    id: '29',
    name: 'Frozen Mixed Vegetables',
    description: 'Blend of carrots, peas, corn, and green beans—steam-ready.',
    price: 2.49,
    image: 'https://source.unsplash.com/600x600/?mixed-vegetables',
    category: 'Frozen',
    tags: ['convenience', 'healthy', 'steamable'],
    variants: [
      { id: '29-1', name: '16-oz Bag', price: 2.49, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 80
  },

  /* ---------- BEVERAGES ---------- */
  {
    id: '30',
    name: '100% Orange Juice',
    description: 'Not-from-concentrate orange juice rich in vitamin C.',
    price: 3.49,
    image: 'https://source.unsplash.com/600x600/?orange-juice',
    category: 'Beverages',
    tags: ['juice', 'vitamin c', 'breakfast'],
    variants: [
      { id: '30-1', name: '59-oz Bottle', price: 3.49, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 101
  },
  {
    id: '31',
    name: 'Unsweetened Almond Milk',
    description: 'Plant-based dairy alternative with 30 calories per serving.',
    price: 2.99,
    image: 'https://source.unsplash.com/600x600/?almond-milk',
    category: 'Beverages',
    tags: ['vegan', 'low calorie', 'dairy-free'],
    variants: [
      { id: '31-1', name: '64-oz', price: 2.99, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 88
  },
  {
    id: '32',
    name: 'Whole Bean Coffee',
    description: 'Medium-roast 100% Arabica coffee beans with chocolate notes.',
    price: 9.99,
    image: 'https://source.unsplash.com/600x600/?coffee-beans',
    category: 'Beverages',
    tags: ['caffeine', 'arabica', 'medium roast'],
    variants: [
      { id: '32-1', name: '12-oz Bag', price: 9.99, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 230
  },
  {
    id: '33',
    name: 'Organic Green Tea',
    description: 'Antioxidant-rich green tea sachets sourced from Japan.',
    price: 4.79,
    image: 'https://source.unsplash.com/600x600/?green-tea',
    category: 'Beverages',
    tags: ['antioxidant', 'organic', 'tea'],
    variants: [
      { id: '33-1', name: '20 ct', price: 4.79, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 114
  },
  {
    id: '34',
    name: 'Sparkling Water Lime',
    description: 'Zero-calorie sparkling water with a hint of natural lime flavor.',
    price: 5.99,
    image: 'https://source.unsplash.com/600x600/?sparkling-water',
    category: 'Beverages',
    tags: ['zero calorie', 'refreshing', 'carbonated'],
    variants: [
      { id: '34-1', name: '12-Pack 12 oz', price: 5.99, inStock: true }
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 73
  },

  /* ---------- SNACKS ---------- */
  {
    id: '35',
    name: 'Kettle-Cooked Potato Chips',
    description: 'Extra-crunchy kettle chips lightly salted.',
    price: 2.49,
    image: 'https://source.unsplash.com/600x600/?potato-chips',
    category: 'Snacks',
    tags: ['crunchy', 'salty', 'snack'],
    variants: [
      { id: '35-1', name: '8-oz Bag', price: 2.49, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 130
  },
  {
    id: '36',
    name: 'Dark Chocolate Almonds',
    description: 'Roasted almonds coated in 72% dark chocolate.',
    price: 6.99,
    image: 'https://source.unsplash.com/600x600/?chocolate-almonds',
    category: 'Snacks',
    tags: ['sweet', 'nuts', 'antioxidant'],
    variants: [
      { id: '36-1', name: '10-oz Pouch', price: 6.99, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 92
  },
  {
    id: '37',
    name: 'Peanut Butter Granola Bars',
    description: 'Chewy granola bars with real peanut butter and oats.',
    price: 3.49,
    image: 'https://source.unsplash.com/600x600/?granola-bar',
    category: 'Snacks',
    tags: ['energy', 'whole grain', 'snack'],
    variants: [
      { id: '37-1', name: '6-Count', price: 3.49, inStock: true }
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 68
  },
  {
    id: '38',
    name: 'Trail Mix Deluxe',
    description: 'Mix of nuts, seeds, dried fruit, and dark chocolate chunks.',
    price: 5.99,
    image: 'https://source.unsplash.com/600x600/?trail-mix',
    category: 'Snacks',
    tags: ['nuts', 'energy', 'hiking'],
    variants: [
      { id: '38-1', name: '16-oz Bag', price: 5.99, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 85
  },

  /* ---------- PANTRY ---------- */
  {
    id: '39',
    name: 'Extra-Virgin Olive Oil',
    description: 'Cold-pressed Mediterranean olive oil with robust flavor.',
    price: 8.99,
    image: 'https://source.unsplash.com/600x600/?olive-oil',
    category: 'Pantry',
    tags: ['healthy fats', 'cooking', 'mediterranean'],
    variants: [
      { id: '39-1', name: '500 ml Bottle', price: 8.99, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 201
  },
  {
    id: '40',
    name: 'Creamy Peanut Butter',
    description: 'Smooth peanut butter with no added sugar.',
    price: 2.99,
    image: 'https://source.unsplash.com/600x600/?peanut-butter',
    category: 'Pantry',
    tags: ['protein', 'spread', 'nuts'],
    variants: [
      { id: '40-1', name: '16-oz Jar', price: 2.99, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 140
  },
  {
    id: '41',
    name: 'Italian Spaghetti',
    description: 'Durum wheat spaghetti crafted using traditional methods.',
    price: 1.69,
    image: 'https://source.unsplash.com/600x600/?spaghetti',
    category: 'Pantry',
    tags: ['pasta', 'italian', 'durum wheat'],
    variants: [
      { id: '41-1', name: '16-oz Box', price: 1.69, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 75
  },
  {
    id: '42',
    name: 'Basmati Rice',
    description: 'Long-grain aromatic basmati rice ideal for curries.',
    price: 3.99,
    image: 'https://source.unsplash.com/600x600/?basmati-rice',
    category: 'Pantry',
    tags: ['grains', 'aromatic', 'long grain'],
    variants: [
      { id: '42-1', name: '2-lb Bag', price: 3.99, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 88
  },
  {
    id: '43',
    name: 'Black Beans (Low Sodium)',
    description: 'Canned black beans with 50% less sodium.',
    price: 0.99,
    image: 'https://source.unsplash.com/600x600/?black-beans',
    category: 'Pantry',
    tags: ['fiber', 'protein', 'canned'],
    variants: [
      { id: '43-1', name: '15-oz Can', price: 0.99, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 66
  },

  /* ---------- BREAKFAST ---------- */
  {
    id: '44',
    name: 'Old-Fashioned Oats',
    description: 'Whole-grain rolled oats perfect for hearty oatmeal.',
    price: 2.49,
    image: 'https://source.unsplash.com/600x600/?oatmeal',
    category: 'Breakfast',
    tags: ['fiber', 'whole grain', 'heart healthy'],
    variants: [
      { id: '44-1', name: '18-oz Canister', price: 2.49, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 95
  },
  {
    id: '45',
    name: 'Honey Nut Cereal',
    description: 'Crunchy oat cereal sweetened with real honey.',
    price: 3.49,
    image: 'https://source.unsplash.com/600x600/?cereal',
    category: 'Breakfast',
    tags: ['whole grain', 'honey', 'cereal'],
    variants: [
      { id: '45-1', name: '12-oz Box', price: 3.49, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 102
  },
  {
    id: '46',
    name: 'Raw Clover Honey',
    description: 'Unfiltered raw clover honey perfect for tea or baking.',
    price: 6.49,
    image: 'https://source.unsplash.com/600x600/?honey',
    category: 'Breakfast',
    tags: ['natural sweetener', 'raw', 'unfiltered'],
    variants: [
      { id: '46-1', name: '16-oz Jar', price: 6.49, inStock: true }
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 141
  },

  /* ---------- PERSONAL CARE ---------- */
  {
    id: '47',
    name: 'Moisturizing Shampoo',
    description: 'Sulfate-free shampoo infused with argan oil.',
    price: 5.99,
    image: 'https://source.unsplash.com/600x600/?shampoo',
    category: 'Personal Care',
    tags: ['hair care', 'sulfate-free', 'argan oil'],
    variants: [
      { id: '47-1', name: '16-oz Bottle', price: 5.99, inStock: true }
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 84
  },
  {
    id: '48',
    name: 'Fluoride Toothpaste',
    description: 'Whitening toothpaste with cavity protection.',
    price: 2.49,
    image: 'https://source.unsplash.com/600x600/?toothpaste',
    category: 'Personal Care',
    tags: ['oral care', 'whitening', 'fluoride'],
    variants: [
      { id: '48-1', name: '6-oz Tube', price: 2.49, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 73
  },
  {
    id: '49',
    name: 'Aloe Hand Sanitizer',
    description: '70% alcohol hand sanitizer with soothing aloe.',
    price: 3.19,
    image: 'https://source.unsplash.com/600x600/?hand-sanitizer',
    category: 'Personal Care',
    tags: ['germ-kill', 'alcohol', 'portable'],
    variants: [
      { id: '49-1', name: '10-oz Pump', price: 3.19, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 60
  },

  /* ---------- HOUSEHOLD ---------- */
  {
    id: '50',
    name: 'Liquid Laundry Detergent',
    description: 'Concentrated detergent with color-safe stain-lifters.',
    price: 9.99,
    image: 'https://source.unsplash.com/600x600/?laundry-detergent',
    category: 'Household',
    tags: ['cleaning', 'color safe', 'stain removal'],
    variants: [
      { id: '50-1', name: '64-load Bottle', price: 9.99, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 92
  },
  {
    id: '51',
    name: 'Lemon Dish Soap',
    description: 'Grease-cutting dish soap with fresh lemon scent.',
    price: 2.59,
    image: 'https://source.unsplash.com/600x600/?dish-soap',
    category: 'Household',
    tags: ['grease cutting', 'lemon', 'kitchen'],
    variants: [
      { id: '51-1', name: '21.6-oz Bottle', price: 2.59, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 64
  },
  {
    id: '52',
    name: 'Paper Towels (2-Ply)',
    description: 'Strong and absorbent paper towels for everyday messes.',
    price: 5.49,
    image: 'https://source.unsplash.com/600x600/?paper-towels',
    category: 'Household',
    tags: ['absorbent', 'kitchen', 'cleanup'],
    variants: [
      { id: '52-1', name: '6-Roll Pack', price: 5.49, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 110
  },

  /* ---------- PETS ---------- */
  {
    id: '53',
    name: 'Complete Dry Dog Food',
    description: 'Balanced nutrition for adult dogs with real chicken.',
    price: 22.99,
    image: 'https://source.unsplash.com/600x600/?dog-food',
    category: 'Pets',
    tags: ['dog', 'nutrition', 'chicken'],
    variants: [
      { id: '53-1', name: '15-lb Bag', price: 22.99, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 98
  },
  {
    id: '54',
    name: 'Clumping Cat Litter',
    description: 'Low-dust, odor-control clumping litter.',
    price: 11.49,
    image: 'https://source.unsplash.com/600x600/?cat-litter',
    category: 'Pets',
    tags: ['cat', 'odor control', 'low dust'],
    variants: [
      { id: '54-1', name: '20-lb Box', price: 11.49, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 57
  },

  /* ---------- HEALTH ---------- */
  {
    id: '55',
    name: 'Vitamin C 1000 mg',
    description: 'Immune-support tablets with rose hips.',
    price: 8.99,
    image: 'https://source.unsplash.com/600x600/?vitamin-c',
    category: 'Health',
    tags: ['immune support', 'antioxidant', 'supplement'],
    variants: [
      { id: '55-1', name: '100 Tablets', price: 8.99, inStock: true }
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 120
  },

  /* ---------- ELECTRONICS ---------- */
  {
    id: '56',
    name: 'Bluetooth Headphones',
    description: 'Wireless over-ear headphones with 40-hour battery life.',
    price: 49.99,
    image: 'https://source.unsplash.com/600x600/?headphones',
    category: 'Electronics',
    tags: ['wireless', 'bluetooth', 'audio'],
    variants: [
      { id: '56-1', name: 'Black', price: 49.99, inStock: true },
      { id: '56-2', name: 'White', price: 49.99, inStock: true }
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 310
  },
  {
    id: '57',
    name: '10,000 mAh Power Bank',
    description: 'Slim portable charger with USB-C fast charging.',
    price: 24.99,
    image: 'https://source.unsplash.com/600x600/?power-bank',
    category: 'Electronics',
    tags: ['portable', 'usb-c', 'fast charge'],
    variants: [
      { id: '57-1', name: 'Space Gray', price: 24.99, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 145
  },

  /* ---------- CLOTHING ---------- */
  {
    id: '58',
    name: 'Classic Cotton T-Shirt',
    description: 'Soft 100% cotton tee with a relaxed fit.',
    price: 9.99,
    image: 'https://source.unsplash.com/600x600/?tshirt',
    category: 'Clothing',
    tags: ['casual', 'cotton', 'unisex'],
    variants: [
      { id: '58-1', name: 'Small', price: 9.99, inStock: true },
      { id: '58-2', name: 'Medium', price: 9.99, inStock: true },
      { id: '58-3', name: 'Large', price: 9.99, inStock: true }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 76
  },

  /* ---------- SPORTS ---------- */
  {
    id: '59',
    name: 'Eco Yoga Mat',
    description: 'Non-slip 6 mm yoga mat made from TPE material.',
    price: 19.99,
    image: 'https://source.unsplash.com/600x600/?yoga-mat',
    category: 'Sports',
    tags: ['fitness', 'non-slip', 'eco-friendly'],
    variants: [
      { id: '59-1', name: 'Purple', price: 19.99, inStock: true }
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 89
  },

  /* ---------- AUTOMOTIVE ---------- */
  {
    id: '60',
    name: 'Microfiber Car Wash Mitt',
    description: 'Scratch-free microfiber mitt for gentle car cleaning.',
    price: 4.99,
    image: 'https://source.unsplash.com/600x600/?car-wash',
    category: 'Automotive',
    tags: ['car care', 'microfiber', 'wash mitt'],
    variants: [
      { id: '60-1', name: 'Single Mitt', price: 4.99, inStock: true }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 52
  }
];


export const sampleUsers: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    isGuest: false
  },
  {
    id: '2',
    email: 'guest@example.com',
    name: 'Guest User',
    isGuest: true
  }
]

export const sampleStoreCodes: StoreCode[] = [
  {
    code: '1234',
    name: 'Downtown Store',
    location: '123 Main St, Downtown'
  },
  {
    code: '5678',
    name: 'Mall Location',
    location: '456 Shopping Center Dr'
  }
]

export const categories = [
  'All',
  'Fruits',
  'Vegetables',
  'Dairy',
  'Meat',
  'Bakery',
  'Pantry',
  'Beverages'
] 