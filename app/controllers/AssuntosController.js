app.controller('AssuntosController', function (get, $routeParams){
	Assunto = this;
	Assunto.id = $routeParams.id;
	get.disciplinas()
	.success(function(result){
		Assunto.Disciplinas = result.Disciplines;
		Assunto.listarAssuntos = _.find(Assunto.Disciplinas, function(disciplinas){ return disciplinas.Id == Assunto.id; }).Subjects;
		Assunto.listarEventos = _.find(Assunto.Disciplinas, function(disciplinas){ return disciplinas.Id == Assunto.id; }).Events;
	})
});