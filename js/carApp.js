angular.module("carApp", ["firebase", "ui.router"])
    .constant('FIREBASE_URL','https://repo-test-rslusarczyk.firebaseio.com/')
    
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
        })
            .state('about', {
                url: '/list',
                templateUrl: 'templates/list.html',
                controller: 'myCtrl'
        })
            .state('list.item', {
                url: '/:item',
                templateUrl: 'templates/list.item.html',
                controller: function($scope, $stateParams) {
                    $scope.item = $stateParams.item;
                }
        })
  $urlRouterProvider.otherwise('/home');
})
    
    .controller("myCtrl", function($scope, ItemsService) {
        $scope.items = ItemsService.getItems();
        $scope.addItem = function(text) {
            ItemsService.addItem({text: text});
            
        }
        $scope.removeItem = function(id) { 
            ItemsService.removeItem(id);
        }
        
        $scope.updateItem = function(id) { 
            $scope.startEdit = false;
            ItemsService.updateItem(id);
        }
    })
    
    .factory('ItemsService', function($firebase, FIREBASE_URL){
        var ref = new Firebase(FIREBASE_URL + "/items");
        var sync = $firebase(ref);
        var items = sync.$asArray()
        
        var getItems = function() {
            return items;
        };
        
        var addItem = function(item) {
            items.$add(item);
        }
        
        var removeItem = function(id) {
            items.$remove(id);
        }
        
        var updateItem = function(id) {
            items.$update(id);
        }
        return {
            getItems: getItems,
            addItem: addItem,
            removeItem: removeItem,
            updateItem: updateItem
        }
    })

