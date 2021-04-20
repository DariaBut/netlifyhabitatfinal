var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { throwException } from '@uniformdev/common';
var PureComponent = /** @class */ (function (_super) {
    __extends(PureComponent, _super);
    function PureComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PureComponent.prototype, "item", {
        get: function () {
            return this.props.renderingContext.item || throwException('no item');
        },
        enumerable: false,
        configurable: true
    });
    return PureComponent;
}(React.PureComponent));
export { PureComponent };
//# sourceMappingURL=PureComponent.js.map