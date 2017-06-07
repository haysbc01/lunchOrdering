angular.module('lunch')
  .factory('lunchFactory', lunchFactory)

  lunchFactory.$inject = ['$http'];


  function lunchFactory($http){

        function me(){
            return $http({
            method: 'GET',
            url: '/me'
            })
        };

        function restaurants(){
            return $http({
            method: 'GET',
            url: '/restaurants'
            }) 
        };

        function getMyOrders(id){
            return $http({
            method: 'GET',
            url: '/getMyOrders/'+id
            })
        };

        function placeOrder(food,drink,name,id,restaurant,day,date){
            return $http({
                method: 'POST',
                url: '/placeOrder',
                data: {
                food:food,
                drink:drink,
                name:name,
                id:id,
                restaurant:restaurant,
                day:day,
                date:date
                }
            })
        }
    
      return{
          me:me,
          restaurants:restaurants,
          getMyOrders:getMyOrders,
          placeOrder:placeOrder
      }

  }