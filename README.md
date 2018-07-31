# The Chef App

This app is for chefs or anyone that likes to cook! When a user logs in, he/she will be directed to the post a dish page.
Once here, the user must add ingredients, followed by the dish name, and finally the user must select a category for the dish.
If no category applies, simply select none-apply, and then the user is all set! Then the user will be asked to select a picture for their dish! 

The dishes will appear in the following categories: vegeterian, vegan, gluten free, dairy free, or meats. This makes it easier for chefs to keep their dishes up to date, and makes it easier to accommodate guests! This app will keep track of all the dishes!

Check the app out here: https://chef-app-client.herokuapp.com/

## Requirements
* Do something interesting or useful
* Be a fullstack app using HTML, CSS, React, Node, Express, and Mongoose (or the stack you've agreed on with your mentor and program manager).
* Both client- and server-side code should be tested, and you should use TravisCI for continuous integration and deployment.
* Your app should be responsive, and should work just as well on mobile devices as it does on desktop devices.
* All code should be high quality, error free, commented as necessary, and clean. When a hiring manager looks at your code, you want them to think "This person has great coding habits".
* The styling on your client should be polished. That means choosing fonts and colors that make sense, correctly sizing different components, and ensuring that it looks great on both mobile and desktop devices.
* You should have a comprehensive README.md file on your GitHub repo that clearly explains the project (we'll discuss this step in detail at the end of this lesson).
* Your app should have a landing page that explains what the app does and how to get started, in addition to pages required to deliver the main functionality.
* You must deploy a live, publicly-accessible version of your app.
* You should set up a demo user account and indicate on the landing page how to use it.

## Screenshots
 ![image](https://user-images.githubusercontent.com/18128525/43462848-cb1ac958-949c-11e8-9eb5-23747c992f1a.png)
 ![image](https://user-images.githubusercontent.com/18128525/43462927-fc40962a-949c-11e8-9eb7-6d2d107d3aa8.png)
 ![image](https://user-images.githubusercontent.com/18128525/43462967-0e7ce000-949d-11e8-8ccf-14741fff1c65.png)
 ![image](https://user-images.githubusercontent.com/18128525/43463041-461172e2-949d-11e8-9a3d-39a770628d16.png)
 ![image](https://user-images.githubusercontent.com/18128525/43463097-6b7ac484-949d-11e8-99ee-e4b708fccc27.png)
 ![image](https://user-images.githubusercontent.com/18128525/43463105-7373d126-949d-11e8-8bc4-75d8cc3f0b32.png)
 ![image](https://user-images.githubusercontent.com/18128525/43463156-8fe11f4e-949d-11e8-93cd-a32cef782a37.png)

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
