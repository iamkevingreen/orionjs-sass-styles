Package.describe({
	name: 'orionjs:styles',
	summary: 'Styles for orionjs admin',
	version: '0.1.1',
	git: 'https://github.com/orionjs/styles'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use('less');

	api.addFiles([
		'lib/global.less',
		], 'client');
});

Package.onTest(function(api) {
	api.use('tinytest');
});
