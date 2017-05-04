'use strict';
angular.module('evolventSampleApp')
.service('dataService',['$http',"$q","$location",function($http,$q,$location){
  var deferred = $q.defer();
  var globalurl = "http://"+$location.host()+":"+($location.port()+1)+"/contacts";
  this.getContacts = function(){
    $http.get(globalurl).then(function(res){
      debugger;
      deferred.resolve(res);
    },function(err){
      deferred.reject(err);
    })
    return deferred.promise;
  };
  this.addContacts = function(data){
    var objdata = JSON.stringify(data);
    debugger;
    var config = {
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Process-Data': false
                }
            };
    $http.post(globalurl+"/",objdata,config)
    .then(function(res){
      deferred.resolve(res);
      return res;
    },function(err){
      return err;
     deferred.reject(err);
    });
    return deferred.promise;
  };

  this.editcontacts = function(edta){
    var objeditdata = JSON.stringify(edta);
    debugger;
    var url = globalurl+"/" + edta.id;
    var config = {
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Process-Data': true
                }
            };
    $http.put(url,objeditdata,config)
    .then(function(res){
      deferred.resolve(res);
    },function(err){
      deferred.resolve(err);
    });
    return deferred.promise;
  };

  this.deletecontact = function(ddata){
  var url = globalurl +"/" + ddata;
    $http.delete(url)
    .then(function(res){
      deferred.resolve(res);
    },function(){
      deferred.reject(res);
    });
   return deferred.promise;
  }

}]);
