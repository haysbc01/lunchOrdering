angular.module('lunch')
  .controller('lunchController', lunchCtrl);

lunchCtrl.$inject = ['$http', 'lunchFactory'];

function lunchCtrl ($http, lunchFactory){
  var lunch = this;

//   lunch.date=Date();

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
            })
    };

    lunch.orderModal = function(restaurant, menu, day){
        lunch.orderModale = true;
        lunch.restaurantChoosen = restaurant;
        lunch.menuChoosen = menu;
        lunch.day = day;
    }

    lunch.order = function(){
        lunchFactory
            .placeOrder(lunch.foodOrder,lunch.drinkOrder,lunch.data.name,lunch.data._id,lunch.restaurantChoosen,lunch.day)
    }


    lunch.load();

}