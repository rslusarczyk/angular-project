angular.module("carApp").controller("myCtrl", function($scope, ItemsService) {
        $scope.carToAdd = {brand:"",model:"", year:"", engine:"",description:"",price:""};
        $scope.carEdit = {id: -1000, carId: -1000};
        $scope.carDetails = {id: -1000, carId: -1000};
        $scope.carCategoryEdit = {id: -1000};
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

            $scope.carToAdd = {brand:"",model:"", year:"", engine:"",description:"",price:""};
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
        
        $scope.editCar = function(id, carId) {
            if($scope.carEdit.id == id && $scope.carEdit.carId == carId) {
                return true;
            } else {
                return false;
            }
        }

        $scope.showCarDetails = function(id, carId) {
            if($scope.carDetails.id == id && $scope.carDetails.carId == carId) {
                if($scope.editCar(id, carId)) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }   

        $scope.removeCar(id, carId) {
            
        }     


    })