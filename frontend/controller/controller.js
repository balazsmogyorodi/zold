import { tablazat } from "../model/adatLeiro.js";
import DataService from "../model/dataService.js";
import Szuro from "../view/szuro.js";
import Tabla from "../view/tabla.js";

class Controller {

  constructor() {
    const dataService = new DataService();
    dataService.getData(
      `http://localhost:8000/api/osztalyok`,
      this.szuro,
      this.megjelenitHiba
    );
    dataService.getData(
      `http://localhost:8000/api/bejegyzesek`,
      this.#tablazat,
      this.megjelenitHiba
    );
  }

  szuro(obj) {
    const dataService = new DataService();
    console.log(obj);
    const szuroElem = $("#szuro");
    new Szuro(szuroElem, obj);
    $(window).on("osztaly_szures", (event) => {
      let id = event.detail;
      if (id == "mindegyik") {
        console.log(id);
        $("#tablazat").empty();
        dataService.getData(
            `http://localhost:8000/api/bejegyzesek`,
            this.#tablazat,
            this.megjelenitHiba
          );
      } else {
        console.log(id);
        $("#tablazat").empty();
        dataService.getData(
          `http://localhost:8000/api/bejegyzesek/${id}`,
          this.#tablazat,
          this.megjelenitHiba
        );
      }
    });
  }

  #tablazat(obj) {
    console.log(obj);
    new Tabla($("#tablazat"), obj, tablazat);
  }




  megjelenitHiba(hiba) {}
}
export default Controller;
