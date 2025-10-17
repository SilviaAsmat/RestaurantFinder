# RestaurantDiscovery

A Ruby on Rails API with a React front end that uses the Google Places API to let the user search for restaurants.

## Getting Started
### Install Ruby on Rails and React
Rails 8.0.3, ruby 3.4.6, and react 19.2.0 were used --- follow the guides to install on your local machine
https://guides.rubyonrails.org/install_ruby_on_rails.html

https://react.dev/learn/installation
### Dependencies
Used  rack-cors -v 2.0.2 for cross-domain requests.
```
gem install
```
```
bundle install
```
Used @mui/material @emotion/react @emotion/ to use exisitng common components.

Used react-router-dom for routing capabilities.
```
npm install 
```

### Installing

Clone the repository and in this file 

```RestaurantDiscovery/restaurant-discovery-api/config/environments/development.rb```

Add your google places api key:

```config.google_places_api_key = YOUR_API_KEY```

### Executing program


* In the terminal, navigate to ```restaurant-discovery-api```
  * Run
    ```
    rails server
    ```
  * The server will run on localhost:3000
* Navigate to ```restaurant-discovery-frontend```
  * Run
    ```
    npm install
    ```

    then
   
    ```
    npm start
    ```
  * The frontend will run on localhost:3002

## Learnings

* Integration
  * The communication is all done via async network requests, that was pretty different than what I'm familiar with.
  * Besides making sure that the data rendered correctly, I also had to make sure that the error messages were being handled correctly and displayed in the frontend.
* Postman
  * I was able to use Postman to test my api as I was building it. I learned what a great tool it is to test endpoints and mess around with the parameters. 
* Authorization
  * I never did a user/login flow before, so it was interesting to see how many different use cases need to be taken care of. Like empty strings, pre-existing users, and mismatching passwords.
  * From doing research, there are many different ways to do authentication, but I decided to keep it simple. I learned the importance of a proper auth flow.
  * I saw firsthand how important it is to not expose user information.
* Ruby on Rails
  * I learned gems are whats used to install dependencies, and that there is a huge community for ruby gems.
  * Ruby syntax was very different from what I am used to, so it took a while to understand. I fell back on what I knew of python syntax since it felt similar and referenced docs for things like mapping.
  * Ruby and Javascript don't have the type safety that I am used to and it has its pros and cons. The main pro being that it is very fast to build but with the main con being that nothing is enforcing the properties.
  * Debugging was a bit of a learning curve, I learned how to log to the console and terminal to read errors and identify what was causing a bug.
* MVC Framework
  * I spent a good portion of my time in the controllers. Which makes sense since this is where the data is fetched and massaged.
  * Rails has very clear separation of concerns. I became familiar with how the different parts talked to each other and the data flows.  
* React
  *  I had difficulty using and creating my own hooks. I now understand how it is used to "hook" into a state and how that state gets updated.
  *  React itself also has architecture to it, in a nutshell, my components would render state from my custom hook and my custom hook would fetch data from the ruby on rails api.
  *  My familiarity with HTML and CSS helped me draw the components in the way I visualized. It was fairly simple to understand the use of html tags in React.
* Testing
  * I found it easy to write a test for the user controller. The test fixtures pre-populated the database with dummy data, which made testing existing users easy.
* Future Projects
  * Now that I have more experience and a deeper understanding of what it takes to spin up a ruby on rails api and react frontend, I realize that this is a fairly fast way to setup a website.
  * If I'm working on a client and I need to mock network request, I could easily create a rails api and test my client against it.
  * I already have a mobile app that fetches movie data from a restful api, so now I plan on building a react frontend using the same api to complement it.
    I would like to add users so that the data on the device and the server can be the same.

## Author
Silvia Asmat  
