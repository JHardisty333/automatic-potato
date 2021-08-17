const router = require('express').Router();
const { Newsupdate } = require('../../models');

router.get('/', (req, res) => {
    Newsupdate.findAll()
        .then(dbNewsupdateData => res.json(dbNewsupdateData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    if (req.session) {
    Newsupdate.create({
        newsupdate_text: req.body.newsupdate_text,
        user_id: req.body.user_id,
        newsfeed_id: req.body.newsfeed_id
    })
        .then(dbNewsupdateData => res.json(dbNewsupdateData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', (req, res) => {
    Newsupdate.destroy({
        where: {
            id: req.params.id
        }
    })
     .then(dbNewsupdateData => {
        if (!dbNewsupdateData) {
            res.status(404).json({ message: 'No update found with this id' });
            return;
        }
        res.json(dbNewsupdateData)
     })
     .catch(err => {
         console.log(err);
         res.status(500).json(err);
     });
});

module.exports = router;