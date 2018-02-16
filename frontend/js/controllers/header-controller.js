myApp.controller('headerCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);

     $scope.nav=NavigationService.getNavigation();
    console.log("Nav",$scope.nav);
    // console.log("headerMenu",$scope.headerMenu);
    $scope.changeView = function () {
        console.log("changeTo",changeTo);
        // $scope.check = NavigationService.getNavigation();
        // console.log("$scope.navigation",$scope.check);
    };
});