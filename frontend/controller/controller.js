import { tablazat } from "../model/adatLeiro.js";
import DataService from "../model/dataService.js";
import Szuro from "../view/szuro.js";
import Tabla from "../view/tabla.js";

class Controller {
    dataService = new DataService();
  constructor() {
    this.dataService.getData(
        `http://localhost:8000/api/bejegyzesek`,
        this.tabla
      );
    this.dataService.getData(
      `http://localhost:8000/api/osztalyok`,
      this.szuro,
      this.megjelenitHiba
    );
  
  }

  tabla(obj) {
    console.log(obj);
    new Tabla($("#tablazat"), obj, tablazat);
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
        console.log(tabla);
        this.dataService.getData(
            `http://localhost:8000/api/bejegyzesek`,
            this.tabla
        
          );
      } else {
        console.log(id);
        $("#tablazat").empty();
        this.dataService.getData(
          `http://localhost:8000/api/bejegyzesek/${id}`,
          this.tabla
        );
      }
    });
  }






}
export default Controller;
