!function(){var e=document.querySelector("body"),t=document.querySelector(".js-open-team-modal"),l=document.querySelector("[data-modal-team]"),c=document.querySelector("[data-close-team]"),o=document.querySelector("[data-modal-team]"),d=document.querySelector(".developers"),s=document.querySelector("[data-modal]"),n=document.querySelector("[data-close]"),a=document.querySelector(".js-gallery-card"),i=document.querySelector("[data-modal]"),r=document.querySelector(".modal");function u(t){l.classList.toggle("visually-hidden"),e.classList.toggle("no-scroll"),y(l)}function m(t){t.preventDefault(),s.classList.toggle("visually-hidden"),e.classList.toggle("no-scroll"),y(s)}function y(t){document.addEventListener("keydown",(function(l){"Escape"==l.code&&(t.classList.add("visually-hidden"),e.classList.remove("no-scroll"))}),{once:!0})}t.addEventListener("click",u),c.addEventListener("click",u),o.addEventListener("click",(function(t){t.composedPath().includes(d)||(l.classList.toggle("visually-hidden"),e.classList.toggle("no-scroll"))})),a.addEventListener("click",m),n.addEventListener("click",m),i.addEventListener("click",(function(t){t.composedPath().includes(r)||(s.classList.toggle("visually-hidden"),e.classList.toggle("no-scroll"))}))}();
//# sourceMappingURL=index.0e5746fd.js.map
