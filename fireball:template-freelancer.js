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

Fireball.addConfiguration('footer', {
    name: 'Footer',
    description: 'The footer',
    settings: {
        column1: {
            name: 'Column 1',
            type: 'html',
            default: "<h3>Column 1</h3><p>My location</p>"
        },
        column2: {
            name: 'Column 2',
            type: 'html',
            default: "<h3>Column 2</h3><p>My web stuff</p>"
        },
        column3: {
            name: 'Column 3',
            type: 'html',
            default: "<h3>Column 3</h3><p>Extra info</p>"
        },
        copyright: {
            name: 'Copyright',
            type: 'text',
            default: 'Copyright © Fireball 2015'
        }
    }
});
