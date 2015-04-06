// Tell Fireball about the standard features and how to configure them
// These will not show up as components
Fireball.addConfiguration('general', {
	name: 'General',
	description: 'Options that control the general behaviour of your site',
	settings: {
		signup: {
			name: 'Allow user registration',
			type: 'boolean'
		}
	}
});

Fireball.addPageConfiguration('page_settings', {
	name: 'Page Settings',
	settings: {
	}
});