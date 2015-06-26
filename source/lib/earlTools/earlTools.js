(function () {

	let modules = [
		'webpages',
		'assertions',
		'evaluations',
		'createCssPointer',
		'earlApi'
	];

	define(modules.map((module) => './' + module), function () {

		let earlTools = modules.reduce(function (obj, module) {
			obj[module] = require('UTT/earlTools/' + module);
			return obj;
		}, {});
		return earlTools;
	});

}());