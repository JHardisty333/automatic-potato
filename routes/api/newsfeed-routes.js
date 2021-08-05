const router = require('express').Router();
const { Newsfeed } = require('../../models');

// GET /api/calendar
router.get('/', (req, res) => {
    Newsfeed.findAll()
    .then(dbNewsfeedData => res.json(dbNewsfeedData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Newsfeed.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbNewsfeedData => {
            if (!dbNewsfeedData) {
                res.status(404).json({ message: 'No name found with this id' });
                return;
            }
            res.json(dbNewsfeedData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Newsfeed.create({
        name: req.body.name,
        message: req.body.message
    })
        .then(dbNewsfeedData => res.json(dbNewsfeedData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Newsfeed.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbNewsfeedData => {
        if(!dbNewsfeedData[0]) {
            res.status(404).json({ message: 'No name found with this id' });
            return;
        }
        res.json(dbNewsfeedData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Newsfeed.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbNewsfeedData => {
        if (!dbNewsfeedData) {
          res.status(404).json({ message: 'No name found with this id' });
          return;
        }
        res.json(dbNewsfeedData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;