import axios from "axios";

async function getEvents(options={}){
    const {id = "", countryCode = "", keyword =""}=options;

    const res = await axios.get("https://app.ticketmaster.com/discovery/v2/events.json",
    {
        params:{
            ...options,
            apikey: "GfgVh4R7D4nbAHFUVOA6O71Si5aOA40O",
        }
    })
    console.log(res.data);
}
const options = {id: ""}
getEvents(options)