const express = require('express');
const router = express.Router();
const body = ([{id: '1',
product: 'box of crackers',
price: '$2.00',
quantity: "3"},
{id: '2',
product: 'cookies',
price: '$3.29',
quantity: "1"},
{id: '3',
product: 'ice cream',
price: '$4.79',
quantity: "3"},]);

router.get ('/cart-items', (req, res) => {
 res.send(body);
});

router.post('/cart-items', (req, res) => {
 res.send(body);
 });

 router.put('/cart-items/:id', (req, res) => {
  res.send(`Added cart item with id ${req.params.id}`);
});

router.delete('/cart-items/:id', (req, res) => {
  res.send(`Deleted cart item with id ${req.params.id}`);
});

 module.exports = router;