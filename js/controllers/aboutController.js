angular.module("carApp").controller("myCtrl", function($scope, ItemsService) {
        
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

        $scope.addCar = function(category, car) {
            if(category.cars) {
                category.cars.push(car);
            } else {
                category.cars = new Array();
                category.cars.push(car);
            }
        }

        $scope.showAddCarPanel = function(category)  {
            if(category.addCarPanelAvailable) {
                category.addCarPanelAvailable = false;
            } else {
                var carsCategories = ItemsService.getCarsCategories();
                carsCategories.forEach(function(cat) {
                    if(cat.addCarPanelAvailable) {
                        cat.addCarPanelAvailable = false;    
                        ItemsService.updateCarCategory(cat);
                    }
                });
                category.addCarPanelAvailable = true;
            }
            ItemsService.updateCarCategory(category);
        }
 
    })