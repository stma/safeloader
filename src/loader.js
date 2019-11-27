
const _funcFunc = () => _funcFunc;

const load = (moduleName) => {
    let module;
    try {
        module = require(moduleName);
    } catch (error) {
        console.info(`***w* No fond module - ${moduleName}: ${error.message}`);
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
