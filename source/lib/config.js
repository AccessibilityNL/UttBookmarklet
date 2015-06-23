define([
    'UTT/locale/common',
    'UTT/locale/assessor/common',
    'UTT/locale/assessor/images',
    'UTT/locale/assessor/media',
    'UTT/locale/assessor/language',
    'UTT/locale/assessor/navigation',
    'UTT/locale/assessor/keyboard'
], function () {
    let localeAssessor = require('UTT/locale/assessor/common');

    const assessorNames = [
        'images',
        'media',
        'language',
        'navigation',
        'keyboard'
    ];

    let config = {
        modules: assessorNames.map(assessorName => ({
                'image':      'icon.' + assessorName,
                "controller": 'UTT/modules/assessor',
                "config": {
                    "questions": "UTT/modules/assessor/questions",
                    "category": assessorName
                },
                locale: Object.assign(
                        require('UTT/locale/assessor/' + assessorName),
                        localeAssessor)
            })
        ),
        locale: require('UTT/locale/common')
    };

    return config;
});