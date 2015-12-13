weatherApp.directive("searchResult", function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      weatherObject: "=",
      convertToDate: "&",
      convertToCelsius: "&"
    },
    transclude: true,
    link: function(scope, elements, attrs){
    }
  }
});