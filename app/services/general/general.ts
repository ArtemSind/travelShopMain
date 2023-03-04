/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
import {ITours} from "../../models/tours";
import {getTourTemplate} from "../../templates/tours";
import {openModal} from "@services/modal/modalService";
import {getTours} from "@rest/tours";
import {Modal} from "../../classess/modal";

export function initApp(toursDataArray: ITours[]): void {
    initHeaderTitle('Туры', 'h1');
    initFooterTitle('Туры по всему миру', 'h2');
    initCloseModalListener();
}

export function initHeaderTitle(ticketName: string, selector: string): void {
    const headerElement: HTMLElement = document.querySelector('header');
    const targetItem: HTMLElement = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

export function initFooterTitle(ticketName: string, selector: string): void {
    const headerElement: HTMLElement = document.querySelector('footer');
    const targetItem: HTMLElement = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

export function initToursDivElements(data: ITours[]): void {

    const rootElement: Element = document.querySelector('.main-app');
    const tourWrap: HTMLDivElement = document.createElement('div');

    tourWrap.classList.add('tour-wrap');

    // init click for modal
    initTourElemListener(tourWrap);

    let rootElementData = '';
    data.forEach((el, i) => {
        rootElementData += getTourTemplate(el, i);
    });

    tourWrap.innerHTML = rootElementData;
    rootElement.appendChild(tourWrap);
}


function initTourElemListener(tourWrap: HTMLElement): void {
    tourWrap.addEventListener('click', (ev) => {
        const targetItem = ev.target as HTMLElement;
        const parentItem = targetItem?.parentNode as HTMLElement;
        let realTarget: HTMLElement;

        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }

        if (realTarget) {
            const dataIndex: string = realTarget.getAttribute('data-tour-item-index');
            openModal('order', parseInt(dataIndex));
        }
    });
}

function initCloseModalListener() {
    document.addEventListener('click', ev => {
        const targetItem = ev.target as HTMLDivElement;
        if (!targetItem.classList.contains('close-modal'))
            return;

        const id: string = document.querySelector('.modal-element').getAttribute('modal-id');
        Modal.removeById(id);
    })

}




