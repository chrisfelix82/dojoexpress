// import the dojox/app extension to the build system
require([ "dojox/app/build/buildControlApp" ], function(bc) {
});

var profile = (function(){

    return {
    "action": "release",
    "stripConsole": "normal",
    "basePath": "../bower_components",
    "releaseDir": "../build/release",
    "cssOptimize": "comments",
    "multipleAppConfigLayers": true,
    "copyTests": false,
    "localeList": "en",
    "selectorEngine": "acme",
    "packages": [

    ],
    "layers": {
        "commonapp/app": {
            "include": [
                "commonapp/app"
            ],
            "exclude": [
                "dojo/dojo"
            ]
        },
        "dojo/dojo": {
            "boot": true,
            "customBase": true,
            "include": []
        }
    },
    "plugins": {
        "dojo/text": "build/plugins/text",
        "dojo/i18n": "build/plugins/i18n",
        "dojo/has": "build/plugins/has"
    }
};
})();
