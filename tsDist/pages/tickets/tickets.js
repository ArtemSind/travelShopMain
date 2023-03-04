"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tickets_1 = require("@rest/tickets");
require("@myCss"); // добавлена новая ссылка - ссылка ведет на один файл
require("@assets/styles/tickets.scss");
var general_1 = require("@services/general/general");
var ticket_1 = require("@services/tickets/ticket");
var ticketInstance;
var clientType = "custom";
// init main  data
initApp();
(0, ticket_1.registerConfirmButton)();
function initApp() {
    var ticketData = (0, tickets_1.getTicketById)('someId');
    ticketData.then(function (data) {
        ticketInstance = data[0];
        var ticketName = typeof (ticketInstance === null || ticketInstance === void 0 ? void 0 : ticketInstance.name) === "string" ? ticketInstance === null || ticketInstance === void 0 ? void 0 : ticketInstance.name : '';
        (0, general_1.initHeaderTitle)(ticketName, 'h3');
        (0, general_1.initFooterTitle)('Туры по всему миру', 'h2');
        (0, ticket_1.initTicketInfo)(ticketInstance);
    });
}
/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/
//# sourceMappingURL=tickets.js.map