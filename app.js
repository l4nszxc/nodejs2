const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static('Public'));
app.use(express.static('Public2'));

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
