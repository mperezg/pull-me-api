var vs, vopts, vrepo;
var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'search/:query': 'search',
		'view/:name': 'view',
		'options': 'options',
		'error/:code/(:status)': 'error',
		'*default': 'errorDefault'
	},
	initialize: function() {
		this.index();
	},
	index: function(){
		vs = new Views.ReposApp();
		vs.setElement($('#container')).render();
	},
	search: function(query) {
		$('#search-query').val(query).change();
	},
	view: function(name) {
		if(!name) {
			router.navigate("error/404/Not Found");
		} else {
			vrepo = new Views.Repo();
			vrepo.setElement($('#repo-view-container')).render(name);
		}
	},
	options: function() {
		if(typeof vopts === 'object') {
			vopts.show();
		} else {
			vopts = new Views.Options();
			vopts.setElement($('#repo-options-container')).render();
		}
	},
	error: function(code, status) {
		let m = new Models.Error({code: code, status: status});
		var vs = new Views.Error({model: m});
		vs.setElement($('#error-container')).render();
	},
	// no cambiamos la URL para informar al usuario de dónde está la página no encontrada
	errorDefault: function() {
		this.error('404', 'Not Found');
	}
});

