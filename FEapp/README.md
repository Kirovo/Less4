                              README
________________________________________________________________

# Introduction
The following work respond to the project of the course : 
"Angular Fundamentals" of the "Full Stack Javascript Developer" 
Nanodegree Program.

The project consist in creating a web interface for an online shopping
platform. In this case certain elements has to appear as an home page
displaying products, a cart to gather choices, details about products
and a page to validate a fictive purchase. 

The workspace include several actions required to review the work:
-Scaffold the application
-Run and navigate throught the web interface
-Read the code


# Scaffold the application

After pulling the repository of the project and openning it on your 
code editor. You need to acceed to application folder and then
initiate it. To do that, you need to execute the following commands

> cd FEapp
> npm install

that's it !

# Web interface

After scaffolding the application, we can now run it into a browser.
To do so, you will need to serve the application and then access to it.

For example to serve the application:
> ng serve --port 1000

Then on the address field of your browser type:
> localhost:1000

You should then be able to see an interact with the application

# The Code
## Components

The code is written thanks to various Angular components :

The app component is parent of product-list component being the main page 
of the store and the cart component dealing mostly with orders

product-list is parent with the product component wich retrieve datas from
the data.json file in the assets and give a template to show them.

with no parent link, detail give informations when you click on the image
of the chosen product

cart is compose of both product-summary and checkout, wich are respectivly
the list of all the chosen products and the form to complete to the order 

with no parent link, succes is the sucess page showing when every informations
are correctly filled up and the submit button have been pressed.

## Services

To make components communicate throught data and functions,
the application use several services.

product-store service allow product component to get data with an HttpClient

product-receiver service interact with the order list and gather informations
like name used in the checkout form and the total of the order to show them
in the sucess screen when completed

and product-show service is used to bring data to the detail component

# Conclusion

The project was exciting, i have enjoyed working on a more personalizable
and desing friendly interface. I did my best to make this work clear enough to be read. 
I hope you will like it. Have a nice review.
