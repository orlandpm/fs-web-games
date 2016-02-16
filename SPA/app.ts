/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="gen/Gluon.Generated.ts" />

function render(wi: Remote.TransmitWebItem, container:JQuery) {

    Remote.TransmitWebItem.match(wi, {
        TBigHeader: (s) => {
            container.append(`<h1>${s}</h1>`)
        },
        THeader: (s) => {
            container.append(`<h2>${s}</h2>`)
        },
        TParagraph: (s) => {
            container.append(`<p>${s}</p>`)
        },
        TImage: (h, w, u) => {
            container.append(`<img src="${u}" style="height:${h}px; width:${w}px;"/>`)
        },
        TBox: (wis) => {
            container.append(`<div style="border: 1px solid black; width: 98%; padding: 5px 1% 5px 1%;"></div>`)
            var inner = container.children().last();
            wis.forEach(wi => render(wi, inner));
        },
        TAction: (label, id) => {
            container.append(`<div style="padding: 5px 5px 20px 5px;"><label>${label}</label> <input id="input-${id}"/> <button id="button-${id}">Go!</button> <div id="output-${id}"></div></div>`);
            $(`#button-${id}`).click(() => {
                Remote.WebPageServer.rpc(new Gluon.Client)(id, $(`#input-${id}`).val()).done((result) => {
                    $(`#output-${id}`).text(result);
                });
            });
        }
    });
}

window.onload = () => {


    Remote.WebPageServer.getWebPage(new Gluon.Client())().done(elements => {
        elements.forEach(e => {
            console.log(e);
            render(e, $('body'));
        });
    });
};