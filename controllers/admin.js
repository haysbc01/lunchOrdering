var Order = require('../models/order.schema.js');

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
};