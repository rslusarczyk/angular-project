angular.module("carApp", ["firebase", "ui.router"])
    .constant('FIREBASE_URL','https://carapp-2015.firebaseio.com/')
    
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
        })
            .state('list', {
                url: '/list',
                templateUrl: 'templates/list.html',
                controller: 'myCtrl'
        })
  $urlRouterProvider.otherwise('/home');
})
    
    .factory('ItemsService', function($firebase, FIREBASE_URL){
        var ref = new Firebase(FIREBASE_URL + "/carsCategories");
        var sync = $firebase(ref);
        var carsCategories = sync.$asArray()
        
        var getCarsCategories = function() {
            return carsCategories;
        };
        
        var addCarCategory = function(name) {
            carsCategories.$add(name);
        }
        
        var removeCarCategory = function(id) {
            carsCategories.$remove(id);
        }
        
        var updateCarCategory = function(id) {
            carsCategories.$save(id);
        }
        return {
            getCarsCategories: getCarsCategories,
            addCarCategory: addCarCategory,
            removeCarCategory: removeCarCategory,
            updateCarCategory: updateCarCategory
        }
    })

