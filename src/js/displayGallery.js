import { EventsAPI } from "./eventsAPI";

export async function displayGallery(options){
    const resp = await EventsAPI.getEvents(options);
    galleryMarkup(await EventsAPI.getEvents(options));
    console.log(1);
    
}

function galleryMarkup(arr = []){
    arr.reduce((acc, elem)=>{return acc})
    // ((acc, event)=>{
    //     const {name, id, images, dates:{start: {localDate}}, place} = event;
    //     console.log(place);s
    //     return acc+=`
    //     `
    // }, "")
}

