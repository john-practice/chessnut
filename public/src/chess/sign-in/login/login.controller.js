(function(){

'use strict';

angular.module('chessnut')
.controller('LoginController', LoginController)

LoginController.$inject = ['SigninService', '$cookies'];
function LoginController(SigninService, $cookies){
	var $ctrl = this;
	$ctrl.loginError = null;
	$ctrl.login = function(){
		SigninService.login($ctrl.username, $ctrl.password)
		.then(function(response){
			if (!$cookies.get('login_session')){// convenience cookie, real cookie not scriptable
				$cookies.put('login_session', true);
			}
		})
		.catch(function(error){
			$ctrl.loginError = SigninService.loginError;
		});
	};
};

})(); //IIFE