var auth = require('./controllers/auth'),
    lunch = require('./controllers/lunch'),
    admin = require('./controllers/admin');

module.exports = (app) => {

  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });

  app.get('/getMyOrders/:id', lunch.getMyOrders, (req,res)=>{
    res.send(req.params.data)
    });

  app.post('/register', auth.registerUser);
  app.post('/login', auth.loginUser);
  app.get('/me',auth.me);
  app.get('/orders',admin.orders);
  app.get('/restaurants',lunch.restaurants);
  app.post('/getMyOrders',lunch.getMyOrders);
  app.post('/placeOrder',lunch.placeOrder);
  app.post('/newRestaurant',admin.newRestaurant);
  app.put('/costPerPerson:id',admin.costPerPerson);
};