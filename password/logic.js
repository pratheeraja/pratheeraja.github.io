var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
 $scope.generatePass = function() {
	var passwd = "";
	var chars = "abcdefghijklmnopqrstuvwxyz!@#$%&*ABCDEFGHIJKLMNOP1234567890";
	for (i=1;i<12;i++) {
		var c = Math.floor((Math.random()*chars.length)+1);
		passwd += chars.charAt(c)
		}
console.log(passwd);
	document.getElementById("demo").innerHTML =  passwd;



	
	 };
});
