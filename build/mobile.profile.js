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
        {
            "name": "dojo",
            "location": "dojo"
        },
        {
            "name": "dijit",
            "location": "dijit"
        },
        {
            "name": "dojox",
            "location": "dojox"
        },
        {
            "name": "iosapp",
            "location": "../../HelloWorld/merges/ios/iosapp"
        },
        {
            "name": "commonapp",
            "location": "../../HelloWorld/www/commonapp"
        }
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
            "include": [
                "dojo/dojo",
                "dojo/main",
                "dojo/has",
                "dojo/_base/kernel",
                "dojo/_base/config",
                "dojo/sniff",
                "dojo/_base/lang",
                "dojo/_base/array",
                "dojo/ready",
                "dojo/domReady",
                "dojo/_base/declare",
                "dojo/_base/connect",
                "dojo/on",
                "dojo/topic",
                "dojo/Evented",
                "dojo/aspect",
                "dojo/_base/event",
                "dojo/dom-geometry",
                "dojo/_base/window",
                "dojo/dom",
                "dojo/dom-style",
                "dojo/mouse",
                "dojo/_base/sniff",
                "dojo/keys",
                "dojo/_base/Deferred",
                "dojo/Deferred",
                "dojo/errors/CancelError",
                "dojo/errors/create",
                "dojo/promise/Promise",
                "dojo/promise/instrumentation",
                "dojo/promise/tracer",
                "dojo/when",
                "dojo/_base/json",
                "dojo/json",
                "dojo/_base/Color",
                "dojo/_base/browser",
                "dojo/_base/unload",
                "dojo/_base/html",
                "dojo/dom-attr",
                "dojo/dom-prop",
                "dojo/dom-construct",
                "dojo/dom-class",
                "dojo/_base/NodeList",
                "dojo/query",
                "dojo/selector/_loader",
                "dojo/selector/acme",
                "dojo/NodeList-dom",
                "dojo/_base/xhr",
                "dojo/io-query",
                "dojo/dom-form",
                "dojo/request/watch",
                "dojo/request/util",
                "dojo/errors/RequestError",
                "dojo/errors/RequestTimeoutError",
                "dojo/request/xhr",
                "dojo/request/handlers",
                "dojo/_base/fx",
                "dojo/_base/loader"
            ]
        }
    },
    "plugins": {
        "dojo/text": "build/plugins/text",
        "dojo/i18n": "build/plugins/i18n",
        "dojo/has": "build/plugins/has"
    }
};
})();
