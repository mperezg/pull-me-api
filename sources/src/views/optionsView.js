Views.Options = Backbone.View.extend({
	className: 'options',
	slideSpeed: 250,
	events: {
		'change input[name="colType"]': 'colType',
		'change input[name="allowSearch"]': 'allowSearch'
	},
	initialize: function() {
		this.template = _.template($('#optionsTmpl').val());
	},
	render: function(onlyShow) {
		var mode;
		if(onlyShow) {
			mode = this.$el;
		} else {
			mode = this.$el.html(this.template());
		}
		mode.show().stop().animate({
			marginTop: 0,
			opacity: 1
		}, this.slideSpeed * 1.75, function() {
			$(this).show();
		});
		$('#menu ul li a').removeClass('active');
		$('#menu-options').addClass('active');
		return this;
	},
	show: function() {
		this.render(true);
	},
	hide: function() {
		$('#menu-options').removeClass('active');
		this.$el.stop().animate({
			marginTop: -40,
			opacity: 0
		}, this.slideSpeed, function() {
			$(this).hide();
		});
		return this;
	},
	colType: function(e) {
		e.preventDefault();
		let type = $(e.target).val();
		var classname = '';
		switch(type) {
			case "2":
					classname = 'col-type-2';
				break;
			case "4":
					classname = 'col-type-4';
				break;
		}
		$('#repo-list-container').removeClass('col-type-2 col-type-4').addClass(classname);
		return this;
	},
	allowSearch: function(e) {
		e.preventDefault();
		$('#search-query').val('').trigger('change');
		if($(e.target).prop('checked')) {
			$('#repo-search-box').fadeIn('normal');
		} else {
			$('#repo-search-box').fadeOut('fast');
		}
	}
});
