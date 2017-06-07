var Restaurants = require('../models/restaurant.schema.js');

module.exports = {
    restaurants : (req,res)=>{
        Restaurants.find(function(err,restaurants){
            if(err){
                console.log(err)
            } else {
                res.send(restaurants)
            }
        })
    }
}