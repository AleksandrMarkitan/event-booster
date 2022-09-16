import axios from "axios";
export class EventsAPI{
    static #apikey = "GfgVh4R7D4nbAHFUVOA6O71Si5aOA40O";
    static #params ={};
    static #totalPages = 0; 
    static #curentPage = 0;
    static async getEvents(options={}){
        const {countryCode = "", keyword ="", size =""}=options;
        if(keyword.trim()||countryCode.trim()){
            this.#params = {
                ...options, 
            }
        }
        try{
            const res = await axios.get("https://app.ticketmaster.com/discovery/v2/events.json",
            {
                params: {
                    ...this.#params,
                    apikey: this.#apikey,
                }
            })

            await ({ totalPages: this.#totalPages, number: this.#curentPage } = res.data.page)
            return res.data._embedded;
        }catch(e){
            console.log(e);
        } 
    }
    static getCurentPage(){
        return this.#curentPage;
    }
    static getTotalPages(){
        return this.#totalPages;
    } 
}

async function tmp(){
    console.log(await EventsAPI.getEvents())
    console.log(EventsAPI.getCurentPage());
    console.log(EventsAPI.getTotalPages());
}

tmp();


