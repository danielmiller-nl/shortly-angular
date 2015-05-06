angular.module('shortly.links', [])

  .controller('LinksController', ['$scope', '$filter', 'Links', function($scope, $filter, Links) {

    $scope.data = [];
    $scope.tab = 1;
    var orderBy = $filter('orderBy');
    $scope.getLinks = function() {
      Links.getLinks().then(function(data) {
        console.log("DATA ", data);
        $scope.data.links = data;
        $scope.order('-visits',false);
      }).catch(function(error) {
        console.error(error);
      })
    };
    $scope.getLinks();
    $scope.order = function(predicate, reverse) {
      $scope.data.links = orderBy($scope.data.links, predicate, reverse);
    };
  }])
  .factory('Links', function($http) {
    var getLinks = function() {
      return $http({
        method: 'GET',
        url: '/api/links'
      }).then(function(res) {
        return res.data;
      });
    };
    return {
      getLinks: getLinks
    };
  });
