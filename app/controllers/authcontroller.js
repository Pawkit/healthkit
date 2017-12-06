module.exports = {
  signup: function(req, res) {
      res.render('signup');
  },
  signin: function(req, res) {

      res.render('signin', {
        'username': req.user.username
      });

  },
  form: function(req, res) {

      res.render('form');

  },
  logout: function(req, res) {

      req.session.destroy(function(err) {

          res.redirect('/');

      });
}
};
