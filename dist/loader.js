"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _funcFunc = function _funcFunc() {
    return _funcFunc;
};

var load = function load(moduleName) {
    var module = void 0;
    try {
        module = require(moduleName);
    } catch (error) {
        console.info("***w* No fond module - " + moduleName + ": " + error.message);
    }

    return function () {
        if (module) {
            return module.apply(undefined, arguments);
        } else {
            return _funcFunc;
        }
    };
};

exports.load = load;
//# sourceMappingURL=loader.js.map