var Remote;
(function (Remote) {
    var TBigHeader = (function () {
        function TBigHeader(Item) {
            this.Item = Item;
        }
        TBigHeader.prototype.tag = function () { return "TBigHeader"; };
        TBigHeader.prototype.toJSON = function () {
            return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        };
        return TBigHeader;
    })();
    Remote.TBigHeader = TBigHeader;
    var THeader = (function () {
        function THeader(Item) {
            this.Item = Item;
        }
        THeader.prototype.tag = function () { return "THeader"; };
        THeader.prototype.toJSON = function () {
            return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        };
        return THeader;
    })();
    Remote.THeader = THeader;
    var TParagraph = (function () {
        function TParagraph(Item) {
            this.Item = Item;
        }
        TParagraph.prototype.tag = function () { return "TParagraph"; };
        TParagraph.prototype.toJSON = function () {
            return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        };
        return TParagraph;
    })();
    Remote.TParagraph = TParagraph;
    var TImage = (function () {
        function TImage(heightPixels, widthPixels, url) {
            this.heightPixels = heightPixels;
            this.widthPixels = widthPixels;
            this.url = url;
        }
        TImage.prototype.tag = function () { return "TImage"; };
        TImage.prototype.toJSON = function () {
            return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        };
        return TImage;
    })();
    Remote.TImage = TImage;
    var TAction = (function () {
        function TAction(label, id) {
            this.label = label;
            this.id = id;
        }
        TAction.prototype.tag = function () { return "TAction"; };
        TAction.prototype.toJSON = function () {
            return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        };
        return TAction;
    })();
    Remote.TAction = TAction;
    var TBox = (function () {
        function TBox(Item) {
            this.Item = Item;
        }
        TBox.prototype.tag = function () { return "TBox"; };
        TBox.prototype.toJSON = function () {
            return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        };
        return TBox;
    })();
    Remote.TBox = TBox;
})(Remote || (Remote = {}));
var Remote;
(function (Remote) {
    var TransmitWebItem;
    (function (TransmitWebItem) {
        function fromJSON(json) {
            return Gluon.Internals.fromJSON("Remote.TransmitWebItem", json);
        }
        TransmitWebItem.fromJSON = fromJSON;
        function match(value, cont) {
            if (value instanceof Remote.TBigHeader) {
                return cont.TBigHeader(value.Item);
            }
            else if (value instanceof Remote.THeader) {
                return cont.THeader(value.Item);
            }
            else if (value instanceof Remote.TParagraph) {
                return cont.TParagraph(value.Item);
            }
            else if (value instanceof Remote.TImage) {
                return cont.TImage(value.heightPixels, value.widthPixels, value.url);
            }
            else if (value instanceof Remote.TAction) {
                return cont.TAction(value.label, value.id);
            }
            else if (value instanceof Remote.TBox) {
                return cont.TBox(value.Item);
            }
            else {
                throw new Error("match failed");
            }
        }
        TransmitWebItem.match = match;
    })(TransmitWebItem = Remote.TransmitWebItem || (Remote.TransmitWebItem = {}));
})(Remote || (Remote = {}));
var Remote;
(function (Remote) {
    var WebPageServer;
    (function (WebPageServer) {
        WebPageServer.getWebPage = Gluon.Internals.remoteMethod("Remote.WebPageServer.getWebPage");
        WebPageServer.rpc = Gluon.Internals.remoteMethod("Remote.WebPageServer.rpc");
    })(WebPageServer = Remote.WebPageServer || (Remote.WebPageServer = {}));
})(Remote || (Remote = {}));
Gluon.Internals.registerActivators({
    "Remote.TBigHeader": function (a) { return new Remote.TBigHeader(a); },
    "Remote.THeader": function (a) { return new Remote.THeader(a); },
    "Remote.TParagraph": function (a) { return new Remote.TParagraph(a); },
    "Remote.TImage": function (a, b, c) { return new Remote.TImage(a, b, c); },
    "Remote.TAction": function (a, b) { return new Remote.TAction(a, b); },
    "Remote.TBox": function (a) { return new Remote.TBox(a); }
});
Gluon.Internals.registerService({ "Methods": [{ "CallingConvention": ["HttpCallingConvention", ["Post"], "WebPageServer/getWebPage"], "MethodName": "Remote.WebPageServer.getWebPage", "MethodParameters": [], "MethodReturnType": [["ListType", ["TypeReference", "Remote.TransmitWebItem"]]] }, { "CallingConvention": ["HttpCallingConvention", ["Post"], "WebPageServer/rpc"], "MethodName": "Remote.WebPageServer.rpc", "MethodParameters": [{ "ParameterName": "id", "ParameterType": ["IntType"] }, { "ParameterName": "arg", "ParameterType": ["StringType"] }], "MethodReturnType": [["StringType"]] }], "TypeDefinitions": [["DefineUnion", { "UnionName": "Remote.TransmitWebItem", "UnionCases": [{ "CaseName": "TBigHeader", "CaseFields": [{ "FieldName": "Item", "FieldType": ["StringType"] }] }, { "CaseName": "THeader", "CaseFields": [{ "FieldName": "Item", "FieldType": ["StringType"] }] }, { "CaseName": "TParagraph", "CaseFields": [{ "FieldName": "Item", "FieldType": ["StringType"] }] }, { "CaseName": "TImage", "CaseFields": [{ "FieldName": "heightPixels", "FieldType": ["IntType"] }, { "FieldName": "widthPixels", "FieldType": ["IntType"] }, { "FieldName": "url", "FieldType": ["StringType"] }] }, { "CaseName": "TAction", "CaseFields": [{ "FieldName": "label", "FieldType": ["StringType"] }, { "FieldName": "id", "FieldType": ["IntType"] }] }, { "CaseName": "TBox", "CaseFields": [{ "FieldName": "Item", "FieldType": ["ListType", ["TypeReference", "Remote.TransmitWebItem"]] }] }] }]] });
/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="gen/Gluon.Generated.ts" />
function render(wi, container) {
    Remote.TransmitWebItem.match(wi, {
        TBigHeader: function (s) {
            container.append("<h1>" + s + "</h1>");
        },
        THeader: function (s) {
            container.append("<h2>" + s + "</h2>");
        },
        TParagraph: function (s) {
            container.append("<p>" + s + "</p>");
        },
        TImage: function (h, w, u) {
            container.append("<img src=\"" + u + "\" style=\"height:" + h + "px; width:" + w + "px;\"/>");
        },
        TBox: function (wis) {
            container.append("<div style=\"border: 1px solid black; width: 98%; padding: 5px 1% 5px 1%;\"></div>");
            var inner = container.children().last();
            wis.forEach(function (wi) { return render(wi, inner); });
        },
        TAction: function (label, id) {
            container.append("<div style=\"padding: 5px 5px 20px 5px;\"><label>" + label + "</label> <input id=\"input-" + id + "\"/> <button id=\"button-" + id + "\">Go!</button> <div id=\"output-" + id + "\"></div></div>");
            $("#button-" + id).click(function () {
                Remote.WebPageServer.rpc(new Gluon.Client)(id, $("#input-" + id).val()).done(function (result) {
                    $("#output-" + id).text(result);
                });
            });
        }
    });
}
window.onload = function () {
    Remote.WebPageServer.getWebPage(new Gluon.Client())().done(function (elements) {
        elements.forEach(function (e) {
            console.log(e);
            render(e, $('body'));
        });
    });
};
//# sourceMappingURL=app.js.map