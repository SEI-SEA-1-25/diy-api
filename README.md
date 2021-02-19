# DIY API

## **Deliverable**:

It's time to make your own API! 

Using what you have learned about Express, Express Routing, RESTful routing, CRUD operations, and Sequelize, use the Sequelize ORM to implement full CRUD functionality on a model (subject of your choosing).

-----

## **Requirements**: 

1. Choose a model that you'd like to build an api about! The model you choose to use should have at least three fields, as well an id field.

*Example:*

| column name | type |
|:-----------:|:----:|
|id | integer |
|createdAt | timestamp |
|updatedAt | timestamp |
|name | text |
|wodgets | integer |
|quantity | integer |


2. Your API should be accessible via five routes: 

| Method | Nickname | URL | Functionality |
|--------|:------:|:---:|:--------------|
| GET | index | /widgets | list all widgets |
| POST | create | /widgets | add a widget |
| GET | detail/show | /widgets/:id | show one widget |
| PUT | update | /widgets/:id | update one widget |
| DELETE | delete | /widgets/:id | delete one widget |

-------

## **Steps to Achieve**

**You will need to:**
1. Fork and clone this repository!
1. Run `npm init` to start your node project. 
1. Create a `.gitignore` and add everything to ignore
1. Set up Sequelize, create your tables & models
1. Set up your Express App, create your routes

**Recommended Workflow:**
1. Declare your model and migrate.
1. Stub out your routes, write them `res.send("test")` for initial decleration.
1. Link your model to your server.
1. Update your routes and make the magic happen!

-------

## Bonus:
Add a second model to your API. This model should be a parent to your first model via a 1:M relationship. For example: if your first model was `books`, your second model might be `libraries`. A library would haveMany books, and each book would belong to 1 library.

Add two new routes:

| Method | URL | Functionality |
|--------|:---:|:--------------|
| GET | /parents/:id/children | list all children of the parent with the given id |
| POST | /parents/:id/children | create a new child that belongs to the parent with the given id |

Once you have these routes, your server file will contain Too Many Routes, and the clutter level will be too high. Move the original 5 children routes into a controller, and move the 2 new parent routes into a separate controller.
