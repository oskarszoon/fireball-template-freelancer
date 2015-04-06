Package.describe({
    name: 'fireball:template-freelancer',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Fireball Template: Bootstrap template Freelancer from IronSummitMedia',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/oskarszoon/fireball-template-freelancer',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.1');
    api.use('templating', 'client');
    api.use('iron:router');
    api.use('twbs:bootstrap');
    api.use('fireball:core');

    api.addFiles('fireball:template-freelancer.js');

    // Templates
    api.addFiles(['templates/head.html'], 'client');
    api.addFiles(['templates/layout.html'], 'client');
    api.addFiles(['templates/notFound.html'], 'client');
    api.addFiles(['templates/loading.html'], 'client');
    api.addFiles(['templates/fireball.html'], 'client');
    api.addFiles(['templates/header.html', 'templates/header.js'], 'client');
    api.addFiles(['templates/footer.html'], 'client');

    // CSS
    api.addFiles(['css/bootswatch.css', 'css/freelancer.css'], 'client');
    // TODO: add support for LESS files, currently they can't be easily published from a package to the client
    // TODO: not include the entire bootswatch CSS, there's a lot of overlap with Bootstrap itself

    // components
    api.addFiles(['templates/components/jumbotron.html', 'templates/components/jumbotron.js'], 'client');
    api.addFiles(['templates/components/well.html', 'templates/components/well.js'], 'client');

    // images
    api.addFiles(['img/profile.png'], 'client', {isAsset: true});

    // Default routes, rest will be defined in DB
    api.addFiles('routes.js', 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('fireball:template-freelancer');
    api.addFiles('fireball:template-freelancer-tests.js');
});
