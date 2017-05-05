'use strict';

angular.module('evolventSampleApp')
    .controller('ctactCtrl', ['$scope','dataService','$location',function($scope,dataService,$location){

  $scope.editdata = sessionStorage.getItem('edititem');
  $scope.mobileregex = /\d{3}([ .-])?\d{3}([ .-])?\d{4}|\(\d{3}\)([ ])?\d{3}([.-])?\d{4}|\(\d{3}\)([ ])?\d{3}([ ])?\d{4}|\(\d{3}\)([.-])?\d{3}([.-])?\d{4}|\d{3}([ ])?\d{3}([ .-])?\d{4}/gm;
  $scope.mailpattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi;
  $scope.contact = {
    FirstName:"",
    LastName:"",
    Email:"",
    PhoneNumber:"",
    Status:""
  };

 if($scope.editdata != null){
    $scope.contact = JSON.parse($scope.editdata);
 }

  $scope.addContact = function(data){
    console.log(data);
    var addData = {
      id:data.id,
      FirstName:data.FirstName,
      LastName:data.LastName,
      Email:data.Email,
      PhoneNumber:data.PhoneNumber,
      Status:data.Status
    };
    if($scope.editdata!="null"){
              dataService.editcontacts(data).then(function(result){
                debugger;
                console.log(result);
                if(result.status==200){
                  $location.path("/");
                }
              },function(fail){
                $scope.errorMessgae = "No Items Available"
              });
          }
    else{
      dataService.addContacts(addData).then(function(result){
        $location.path("/");
      },function(fail){
        $scope.errorMessgae = "No Items Available"
      });
    }
  }
  }
]);
