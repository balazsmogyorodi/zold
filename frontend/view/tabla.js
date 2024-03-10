class Tabla {
  #fej;
  #tartalom;
  #tablazat;
  #adatok;
  #fejlec;
  constructor(divElem, adatok, fejlec) {
    divElem.append("<table class='table table-hover'></table>");
    this.#tablazat = divElem.children("table:last-child");
    this.#adatok = adatok;
    this.#fejlec = fejlec;
    console.log(this.#adatok[1].osztaly_neve);
    this.tablaFejlec();
    this.tablaTartalom();
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

  tablaTartalom() {
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

export default Tabla;
