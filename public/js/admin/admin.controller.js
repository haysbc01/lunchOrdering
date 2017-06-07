angular.module('lunch')
  .controller('adminController', adminCtrl);

adminCtrl.$inject = ['$http', 'adminFactory'];

function adminCtrl ($http, adminFactory){
  var admin = this;

  admin.load = function(){
      adminFactory
        .me()
        .then(function(responseData){
          admin.data = responseData.data
          console.log(admin.data)
        })

      adminFactory
        .orders()
        .then(function(responseData){
          admin.orders = responseData.data
          console.log(admin.orders)
        })

      adminFactory
        .options()
        .then(function(responseData){
          console.log(responseData.data)
          admin.options = responseData.data;
          console.log(admin.options)
        })
    };

  admin.viewOrders = function(day,date,restaurant){
    admin.ordersModal=true;
    admin.day=day;
    admin.date=date;
    admin.restaurant=restaurant;
  };

  admin.orderCost = function(){
    divided=admin.cost/6
    console.log(divided)
  }

    admin.load();

}