Views.Error = Backbone.View.extend({
	className: 'error',
	model: Models.Error,
	events: {
		'click #retryFromError': 'goToIndex'
	},
	initialize: function() {
		this.listenTo(this.model, 'change', this.render)
		this.template = _.template($('#errorRepo').val());
	},
	render: function() {
		var m = this.getErrorMsg(this.model.get('code'));
		this.model.set('message', m);
		this.hideOtherViews();
		this.$el.html(this.template({error:this.model.toJSON()}));
		return this;
	},
	getErrorMsg: function(code) {
		var m;
		switch(code) {
			case "403":
				m = '<p><strong>Lo sentimos.</strong></p><p>El servidor de API ha respondido con un error 403 lo que significa que se ha superado el límite de peticiones API por hora para esta IP.</p><p>Por favor, espera un rato para volver a recibir las peticiones.</p><p>'+this.getButton()+'</p>';
				break;
			case "404":
				m = '<p><strong>Lo sentimos.</strong></p><p>El servidor de API ha respondido con un error 404 lo que significa que no se ha encontrado la página. Quizás la URL de la API está mal configurada.</p><p>'+this.getButton()+'</p>';
				break;
			case "500":
				m = '<p><strong>Lo sentimos.</strong></p><p>El servidor de API ha respondido con un error 500 que hay un error interno del servidor. Quizás la URL de la API está mal configurada.</p><p>'+this.getButton()+'</p>';
				break;
			default:
				m = '<p><strong>Lo sentimos.</strong></p><p>Ha ocurrido un error que no hemos previsto. Probablemente la URL de API no exista.</p><p>'+this.getButton()+'</p>';
				break;
		}
		return m;
	},
	hideOtherViews: function() {
		$('#repo-query-info, #repo-list-container, #repo-view-container').hide();
	},
	goToIndex: function() {
		router.navigate('/', {trigger: true});
	},
	getButton: function() {
		return '<a href="javascript:void(0);" id="retryFromError" class="retry-button"><i class="fa fa-sync-alt"></i> Pulsa aquí para reintentar</a>';
	}
});
