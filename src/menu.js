import * as ingredients from "./constants/ingredients.constants";

export const fatpourBurger = {
  name: "Fatpour Burger",
  ingredients: [
    ingredients.BEEF,
    ingredients.MERKTS_CHEDDAR_CHEESE,
    ingredients.TOMATO,
    ingredients.FRIED_ONION,
    ingredients.PICKLED_JALAPENOS,
    ingredients.TEXAS_TOAST,
    ingredients.LETTUCE,
    ingredients.BLACK_PEPPER_TRUFFLE_AIOLI,
    ingredients.FRIED_EGG,
    ingredients.BACON
  ],
  hasGluten: true,
  hasMeat: true,
  hasCheese: true,
  glutenItems: [ingredients.FRIED_ONION, ingredients.TEXAS_TOAST],
  meatItems: [ingredients.BEEF, ingredients.BACON],
  cheeseItems: [ingredients.MERKTS_CHEDDAR_CHEESE],
  image:
    "http://www.fatpourchicago.com/files/2016/08/Fatpour_2016_003-1200x800.jpg"
};

export const badgerBurger = {
  name: "Badger Burger",
  ingredients: [
    ingredients.BEEF,
    ingredients.PORK_BELLY,
    ingredients.CHEESE_CURDS,
    ingredients.LETTUCE,
    ingredients.FRIED_ONION,
    ingredients.FATPOUR_SAUCE
  ],
  hasGluten: true,
  hasMeat: true,
  hasCheese: true,
  glutenItems: [ingredients.FRIED_ONION, ingredients.BUN],
  meatItems: [ingredients.BEEF, ingredients.PORK_BELLY],
  cheeseItems: [ingredients.CHEESE_CURDS],
  image:
    "http://www.fatpourchicago.com/files/2016/08/Fatpour_2016_023-768x512.jpg"
};

export const blackHawkBurger = {
  name: "Blackhawk Burger",
  ingredients: [
    ingredients.BEET_ROOT,
    ingredients.QUINOA,
    ingredients.MUSHROOM,
    ingredients.WALNUT,
    ingredients.LETTUCE,
    ingredients.TOMATO,
    ingredients.PICKLED_RED_ONIONS,
    ingredients.CUCUMBER,
    ingredients.PARMESAN_MAYO
  ],
  hasGluten: true,
  hasMeat: false,
  hasCheese: false,
  glutenItems: ingredients.BUN,
  meatItems: ingredients.NO_MEAT,
  cheeseItems: ingredients.NO_CHEESE,
  image:
    "https://photos-6.dropbox.com/t/2/AADs2NTtJt0nS1baRjOh_eYJt-CHfpMYJXCbyatL4923mA/12/562285687/jpeg/32x32/1/_/1/2/blackhawk-burger.JPG/ELHXksEEGAMgAigC/REw5IaDd122urAmJlIaUgXMjAzuOEG7DrR1naKT2QSE?size=2048x1536&size_mode=3"
};
