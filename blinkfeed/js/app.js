var app = angular.module('myApp', []);
//factory
app.factory('itemsFactory', function($http) {
   var factory = {};

  factory.getItems = function (url) {
    return  $http.get(url);
   };

   return factory;
});

//controller
app.controller('MainCtrl', function($scope, itemsFactory) {

	$scope.head =function(){
		$scope.loading = true;
		itemsFactory.getItems('https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=fef31301d31b4f238d80f8670bcc4612').success(function(data){

	console.log(JSON.stringify(data));
              $scope.items = data;


        });
	}



                    $scope.currentdate=new Date();


$scope.getFeed = function(url) {
		$scope.loading = true;
    	itemsFactory.getItems(url).success(function(data){
              $scope.items = data;

               });

  };

$scope.getBCC= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getBCC= data;

        });
   };

$scope.getHindu= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getHindu = data;

        });
 };

$scope.getCnn= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getCnn = data;

        });
 };

$scope.getReuters= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getReuters = data;

        });
 };



 $scope.getTime= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getTime = data;

        });
 };

 $scope.getHuffington= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getHuffington = data;

        });
 };

 $scope.getBloomberg= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getBloomberg = data;

        });
 };

 $scope.getBI= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getBI = data;

        });
 };

 $scope.getFI= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getFI = data;

        });
 };

 $scope.getHN= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getHN = data;

        });
 };

 $scope.getEngadget= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getEngadget = data;

        });
 };
 $scope.getTechCrunch= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getTechCrunch = data;

        });
 };

 $scope.getTv= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getTv = data;

        });
 };



 $scope.getTnw= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getTnw = data;

        });
 };

 $scope.getTR= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getTR = data;

        });
 };

 $scope.getCric= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getCric = data;

        });
 };

 $scope.getFFT= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getFFT = data;

        });
 };
 $scope.getSky= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getSky = data;

        });
 };
 $scope.getBuzz= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getBuzz = data;

        });
 };

 $scope.getEW= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getEW = data;

        });
 };

 $scope.getTLB= function(url) {

    	itemsFactory.getItems(url).success(function(data){
              $scope.getTLB = data;

        });
 };



 $scope.getMirror= function(url) {

      itemsFactory.getItems(url).success(function(data){
              $scope.getMirror = data;

        });
 };


 $scope.getFocus= function(url) {

      itemsFactory.getItems(url).success(function(data){
              $scope.getFocus = data;

        });
 };


 $scope.getNewsweek= function(url) {

      itemsFactory.getItems(url).success(function(data){
              $scope.getNewsweek = data;

        });
 };
 $scope.getCNBC= function(url) {

      itemsFactory.getItems(url).success(function(data){
              $scope.getCNBC = data;

        });
 };


 $scope.getFortune= function(url) {

      itemsFactory.getItems(url).success(function(data){
              $scope.getFortune = data;

        });
 };


 $scope.getWall= function(url) {

      itemsFactory.getItems(url).success(function(data){
              $scope.getWall = data;

        });
 };
















});
