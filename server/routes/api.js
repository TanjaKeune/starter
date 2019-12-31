const express = require('express');
const router = express.Router();
const items = [
    {
        id: 1,
        name: 'Lego',
        count: 4
    },
    {
        id: 2,
        name: 'barbie',
        count: 10
    },
    {
        id: 3,
        name: 'book',
        count: 11
    },
    {
        id: 4,
        name: 'game',
        count: 3
    },
    {
        id: 5,
        name: 'hello kitty',
        count: 13
    }
]
/* GET api listing. */
router.get('/items', (req, res) => {
  res.send(items);
});

router.get('/items/:id', (req, res) => {
    const id = req.params.id
    res.send(items.find(item => item.id = id));
  });

module.exports = router;
