# OneSpace Lunch App

> I created this app using the MEAN Stack of Javascript. On the front end I used HTML and AngularJS along with some simple CSS and Bootstrap. I am running a NodeJS server along with ExpressJS and a MongoDB database to store users, orders, and restaurant options. I deployed the app through Digital Ocean, it is running on a remote server in New York. It can be accessed at http://104.236.234.111.

## How to use/test

### Via the website
    1. visit http://104.236.234.111
    2. Login - I have input some sample data with an administrator and a couple of sample users
        - Sample users
            - brian@this.com (password: brian), tom@this.com (password: tom)
                - After logging in as one of these users you can do the following:
                    - view restaurant options (sorted by date)
                    - view menus for restaurants
                    - place orders for given restaurants
                    - view past orders and pricing
                    - view outstanding balance

        - Admin Login - I created the app so that the admin has different access than the rest of the users.
            - Username: admin@admin.com
            - Password: admin
                - When logged in as the admin you can do the following:
                    - input new restaurants (with field for menu url and date)
                    - input prices for orders (which is divided added to the orders in Mongo)
                    - view and print orders

### Via GitHub repository
    1. Run git clone https://github.com/haysbc01/lunchOrdering.git
    2. Run npm install to install all 'node modules'
    3. Start server
        - run with 'node server.js'
            - you will have to set the port as it is set to run on port 80 or whatever port you set in your terminal
    4. Once running
        - Creating an `admin` profile
            - When registering input `admin` into the name field
            - the email and password do not matter but password has to be confirmed
        - input new restaurants
            - there will be no data in the database so the restaurant info will have to be added before seeing anything on the user profiles

        - Create a user
            - this can have any name, email, and password

            - After creating an account you can do the following:
                    - view restaurant options (sorted by date)
                    - view menus for restaurants
                    - place orders for given restaurants
                    - view past orders and pricing
                    - view outstanding balance


# Enjoy. If you have any questions email me at haysbc01@gmail.com or call me at 260-578-6006