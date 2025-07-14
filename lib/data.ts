import { Product, User, StoreCode } from './types'
export const sampleProducts: Product[] = [
  /* ---------- FRUITS ---------- */
  {

    "id": "1",
    "name": "Almond Milk",
    "description": "High quality almond milk perfect for daily use.",
    "price": 2.98,
    "originalPrice": 20.87,
    "image": "/images/almond_milk.jpeg",
    "category": "Dairy",
    "tags": [
      "calcium",
      "protein",
      "creamy"
    ],
    "variants": [
      {
        "id": "1-1",
        "name": "Standard",
        "price": 9.93,
        "inStock": true
      },
      {
        "id": "1-2",
        "name": "Large",
        "price": 10.37,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 3.7,
    "reviewCount": 48
  },
  {
    "id": "2",
    "name": "Broccoli",
    "description": "High quality broccoli perfect for daily use.",
    "price": 11.22,
    "originalPrice": 22.49,
    "image": "/images/broccoli.jpeg",
    "category": "Vegetables",
    "tags": [
      "crunchy",
      "green",
      "fresh"
    ],
    "variants": [
      {
        "id": "2-1",
        "name": "Standard",
        "price": 9.54,
        "inStock": true
      },
      {
        "id": "2-2",
        "name": "Large",
        "price": 17.3,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 114
  },
  {
    "id": "3",
    "name": "Salmon Fillet",
    "description": "High quality salmon fillet perfect for daily use.",
    "price": 12.67,
    "originalPrice": 23.16,
    "image": "/images/salmon_fillet.jpeg",
    "category": "Meat",
    "tags": [
      "protein",
      "fresh",
      "lean"
    ],
    "variants": [
      {
        "id": "3-1",
        "name": "Standard",
        "price": 9.2,
        "inStock": true
      },
      {
        "id": "3-2",
        "name": "Large",
        "price": 15.68,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.0,
    "reviewCount": 86
  },
  {
    "id": "4",
    "name": "Brown Rice",
    "description": "High quality brown rice perfect for daily use.",
    "price": 16.69,
    "originalPrice": 20.14,
    "image": "/images/brown_rice.jpeg",
    "category": "Pantry",
    "tags": [
      "dry",
      "long shelf-life",
      "essentials"
    ],
    "variants": [
      {
        "id": "4-1",
        "name": "Standard",
        "price": 5.35,
        "inStock": true
      },
      {
        "id": "4-2",
        "name": "Large",
        "price": 14.44,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 3.9,
    "reviewCount": 155
  },
  {
    "id": "5",
    "name": "Orange Juice",
    "description": "High quality orange juice perfect for daily use.",
    "price": 9.24,
    "originalPrice": 21.49,
    "image": "/images/orange_juice.jpeg",
    "category": "Beverages",
    "tags": [
      "refreshing",
      "cold",
      "healthy"
    ],
    "variants": [
      {
        "id": "5-1",
        "name": "Standard",
        "price": 6.6,
        "inStock": true
      },
      {
        "id": "5-2",
        "name": "Large",
        "price": 10.25,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.1,
    "reviewCount": 162
  },
  {
    "id": "6",
    "name": "Blueberries",
    "description": "High quality blueberries perfect for daily use.",
    "price": 19.24,
    "originalPrice": 22.52,
    "image": "/images/blueberries.jpeg",
    "category": "Fruits",
    "tags": [
      "fresh",
      "organic",
      "vitamin-rich"
    ],
    "variants": [
      {
        "id": "6-1",
        "name": "Standard",
        "price": 9.49,
        "inStock": true
      },
      {
        "id": "6-2",
        "name": "Large",
        "price": 14.58,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 202
  },
  {
    "id": "7",
    "name": "Cheddar Cheese",
    "description": "High quality cheddar cheese perfect for daily use.",
    "price": 16.52,
    "originalPrice": 50,
    "image": "/images/cheddar_cheese.jpeg",
    "category": "Dairy",
    "tags": [
      "calcium",
      "protein",
      "creamy"
    ],
    "variants": [
      {
        "id": "7-1",
        "name": "Standard",
        "price": 3.58,
        "inStock": true
      },
      {
        "id": "7-2",
        "name": "Large",
        "price": 13.91,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 3.9,
    "reviewCount": 124
  },
  {
    "id": "8",
    "name": "Lettuce",
    "description": "High quality lettuce perfect for daily use.",
    "price": 3.21,
    "originalPrice": 23.73,
    "image": "/images/lettuce.jpeg",
    "category": "Vegetables",
    "tags": [
      "crunchy",
      "green",
      "fresh"
    ],
    "variants": [
      {
        "id": "8-1",
        "name": "Standard",
        "price": 6.78,
        "inStock": true
      },
      {
        "id": "8-2",
        "name": "Large",
        "price": 19.59,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 5.0,
    "reviewCount": 150
  },
  {
    "id": "9",
    "name": "Ground Beef",
    "description": "High quality ground beef perfect for daily use.",
    "price": 15.23,
    "originalPrice": 50,
    "image": "/images/ground_beef.jpeg",
    "category": "Meat",
    "tags": [
      "protein",
      "fresh",
      "lean"
    ],
    "variants": [
      {
        "id": "9-1",
        "name": "Standard",
        "price": 6.42,
        "inStock": true
      },
      {
        "id": "9-2",
        "name": "Large",
        "price": 10.23,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 126
  },
  {
    "id": "10",
    "name": "Oatmeal",
    "description": "High quality oatmeal perfect for daily use.",
    "price": 11.53,
    "originalPrice": 50,
    "image": "/images/oatmeal.jpeg",
    "category": "Pantry",
    "tags": [
      "dry",
      "long shelf-life",
      "essentials"
    ],
    "variants": [
      {
        "id": "10-1",
        "name": "Standard",
        "price": 7.61,
        "inStock": true
      },
      {
        "id": "10-2",
        "name": "Large",
        "price": 14.97,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.0,
    "reviewCount": 88
  },
  {
    "id": "11",
    "name": "Apple Juice",
    "description": "High quality apple juice perfect for daily use.",
    "price": 16.34,
    "originalPrice": 50,
    "image": "/images/apple_juice.jpeg",
    "category": "Beverages",
    "tags": [
      "refreshing",
      "cold",
      "healthy"
    ],
    "variants": [
      {
        "id": "11-1",
        "name": "Standard",
        "price": 3.69,
        "inStock": true
      },
      {
        "id": "11-2",
        "name": "Large",
        "price": 15.84,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 3.9,
    "reviewCount": 37
  },
  {
    "id": "12",
    "name": "Strawberries",
    "description": "High quality strawberries perfect for daily use.",
    "price": 19.89,
    "originalPrice": 50,
    "image": "/images/strawberries.jpeg",
    "category": "Fruits",
    "tags": [
      "fresh",
      "organic",
      "vitamin-rich"
    ],
    "variants": [
      {
        "id": "12-1",
        "name": "Standard",
        "price": 2.98,
        "inStock": true
      },
      {
        "id": "12-2",
        "name": "Large",
        "price": 11.45,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.2,
    "reviewCount": 166
  },
  {
    "id": "13",
    "name": "Yogurt Drink",
    "description": "High quality yogurt drink perfect for daily use.",
    "price": 4.06,
    "originalPrice": 20.92,
    "image": "/images/yogurt_drink.jpeg",
    "category": "Dairy",
    "tags": [
      "calcium",
      "protein",
      "creamy"
    ],
    "variants": [
      {
        "id": "13-1",
        "name": "Standard",
        "price": 9.42,
        "inStock": true
      },
      {
        "id": "13-2",
        "name": "Large",
        "price": 18.86,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.2,
    "reviewCount": 123
  },
  {
    "id": "14",
    "name": "Spinach",
    "description": "High quality spinach perfect for daily use.",
    "price": 19.13,
    "originalPrice": 23.7,
    "image": "/images/spinach.jpeg",
    "category": "Vegetables",
    "tags": [
      "crunchy",
      "green",
      "fresh"
    ],
    "variants": [
      {
        "id": "14-1",
        "name": "Standard",
        "price": 3.66,
        "inStock": true
      },
      {
        "id": "14-2",
        "name": "Large",
        "price": 10.6,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 178
  },
  {
    "id": "15",
    "name": "Turkey Breast",
    "description": "High quality turkey breast perfect for daily use.",
    "price": 2.87,
    "originalPrice": 50,
    "image": "/images/turkey_breast.jpeg",
    "category": "Meat",
    "tags": [
      "protein",
      "fresh",
      "lean"
    ],
    "variants": [
      {
        "id": "15-1",
        "name": "Standard",
        "price": 3.78,
        "inStock": true
      },
      {
        "id": "15-2",
        "name": "Large",
        "price": 16.09,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.2,
    "reviewCount": 195
  },
  {
    "id": "16",
    "name": "Pasta",
    "description": "High quality pasta perfect for daily use.",
    "price": 2.9,
    "originalPrice": 50,
    "image": "/images/pasta.jpeg",
    "category": "Pantry",
    "tags": [
      "dry",
      "long shelf-life",
      "essentials"
    ],
    "variants": [
      {
        "id": "16-1",
        "name": "Standard",
        "price": 5.87,
        "inStock": true
      },
      {
        "id": "16-2",
        "name": "Large",
        "price": 13.83,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 204
  },
  {
    "id": "17",
    "name": "Green Tea",
    "description": "High quality green tea perfect for daily use.",
    "price": 16.02,
    "originalPrice": 50,
    "image": "/images/green_tea.jpeg",
    "category": "Beverages",
    "tags": [
      "refreshing",
      "cold",
      "healthy"
    ],
    "variants": [
      {
        "id": "17-1",
        "name": "Standard",
        "price": 6.3,
        "inStock": true
      },
      {
        "id": "17-2",
        "name": "Large",
        "price": 17.03,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.1,
    "reviewCount": 119
  },
  {
    "id": "18",
    "name": "Grapes",
    "description": "High quality grapes perfect for daily use.",
    "price": 4.41,
    "originalPrice": 23.5,
    "image": "/images/grapes.jpeg",
    "category": "Fruits",
    "tags": [
      "fresh",
      "organic",
      "vitamin-rich"
    ],
    "variants": [
      {
        "id": "18-1",
        "name": "Standard",
        "price": 4.59,
        "inStock": true
      },
      {
        "id": "18-2",
        "name": "Large",
        "price": 19.79,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.2,
    "reviewCount": 72
  },
  {
    "id": "19",
    "name": "Milk",
    "description": "High quality milk perfect for daily use.",
    "price": 17.14,
    "originalPrice": 22.35,
    "image": "/images/milk.jpeg",
    "category": "Dairy",
    "tags": [
      "calcium",
      "protein",
      "creamy"
    ],
    "variants": [
      {
        "id": "19-1",
        "name": "Standard",
        "price": 3.47,
        "inStock": true
      },
      {
        "id": "19-2",
        "name": "Large",
        "price": 18.74,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 100
  },
  {
    "id": "20",
    "name": "Carrots",
    "description": "High quality carrots perfect for daily use.",
    "price": 8.43,
    "originalPrice": 22.79,
    "image": "/images/carrots.jpeg",
    "category": "Vegetables",
    "tags": [
      "crunchy",
      "green",
      "fresh"
    ],
    "variants": [
      {
        "id": "20-1",
        "name": "Standard",
        "price": 4.0,
        "inStock": true
      },
      {
        "id": "20-2",
        "name": "Large",
        "price": 17.13,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.4,
    "reviewCount": 186
  },
  {
    "id": "21",
    "name": "Pork Chops",
    "description": "High quality pork chops perfect for daily use.",
    "price": 14.96,
    "originalPrice": 23.45,
    "image": "/images/pork_chops.jpeg",
    "category": "Meat",
    "tags": [
      "protein",
      "fresh",
      "lean"
    ],
    "variants": [
      {
        "id": "21-1",
        "name": "Standard",
        "price": 5.03,
        "inStock": true
      },
      {
        "id": "21-2",
        "name": "Large",
        "price": 12.63,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 3.8,
    "reviewCount": 236
  },
  {
    "id": "22",
    "name": "Cereal",
    "description": "High quality cereal perfect for daily use.",
    "price": 9.74,
    "originalPrice": 50,
    "image": "/images/cereal.jpeg",
    "category": "Pantry",
    "tags": [
      "dry",
      "long shelf-life",
      "essentials"
    ],
    "variants": [
      {
        "id": "22-1",
        "name": "Standard",
        "price": 6.26,
        "inStock": true
      },
      {
        "id": "22-2",
        "name": "Large",
        "price": 18.99,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.4,
    "reviewCount": 171
  },
  {
    "id": "23",
    "name": "Coffee",
    "description": "High quality coffee perfect for daily use.",
    "price": 17.41,
    "originalPrice": 50,
    "image": "/images/coffee.jpeg",
    "category": "Beverages",
    "tags": [
      "refreshing",
      "cold",
      "healthy"
    ],
    "variants": [
      {
        "id": "23-1",
        "name": "Standard",
        "price": 5.98,
        "inStock": true
      },
      {
        "id": "23-2",
        "name": "Large",
        "price": 14.0,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 156
  },
  {
    "id": "24",
    "name": "Mango",
    "description": "High quality mango perfect for daily use.",
    "price": 18.31,
    "originalPrice": 50,
    "image": "/images/mango.jpeg",
    "category": "Fruits",
    "tags": [
      "fresh",
      "organic",
      "vitamin-rich"
    ],
    "variants": [
      {
        "id": "24-1",
        "name": "Standard",
        "price": 3.38,
        "inStock": true
      },
      {
        "id": "24-2",
        "name": "Large",
        "price": 16.97,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 3.8,
    "reviewCount": 47
  },
  {
    "id": "25",
    "name": "Butter",
    "description": "High quality butter perfect for daily use.",
    "price": 8.93,
    "originalPrice": 21.19,
    "image": "/images/butter.jpeg",
    "category": "Dairy",
    "tags": [
      "calcium",
      "protein",
      "creamy"
    ],
    "variants": [
      {
        "id": "25-1",
        "name": "Standard",
        "price": 9.26,
        "inStock": true
      },
      {
        "id": "25-2",
        "name": "Large",
        "price": 12.11,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.0,
    "reviewCount": 218
  },
  {
    "id": "26",
    "name": "Cucumber",
    "description": "High quality cucumber perfect for daily use.",
    "price": 9.8,
    "originalPrice": 20.78,
    "image": "/images/cucumber.jpeg",
    "category": "Vegetables",
    "tags": [
      "crunchy",
      "green",
      "fresh"
    ],
    "variants": [
      {
        "id": "26-1",
        "name": "Standard",
        "price": 6.05,
        "inStock": true
      },
      {
        "id": "26-2",
        "name": "Large",
        "price": 10.07,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.0,
    "reviewCount": 262
  },
  {
    "id": "27",
    "name": "Lamb Chops",
    "description": "High quality lamb chops perfect for daily use.",
    "price": 4.67,
    "originalPrice": 50,
    "image": "/images/lamb_chops.jpeg",
    "category": "Meat",
    "tags": [
      "protein",
      "fresh",
      "lean"
    ],
    "variants": [
      {
        "id": "27-1",
        "name": "Standard",
        "price": 5.87,
        "inStock": true
      },
      {
        "id": "27-2",
        "name": "Large",
        "price": 17.22,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 3.6,
    "reviewCount": 47
  },
  {
    "id": "28",
    "name": "Flour",
    "description": "High quality flour perfect for daily use.",
    "price": 17.36,
    "originalPrice": 50,
    "image": "/images/flour.jpeg",
    "category": "Pantry",
    "tags": [
      "dry",
      "long shelf-life",
      "essentials"
    ],
    "variants": [
      {
        "id": "28-1",
        "name": "Standard",
        "price": 8.15,
        "inStock": true
      },
      {
        "id": "28-2",
        "name": "Large",
        "price": 11.13,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.5,
    "reviewCount": 161
  },
  {
    "id": "29",
    "name": "Soda",
    "description": "High quality soda perfect for daily use.",
    "price": 13.4,
    "originalPrice": 23.44,
    "image": "/images/soda.jpeg",
    "category": "Beverages",
    "tags": [
      "refreshing",
      "cold",
      "healthy"
    ],
    "variants": [
      {
        "id": "29-1",
        "name": "Standard",
        "price": 3.04,
        "inStock": true
      },
      {
        "id": "29-2",
        "name": "Large",
        "price": 13.44,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.3,
    "reviewCount": 213
  },
  {
    "id": "30",
    "name": "Pineapple",
    "description": "High quality pineapple perfect for daily use.",
    "price": 6.49,
    "originalPrice": 24.22,
    "image": "/images/pineapple.jpg",
    "category": "Fruits",
    "tags": [
      "fresh",
      "organic",
      "vitamin-rich"
    ],
    "variants": [
      {
        "id": "30-1",
        "name": "Standard",
        "price": 6.12,
        "inStock": true
      },
      {
        "id": "30-2",
        "name": "Large",
        "price": 10.07,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 59
  },
  {
    "id": "31",
    "name": "Cream Cheese",
    "description": "High quality cream cheese perfect for daily use.",
    "price": 13.5,
    "originalPrice": 50,
    "image": "/images/cream_cheese.jpg",
    "category": "Dairy",
    "tags": [
      "calcium",
      "protein",
      "creamy"
    ],
    "variants": [
      {
        "id": "31-1",
        "name": "Standard",
        "price": 5.94,
        "inStock": true
      },
      {
        "id": "31-2",
        "name": "Large",
        "price": 18.29,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.3,
    "reviewCount": 36
  },
  {
    "id": "32",
    "name": "Tomatoes",
    "description": "High quality tomatoes perfect for daily use.",
    "price": 7.96,
    "originalPrice": 50,
    "image": "/images/tomatoes.jpg",
    "category": "Vegetables",
    "tags": [
      "crunchy",
      "green",
      "fresh"
    ],
    "variants": [
      {
        "id": "32-1",
        "name": "Standard",
        "price": 6.95,
        "inStock": true
      },
      {
        "id": "32-2",
        "name": "Large",
        "price": 11.68,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.4,
    "reviewCount": 244
  },
  {
    "id": "33",
    "name": "Bacon",
    "description": "High quality bacon perfect for daily use.",
    "price": 6.18,
    "originalPrice": 50,
    "image": "/images/bacon.jpg",
    "category": "Meat",
    "tags": [
      "protein",
      "fresh",
      "lean"
    ],
    "variants": [
      {
        "id": "33-1",
        "name": "Standard",
        "price": 3.24,
        "inStock": true
      },
      {
        "id": "33-2",
        "name": "Large",
        "price": 16.64,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.5,
    "reviewCount": 153
  },
  {
    "id": "34",
    "name": "Sugar",
    "description": "High quality sugar perfect for daily use.",
    "price": 11.64,
    "originalPrice": 50,
    "image": "/images/sugar.jpg",
    "category": "Pantry",
    "tags": [
      "dry",
      "long shelf-life",
      "essentials"
    ],
    "variants": [
      {
        "id": "34-1",
        "name": "Standard",
        "price": 5.99,
        "inStock": true
      },
      {
        "id": "34-2",
        "name": "Large",
        "price": 13.38,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 3.9,
    "reviewCount": 62
  },
  {
    "id": "35",
    "name": "Iced Tea",
    "description": "High quality iced tea perfect for daily use.",
    "price": 19.67,
    "originalPrice": 50,
    "image": "/images/iced_tea.jpg",
    "category": "Beverages",
    "tags": [
      "refreshing",
      "cold",
      "healthy"
    ],
    "variants": [
      {
        "id": "35-1",
        "name": "Standard",
        "price": 6.39,
        "inStock": true
      },
      {
        "id": "35-2",
        "name": "Large",
        "price": 13.28,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 3.9,
    "reviewCount": 203
  },
  {
    "id": "36",
    "name": "Peaches",
    "description": "High quality peaches perfect for daily use.",
    "price": 9.74,
    "originalPrice": 50,
    "image": "/images/peaches.jpg",
    "category": "Fruits",
    "tags": [
      "fresh",
      "organic",
      "vitamin-rich"
    ],
    "variants": [
      {
        "id": "36-1",
        "name": "Standard",
        "price": 5.44,
        "inStock": true
      },
      {
        "id": "36-2",
        "name": "Large",
        "price": 12.69,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 3.6,
    "reviewCount": 272
  },
  {
    "id": "37",
    "name": "Eggs",
    "description": "High quality eggs perfect for daily use.",
    "price": 18.82,
    "originalPrice": 50,
    "image": "/images/eggs.jpg",
    "category": "Dairy",
    "tags": [
      "calcium",
      "protein",
      "creamy"
    ],
    "variants": [
      {
        "id": "37-1",
        "name": "Standard",
        "price": 7.1,
        "inStock": true
      },
      {
        "id": "37-2",
        "name": "Large",
        "price": 16.73,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.2,
    "reviewCount": 38
  },
  {
    "id": "38",
    "name": "Onions",
    "description": "High quality onions perfect for daily use.",
    "price": 18.92,
    "originalPrice": 50,
    "image": "/images/onions.jpg",
    "category": "Vegetables",
    "tags": [
      "crunchy",
      "green",
      "fresh"
    ],
    "variants": [
      {
        "id": "38-1",
        "name": "Standard",
        "price": 8.44,
        "inStock": true
      },
      {
        "id": "38-2",
        "name": "Large",
        "price": 11.17,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.2,
    "reviewCount": 263
  },
  {
    "id": "39",
    "name": "Sausage",
    "description": "High quality sausage perfect for daily use.",
    "price": 14.35,
    "originalPrice": 24.13,
    "image": "/images/sausage.jpg",
    "category": "Meat",
    "tags": [
      "protein",
      "fresh",
      "lean"
    ],
    "variants": [
      {
        "id": "39-1",
        "name": "Standard",
        "price": 9.41,
        "inStock": true
      },
      {
        "id": "39-2",
        "name": "Large",
        "price": 18.54,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 3.9,
    "reviewCount": 128
  },
  {
    "id": "40",
    "name": "Salt",
    "description": "High quality salt perfect for daily use.",
    "price": 4.81,
    "originalPrice": 50,
    "image": "/images/salt.jpg",
    "category": "Pantry",
    "tags": [
      "dry",
      "long shelf-life",
      "essentials"
    ],
    "variants": [
      {
        "id": "40-1",
        "name": "Standard",
        "price": 4.67,
        "inStock": true
      },
      {
        "id": "40-2",
        "name": "Large",
        "price": 13.68,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.7,
    "reviewCount": 102
  },
  {
    "id": "41",
    "name": "Energy Drink",
    "description": "High quality energy drink perfect for daily use.",
    "price": 3.74,
    "originalPrice": 21.65,
    "image": "/images/energy_drink.jpg",
    "category": "Beverages",
    "tags": [
      "refreshing",
      "cold",
      "healthy"
    ],
    "variants": [
      {
        "id": "41-1",
        "name": "Standard",
        "price": 7.84,
        "inStock": true
      },
      {
        "id": "41-2",
        "name": "Large",
        "price": 16.83,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.0,
    "reviewCount": 208
  },
  {
    "id": "42",
    "name": "Watermelon",
    "description": "High quality watermelon perfect for daily use.",
    "price": 15.55,
    "originalPrice": 50,
    "image": "/images/watermelon.jpg",
    "category": "Fruits",
    "tags": [
      "fresh",
      "organic",
      "vitamin-rich"
    ],
    "variants": [
      {
        "id": "42-1",
        "name": "Standard",
        "price": 8.26,
        "inStock": true
      },
      {
        "id": "42-2",
        "name": "Large",
        "price": 18.56,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 3.8,
    "reviewCount": 93
  },
  {
    "id": "43",
    "name": "Whipped Cream",
    "description": "High quality whipped cream perfect for daily use.",
    "price": 18.52,
    "originalPrice": 24.92,
    "image": "/images/whipped_cream.jpg",
    "category": "Dairy",
    "tags": [
      "calcium",
      "protein",
      "creamy"
    ],
    "variants": [
      {
        "id": "43-1",
        "name": "Standard",
        "price": 4.01,
        "inStock": true
      },
      {
        "id": "43-2",
        "name": "Large",
        "price": 10.96,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.6,
    "reviewCount": 292
  },
  {
    "id": "44",
    "name": "Bell Peppers",
    "description": "High quality bell peppers perfect for daily use.",
    "price": 7.87,
    "originalPrice": 50,
    "image": "/images/bell_peppers.jpg",
    "category": "Vegetables",
    "tags": [
      "crunchy",
      "green",
      "fresh"
    ],
    "variants": [
      {
        "id": "44-1",
        "name": "Standard",
        "price": 6.32,
        "inStock": true
      },
      {
        "id": "44-2",
        "name": "Large",
        "price": 11.7,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 3.5,
    "reviewCount": 216
  },
  {
    "id": "45",
    "name": "Chicken Wings",
    "description": "High quality chicken wings perfect for daily use.",
    "price": 17.18,
    "originalPrice": 50,
    "image": "/images/chicken_wings.jpg",
    "category": "Meat",
    "tags": [
      "protein",
      "fresh",
      "lean"
    ],
    "variants": [
      {
        "id": "45-1",
        "name": "Standard",
        "price": 2.85,
        "inStock": true
      },
      {
        "id": "45-2",
        "name": "Large",
        "price": 10.53,
        "inStock": false
      }
    ],
    "inStock": true,
    "rating": 4.5,
    "reviewCount": 37
  },
  {
    "id": "46",
    "name": "Canned Beans",
    "description": "High quality canned beans perfect for daily use.",
    "price": 13.93,
    "originalPrice": 21.12,
    "image": "/images/canned_beans.jpg",
    "category": "Pantry",
    "tags": [
      "dry",
      "long shelf-life",
      "essentials"
    ],
    "variants": [
      {
        "id": "46-1",
        "name": "Standard",
        "price": 3.7,
        "inStock": true
      },
      {
        "id": "46-2",
        "name": "Large",
        "price": 16.93,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.1,
    "reviewCount": 296
  },
  {
    "id": "47",
    "name": "Smoothie",
    "description": "High quality smoothie perfect for daily use.",
    "price": 7.86,
    "originalPrice": 21.75,
    "image": "/images/smoothie.jpg",
    "category": "Beverages",
    "tags": [
      "refreshing",
      "cold",
      "healthy"
    ],
    "variants": [
      {
        "id": "47-1",
        "name": "Standard",
        "price": 2.58,
        "inStock": true
      },
      {
        "id": "47-2",
        "name": "Large",
        "price": 18.9,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.2,
    "reviewCount": 258
  },
  {
    "id": "48",
    "name": "Cherries",
    "description": "High quality cherries perfect for daily use.",
    "price": 7.62,
    "originalPrice": 50,
    "image": "/images/cherries.jpg",
    "category": "Fruits",
    "tags": [
      "fresh",
      "organic",
      "vitamin-rich"
    ],
    "variants": [
      {
        "id": "48-1",
        "name": "Standard",
        "price": 6.72,
        "inStock": true
      },
      {
        "id": "48-2",
        "name": "Large",
        "price": 10.57,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 148
  },
  {
    "id": "49",
    "name": "Mozzarella",
    "description": "High quality mozzarella perfect for daily use.",
    "price": 15.47,
    "originalPrice": 23.46,
    "image": "/images/mozzarella.jpg",
    "category": "Dairy",
    "tags": [
      "calcium",
      "protein",
      "creamy"
    ],
    "variants": [
      {
        "id": "49-1",
        "name": "Standard",
        "price": 5.37,
        "inStock": true
      },
      {
        "id": "49-2",
        "name": "Large",
        "price": 14.21,
        "inStock": true
      }
    ],
    "inStock": true,
    "rating": 3.9,
    "reviewCount": 148
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