var nickwish = angular.module('nickwish', ['ngAnimate', 'ngSanitize']);
nickwish.config(function($compileProvider){
    //other configuration code here
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp):/);
 })

nickwish.controller('myWishCtrl', ['$scope', '$filter', '$log', '$http', '$rootScope', '$window', '$location', '$timeout', '$q', function ($scope, $filter, $log, $http, $rootScope, $window, $location, $timeout, $q) {

$scope.name="";

$scope.shareWithFriend=function(name){

$window.open('whatsapp://send?text=*Amazon Great Indian Festival* %0A %0A *BIGGEST SAVING TODAY* %0A %0A *1. Mobile -* Up to 40%25 off. %0A%0A *2. Instant Discount %26 Cashback -* Upto Rs.8,000. %0A%0A *3.Kitchen %26 dining -* Up to 75%25 off. %0A%0A *4. Computer accessories -* Up to 70%25 off. %0A%0A *Order Now -* http://bit.ly/amazonhome7 %0A%0A *Offer Valid For Limited Time only.* %0A%0A *( Free Delivery And Cash On Delivery Also ).* %0A', '_blank');
}


}])


