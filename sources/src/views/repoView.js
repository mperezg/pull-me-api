Views.SingleRepo = Backbone.View.extend({
	className: 'single-repo',
	initialize: function() {
		this.template = _.template($('#singleRepo').val());
	},
	render: function() {
		this.$el.html(this.template({repo:this.model.toJSON()}));
		return this;
	},
});
