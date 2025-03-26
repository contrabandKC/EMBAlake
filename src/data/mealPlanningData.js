// Sample meal planning data for the EMBA Lake Trip
export default {
  dietaryPreferences: [
    {
      name: "John",
      preferences: ["vegetarian", "gluten-free"]
    },
    {
      name: "Maria",
      preferences: ["vegan", "nut-allergy"]
    }
  ],
  meals: [
    {
      id: "1",
      date: "2025-05-23",
      mealType: "dinner",
      time: "18:00",
      plan: "potluck",
      dishes: [
        {
          name: "Grilled Vegetables",
          contributor: "John",
          servings: 8,
          dietary: ["vegetarian", "vegan", "gluten-free"]
        }
      ],
      volunteers: ["John", "Maria"],
      notes: "Please bring your own drinks"
    }
  ],
  recipes: [
    {
      id: "1",
      name: "Lake-Side Pasta Salad",
      ingredients: [
        "1 lb gluten-free pasta",
        "2 cups cherry tomatoes",
        "1 cucumber",
        "1/2 cup olive oil",
        "Fresh herbs"
      ],
      instructions: [
        "Cook pasta according to package instructions",
        "Chop vegetables",
        "Mix ingredients with olive oil and herbs"
      ],
      dietary: ["vegetarian", "gluten-free"],
      servings: 8
    }
  ],
  restaurants: [
    {
      id: "1",
      name: "Lake View Grill",
      cuisine: "American",
      priceRange: "$$",
      address: "123 Lake Street, Lake of the Ozarks",
      notes: "Great for group dining, lake view"
    }
  ]
}; 