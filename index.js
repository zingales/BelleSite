const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/painting', (req, res) => {
  res.render('painting');
});

const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

// "/inquiries"
// "/social"
// "/about"
// "/photography"
//
// "/sculpture"
// "/mixedmedia"
// "/shop"
// "/blog"