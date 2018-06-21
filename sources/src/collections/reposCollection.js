var Collections = {
  Repos: Backbone.Collection.extend({
	model: Models.Repo,
	url: 'https://api.github.com/users/hackeryou/repos',
    parse: function(resp) {
		console.log('ReposCollection: Recibido');
		return resp;
    },
	initialize: function() {
		this.fetch({
			error: function(collection, xhr, error) {
				router.navigate("error/"+xhr.status+"/"+xhr.statusText, {trigger: true});
			}
		});
	},
	byName: function(name) {
		return this.filter(function(repo) {
			return (new RegExp(name, "gi")).test(repo.get('name'));
		});
	}
  }),
};