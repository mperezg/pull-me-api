Views.Error = Backbone.View.extend({
	className: 'error',
	model: Models.Error,

	initialize: function() {
		this.listenTo(this.model, 'change', this.render)
		this.template = _.template($('#errorRepo').val());
	},
	render: function() {
		console.log('Error:', this.model.get("code"));
		this.$el.html(this.template({error:this.model.toJSON()}));
		return this;
	},
});
