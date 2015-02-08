angular.module("carApp").controller("myCtrl", function($scope, ItemsService) {
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