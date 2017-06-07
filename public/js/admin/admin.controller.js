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
    };

    admin.load();

}