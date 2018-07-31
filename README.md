# The Chef App

This app is for chefs or anyone that likes to cook! When a user logs in, he/she will be directed to the post a dish page.
Once here, the user must add ingredients, followed by the dish name, and finally the user must select a category for the dish.
If no category applies, simply select none-apply, and then the user is all set! Then the user will be asked to select a picture for their dish! 

The dishes will appear in the following categories: vegeterian, vegan, gluten free, dairy free, and meats. The app will categorize your dishes for you!

Check the app out here: https://chef-app-client.herokuapp.com/

## Requirements
* Create a client prototype that allows non-technical users to do something interesting or valuable with the API.
* Serve static files: The server, in addition to offering a REST API, will need to serve your client and any other static assets (for instance, images).
* Implement a REST API with all four CRUD operations.
* Comprehensive Tests for the API Layer: Each API endpoint should have test coverage.
* Use Continuous Integration.
* The final version should work on both mobile and desktop.
* Accessibility: The final version of your app must follow a11y best practices.

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
