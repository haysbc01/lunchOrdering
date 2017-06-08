angular.module('lunch')
  .controller('lunchController', lunchCtrl);

lunchCtrl.$inject = ['$http', 'lunchFactory'];

function lunchCtrl ($http, lunchFactory){
  var lunch = this;

  lunch.employeeBill = 0;

    lunch.load = function(){
        lunchFactory
            .me()
            .then(function(responseData){
            lunch.data = responseData.data
            console.log(lunch.data)
            lunch.getMyOrders(lunch.data);
            });

        lunchFactory
            .restaurants()
            .then(function(responseData){
                lunch.restaurants = responseData.data;
            
            });

       
    };

    lunch.getMyOrders = function(arg){
        console.log(arg._id)
        lunchFactory
            .getMyOrders(arg._id)
            .then(function(responseData){
                lunch.myOrders = responseData.data;
                for(var i=0;i<lunch.myOrders.length;i++){
                    if(typeof(lunch.myOrders[i].cost)==='number'){
                        console.log(typeof(lunch.myOrders[i].cost))
                        lunch.employeeBill += lunch.myOrders[i].cost;
                    }
                    
                    // lunch.employeeBill = lunch.myOrders[i].cost;
                }
            })
    };

    lunch.orderModal = function(restaurant, menu, date){
        
        lunch.orderModale = true;
        lunch.restaurantChoosen = restaurant;
        lunch.menuChoosen = menu;
        lunch.date = date;

        lunch.showOptions=false;
    }

    lunch.order = function(){
        lunchFactory
            .placeOrder(lunch.foodOrder,lunch.drinkOrder,lunch.data.name,lunch.data._id,lunch.restaurantChoosen,lunch.day,lunch.date)
            .then(lunch.order.success, lunch.order.error)
    }
    lunch.order.success = function(){
        lunch.orderModale=false;
        lunch.foodOrder='';
        lunch.drinkOrder='';
    }
    lunch.order.error = function(){
        console.log(error)
    }


    lunch.load();

}