import { EventsAPI } from "./eventsAPI";

export async function displayGallery(options){
    const resp = await EventsAPI.getEvents(options);
    galleryMarkup(await EventsAPI.getEvents(options));   
}

function galleryMarkup(arr = []){
    arr.reduce((acc, event)=>{
        
        const {name, id, images, dates:{start: {localDate}}, _embedded:{venues}} = event;
        const {name: nameOfPlace} =venues[0]
        console.log(nameOfPlace);

        return acc += ``;})
}

