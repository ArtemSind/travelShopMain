import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
import {initApp} from "@services/general/general";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist

initApp(toursDataArray);