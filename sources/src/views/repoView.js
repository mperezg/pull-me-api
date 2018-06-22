Views.Repo = Backbone.View.extend({
	className: 'repo-view-container',
	model: null,
	events: {
		'click': 'handleShadow',
		'click .repo-list-url input': 'selectInput',
		'click .close-button': 'closeRepo'
	},
	initialize: function() {
		console.log('initialize');
		_.bindAll(this, _.functions(this));
		this.template = _.template($('#viewRepo').val());
	},
	render: function(name) {
		this.setSpinner();
		var self = this;
		this.model = (new Models.Repo({id: name})).fetch({
			success: function() {
		console.log('render', name);
				self.$el.html(self.template({repo:self.model.responseJSON})).fadeIn('fast');
			}, 
			error: function(a,b,c) {
				router.navigate("error/"+b.status+"/"+b.statusText, {trigger: true});
			}
		});
		
		return this;
	},
	formatDate: function(dateStr) {
		let date = Date.parse(dateStr);
		date = new Date(date);
		return date.toLocaleString();
		return date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
		console.log('date ', date);
	},
	setSpinner: function() {
		console.log('long ', this.$el.length);
		this.$el.html('<div class="repo-spinner"><i class="fas fa-sync-alt fa-spin"></i></div>').fadeIn('fast');
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
			opacity: 0.4, 
			top: "50%",
			left: "50%"
		}, 400, function() {
			$(this).removeAttr('style').hide().empty(); 
		});
		
	},
	selectInput: function(e) {
		$(e.currentTarget).select();
	}
});
