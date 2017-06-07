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
    }
    
      return{
          me:me,
          orders:orders,
          options:options
          
      }

  }