const express = require('express');
const app = express();

//Configurar donde se encuentran las vistas
app.set('views', __dirname + '/views');
//Configurar HBS como moto de visualización
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

  let data = {
    name: "Teo",
    bootcamp: "IronHack WebDev",
    isTeacher: true,
    // address: "Madrid"
    address: {
      street: "fake Street",
      city: "Madrid",
      country: "Spain"
    },
    students: [{ name: "Raul", age: 20 }, { name: "Jesús" }, { name: "Lisa" }, { name: "Alex" }]
    // students: []

  };

  res.render('index', data);
})

app.listen(3000);
