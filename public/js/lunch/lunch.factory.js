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
        }

    
      return{
          me:me,
          restaurants:restaurants
      }

  }