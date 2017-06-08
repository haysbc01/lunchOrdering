angular.module('lunch')
  .factory('adminFactory', adminFactory)

  adminFactory.$inject = ['$http'];


  function adminFactory($http){

    function me(){
        return $http({
        method: 'GET',
        url: '/me'
        })
    };

    function orders(){
        return $http({
        method: 'GET',
        url: '/orders'
        })
    };

    function options(){
        return $http({
        method: 'GET',
        url: '/restaurants'
        })
    };

    function newRestaurant(restaurant,menu,date){
        return $http({
            method: 'POST',
            url: '/newRestaurant',
            data: {
                restaurant:restaurant,
                menu:menu,
                date:date
            }
        })
    }

    function costPerPerson(cost,date){
        return $http({
            method: 'PUT',
            url: '/costPerPerson'+date,
            data: {
                cost:cost,
            }
        })
    }
    
      return{
          me:me,
          orders:orders,
          options:options,
          newRestaurant:newRestaurant,
          costPerPerson:costPerPerson
          
      }

  }