
Running Feathers on windows, remember to escape the username field in
default.json (feathers system envi config)
The problem was actually that I had an env variable called "USERNAME" on windows and it messed up with feathers.js on runtime. Problem solved by escaping the "username" value with "\" in my default.json file (so "usernameField": "\\username").

On Heroku, you need to remove this escaping, or else authentication will break


$feathers g service
Disable logic from models for table creation
$knex migrate:make create-list
Modify knex migration table
Run migration 
Seed (optional)
