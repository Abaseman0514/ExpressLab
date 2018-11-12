const express = require('express');
const shop = require('./cart-items');
const app = express();
const port = 8888;

app.use(express.json());

//^^this is how you access the front end files -- if you don't add this line, it won't talk to the front-end
app.use ('/', shop);

app.listen(port, () => console.log(`Server up and running on localhost: ${port}`));