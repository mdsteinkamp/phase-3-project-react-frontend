# Mock Life Insurance User Interface - Front End
This application uses React as a front end interface with Sinatra back end to simulate a database portal. This is a Single Page Application using React Router 


## Installation
The Sinatra back end must be started up first at https://github.com/mdsteinkamp/phase-3-project-sinatra-backend. Once the backend project is pulled run ```rake server``` in node to start the server. Then in node, run ```npm start``` to open the the React app in the browser

## Usage

When loaded the application first fetches some randomly generated user and policy info from the backend database. As the focus for this project was becoming familiar with Active Record & Sinatra, the following pages are avaialable:

* View Clients - Loads all clients and some info, with an option to remove client form the backend and to View Client Policies in our database

* Clicking View Client Policies brings a page with all policy info rendered and an Edit Policy button which updates the state info of the policy

* Add Client - Controlled from to add a Client to the backend

* Total Insurance - Uses Active Record query to sum the total insurance amount in the database & render to the page. (This needs logic to calculate only if a policy is in an Active/In Force status)