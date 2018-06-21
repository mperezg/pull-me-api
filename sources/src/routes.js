var vs;
var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
		'search/:query': 'search',
		'view/:name': 'view',
		'error/:code/(:status)': 'error'
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
		var self = this;
		var m = (new Models.Repo({id: name})).fetch({
			success: function() {
				self.viewHelper(m);
			}, 
			error: function(a,b,c) {
				router.navigate("error/"+b.status+"/"+b.statusText);
			}
		});
	},
	viewHelper: function(model) {
		var vs = new Views.Repo({model: model});
		vs.setElement($('#repo-view-container')).render();
	},
	error: function(code, status) {
		let m = new Models.Error({code: code, status: status});
		var vs = new Views.Error({model: m});
		vs.setElement($('#error-container')).render();
	}
});

