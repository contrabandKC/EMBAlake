/**
 * Sample data structure for meal planning
 */
export const mealPlanningData = {
  // Sample dietary preferences for users
  dietaryPreferences: [
    {
      user: 'John',
      preferences: {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        nutAllergy: true,
        other: 'Preference for low-carb options'
      }
    },
    {
      user: 'Maria',
      preferences: {
        vegetarian: true,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        nutAllergy: false,
        other: ''
      }
    }
  ],
  
  // Sample meal plans for a weekend
  meals: [
    {
      id: 'friday-dinner',
      date: new Date('2023-07-14'),
      mealType: 'dinner',
      time: '6:30 PM',
      plan: 'potluck',
      location: 'Cabin main area',
      dishes: [
        {
          id: 'dish-1',
          name: 'Grilled Chicken',
          category: 'main',
          contributor: 'John',
          servings: 12,
          dietaryInfo: ['gluten-free'],
          notes: 'Will marinate night before'
        },
        {
          id: 'dish-2',
          name: 'Pasta Salad',
          category: 'side',
          contributor: 'Maria',
          servings: 10,
          dietaryInfo: ['vegetarian'],
          notes: 'Contains cheese'
        }
      ],
      volunteers: ['John', 'Maria'],
      notes: 'Casual dinner after arrival'
    },
    {
      id: 'saturday-breakfast',
      date: new Date('2023-07-15'),
      mealType: 'breakfast',
      time: '8:30 AM',
      plan: 'potluck',
      location: 'Cabin main area',
      dishes: [
        {
          id: 'dish-3',
          name: 'Breakfast Casserole',
          category: 'main',
          contributor: 'John',
          servings: 10,
          dietaryInfo: [],
          notes: 'Contains eggs, cheese, and sausage'
        },
        {
          id: 'dish-4',
          name: 'Fruit Platter',
          category: 'side',
          contributor: 'Maria',
          servings: 12,
          dietaryInfo: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
          notes: 'Assortment of fresh fruits'
        }
      ],
      volunteers: ['John', 'Maria'],
      notes: 'Coffee and juice will be provided'
    },
    {
      id: 'saturday-lunch',
      date: new Date('2023-07-15'),
      mealType: 'lunch',
      time: '12:30 PM',
      plan: 'restaurant',
      location: 'Lakeside Grill',
      dishes: [],
      volunteers: [],
      notes: 'Reservation for 12 people at 12:30 PM',
      restaurantInfo: {
        name: 'Lakeside Grill',
        address: '123 Lake Shore Dr, Lake Ozark, MO',
        phone: '555-123-4567',
        website: 'https://example.com/lakesidegrill',
        menuLink: 'https://example.com/lakesidegrill/menu'
      }
    },
    {
      id: 'saturday-dinner',
      date: new Date('2023-07-15'),
      mealType: 'dinner',
      time: '7:00 PM',
      plan: 'potluck',
      location: 'Cabin patio',
      dishes: [
        {
          id: 'dish-5',
          name: 'BBQ Ribs',
          category: 'main',
          contributor: 'John',
          servings: 12,
          dietaryInfo: ['gluten-free'],
          notes: 'Will need to use the grill'
        },
        {
          id: 'dish-6',
          name: 'Corn on the Cob',
          category: 'side',
          contributor: 'Maria',
          servings: 12,
          dietaryInfo: ['vegetarian', 'gluten-free'],
          notes: 'With butter on the side'
        }
      ],
      volunteers: ['John', 'Maria'],
      notes: 'Outdoor dinner if weather permits'
    },
    {
      id: 'sunday-breakfast',
      date: new Date('2023-07-16'),
      mealType: 'breakfast',
      time: '9:00 AM',
      plan: 'potluck',
      location: 'Cabin main area',
      dishes: [
        {
          id: 'dish-7',
          name: 'Pancakes',
          category: 'main',
          contributor: 'John',
          servings: 10,
          dietaryInfo: ['vegetarian'],
          notes: 'Regular and blueberry options'
        },
        {
          id: 'dish-8',
          name: 'Bacon',
          category: 'side',
          contributor: 'Maria',
          servings: 12,
          dietaryInfo: ['gluten-free', 'dairy-free'],
          notes: 'Will be cooked crispy'
        }
      ],
      volunteers: ['John', 'Maria'],
      notes: 'Last meal before departure'
    }
  ],
  
  // Sample recipe ideas
  recipes: [
    {
      id: 'recipe-1',
      name: 'Lake House Pasta Salad',
      contributor: 'Maria',
      ingredients: [
        '1 lb pasta', 
        '1 cup cherry tomatoes', 
        '1/2 cup olives', 
        '1/4 cup olive oil', 
        '1/4 cup vinegar',
        'Salt and pepper to taste'
      ],
      instructions: 'Cook pasta according to package. Mix all ingredients in a large bowl. Chill for at least 1 hour before serving.',
      dietaryInfo: ['vegetarian'],
      imageUrl: '',
      servings: 8
    },
    {
      id: 'recipe-2',
      name: 'Ozark Trail Mix',
      contributor: 'John',
      ingredients: [
        '2 cups mixed nuts', 
        '1 cup dried cranberries', 
        '1 cup chocolate chips', 
        '1 cup pretzels', 
        '1/2 cup sunflower seeds'
      ],
      instructions: 'Mix all ingredients in a large container. Store in airtight container.',
      dietaryInfo: ['vegetarian'],
      imageUrl: '',
      servings: 12
    }
  ],
  
  // Sample restaurant options
  restaurants: [
    {
      id: 'restaurant-1',
      name: 'Lakeside Grill',
      cuisine: 'American',
      priceRange: '$$',
      address: '123 Lake Shore Dr, Lake Ozark, MO',
      phone: '555-123-4567',
      website: 'https://example.com/lakesidegrill',
      menuLink: 'https://example.com/lakesidegrill/menu',
      notes: 'Great sunset views, reservation recommended',
      votes: ['John', 'Maria']
    },
    {
      id: 'restaurant-2',
      name: 'Tiki Hut Bar & Grill',
      cuisine: 'Seafood',
      priceRange: '$$',
      address: '456 Marina Way, Osage Beach, MO',
      phone: '555-987-6543',
      website: 'https://example.com/tikihut',
      menuLink: 'https://example.com/tikihut/menu',
      notes: 'Casual atmosphere, outdoor seating available',
      votes: ['John']
    }
  ]
}; 