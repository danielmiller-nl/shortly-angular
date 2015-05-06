/**
 * Created by ppp on 3/7/2015.
 */
angular.module('shortly.header', [])

  .controller('HeaderController',['$scope', function($scope) {
    $scope.tab = 1;
  }])
  //.directive('showLinks',function(){
  //  return {
  //    restrict:'EA',
  //    templateURL:'app/links/links.html',
  //    replace:true,
  //    controller:'LinksController'
  //  }
  //})
  //
  //.directive('showShorten',function(){
  //  return {
  //    restrict:'EA',
  //    templateURL:'app/shorten/shorten.html',
  //    replace:true,
  //    controller:'ShortenController'
  //  }
  //});

