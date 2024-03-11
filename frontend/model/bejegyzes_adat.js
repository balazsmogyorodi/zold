import DataService from "./dataService.js";

class Bejegyzes_adat{
    #osztaly;
    #tevekenyseg;
    #szemely_id;
    #statusz;
    adatok = {};
    #dataService = new DataService();
    constructor(){
       
    }


    bejegyzes_adatok_lekerese(){
        this.#dataService.getData(
            `http://localhost:8000/api/bejegyzesek`,
            this.setAdatok
          );

    }

    setAdatok(obj){
        console.log(obj);
        this.adatok = obj[0];
        console.log(this.adatok)
    }


    getAdatok(){
        return this.adatok;
    }

    


}
export default Bejegyzes_adat;