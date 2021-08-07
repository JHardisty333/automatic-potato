const router = require('express').Router();
const { Newsfeed, User, Newsupdate } = require("../../models");

// GET /api/calendar
router.get('/', (req, res) => {
    Newsfeed.findAll({
        attributes: ['id', 'newsfeed_url', 'message', 'name'],
        order: [['name', 'DESC']],
        include: [
            {
                model: Newsupdate,
                attributes: ['id', 'newsupdate_text', 'newsfeed_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
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
        },
        attributes: ['id', 'newsfeed_url', 'message', 'name'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
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
        message: req.body.message,
        newsfeed_url: req.body.newsfeed_url,
        user_id: req.body.user_id
    })
        .then(dbNewsfeedData => res.json(dbNewsfeedData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Newsfeed.update(
        {
            name: req.body.name,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbNewsfeedData => {
        if(!dbNewsfeedData) {
            res.status(404).json({ message: 'No name or message found with this id' });
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