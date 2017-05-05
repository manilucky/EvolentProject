'use strict';

angular.module('evolventSampleApp')
    .controller('hmeCtrl',['$scope','dataService','$location', function($scope,dataService,$location) {

    dataService.getContacts().then(function(result){
        $scope.contacts = (result.data);
      },function(fail){
        $scope.errorMessgae = "No Items Available"
      });


    $scope.contactClick = function(data){
      sessionStorage.setItem('edititem',null);
      $location.path('/contract/add');
    }

    $scope.editContact= function(editdata){
      var e_data = JSON.stringify(editdata);
      sessionStorage.setItem('edititem',e_data);
      $location.path('/contract/add');
    }

    $scope.deletecontact = function(deleteid){
      dataService.deletecontact(deleteid.id)
      .then(function(result){

      },function(err){

      });
    }


  }]);
