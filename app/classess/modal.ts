export class Modal {
    private readonly id: string;
    public static modals: Modal[] = [];  // массив всех экземпляров класса modalService;

    constructor(id: string = null) {

        const findModal = Modal.modals.find(m => m.id === id);

        if (findModal) {
            Modal.removeById(id);
        }

        Modal.modals.push(this);
        console.log("ModelService.modals", Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length).toString()
    }

    public open(template: string): void {
        const divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add("modal-element");
        document.body.appendChild(divWrap);
    };

    public remove(): void {
        const modalEl = document.getElementById(this.id);
        modalEl.parentNode.removeChild(modalEl);
    };

    public static removeById(id: string = null): void {
        let modalId = id;

        const findEl = Modal.modals.find(x => x.id === modalId);

        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter(el => el.id !== modalId);

        } else {
            const lastEl = Modal.modals.pop();
            if (lastEl) {
                lastEl.remove();
            }
        }
    }
}