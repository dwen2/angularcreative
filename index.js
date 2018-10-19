angular.module('myApp', ['ngAnimate'])
    .controller('MainCtrl', function($scope) {
        $scope.showMe = false;
        $scope.myFunc = function() {
            $scope.showMe = !$scope.showMe;
        }
        $scope.boxClass = true;
        $scope.name = "";
    });
