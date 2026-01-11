var myApp = angular.module("myApp", []);

myApp.config(function () {
  console.log("Config function ran");
});

myApp.run(function () {
  console.log("Run function ran");
});

myApp.controller("mainController", [
  "$scope",
  function ($scope) {
    // function to remove cars
    $scope.removeCar = function (car) {
      var removedCar = $scope.cars.indexOf(car);

      $scope.cars.splice(removedCar, 1);
    };

    $scope.cars = [
      {
        make: "Subaru",
        model: "Outback",
        year: 2018,
        price: 27000,
        available: true,
      },
      {
        make: "Audi",
        model: "A4",
        year: 2019,
        price: 35000,
        available: true,
      },
      {
        make: "BMW",
        model: "X5",
        year: 2020,
        price: 60000,
        available: false,
      },
    ];
  },
]);
