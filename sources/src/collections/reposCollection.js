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
				let vs = new Views.Error();
				vs.model.set({"code": xhr.status, "status": xhr.statusText, "message": xhr.responseJSON.message});
				vs.setElement($('#repo-list-container')).render();
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