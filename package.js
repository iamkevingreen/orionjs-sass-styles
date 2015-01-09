Package.describe({
	name: 'iamkevingreen:orionjs-sass-styles',
	summary: 'Styles for orionjs admin with sass',
	version: '0.1.4',
	git: 'https://github.com/iamkevingreen/orionjs-sass-styles'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use(['fourseven:scss@1.0.0']);

	api.addFiles([
		'lib/global.scss',
		], 'client');
});

Package.onTest(function(api) {
	api.use('tinytest');
});
