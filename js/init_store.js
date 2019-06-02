var Store = {};
function _requireById(id) {
    return webpackJsonp([], null, [id]);
}
var store_id = 0;
var chat_id = 0;

function getAllModules() {
    return new Promise((resolve) => {
        const id = _.uniqueId("fakeModule_");
        window["webpackJsonp"](
            [],
            {
                [id]: function(module, exports, __webpack_require__) {
                    resolve(__webpack_require__.c);
                }
            },
            [id]
        );
    });
}

var modules = getAllModules()._value;

for (var key in modules) {
    if (modules[key].exports) {
        if (modules[key].exports.createFromData) {
            createFromData_id = modules[key].i.replace(/"/g, '"');
        }
        if (modules[key].exports.prepRawMedia) {
            prepareRawMedia_id = modules[key].i.replace(/"/g, '"');
        }
        if (modules[key].exports.default) {
            if (modules[key].exports.default.Wap) {
                store_id = modules[key].i.replace(/"/g, '"');
            }
        }
        if (modules[key].exports.sendTextMsgToChat) {
            chat_id = modules[key].i.replace(/"/g, '"');
        }
    }
}

function init() {
    window.Store = _requireById(store_id).default;
    window.Store.sendTextMsgToChat = _requireById(chat_id).sendTextMsgToChat;
}

init();
