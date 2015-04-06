// Tell Fireball about the standard features and how to configure them
// These will not show up as components
Fireball.addConfiguration('general', {
    name: 'General',
    description: 'Options that control the general behaviour of your site',
    settings: {
        title: {
            name: 'Page title',
            type: 'text',
            default: '{Page title}'
        },
        roles: {
            name: 'Roles',
            type: 'text',
            default: '{Web Developer - Graphic Artist - User Experience Designer}'
        }
    }
});

Fireball.addPageConfiguration('page_settings', {
    name: 'Page Settings',
    settings: {}
});