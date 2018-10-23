# The Chef App

This app is for chefs or anyone that likes to cook! When a user logs in, he/she will be directed to the post a dish page.
Once here, the user must add ingredients, followed by the dish name, and finally the user must select a category for the dish.
If no category applies, simply select none-apply, and then the user is all set! Then the user will be asked to select a picture for their dish! 

The dishes will appear in the following categories: vegeterian, vegan, gluten free, dairy free, or meats. This makes it easier for chefs to keep their dishes up to date, and makes it easier to accommodate guests! This app will keep track of all the dishes!

Check the app out here: https://chef-app-client.herokuapp.com/

## Screenshots
 ![image](https://user-images.githubusercontent.com/18128525/43462848-cb1ac958-949c-11e8-9eb5-23747c992f1a.png)
 ![image](https://user-images.githubusercontent.com/18128525/43462927-fc40962a-949c-11e8-9eb7-6d2d107d3aa8.png)
 ![image](https://user-images.githubusercontent.com/18128525/43462967-0e7ce000-949d-11e8-8ccf-14741fff1c65.png)
 ![image](https://user-images.githubusercontent.com/18128525/43463041-461172e2-949d-11e8-9a3d-39a770628d16.png)
 ![image](https://user-images.githubusercontent.com/18128525/43463097-6b7ac484-949d-11e8-99ee-e4b708fccc27.png)
 ![image](https://user-images.githubusercontent.com/18128525/43463105-7373d126-949d-11e8-8bc4-75d8cc3f0b32.png)

## API Documentatiom
   ### Dish attributes
   * name (String)
   * ingredients (Array)
   ### GET all dishes
   * ${Base url}/api/dishes
   ### POST a dish
   * ${Base url}/api/dishes
   * Takes a ingredients and dish name as parameters
   ### DELETE a dish
   * ${Base url}/api/dishes/${id}
   ### UPDATE a dish
   * ${Base url}/api/dishes/${id}

## Technology used
* JavaScript
* CSS
* HTML
* Express
* Node.js
* React
* Mongoose

## Future Components
* Search bar
* Post-a-sauce page
