"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var Modal = /** @class */ (function () {
    function Modal(id) {
        if (id === void 0) { id = null; }
        var findModal = Modal.modals.find(function (m) { return m.id === id; });
        if (findModal) {
            Modal.removeById(id);
        }
        Modal.modals.push(this);
        console.log("ModelService.modals", Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length).toString();
    }
    Modal.prototype.open = function (template) {
        var divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add("modal-element");
        document.body.appendChild(divWrap);
    };
    ;
    Modal.prototype.remove = function () {
        var modalEl = document.getElementById(this.id);
        modalEl.parentNode.removeChild(modalEl);
    };
    ;
    Modal.removeById = function (id) {
        if (id === void 0) { id = null; }
        var modalId = id;
        var findEl = Modal.modals.find(function (x) { return x.id === modalId; });
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter(function (el) { return el.id !== modalId; });
        }
        else {
            var lastEl = Modal.modals.pop();
            if (lastEl) {
                lastEl.remove();
            }
        }
    };
    Modal.modals = []; // массив всех экземпляров класса modalService;
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map