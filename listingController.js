angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({code: $scope.listings.newCode,
                            name: $scope.listings.newName,
                            coordinates: {
                                latitude: $scope.listings.newLatitude,
                                longitude: $scope.listings.newLongitude
                             },
                            address: $scope.listings.newAddress
                           });
        
     
    	
    };
    $scope.query={};
    $scope.deleteListing = function(index) {
        $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(data) {
        $scope.entry = $scope.listings[$scope.listings.indexOf(data)];
        
    };
  }
]);