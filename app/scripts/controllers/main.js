'use strict';
/*
curl --request POST http://api.guachunter.com/guac-it-out/reg --data \
'{"f":"FIRSTNAMEHERE","l":"LASTNAMEHERE", "m":"PHONENUMBERHERE", "s":"true", "z":"ZIPCODEHERE"}'

*/
/**
 * @ngdoc function
 * @name guacApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guacApp
 */
angular.module('guacApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.info = {};
    $scope.info.f = 'Fulano';
    $scope.info.l = 'Perez';
    $scope.info.s = 'true';

    $scope.submit = function () {
      $scope.info.m = $scope.phone;
      $scope.info.z = $scope.zip;
      $scope.phone = '';
      $scope.zip = '';
      return $http({
               method: 'POST',
               url: 'http://api.guachunter.com/guac-it-out/reg',
               data: $scope.info,
               headers: {'Content-Type': 'application/x-www-form-urlencoded'}
             })
             .then(function (resp) {
               console.log(resp);
             })
    }


  });
