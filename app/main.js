app = angular.module('PVC',['ngRoute']);
//Configuração de Rotas
app.config(function ($routeProvider, $locationProvider){
   $routeProvider 
   .when('/', {
      templateUrl : 'disciplinas.html',
      controller     : 'DisciplinasController',
   })
 
   .when('/disciplinas', {
      templateUrl : 'app/views/disciplinas.html',
      controller  : 'DisciplinasController',
   })
   .when('/disciplinas/:id', {
      templateUrl : 'app/views/assuntos.html',
      controller  : 'AssuntosController',
   })
 
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});