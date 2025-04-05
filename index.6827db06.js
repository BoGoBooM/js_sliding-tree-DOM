document.querySelectorAll("li").forEach(function(e){var t=e.querySelector("ul");if(t){var n=Array.from(e.childNodes).find(function(e){return 3===e.nodeType&&""!==e.textContent.trim()}),r=document.createElement("span");r.textContent=n.textContent,e.replaceChild(r,n),r.addEventListener("click",function(e){t&&(t.hidden=!t.hidden)})}});
//# sourceMappingURL=index.6827db06.js.map
