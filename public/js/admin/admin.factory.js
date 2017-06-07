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
    
      return{
          me:me
          
      }

  }