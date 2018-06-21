Views.SearchBox = Backbone.View.extend({
	className: 'search-wrapper',
	events: {
		'click #search-submit': 'goToSearch',
		'keyup #search-query': 'goToSearch',
		'change #search-query': 'goToSearch'
	},
	initialize: function() {
		this.template = _.template($('#search').val())
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	performSearch: function() {
		let queryString = this.$el.find('#search-query').val();
		this.trigger('searchRequest', {queryString:queryString});
		if(queryString) {
			let n = vs.collection.byName(queryString).length;
			$('#repo-query-info').html(queryString+"<small>("+n+" resultados)</small>");
		} else {
			let n = vs.collection.length;
			$('#repo-query-info').html("<small>"+n+" repos totales</small>");
		}
	},
	goToSearch: function() {
		var query = this.$el.find('#search-query').val();
		if(query) {
			router.navigate('search/'+query, {trigger: true});
		}
		this.performSearch();
	}
})