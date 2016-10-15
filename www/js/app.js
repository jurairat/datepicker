// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('starter', ['ionic','ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

// app.controller('ItemDetailsController', ['$scope', '$routeParams', 'Notification', function ($scope, $routeParams, Notification) {

// $scope.notification= Notification.getNotification($routeParams.Id);

// $scope.resolved = false;

// $scope.date = '';

// //This event is fired when the user check's the checkbox
// $scope.openCalendar = function(){ 

//     // defining options
//     var options = {
//       date: new Date(),
//       mode: 'date'
//     };

//     //This event is fired when the user has selected a date on the DatePicker
//     datePicker.show(options, function(date){ 

//         $scope.date = date; //Does not get updated!
//         $scope.$apply();

//     });
// }

// //Function for save button
// $scope.save = function(){

//    if($scope.date){
//       //save the changes
//    }
// }

// }]);

app.controller('MyCtrl', function($scope, $cordovaDatePicker, $ionicPlatform) {

  $ionicPlatform.ready(function(){
    $scope.showDatePicker = function(){
       var options = {
          date: new Date(),
          mode: 'date', // or 'time'
          minDate: new Date() - 10000,
          allowOldDates: true,
          allowFutureDates: false,
          doneButtonLabel: 'DONE',
          doneButtonColor: '#F2F3F4',
          cancelButtonLabel: 'CANCEL',
          cancelButtonColor: '#000000'
       };

       $cordovaDatePicker.show(options).then(function(date){
          alert(date);
       });
   };
 });
});
