angular.module('lunch')
  .controller('authController', authCtrl);

authCtrl.$inject = ['$http', 'authFactory'];

function authCtrl ($http, authFactory){
  var auth = this;

  auth.register = function(){
    if(auth.registerPassword != auth.confirmPassword){
        auth.noPassMatch = true;
        auth.tryAgain = 'Passwords did not match!'
        auth.registerPassword ='';
        auth.confirmPassword = '';
    }else{

        authFactory
            .register(auth.firstName, auth.registerEmail, auth.registerPassword)
            .then(auth.register.success, auth.register.error);
        }
    };

    auth.register.error = function(err){
        console.log(err);
    };

    auth.register.success = function(res){
        if(res.data.name==='admin'){
            location.href = '/#!/admin';
        } else {
            location.href = '/#!/lunch';
        }
    };

    auth.login = function(){
        authFactory
            .login(auth.email, auth.password)
            .then(auth.login.success, auth.login.error);
    };

    auth.login.success = function(res){
        // console.log(res.data.name)
        if(res.data.name==='admin'){
            location.href = '/#!/admin';
        } else {
            location.href = '/#!/lunch';
        }
    };

    auth.login.error = function(err){
        auth.loginError = err.data;
    };

}