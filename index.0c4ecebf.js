document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");e.insertAdjacentElement("beforebegin",t),t.setAttribute("class","field-label"),t.setAttribute("for",e.id),t.textContent=e.name.split(/(?=[A-Z])/).join(" ").toUpperCase(),e.setAttribute("placeholder",e.name.split(/(?=[A-Z])/).join(" ").toUpperCase())});
//# sourceMappingURL=index.0c4ecebf.js.map
