angular.module('shortly.shorten', [])

  .controller('ShortenController', function($scope, $location, Links, Link) {
    $scope.link = {};
    $scope.tab = 2;
    var data = $scope.link;
    $scope.addLink = function(){
      Link.addLink(data).then(function(){
        return;
      });
    }
  })

  .factory('Link', function($http, $location) {
    var addLink = function(data) {
      return $http({
        method: 'POST',
        url: '/api/links',
        data: data
      }).then(function(res) {
        $location.path('/header/links');
      });
    };
    return {
      addLink: addLink
    };
  });
