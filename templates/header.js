Template.header.rendered = function() {
    Deps.autorun(function(){
        document.title = Fireball.getSiteSetting('general/title');
    });
};

Template.header.helpers({
	pages: function() {
		return Fireball.Pages.find({
			parent: false
		},{
			sort: {
				order: 1
			}
		});
	},
	children: function() {
		var children = Fireball.Pages.find({
			parent: this._id
		},{
			sort: {
				order: 1
			}
		});
		if (children.count()) {
			return children;
		} else {
			return false;
		}
	}
});
