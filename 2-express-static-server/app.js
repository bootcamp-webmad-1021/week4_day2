const express = require('express');
const port = 3000
// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));


app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home-page.html')
});


app.get('/cat', (request, response, next) => {
  response.sendFile(__dirname + '/views/cat-page.html')
});

app.get("/teams", (req, res) => {

  

  response.sendFile(__dirname + '/views/teams-page.html')
})


app.listen(port, () => {
  console.log('My first app listening on port 3000!')
});