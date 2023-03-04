"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toursDataArray = void 0;
require("./assets/styles/main.scss");
var img_1 = require("@services/img/img");
var general_1 = require("@services/general/general");
var tours_1 = require("@rest/tours");
exports.toursDataArray = [];
var imagesStore = img_1.images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist
// init data
var tourData = (0, tours_1.getTours)();
tourData.then(function (data) {
    console.log('call ');
    exports.toursDataArray = data;
    (0, general_1.initToursDivElements)(data);
});
(0, general_1.initApp)(exports.toursDataArray);
//# sourceMappingURL=index.js.map