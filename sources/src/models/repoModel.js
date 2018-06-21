 var Models = {
	Repo: Backbone.Model.extend({
		urlRoot: 'https://api.github.com/repos/HackerYou/',
		defaults: {
			repo_is_active: false, 
			id: 0,
			name: '',
			full_name: '',
			owner: {
				avatar_url: '',
				html_url: ''
			},
			html_url: '',
			git_url: '',
			description: ''
		}
	}),
};