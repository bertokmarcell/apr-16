export default class Termeksor {
    #obj = {};
    #index = 0;
    constructor(obj = { db, nev }, index, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.megjelenit();
    }
    megjelenit() {
        let html = `
            <div class="tarolo">
                <p>${this.#obj.nev}| darabszam: ${this.#obj.db}</p>
                <button>torlesgomb</button>
            </div>`;
        this.szuloElem.insertAdjacentHTML("beforeend", html);
    }
}