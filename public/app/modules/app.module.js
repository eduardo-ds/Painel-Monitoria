        var app = angular.module('myapp', ['ngRoute']);

        app.controller("homeController", homeController);;

        homeController.$inject = ['$scope', '$interval', 'homeService'];

        function homeController($scope, $interval, homeService) {

            consultarStatus();

            var intervalExecution = function () {
                consultarStatus();
            }

            $interval(intervalExecution, 1000);
            //$interval(intervalExecution, 60000);

            function consultarStatus() {
                //Consumindo a API
                homeService.listar().then(function (retorno) {
                    $scope.lista = retorno.data;
                });
            }
        }