import TablaTartalom from "./tartalom.js";

class Tabla {
  #fej;
  #tartalom;
  #tablazat;
  #adatok;
  #fejlec;
  constructor() {
  }

  tablaElemFelepites(divElem, fejlec){
    divElem.append("<table class='table table-hover'></table>");
    this.#tablazat = divElem.children("table:last-child");
    this.#fejlec = fejlec;
    this.tablaFejlec();


  }

  adatFeltoltes(obj){
    console.log(obj)
    new TablaTartalom($('table'), obj);
  }

  tablaFejlec() {
    this.#tablazat.append("<thead></thead>");
    this.#fej = this.#tablazat.children("thead:last-child");
    let txt = "<tr>";
    for (let index = 0; index < this.#fejlec.length; index++) {
      txt += `<th> ${this.#fejlec[index]} </th>`;
    }
    txt += "</tr>";
    this.#fej.append(txt);
  }

  tablaTartalom(adatok) {
    console.log(adatok);
    this.#tablazat.append("<tbody></tbody>");
    this.#tartalom = this.#tablazat.children("tbody:last-child");
    let txt = "";
    for (let index = 0; index < this.#adatok.length; index++) {
      txt += "<tr>";
      txt += `<td>${adatok[index].osztaly_neve}</td><td>${adatok[index].tevekenyseg_nev}</td><td>${adatok[index].pontszam}`;
      if(adatok[index].allapot){
        txt += "<td>elfogadva</td>"
      } else{
        txt += "<td>jóváhagyásra vár</td>"
      }
      txt += "</tr>";
    }
    this.#tartalom.append(txt);
  }
}

export default Tabla;
