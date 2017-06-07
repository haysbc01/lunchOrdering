var Restaurants = require('../models/restaurant.schema.js'),
    Order = require('../models/order.schema.js');

module.exports = {
    restaurants : (req,res)=>{
        Restaurants.find(function(err,restaurants){
            if(err){
                console.log(err)
            } else {
                res.send(restaurants)
            }
        })
    },

    placeOrder : (req,res)=>{
        var newOrder = new Order(req.body);
            newOrder.save(function(err,order){
                if(err){
                    console.log(err)
                    res.status(403).send(err)
                } else{
                    res.status(200).send(order)
                }
            })
    }
}

