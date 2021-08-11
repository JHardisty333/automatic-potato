const router = require('express').Router();
const sequelize = require('../config/connection');
const { Newsfeed, User, Newsupdate } = require('../models');


router.get('/', (req, res) => {
  console.log(req.session);

    Newsfeed.findAll({
      attributes: [
        'id',
        'newsfeed_url',
        'name',
        'message',
        'created_at'
      ],
      include: [
        {
          model: Newsupdate,
          attributes: ['id', 'newsupdate_text', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attirbutes: ['username']
        }
      ]
    })
      .then(dbNewsfeedData => {
        console.log(dbNewsfeedData[0]);
        const posts = dbNewsfeedData.map(post => post.get({ plain: true }));
        
        res.render('homepage', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/', (req, res) => {
    console.log(req.session);
  })

  // router.get('/post/:id', (req, res) => {
  //   const post = {
  //     id: 1,
  //     newsfeed_url: 'https://google.com/',
  //     name: 'Handlebars Docs',
  //     created_at: new Date(),
  //     comments: [{}, {}],
  //     user: {
  //       username: 'test_user'
  //     }
  //   };
  
  //   res.render('single-post', { post });
  // });

  // router.get('/post/:id', (req, res) => {
    // Newsfeed.findOne({
      // where: {
      //   id: req.params.id
      // },
      // attributes: [
        // 'id',
        // 'newsfeed_url',
        // 'name'                
      // ],
      // include: [
        // {
          // model: Newsupdate,
          // attributes: ['id', 'newsupdate_text', 'newsfeed_id', 'user_id'],
          // include: {
            // model: User,
            // attributes: ['username']
          // }
        // },
        // {
          // model: User,
          // attributes: ['username']
        // }
      // ]
    // })
      // .then(dbNewsfeedData => {
        // if (!dbNewsfeedData) {
          // res.status(404).json({ message: 'No post found with this id' });
          // return;
        // }
  
        // serialize the data
        // const post = dbNewsfeedData.get({ plain: true });
  
        // pass data to template
        // res.render('single-post', { post });
      // })
      // .catch(err => {
        // console.log(err);
        // res.status(500).json(err);
      // });
  // });

module.exports = router;