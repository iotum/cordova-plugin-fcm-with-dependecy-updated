'use strict';

var helpers = require('./helpers');

var ANDROID_DIR = 'platforms/android';

exports.PLATFORM = {
    ANDROID: {
        label: 'android',
        dir: ANDROID_DIR,
        googleServiceDestinations: [
            ANDROID_DIR + '/google-services.json',
            ANDROID_DIR + '/app/google-services.json'
        ],
        googleServiceSources: [
            ANDROID_DIR + '/google-services.json',
            ANDROID_DIR + '/assets/www/google-services.json',
            'www/google-services.json',
            'google-services.json'
        ],
        stringsXmls: [
            ANDROID_DIR + '/app/build/generated/res/google-services/debug/values/values.xml'
        ]
    }
};
