define(['React', 'UTT/components/HomePanel'],
function (React, HomePanel) {

	return function home({modules}, i18n) {
		return React.createElement(HomePanel, {modules, i18n});
	};
});

