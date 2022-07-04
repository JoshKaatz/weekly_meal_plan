// recipes
const recipesChicken = [
    'Chicken Barrbery',
    'Chicken Rice Peas',
    'BBQ Chicken Salad',
    'Chicken Leek Soup',
    'Chicken and Broccoli',
    'Matzo Ball Soup',
    'Chicken Makhani',
]

const recipesOther = [
    'Pasta with Meat Sauce',
    'Pot Roast',
    'White Bean Prosciutto Soup',
    'Beef and Broccoli',
    'Risotto Shrimp and Asparagus',
]

const recipesVeggies = [
    'Eggplant Lasagna',
    'Vegetable and Chickpea Stew',
    'Cheesy Cauliflower Bake',
    'Coconut Lentil Curry',
    'Moroccan Lentil and Chickpea Soup',
    'Cheesy Potato Soup'
]

// array to hold weeks meals
const meals = [];

// function to choose random meals
function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    };

const randomMeals = () => {
    meals.push(getRandomItem(recipesChicken))
    meals.push(getRandomItem(recipesOther))
    meals.push(getRandomItem(recipesVeggies))
    const chicken2 = () => {
        meals.push(getRandomItem(recipesChicken))
        if (meals[0] === meals[3]) {
            meals.splice(3,1);
            chicken2()
        };
    }
    chicken2()
    }


// function to randomize meal array
function shuffle() {
    for (let i = meals.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [meals[i], meals[j]] = [meals[j], meals[i]]
    }
}

// function to output meal plan
const mealPlan = () => {
    randomMeals()
    shuffle()
    console.log('This weeks meal plan is ... Monday: ' + meals[0] + ' | Tuesday: ' + meals[1] + ' | Wednesday: ' + meals[2] + ' | Thursday: ' + meals[3] + ' | Friday: eat out at Thai')
}

mealPlan()