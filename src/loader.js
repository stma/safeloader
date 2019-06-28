
const _funcFunc = () => _funcFunc;

const load = (moduleName) => {
    let module;
    try {
        module = require(moduleName);
    } catch (error) {
        throw new TypeError(`No fond module - ${moduleName}: ${error}`);
    }

    return (...args) => {
        if (module) {
            return module(...args);
        } else {
            return _funcFunc;
        }
    };
};

export {load};
