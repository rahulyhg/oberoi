myApp.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/home/home.html");
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
    // For campus banner's flex-slider
    $scope.campusBanner = [{
        img: 'img/home/broadcasting-slider-one.jpg',
        broadcastingMain: 'FREEDOM TO THINK.EMPOWERING TO EXPLORE.',
        broadcastingSub: 'TO BRING OUT THE STAR IN YOU'
    }, {
        img: 'img/home/broadcasting-slider-one.jpg',
        broadcastingMain: 'FREEDOM TO THINK.EMPOWERING TO EXPLORE.',
        broadcastingSub: 'TO BRING OUT THE STAR IN YOU'
    }, {
        img: 'img/home/broadcasting-slider-one.jpg',
        broadcastingMain: 'FREEDOM TO THINK.EMPOWERING TO EXPLORE.',
        broadcastingSub: 'TO BRING OUT THE STAR IN YOU'
    }];


});