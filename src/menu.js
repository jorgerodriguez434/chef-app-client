import * as ingredients from "./constants/ingredients.constants";

export const fatpourBurger = {
  name: "Fatpour Burger",
  type: "burger",
  category: "meat",
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
  hasDairy: true,
  hasEgg: true,
  glutenItems: [ingredients.FRIED_ONION, ingredients.TEXAS_TOAST],
  availableAsGlutenFree: true,
  meatItems: [ingredients.BEEF, ingredients.BACON],
  dairyItems: [ingredients.MERKTS_CHEDDAR_CHEESE],
  eggItems: ingredients.FRIED_EGG,
  image:
    "http://www.fatpourchicago.com/files/2016/08/Fatpour_2016_003-1200x800.jpg"
};

export const badgerBurger = {
  name: "Badger Burger",
  type: "burger",
  category: "meat",
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
  hasDairy: true,
  hasEgg: false,
  glutenItems: [ingredients.FRIED_ONION, ingredients.BUN],
  availableAsGlutenFree: true,
  meatItems: [ingredients.BEEF, ingredients.PORK_BELLY],
  dairyItems: ingredients.CHEESE_CURDS,
  eggItems: "none",
  image:
    "http://www.fatpourchicago.com/files/2016/08/Fatpour_2016_023-768x512.jpg"
};

export const blackhawkBurger = {
  name: "Blackhawk Burger",
  type: "burger",
  category: "no-meat",
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
  hasGluten: false,
  hasMeat: false,
  hasDairy: false,
  hasEgg: true,
  glutenItems: ingredients.BUN,
  meatItems: ingredients.NO_MEAT,
  dairyItems: ingredients.NO_DAIRY,
  eggItems: ingredients.PARMESAN_MAYO,
  image:
    "https://photos-6.dropbox.com/t/2/AADs2NTtJt0nS1baRjOh_eYJt-CHfpMYJXCbyatL4923mA/12/562285687/jpeg/32x32/1/_/1/2/blackhawk-burger.JPG/ELHXksEEGAMgAigC/REw5IaDd122urAmJlIaUgXMjAzuOEG7DrR1naKT2QSE?size=2048x1536&size_mode=3"
};

export const wings = {
  name: "Grilled Wings",
  type: "traditional wings",
  category: "no-gluten",
  ingredients: [
    ingredients.PARMESAN_MAYO,
  ],
  hasGluten: false,
  hasMeat: true,
  hasDairy: true,
  hasEgg: false,
  glutenItems: ingredients.NO_GLUTEN,
  meatItems: ingredients.NO_MEAT,
  dairyItems: ingredients.BUTTER,
  eggItems: ingredients.NO_EGG,
  image: "https://d1725r39asqzt3.cloudfront.net/fdb14745-6478-4cbd-b11e-c9af859367f4/orig.jpg"
};
