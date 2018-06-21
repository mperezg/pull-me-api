Views.Repo = Backbone.View.extend({
	className: 'repo-view-container',
	events: {
		'click': 'handleShadow'
	},
	initialize: function() {
		_.bindAll(this, _.functions(this));
		this.template = _.template($('#viewRepo').val());
	},
	render: function() {
		this.$el.html(this.template({repo:this.model.responseJSON})).fadeIn('fast');
		return this;
	},
	handleShadow: function(e) {
		if($(e.target).attr('id') === this.$el.attr('id')) {
			this.closeRepo();
		}
	},
	closeRepo: function() {
		var self = this;
		this.$el.animate({
			width: 0, 
			height: 0,
			opacity: 0, 
			top: "50%",
			left: "50%"
		}, 300, function() {
			$(this).removeAttr('style').hide(); 
		});
		
	}
});
