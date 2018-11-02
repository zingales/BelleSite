const express = require('express');
const app = express();

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index');
});


const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});