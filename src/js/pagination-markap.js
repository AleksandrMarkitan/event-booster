
import { EventsAPI } from './eventsAPI';

const paginationIteam = document.querySelector('.pagination');


export function getPagination(currentPage, totalPages) {
  let pagiItem = '';
  let maxPage;
  if(totalPages > 29){
    maxPage = 29
  }
  if (totalPages <= 5) {
    for (let i = 0; i < totalPages; i += 1) {
      pagiItem += `<li class="pagination__page"><button  class='pagination__btn' value="${currentPage}" type="button">${currentPage+1}</button></li>`;
      currentPage += 1;
    }
  } else if(totalPages > 5) {
    for (let i = 0; i < 5; i += 1 ){
      pagiItem += `<li class="pagination__page"><button  class='pagination__btn' value="${currentPage}" type="button">${currentPage+1}</button></li>`;
      currentPage += 1;
    }
    pagiItem += `<li class="pagination__page"><button class="pagination__btn--points" type="button">...</button></li>
    <li class="pagination__page"><button  class='pagination__btn' value="${maxPage}" type="button">${maxPage+1}</button></li>`;
  }
paginationIteam.innerHTML = pagiItem;
  //paginationIteam.insertAdjacentHTML('beforeend', pagiItem);
}


// console.log(getPagination)
// let buttonValue = e.target.value;

// const paginationList = document.querySelector('.pagination')
// paginationList.addEventListener('click', e=> {
// EventsAPI.page = buttonValue;
// displayGallery(buttonValue)
// console.log(displayGallery(buttonValue))
// });
