"use strict";
exports.__esModule = true;
exports.Customer3 = void 0;
var Customer3 = /** @class */ (function () {
    function Customer3(_firstN, _lastN) {
        this._firstN = _firstN;
        this._lastN = _lastN;
    }
    Customer3.prototype.getFirstName = function () {
        return this._firstN;
    };
    Customer3.prototype.setFirstName = function (name) {
        this._firstN = name;
    };
    return Customer3;
}());
exports.Customer3 = Customer3;
