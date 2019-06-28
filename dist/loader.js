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
        throw new TypeError("No fond module - " + moduleName + ": " + error);
    }

    return function () {
        if (module) {
            return module.apply(undefined, arguments);
        } else {
            return _funcFunc;
        }
    };
};

exports.default = load;
//# sourceMappingURL=loader.js.map