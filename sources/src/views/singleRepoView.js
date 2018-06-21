Views.SingleRepo = Backbone.View.extend({
	className: 'single-repo',
	events: {
		'click': 'goToRepo'
	},
	initialize: function() {
		this.template = _.template($('#singleRepo').val());
	},
	render: function() {
		this.$el.html(this.template({repo:this.model.toJSON()}));
		return this;
	},
	goToRepo: function(e) {
		let reponame = $(e.currentTarget).find('[data-repo-name]').attr('data-repo-name');
		if(this.model.get('name') === reponame) {
			// evito que no se refresque al pulsar el mismo repo
			router.navigate("view");
		}
		router.navigate("view/"+reponame, {trigger: true});
	}
});
