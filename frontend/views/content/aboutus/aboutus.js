myApp.controller('AboutUsCtrl', function($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/aboutus/aboutus.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.submitForm = function(data) {
        console.log("This is it");
        return new Promise(function(callback) {
            $timeout(function() {
                callback();
            }, 5000);
        });
    };
});