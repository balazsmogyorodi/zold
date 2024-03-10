class Szuro{
    #adatok;
    #divElem;
    #ertek;

    constructor(divElem, adatok){
        this.#divElem = divElem;
        this.#adatok = adatok;
        this.#divElem.append(this.#select())
        this.#divElem.append("<button class='szures'>Szürés</button>")
        const gomb = $(".szures")
        gomb.on("click", () =>{
            this.#gombLenyomas();
        })
    }


    #select(){
        let txt = "<select class='osztaly'>";
        txt +=  `<option value='mindegyik'>Összes</option>`
        for (let index = 0; index < this.#adatok.length; index++) {
          txt += `<option value="${this.#adatok[index].osztaly_id}">${this.#adatok[index].osztaly_neve}</option>`  
        }
        txt += "</select>"
        return txt;
    }

    #gombLenyomas(){
        this.#ertek = $(".osztaly").val();
        this.#esemenyTrigger();
    }

    #esemenyTrigger() {
        window.dispatchEvent(new CustomEvent(`osztaly_szures`, { detail: this.#ertek }));
      }


}
export default Szuro;