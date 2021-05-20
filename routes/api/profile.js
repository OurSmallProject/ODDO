const express = require('express');
const router = express.Router();
const passport = require('passport');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const validateProfileInput = require('../../validation/profile');

// GET /api/profile
// fetch the profile
router.get('/', (req, res) => {
  const errors = {};
  user = User.findById('60a6ab2fd6a82d8e2dde0694');
  Profile.findOne(user.id)
    .populate('user', ['name'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(500).json(err));
});

// POST /api/profile
// create profile
router.post('/', (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const profileFields = {};
  user = User.findById('60a6ab2fd6a82d8e2dde0694');
  profileFields.user = user.id;

  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;

  if (typeof req.body.favoriteSport !== 'undefined') {
    profileFields.favoriteSport = req.body.favoriteSport.split(',');
  }

  Profile.findOne(user).then((profile) => {
    if (profile) {
      Profile.findOneAndUpdate(user, { $set: profileFields }, { new: true }).then((profile) => res.json(profile));
    } else {
      Profile.findOne({ handle: profileFields.handle }).then((profile) => {
        if (profile) {
          res.status(400).json({ errors: 'That handle already exists' });
        }
        new Profile(profileFields).save().then((profile) => res.json(profile));
      });
    }
  });
});

// GET /api/profile/user/<:user_id>
// fetch  profile by Id
router.get('/user/:user_id', (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'This user does not exist';
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) => res.status(500).json({ errors: err }));
});

module.exports = router;
