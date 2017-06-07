angular.module('lunch')
  .controller('lunchController', lunchCtrl);

lunchCtrl.$inject = ['$http', 'lunchFactory'];

function lunchCtrl ($http, lunchFactory){
  var lunch = this;

  lunch.day = 'none';

    lunch.load = function(){
        lunchFactory
            .me()
            .then(function(responseData){
            lunch.data = responseData.data
            console.log(lunch.data)
            });

            lunchFactory
                .restaurants()
                .then(function(responseData){
                    lunch.restaurants = responseData.data;
            
            });
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