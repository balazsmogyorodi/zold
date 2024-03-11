class TablaTartalom{
    #tablazat;
    #tartalom;
    #adatok
    constructor(tablazat, adatok){
        this.#tablazat = tablazat;
        this.#adatok = adatok;
        console.log(adatok);
        this.#tablazat.append("<tbody></tbody>");
        this.#tartalom = this.#tablazat.children("tbody:last-child");
        let txt = "";
        for (let index = 0; index < this.#adatok.length; index++) {
          txt += "<tr>";
          txt += `<td>${this.#adatok[index].osztaly_neve}</td><td>${this.#adatok[index].tevekenyseg_nev}</td><td>${this.#adatok[index].pontszam}`;
          if(this.#adatok[index].allapot){
            txt += "<td>elfogadva</td>"
          } else{
            txt += "<td>jóváhagyásra vár</td>"
          }
          txt += "</tr>";
        }
        this.#tartalom.append(txt);


    }



}
export default TablaTartalom;