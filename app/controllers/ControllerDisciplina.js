app.controller('DisciplinasController', function(get){
	Disciplina = this;
	get.disciplinas()
	.success(function(result){
		Disciplina.result = result.Disciplines;
	})
	Disciplina.listDisciplina = function(assuntos){
		Disciplina.assuntos = assuntos;	
	}
});