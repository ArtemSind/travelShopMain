"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerConfirmButton = exports.initPostData = exports.initUserData = exports.initTicketInfo = void 0;
var ticketInfo_1 = require("../../templates/ticketInfo");
var tickets_1 = require("@rest/tickets");
var ticketPostInstance;
function initTicketInfo(ticket) {
    var targetElement = document.querySelector('.ticket-info');
    var ticketDescription = ticket === null || ticket === void 0 ? void 0 : ticket.description;
    var ticketOperator = ticket === null || ticket === void 0 ? void 0 : ticket.tourOperator;
    var vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }
    var ticketElemsArr = [ticketDescription, ticketOperator, vipClientType];
    var ticketElemTemplate;
    ticketElemsArr.forEach(function (el, i) {
        ticketElemTemplate += (0, ticketInfo_1.initTicketElementTemplate)(el, i);
    });
    targetElement.innerHTML = ticketElemTemplate;
}
exports.initTicketInfo = initTicketInfo;
function initUserData() {
    var userInfo = document.querySelectorAll('.user-info > p');
    var userInfoObj;
    userInfo.forEach(function (el) {
        var inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            var inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });
    console.log('userInfoObj', userInfoObj);
    return userInfoObj;
}
exports.initUserData = initUserData;
function initPostData(data) {
    initUserData();
    (0, tickets_1.postTicketData)(data).then(function (data) {
        if (data.success) {
        }
    });
}
exports.initPostData = initPostData;
function registerConfirmButton() {
    var targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', function () {
            initPostData(ticketPostInstance);
        });
    }
}
exports.registerConfirmButton = registerConfirmButton;
//# sourceMappingURL=ticket.js.map