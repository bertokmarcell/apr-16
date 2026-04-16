import { ADATOK } from "./adat.js";

export class Kartya{
    constructor(szuloElem, index, obj){
        this.obj = obj;
        this.index = index;
        this.termekElem = null;
        this.kosarElem = null;
        this.szuloElem = null;
    }

    megjelenit(szuloElem) {
        this.szuloElem = szuloElem;

        this.szuloElem.insertAdjacentHTMLK("beforeend", `
            <div class="kep">
                <img src="${this.src}" alt="${this.nev}">
                <p>${this.nev}</p>
            </div>
            `);

            this.termekElem = this.szuloElem.lastElementChild;

            this.termekElem.addEventListener("click", () => {
                const esemeny = new CustomEvent("kiválaszt", {
                    detail: this.index
                })
                window.dispatchEvent(esemeny);
            })
    }


}