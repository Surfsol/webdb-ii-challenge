1. npm install knex
npm install sqlite3 express helmet

git init 
npm init -y
2. knex init 

most companies have 3 environments:
development 
staging
production
- maybe start with sqlite, then production use postgresql

Changes database Knex

 4. development: {
     //client -> db driver
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  to 
   development: {
     //client -> db driver
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    }
    //required or will get error
    useNullAsDefault: true
  },


5. npm i pg

production: {
    client: 'pg', //changed to pg , npm i pg
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },


6. fruits-router
// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });
//replace above with
const knexConfig = require('../knexfile.js')  
//brought in entire object from knexfile
//so grab development key
const db = knex(knexConfig.development)


knex //gives you a list of commands for knex

7. knex migrate:make add_cars_table
-by default will run in development
- heroku is set to run in production 
- creates migration folder and file with timestamp
- file timestamp - every database scheme change should be done by migration
will give you a record 

8. refer to migrations folder, timestamp file.
made changes to schema 

9. knex migrate:latest  //multiple migrations
knex migrate:up
- will run migrations in timestamp file
- can go back in time to previous timestamps

10. to delete produce.db3
- if you dont have db, it will be created automatically
a. disconnect it from sqlite studio
b.close sql studio
c. delete

11. knex migrate:down
- after delete, ran again

12. Add color to geese 

13. want to change schema
knex migrate:make add_goose_color
- will add a migration file
- create new colum in migration file

return knex.schema.table('geese', tbl => {
    tbl.string('color', 48)
})

return knex.schema.table('geese', tbl => {
    tbl.dropColumn('color')
})

14. knex migrate:latest

//go back, roll back last migration
if havent pushed to github
15. knex migrate:down

Add data
//will add file under seeds
16. knex seed:make 001-geese

17. change table name in 2 places
to geese

//.del() deletes all records first
return knex('geese').del()
    .then(function () {
      // Inserts seed entries
      return knex('geese').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}

18. then change names
        {name: 'Ben Aflack', color: 'white'},
        {name: 'Goose Bumps', color: 'white'},
        {name: 'Goose', color: 'white'}

19. knex seed:run



  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3' //updated - connect to db
    },
    useNullAsDefault: true //added
  },