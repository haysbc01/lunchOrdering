var auth = require('./controllers/auth'),
    lunch = require('./controllers/lunch');

module.exports = (app) => {

  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });

  app.post('/register', auth.registerUser);
  app.post('/login', auth.loginUser);
  app.get('/me',auth.me);
  app.get('/restaurants',lunch.restaurants);
};