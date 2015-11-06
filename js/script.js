// Code goes here
(function(angular){
   angular.module('app', ['chart.js', 'ngRoute'])
  .controller('LineCtrl', function ($scope, $http) {

    $http({method: 'GET', url: 'http://local.demod8/rest/views/laborers'}).success(function(data) {

      var male = [];
      var female = [];
      var name = [];

      angular.forEach(data, function(value, key){
        console.log(value);
        female.push(value.Female);
        male.push(value.Male);
        name.push(value.title);
      });

    $scope.labels = name;
    $scope.series = ['Male', 'Female'];
    $scope.data = [male, female];

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

    });
  });

})(angular);
