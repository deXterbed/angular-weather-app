weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){

  $scope.city = cityService.city;

  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){

  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI =
    $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
      {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days, appid: '2de143494c0b295cca9337e1e96b00e0'})

  $scope.convertToCelsius = function(degK){
    return Math.round(degK - 273.15);
  }

  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  }
}]);