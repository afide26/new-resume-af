var myResume = angular.module('myResume', [ ]);

myResume.controller('ResumeController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/resumeData.json').success(function(data) {
    $scope.main = data.main;
    $scope.address = data.main.address;
    $scope.social = data.main.social;
    $scope.education = data.resume.education;
    $scope.work = data.resume.work;
    $scope.skills = data.resume.skills;
    $scope.linkedin = data.testimonials.recommendations;
    $scope.date = new Date().getFullYear();
  });
  $scope.name = "Alan Fidelino"
}]);
