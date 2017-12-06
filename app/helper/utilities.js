var db = require('../models');

function getUserByUsername(username) {
  if (!username) {
    throw new Error('this doesnt work w/o a username')
  }
  db.User.findOne({ username: username }, function (err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    if (!user.verifyPassword(password)) { return done(null, false); }
    return done(null, user);
  });
}
