import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
import {initApp, initToursDivElements} from "@services/general/general";
import {getTours} from "@rest/tours";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist

// init data
const tourData: Promise<ITours[]> = getTours();

tourData.then((data): void => {
    console.log('call ')
    toursDataArray = data;
    initToursDivElements(data);
});

initApp(toursDataArray);