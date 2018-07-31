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
 ![image](https://user-images.githubusercontent.com/18128525/39194207-cc4194ac-47a2-11e8-9a32-06630e403276.png)
 ![image](https://user-images.githubusercontent.com/18128525/39194306-0aa27202-47a3-11e8-8fd2-7a1a01919d32.png)
 ![image](https://user-images.githubusercontent.com/18128525/39194420-52966334-47a3-11e8-92c1-abaf737f2c1f.png)
 ![image](https://user-images.githubusercontent.com/18128525/39194841-25152dd6-47a4-11e8-9ec3-9fe7aa80113d.png)

## API Documentatiom
   ### Playlist attributes
   * Song (String)
   * Artist (String)
   * Genre (String)
   ### GET all songs
   * ${Base url}/api/playlist
   ### POST a song
   * ${Base url}/api/playlist
   * Takes a song, artist, and genre as parameters
   ### DELETE a song
   * ${Base url}/api/playlist/${id}
   ### UPDATE a song
   * ${Base url}/api/playlist/${id}

## Technology used
* JavaScript
* CSS
* HTML
* JQuery
* Express
* Node.js

## Future Components
* Search bar
* Login page
* Multiple playlists
* Play songs/videos
* Pictures of artists
* Get concert tickets
