const e=document.querySelector("body"),t=document.querySelector(".js-open-team-modal"),l=document.querySelector("[data-modal-team]"),c=document.querySelector("[data-close-team]"),o=document.querySelector("[data-modal-team]"),d=document.querySelector(".developers"),s=document.querySelector("[data-modal]"),a=document.querySelector("[data-close]"),n=document.querySelector(".js-gallery-card"),i=document.querySelector("[data-modal]"),r=document.querySelector(".modal");function u(t){l.classList.toggle("visually-hidden"),e.classList.toggle("no-scroll"),g(l)}function m(t){t.preventDefault(),s.classList.toggle("visually-hidden"),e.classList.toggle("no-scroll"),g(s)}function g(e){document.addEventListener("keydown",(t=>{"Escape"==t.code&&e.classList.toggle("visually-hidden")}),{once:!0})}t.addEventListener("click",u),c.addEventListener("click",u),o.addEventListener("click",(t=>{t.composedPath().includes(d)||(l.classList.toggle("visually-hidden"),e.classList.toggle("no-scroll"))})),n.addEventListener("click",m),a.addEventListener("click",m),i.addEventListener("click",(t=>{t.composedPath().includes(r)||(s.classList.toggle("visually-hidden"),e.classList.toggle("no-scroll"))}));
//# sourceMappingURL=index.6eef6f70.js.map
