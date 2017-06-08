var Order = require('../models/order.schema.js'),
    Restaurant = require('../models/restaurant.schema.js');

module.exports = {
    orders : (req,res)=>{
        Order.find(function(err,orders){
            if(err){
                console.log(err)
            } else {
                res.send(orders)
            }
        })
    },

    newRestaurant : (req,res)=>{
        var newRestaurant = new Restaurant(req.body);
        newRestaurant.save(function(err,restaurant){
            if(err){
                console.log(err)
                res.status(403).send(err)
            } else {
                res.status(200).send(restaurant)
            }
        })
    },

    costPerPerson : (req,res)=>{
        Order.updateMany({date:req.params.id}, {$set:{cost:req.body.cost}}, function(err,results){
            console.log(results)
    });

        Restaurant.update({date:req.params.id}, {$set:{completed:true}}, function(err,results){
                console.log(results)
        });
    }
};


