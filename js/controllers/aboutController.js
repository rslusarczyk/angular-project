angular.module("carApp").controller("myCtrl", function($scope, ItemsService) {
        
        $scope.car = {};
        $scope.carsCategories = ItemsService.getCarsCategories();
        $scope.addCarCategory = function(name, cars) {
            ItemsService.addCarCategory({name: name, cars: cars});
            
        }
        $scope.removeCarCategory = function(id) { 
            ItemsService.removeCarCategory(id);
        }
        
        $scope.updateCarCategory = function(id) { 
            $scope.startEdit = false;
            ItemsService.updateCarCategory(id); 
        }

    })