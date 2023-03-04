import {IVipTicket, TicketType} from "../../models/ticket/ticket";
import {initTicketElementTemplate} from "../../templates/ticketInfo";
import {postTicketData} from "@rest/tickets";

let ticketPostInstance;

export function initTicketInfo(ticket: TicketType | IVipTicket): void {
    const targetElement: HTMLElement = document.querySelector('.ticket-info');

    const ticketDescription: string = ticket?.description;
    const ticketOperator: string = ticket?.tourOperator;
    let vipClientType: string;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }


    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate: string;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

export function initUserData() {
    const userInfo = document.querySelectorAll('.user-info > p');
    let userInfoObj;
    userInfo.forEach((el) => {
        const inputDataName: string = el.getAttribute('data-name');
        if (inputDataName) {
            const inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });

    console.log('userInfoObj',userInfoObj)
    return userInfoObj;
}

export function initPostData(data) {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {

        }
    })
}

export function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}
