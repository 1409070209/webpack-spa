"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./reset.css");
var Component = /** @class */ (function () {
    function Component() {
        this.html = '';
    }
    Component.prototype.render = function () {
        if (Component._document == null) {
            console.log('不在客户端渲染鸡毛？');
            return;
        }
        Component._document.body.innerHTML += this.html;
    };
    Component._document = document || null;
    return Component;
}());
exports.default = Component;
//# sourceMappingURL=Component.js.map