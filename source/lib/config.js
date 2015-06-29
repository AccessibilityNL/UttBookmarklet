define([
    'UTT/locale/common',
    'UTT/locale/assessor/common',
    'UTT/locale/assessor/images',
    'UTT/locale/assessor/media',
    'UTT/locale/assessor/language',
    'UTT/locale/assessor/navigation',
    'UTT/locale/assessor/keyboard',
    'UTT/locale/reporter',
    'UTT/utils/browser-polyfill',
], function () {
    let localeAssessor = require('UTT/locale/assessor/common');

    const assessorNames = [
        'images',
        'media',
        'language',
        'navigation',
        'keyboard'
    ];

    let modules = assessorNames.map(assessorName => ({
            "controller": 'UTT/modules/assessor',
            "config": {
                'icon':   `icon-${assessorName}.svg`,
                "questions": "UTT/modules/assessor/questions",
                "category":  assessorName
            },
            locale: Object.assign(
                    require('UTT/locale/assessor/' + assessorName),
                    localeAssessor)
        })
    );

    // Add the reporter
    modules.push({
        controller: 'UTT/modules/reporter',
        config: {
            displayOnHome: false,
        },
        locale: require('UTT/locale/reporter')
    });

    let config = {
        apiUrl:  'http://utt-dev.huell.appnormal.com/v1',
        modules: modules,
        locale: require('UTT/locale/common')
    };

    return config;
});