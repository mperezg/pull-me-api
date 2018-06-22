Views.ReposApp = Backbone.View.extend({
	events: {
		'click #menu-repos': 'reposFromOptions'
	},
	initialize: function() {

		_.bindAll(this, _.functions(this));
		this.template = _.template($('#repos').val());
		this.searchBox = new Views.SearchBox();
		this.searchBox.on('searchRequest', this.performSearch, this);
		this.searchBox.on('searchRequestURL', this.performSearchURL, this);
		this.collection = new Collections.Repos();
		this.collection.on('reset', this.showRepos, this);
		this.collection.on('add', this.showRepos, this);

	},
	render: function() {

		this.$el.html(this.template());
		this.$el.find('#repo-search-box').html(this.searchBox.render().el);
		this.showRepos();
		return this;

	},
	showRepos: function(queryString) {

		this.$el.find('#repo-list-container').empty();
		var v = null;

		// búsqueda
		if(typeof queryString === 'string') {

			let item = this.collection.byName(queryString);

			if(item.constructor === Array) {
				for(var i = 0; i < item.length; i++) {
					v = new Views.SingleRepo({model:item[i]});
					this.$el.find('#repo-list-container').append(v.render().el);
				}
			} else {
				v = new Views.SingleRepo({model:item[0]});
				this.$el.find('#repo-list-container').append(v.render().el);
			}
		// totales
		} else {

			this.collection.each(function(item, idx) {
			  v = new Views.SingleRepo({model:item});
			  this.$el.find('#repo-list-container').append(v.render().el);
			}, this);
			this.initiateCounter();

		}

		return this;
	},
	reposFromOptions: function(e) {
		e.preventDefault();
		router.navigate("/", {trigger: false});
		if(typeof vopts === 'object') {
			vopts.hide();
		}
		$(e.target).addClass('active');
		return this;
	},
	performSearch: function(evdata) {
		evdata = evdata || {};
		this.showRepos(evdata.queryString);
		return this;
	},

	performSearchURL: function(queryString) {
		evdata = evdata || {};
		this.showRepos(queryString);
		return this;
	},
	initiateCounter: function() {
		let n = this.collection.length;
		$('#repo-query-info').html("<small>"+n+" repos totales</small>");
		return this;
	}
});