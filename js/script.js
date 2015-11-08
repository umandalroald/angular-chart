// Code goes here
(function(angular){
  // Line Chart
   angular.module('line', ['chart.js', 'ngRoute'])
  .controller('LineCtrl', function ($scope, $http) {
    $http({method: 'GET', url: 'http://local.demod8/rest/views/laborers'}).success(function(data) {

      var male = [];
      var female = [];
      var name = [];

      angular.forEach(data, function(value, key){
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
  // Bar Chart
  angular.module('bar', ['chart.js', 'ngRoute'])
  .controller('BarCtrl', function ($scope) {
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
  });
  // Doughnut Chart
  angular.module('doughnut', ['chart.js', 'ngRoute'])
  .controller('DoughnutCtrl', function ($scope) {
    $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    $scope.data = [300, 500, 100];
  });

})(angular);
