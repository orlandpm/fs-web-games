 module Remote {
  
    export class TBigHeader {
      
        constructor(public Item: string) { }
         tag(): string { return "TBigHeader";}
         toJSON(): any {
           return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        }
    }
    export class THeader {
      
        constructor(public Item: string) { }
         tag(): string { return "THeader";}
         toJSON(): any {
           return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        }
    }
    export class TParagraph {
      
        constructor(public Item: string) { }
         tag(): string { return "TParagraph";}
         toJSON(): any {
           return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        }
    }
    export class TImage {
      
        constructor(public heightPixels: number,
        public widthPixels: number,
        public url: string) { }
         tag(): string { return "TImage";}
         toJSON(): any {
           return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        }
    }
    export class TAction {
      
        constructor(public label: string, public id: number) { }
         tag(): string { return "TAction";}
         toJSON(): any {
           return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        }
    }
    export class TBox {
      
        constructor(public Item: Remote.TransmitWebItem) { }
         tag(): string { return "TBox";}
         toJSON(): any {
           return Gluon.Internals.toJSON("Remote.TransmitWebItem", this);
        }
    }
    export type TransmitWebItem = TBigHeader | THeader | TParagraph | TImage | TAction | TBox;
}
 module Remote.TransmitWebItem {
  
    export function fromJSON(json: any): TransmitWebItem {
       return Gluon.Internals.fromJSON("Remote.TransmitWebItem", json);
    }
    export function match<T>(value: Remote.TransmitWebItem,
    cont: {
      TBigHeader: ((Item:  string) => T),
      THeader: ((Item:  string) => T),
      TParagraph: ((Item:  string) => T),
      TImage: ((heightPixels:  number,
      widthPixels:  number,
      url:  string) => T),
      TAction: ((label:  string, id:  number) => T),
      TBox: ((Item:  Remote.TransmitWebItem) => T)
    }): T {
      
        if (value instanceof TBigHeader) { return cont.TBigHeader(value.Item);}
        else if (value instanceof THeader) { return cont.THeader(value.Item);}
        else if (value instanceof TParagraph) {
           return cont.TParagraph(value.Item);
        }
        else if (value instanceof TImage) {
          
            return cont.TImage(value.heightPixels, value.widthPixels, value.url);
        }
        else if (value instanceof TAction) {
           return cont.TAction(value.label, value.id);
        }
        else if (value instanceof TBox) { return cont.TBox(value.Item);} else {
           throw new Error("match failed");
        }
    }
}
 module Remote.WebPageServer {
  
    export var getWebPage = Gluon.Internals.remoteMethod<(() => JQueryPromise<Remote.TransmitWebItem []>)>("Remote.WebPageServer.getWebPage");
    export var rpc = Gluon.Internals.remoteMethod<((id:  number,
    arg:  string) => JQueryPromise<string>)>("Remote.WebPageServer.rpc");
}
Gluon.Internals.registerActivators({
  "Remote.TBigHeader": (a) => new Remote.TBigHeader(a),
  "Remote.THeader": (a) => new Remote.THeader(a),
  "Remote.TParagraph": (a) => new Remote.TParagraph(a),
  "Remote.TImage": (a, b, c) => new Remote.TImage(a, b, c),
  "Remote.TAction": (a, b) => new Remote.TAction(a, b),
  "Remote.TBox": (a) => new Remote.TBox(a)
});
Gluon.Internals.registerService({"Methods":[{"CallingConvention":["HttpCallingConvention",["Post"],"WebPageServer/getWebPage"],"MethodName":"Remote.WebPageServer.getWebPage","MethodParameters":[],"MethodReturnType":[["ListType",["TypeReference","Remote.TransmitWebItem"]]]},{"CallingConvention":["HttpCallingConvention",["Post"],"WebPageServer/rpc"],"MethodName":"Remote.WebPageServer.rpc","MethodParameters":[{"ParameterName":"id","ParameterType":["IntType"]},{"ParameterName":"arg","ParameterType":["StringType"]}],"MethodReturnType":[["StringType"]]}],"TypeDefinitions":[["DefineUnion",{"UnionName":"Remote.TransmitWebItem","UnionCases":[{"CaseName":"TBigHeader","CaseFields":[{"FieldName":"Item","FieldType":["StringType"]}]},{"CaseName":"THeader","CaseFields":[{"FieldName":"Item","FieldType":["StringType"]}]},{"CaseName":"TParagraph","CaseFields":[{"FieldName":"Item","FieldType":["StringType"]}]},{"CaseName":"TImage","CaseFields":[{"FieldName":"heightPixels","FieldType":["IntType"]},{"FieldName":"widthPixels","FieldType":["IntType"]},{"FieldName":"url","FieldType":["StringType"]}]},{"CaseName":"TAction","CaseFields":[{"FieldName":"label","FieldType":["StringType"]},{"FieldName":"id","FieldType":["IntType"]}]},{"CaseName":"TBox","CaseFields":[{"FieldName":"Item","FieldType":["TypeReference","Remote.TransmitWebItem"]}]}]}]]});
