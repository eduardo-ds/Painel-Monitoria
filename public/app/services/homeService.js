(
    function () {
    
        //não deixa criar variavel sem "var"
        'use strict';
    
        angular.module('myapp').service('homeService', homeService)
    
        //$http - responsavel por trafegar os dados do serviço
    
        homeService.$inject = ['$http','url'];
    
        function homeService($http,url) {
    
            //Função de primeira classe
            this.listar = function () {
                return $http(
                    {
                        url: url + 'servicos',
                        method: 'GET'
                    });
            }
            /*
            this.cadastrar = function (servico) {
                return $http(
                    {
                        url: url + 'servico/cadastrar',
                        method: 'POST',
                        data: servico
                    });
            }
            */
        }
    
    }
    )
    ();