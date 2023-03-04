"use strict";
/* Общие методы используются для вставки текста в header   footer*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.initFooterTitle = exports.initHeaderTitle = exports.initApp = void 0;
var tours_1 = require("../../templates/tours");
var modalService_1 = require("@services/modal/modalService");
var tours_2 = require("@rest/tours");
function initApp(toursDataArray) {
    initHeaderTitle('Туры', 'h1');
    initFooterTitle('Туры по всему миру', 'h2');
    // init data
    var tourData = (0, tours_2.getTours)();
    tourData.then(function (data) {
        console.log('call ');
        toursDataArray = data;
        initToursDivElements(data);
    });
}
exports.initApp = initApp;
function initHeaderTitle(ticketName, selector) {
    var headerElement = document.querySelector('header');
    var targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}
exports.initHeaderTitle = initHeaderTitle;
function initFooterTitle(ticketName, selector) {
    var headerElement = document.querySelector('footer');
    var targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}
exports.initFooterTitle = initFooterTitle;
function initToursDivElements(data) {
    var rootElement = document.querySelector('.main-app');
    var tourWrap = document.createElement('div');
    tourWrap.classList.add('tour-wrap');
    // init click for modal
    initTourElemListener(tourWrap);
    var rootElementData = '';
    data.forEach(function (el, i) {
        rootElementData += (0, tours_1.getTourTemplate)(el, i);
    });
    tourWrap.innerHTML = rootElementData;
    rootElement.appendChild(tourWrap);
}
function initTourElemListener(tourWrap) {
    tourWrap.addEventListener('click', function (ev) {
        var targetItem = ev.target;
        var parentItem = targetItem === null || targetItem === void 0 ? void 0 : targetItem.parentNode;
        var realTarget;
        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        }
        else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }
        if (realTarget) {
            var dataIndex = realTarget.getAttribute('data-tour-item-index');
            (0, modalService_1.openModal)('order', Number(dataIndex));
        }
    });
}
//# sourceMappingURL=general.js.map