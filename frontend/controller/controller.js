import { tablazat } from "../model/adatLeiro.js";
import DataService from "../model/dataService.js";
import Szuro from "../view/szuro.js";
import Tabla from "../view/tabla.js";

class Controller {
   
  constructor() {
    const dataService = new DataService();
    const tabla = new Tabla();
    tabla.tablaElemFelepites($("#tablazat"), tablazat)
    dataService.getData(
        `http://localhost:8000/api/bejegyzesek`,
        tabla.adatFeltoltes
      );  
    dataService.getData(
      `http://localhost:8000/api/osztalyok`,
      this.szuro,
      this.megjelenitHiba
    );
  }

 

  szuro(obj) {
    const dataService = new DataService();
    console.log(obj);
    const szuroElem = $("#szuro");
    new Szuro(szuroElem, obj);
    $(window).on("osztaly_szures", (event) => {
      const tabla = new Tabla();
      let id = event.detail;
      if (id == "mindegyik") {
        console.log(id);
        $("#tablazat").empty();
        tabla.tablaElemFelepites($("#tablazat"), tablazat)
        console.log(tabla);
        dataService.getData(
            `http://localhost:8000/api/bejegyzesek`,
            tabla.adatFeltoltes
          );
      } else {
        $("#tablazat").empty();
        tabla.tablaElemFelepites($("#tablazat"), tablazat)
        console.log(id);
        dataService.getData(
          `http://localhost:8000/api/bejegyzesek/${id}`,
          tabla.adatFeltoltes
        );
      }
    });
  }






}
export default Controller;