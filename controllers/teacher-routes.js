// const express = require('express');
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Newsfeed, User, Newsupdate } = require('../models');


router.get('/', (req, res) => {
    Newsfeed.findAll({
      attributes: [
        'id',
        'newsfeed_url',
        'name',
        'message'
      ],
      include: [
        {
          model: Newsupdate,
          attributes: ['id', 'newsupdate_text', 'newsfeed_id'],
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
    res.render('login');
  });

module.exports = router;