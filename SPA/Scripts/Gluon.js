// Copyright 2015 Tachyus Corp.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you
// may not use this file except in compliance with the License. You may
// obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied. See the License for the specific language governing
// permissions and limitations under the License.
var Gluon;
(function (Gluon) {
    var Schema;
    (function (Schema) {
        var Delete = (function () {
            function Delete() {
            }
            Delete.prototype.tag = function () { return "Delete"; };
            Delete.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.HttpMethod", this);
            };
            return Delete;
        })();
        Schema.Delete = Delete;
        var Get = (function () {
            function Get() {
            }
            Get.prototype.tag = function () { return "Get"; };
            Get.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.HttpMethod", this);
            };
            return Get;
        })();
        Schema.Get = Get;
        var Post = (function () {
            function Post() {
            }
            Post.prototype.tag = function () { return "Post"; };
            Post.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.HttpMethod", this);
            };
            return Post;
        })();
        Schema.Post = Post;
        var Put = (function () {
            function Put() {
            }
            Put.prototype.tag = function () { return "Put"; };
            Put.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.HttpMethod", this);
            };
            return Put;
        })();
        Schema.Put = Put;
        var HttpCallingConvention = (function () {
            function HttpCallingConvention(Item1, path) {
                this.Item1 = Item1;
                this.path = path;
            }
            HttpCallingConvention.prototype.tag = function () { return "HttpCallingConvention"; };
            HttpCallingConvention.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.CallingConvention", this);
            };
            return HttpCallingConvention;
        })();
        Schema.HttpCallingConvention = HttpCallingConvention;
        var ArrayType = (function () {
            function ArrayType(Item) {
                this.Item = Item;
            }
            ArrayType.prototype.tag = function () { return "ArrayType"; };
            ArrayType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return ArrayType;
        })();
        Schema.ArrayType = ArrayType;
        var BooleanType = (function () {
            function BooleanType() {
            }
            BooleanType.prototype.tag = function () { return "BooleanType"; };
            BooleanType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return BooleanType;
        })();
        Schema.BooleanType = BooleanType;
        var BytesType = (function () {
            function BytesType() {
            }
            BytesType.prototype.tag = function () { return "BytesType"; };
            BytesType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return BytesType;
        })();
        Schema.BytesType = BytesType;
        var DateTimeType = (function () {
            function DateTimeType() {
            }
            DateTimeType.prototype.tag = function () { return "DateTimeType"; };
            DateTimeType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return DateTimeType;
        })();
        Schema.DateTimeType = DateTimeType;
        var DoubleType = (function () {
            function DoubleType() {
            }
            DoubleType.prototype.tag = function () { return "DoubleType"; };
            DoubleType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return DoubleType;
        })();
        Schema.DoubleType = DoubleType;
        var IntType = (function () {
            function IntType() {
            }
            IntType.prototype.tag = function () { return "IntType"; };
            IntType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return IntType;
        })();
        Schema.IntType = IntType;
        var JsonType = (function () {
            function JsonType() {
            }
            JsonType.prototype.tag = function () { return "JsonType"; };
            JsonType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return JsonType;
        })();
        Schema.JsonType = JsonType;
        var ListType = (function () {
            function ListType(Item) {
                this.Item = Item;
            }
            ListType.prototype.tag = function () { return "ListType"; };
            ListType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return ListType;
        })();
        Schema.ListType = ListType;
        var OptionType = (function () {
            function OptionType(Item) {
                this.Item = Item;
            }
            OptionType.prototype.tag = function () { return "OptionType"; };
            OptionType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return OptionType;
        })();
        Schema.OptionType = OptionType;
        var SequenceType = (function () {
            function SequenceType(Item) {
                this.Item = Item;
            }
            SequenceType.prototype.tag = function () { return "SequenceType"; };
            SequenceType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return SequenceType;
        })();
        Schema.SequenceType = SequenceType;
        var StringDictType = (function () {
            function StringDictType(Item) {
                this.Item = Item;
            }
            StringDictType.prototype.tag = function () { return "StringDictType"; };
            StringDictType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return StringDictType;
        })();
        Schema.StringDictType = StringDictType;
        var StringType = (function () {
            function StringType() {
            }
            StringType.prototype.tag = function () { return "StringType"; };
            StringType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return StringType;
        })();
        Schema.StringType = StringType;
        var TupleType = (function () {
            function TupleType(Item) {
                this.Item = Item;
            }
            TupleType.prototype.tag = function () { return "TupleType"; };
            TupleType.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return TupleType;
        })();
        Schema.TupleType = TupleType;
        var TypeReference = (function () {
            function TypeReference(Item) {
                this.Item = Item;
            }
            TypeReference.prototype.tag = function () { return "TypeReference"; };
            TypeReference.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.DataType", this);
            };
            return TypeReference;
        })();
        Schema.TypeReference = TypeReference;
        var Parameter = (function () {
            function Parameter(ParameterName, ParameterType) {
                this.ParameterName = ParameterName;
                this.ParameterType = ParameterType;
            }
            Parameter.fromJSON = function (json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.Parameter", json);
            };
            Parameter.prototype.tag = function () { return "Parameter"; };
            Parameter.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.Parameter", this);
            };
            return Parameter;
        })();
        Schema.Parameter = Parameter;
        var Method = (function () {
            function Method(CallingConvention, MethodName, MethodParameters, MethodReturnType) {
                this.CallingConvention = CallingConvention;
                this.MethodName = MethodName;
                this.MethodParameters = MethodParameters;
                this.MethodReturnType = MethodReturnType;
            }
            Method.fromJSON = function (json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.Method", json);
            };
            Method.prototype.tag = function () { return "Method"; };
            Method.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.Method", this);
            };
            return Method;
        })();
        Schema.Method = Method;
        var EnumCase = (function () {
            function EnumCase(EnumCaseName, EnumCaseValue) {
                this.EnumCaseName = EnumCaseName;
                this.EnumCaseValue = EnumCaseValue;
            }
            EnumCase.fromJSON = function (json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.EnumCase", json);
            };
            EnumCase.prototype.tag = function () { return "EnumCase"; };
            EnumCase.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.EnumCase", this);
            };
            return EnumCase;
        })();
        Schema.EnumCase = EnumCase;
        var Enum = (function () {
            function Enum(EnumName, EnumCases) {
                this.EnumName = EnumName;
                this.EnumCases = EnumCases;
            }
            Enum.fromJSON = function (json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.Enum", json);
            };
            Enum.prototype.tag = function () { return "Enum"; };
            Enum.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.Enum", this);
            };
            return Enum;
        })();
        Schema.Enum = Enum;
        var Field = (function () {
            function Field(FieldName, FieldType) {
                this.FieldName = FieldName;
                this.FieldType = FieldType;
            }
            Field.fromJSON = function (json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.Field", json);
            };
            Field.prototype.tag = function () { return "Field"; };
            Field.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.Field", this);
            };
            return Field;
        })();
        Schema.Field = Field;
        var Record = (function () {
            function Record(RecordName, RecordFields) {
                this.RecordName = RecordName;
                this.RecordFields = RecordFields;
            }
            Record.fromJSON = function (json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.Record", json);
            };
            Record.prototype.tag = function () { return "Record"; };
            Record.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.Record", this);
            };
            return Record;
        })();
        Schema.Record = Record;
        var UnionCase = (function () {
            function UnionCase(CaseName, CaseFields) {
                this.CaseName = CaseName;
                this.CaseFields = CaseFields;
            }
            UnionCase.fromJSON = function (json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.UnionCase", json);
            };
            UnionCase.prototype.tag = function () { return "UnionCase"; };
            UnionCase.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.UnionCase", this);
            };
            return UnionCase;
        })();
        Schema.UnionCase = UnionCase;
        var Union = (function () {
            function Union(UnionName, UnionCases) {
                this.UnionName = UnionName;
                this.UnionCases = UnionCases;
            }
            Union.fromJSON = function (json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.Union", json);
            };
            Union.prototype.tag = function () { return "Union"; };
            Union.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.Union", this);
            };
            return Union;
        })();
        Schema.Union = Union;
        var DefineEnum = (function () {
            function DefineEnum(Item) {
                this.Item = Item;
            }
            DefineEnum.prototype.tag = function () { return "DefineEnum"; };
            DefineEnum.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.TypeDefinition", this);
            };
            return DefineEnum;
        })();
        Schema.DefineEnum = DefineEnum;
        var DefineRecord = (function () {
            function DefineRecord(Item) {
                this.Item = Item;
            }
            DefineRecord.prototype.tag = function () { return "DefineRecord"; };
            DefineRecord.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.TypeDefinition", this);
            };
            return DefineRecord;
        })();
        Schema.DefineRecord = DefineRecord;
        var DefineUnion = (function () {
            function DefineUnion(Item) {
                this.Item = Item;
            }
            DefineUnion.prototype.tag = function () { return "DefineUnion"; };
            DefineUnion.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.TypeDefinition", this);
            };
            return DefineUnion;
        })();
        Schema.DefineUnion = DefineUnion;
        var Service = (function () {
            function Service(Methods, TypeDefinitions) {
                this.Methods = Methods;
                this.TypeDefinitions = TypeDefinitions;
            }
            Service.fromJSON = function (json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.Service", json);
            };
            Service.prototype.tag = function () { return "Service"; };
            Service.prototype.toJSON = function () {
                return Gluon.Internals.toJSON("Gluon.Schema.Service", this);
            };
            return Service;
        })();
        Schema.Service = Service;
    })(Schema = Gluon.Schema || (Gluon.Schema = {}));
})(Gluon || (Gluon = {}));
var Gluon;
(function (Gluon) {
    var Schema;
    (function (Schema) {
        var HttpMethod;
        (function (HttpMethod) {
            function fromJSON(json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.HttpMethod", json);
            }
            HttpMethod.fromJSON = fromJSON;
            function match(value, cont) {
                if (value instanceof Schema.Delete) {
                    return cont.Delete();
                }
                else if (value instanceof Schema.Get) {
                    return cont.Get();
                }
                else if (value instanceof Schema.Post) {
                    return cont.Post();
                }
                else if (value instanceof Schema.Put) {
                    return cont.Put();
                }
                else {
                    throw new Error("match failed");
                }
            }
            HttpMethod.match = match;
        })(HttpMethod = Schema.HttpMethod || (Schema.HttpMethod = {}));
    })(Schema = Gluon.Schema || (Gluon.Schema = {}));
})(Gluon || (Gluon = {}));
var Gluon;
(function (Gluon) {
    var Schema;
    (function (Schema) {
        var CallingConvention;
        (function (CallingConvention) {
            function fromJSON(json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.CallingConvention", json);
            }
            CallingConvention.fromJSON = fromJSON;
            function match(value, cont) {
                if (value instanceof Schema.HttpCallingConvention) {
                    return cont.HttpCallingConvention(value.Item1, value.path);
                }
                else {
                    throw new Error("match failed");
                }
            }
            CallingConvention.match = match;
        })(CallingConvention = Schema.CallingConvention || (Schema.CallingConvention = {}));
    })(Schema = Gluon.Schema || (Gluon.Schema = {}));
})(Gluon || (Gluon = {}));
var Gluon;
(function (Gluon) {
    var Schema;
    (function (Schema) {
        var DataType;
        (function (DataType) {
            function fromJSON(json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.DataType", json);
            }
            DataType.fromJSON = fromJSON;
            function match(value, cont) {
                if (value instanceof Schema.ArrayType) {
                    return cont.ArrayType(value.Item);
                }
                else if (value instanceof Schema.BooleanType) {
                    return cont.BooleanType();
                }
                else if (value instanceof Schema.BytesType) {
                    return cont.BytesType();
                }
                else if (value instanceof Schema.DateTimeType) {
                    return cont.DateTimeType();
                }
                else if (value instanceof Schema.DoubleType) {
                    return cont.DoubleType();
                }
                else if (value instanceof Schema.IntType) {
                    return cont.IntType();
                }
                else if (value instanceof Schema.JsonType) {
                    return cont.JsonType();
                }
                else if (value instanceof Schema.ListType) {
                    return cont.ListType(value.Item);
                }
                else if (value instanceof Schema.OptionType) {
                    return cont.OptionType(value.Item);
                }
                else if (value instanceof Schema.SequenceType) {
                    return cont.SequenceType(value.Item);
                }
                else if (value instanceof Schema.StringDictType) {
                    return cont.StringDictType(value.Item);
                }
                else if (value instanceof Schema.StringType) {
                    return cont.StringType();
                }
                else if (value instanceof Schema.TupleType) {
                    return cont.TupleType(value.Item);
                }
                else if (value instanceof Schema.TypeReference) {
                    return cont.TypeReference(value.Item);
                }
                else {
                    throw new Error("match failed");
                }
            }
            DataType.match = match;
        })(DataType = Schema.DataType || (Schema.DataType = {}));
    })(Schema = Gluon.Schema || (Gluon.Schema = {}));
})(Gluon || (Gluon = {}));
var Gluon;
(function (Gluon) {
    var Schema;
    (function (Schema) {
        var TypeDefinition;
        (function (TypeDefinition) {
            function fromJSON(json) {
                return Gluon.Internals.fromJSON("Gluon.Schema.TypeDefinition", json);
            }
            TypeDefinition.fromJSON = fromJSON;
            function match(value, cont) {
                if (value instanceof Schema.DefineEnum) {
                    return cont.DefineEnum(value.Item);
                }
                else if (value instanceof Schema.DefineRecord) {
                    return cont.DefineRecord(value.Item);
                }
                else if (value instanceof Schema.DefineUnion) {
                    return cont.DefineUnion(value.Item);
                }
                else {
                    throw new Error("match failed");
                }
            }
            TypeDefinition.match = match;
        })(TypeDefinition = Schema.TypeDefinition || (Schema.TypeDefinition = {}));
    })(Schema = Gluon.Schema || (Gluon.Schema = {}));
})(Gluon || (Gluon = {}));
var Gluon;
(function (Gluon) {
    var S = Gluon.Schema;
    var Option = (function () {
        function Option(isSome, value) {
            this.isSome = isSome;
            this.value = value;
        }
        Option.prototype.withDefault = function (defaultValue) {
            if (this.isSome) {
                return this.value;
            }
            else {
                return defaultValue;
            }
        };
        Option.prototype.toJSON = function () {
            if (this.isSome) {
                return [this.value];
            }
            else {
                return null;
            }
        };
        return Option;
    })();
    Gluon.Option = Option;
    var Option;
    (function (Option) {
        function some(value) {
            return new Option(true, value);
        }
        Option.some = some;
        function none() {
            return new Option(false, undefined);
        }
        Option.none = none;
        function fromJSON(json) {
            if (json === null) {
                return none();
            }
        }
        Option.fromJSON = fromJSON;
    })(Option = Gluon.Option || (Gluon.Option = {}));
    var Dict = (function () {
        function Dict() {
            this.data = {};
        }
        Dict.prototype.check = function (key) {
            if (typeof key !== "string") {
                throw new Error("Invalid or null key");
            }
        };
        Dict.prototype.containsKey = function (key) {
            this.check(key);
            return this.data.hasOwnProperty(key);
        };
        Dict.prototype.forEach = function (visit) {
            for (var prop in this.data) {
                if (this.data.hasOwnProperty(prop)) {
                    visit(prop, this.data[prop]);
                }
            }
        };
        Dict.prototype.copy = function () {
            var result = new Dict();
            this.forEach(function (key, el) { return result.setAt(key, el); });
            return result;
        };
        Dict.prototype.at = function (key) {
            this.check(key);
            if (this.data.hasOwnProperty(key)) {
                return this.data[key];
            }
            else {
                throw new Error("Missing key: " + key);
            }
        };
        Dict.prototype.tryFind = function (key) {
            this.check(key);
            if (this.data.hasOwnProperty(key)) {
                return Option.some(this.data[key]);
            }
            else {
                return Option.none();
            }
        };
        Dict.prototype.setAt = function (key, value) {
            this.check(key);
            this.data[key] = value;
        };
        Dict.prototype.toJSON = function () {
            return this.data;
        };
        return Dict;
    })();
    Gluon.Dict = Dict;
    var DataType;
    (function (DataType) {
        function defaultMatch(def) {
            return {
                ArrayType: function (t) { return def; },
                BooleanType: function () { return def; },
                BytesType: function () { return def; },
                DateTimeType: function () { return def; },
                DoubleType: function () { return def; },
                IntType: function () { return def; },
                JsonType: function () { return def; },
                ListType: function (t) { return def; },
                OptionType: function (t) { return def; },
                SequenceType: function (t) { return def; },
                StringDictType: function (t) { return def; },
                StringType: function () { return def; },
                TupleType: function (elements) { return def; },
                TypeReference: function (tref) { return def; }
            };
        }
        DataType.defaultMatch = defaultMatch;
        function children(d) {
            var m = defaultMatch([]);
            m.ArrayType = function (x) { return [x]; };
            m.ListType = function (x) { return [x]; };
            m.OptionType = function (x) { return [x]; };
            m.SequenceType = function (x) { return [x]; };
            m.StringDictType = function (x) { return [x]; };
            m.TupleType = function (xs) { return xs; };
            return S.DataType.match(d, m);
        }
        DataType.children = children;
    })(DataType || (DataType = {}));
    function defaultVisitor() {
        return {
            visitDataType: function (t) { },
            visitRecord: function (r) { },
            visitUnion: function (u) { },
            visitEnum: function (e) { }
        };
    }
    function visitDataType(dt, visitor) {
        visitor.visitDataType(dt);
        DataType.children(dt).forEach(function (x) { return visitDataType(x, visitor); });
    }
    function visitTypes(types, visitor) {
        function visitField(f) {
            visitDataType(f.FieldType, visitor);
        }
        function visitRecord(r) {
            visitor.visitRecord(r);
            r.RecordFields.forEach(visitField);
        }
        function visitCase(c) {
            c.CaseFields.forEach(visitField);
        }
        function visitUnion(u) {
            visitor.visitUnion(u);
            u.UnionCases.forEach(visitCase);
        }
        function visitEnum(e) {
            visitor.visitEnum(e);
        }
        function visitTD(td) {
            S.TypeDefinition.match(td, {
                DefineUnion: function (u) { return visitUnion(u); },
                DefineRecord: function (r) { return visitRecord(r); },
                DefineEnum: function (e) { return visitEnum(e); }
            });
        }
        types.forEach(visitTD);
    }
    function visitServiceMethods(methods, visitor) {
        function visitParam(p) {
            visitDataType(p.ParameterType, visitor);
        }
        function visitMethod(m) {
            m.MethodParameters.forEach(visitParam);
            if (m.MethodParameters.length > 1) {
                var t = tupleType(m.MethodParameters.map(function (p) { return p.ParameterType; }));
                visitDataType(t, visitor);
            }
            if (m.MethodReturnType.isSome) {
                visitDataType(m.MethodReturnType.value, visitor);
            }
        }
        methods.forEach(visitMethod);
    }
    function dataTypeKey(dataType) {
        function key(dataType) {
            return S.DataType.match(dataType, {
                ArrayType: function (t) { return [":array", key(t)]; },
                BooleanType: function () { return ":bool"; },
                BytesType: function () { return ":bytes"; },
                DateTimeType: function () { return ":datetime"; },
                DoubleType: function () { return ":double"; },
                IntType: function () { return ":int"; },
                JsonType: function () { return ":json"; },
                ListType: function (t) { return [":list", key(t)]; },
                OptionType: function (t) { return [":option", key(t)]; },
                SequenceType: function (t) { return [":seq", key(t)]; },
                StringDictType: function (t) { return [":sdict", key(t)]; },
                StringType: function () { return ":str"; },
                TupleType: function (ts) { return [":tup"].concat(ts.map(key)); },
                TypeReference: function (t) { return t; }
            });
        }
        return JSON.stringify(key(dataType));
    }
    function typeDefName(td) {
        return S.TypeDefinition.match(td, {
            DefineEnum: function (e) { return e.EnumName; },
            DefineRecord: function (r) { return r.RecordName; },
            DefineUnion: function (u) { return u.UnionName; }
        });
    }
    function findTypeDefinition(svc, name) {
        return svc.TypeDefinitions.filter(function (x) { return typeDefName(x) === name; })[0];
    }
    function idSerializer() {
        return {
            init: function (f) { },
            toJSON: function (v) { return v; },
            fromJSON: function (v) { return v; }
        };
    }
    var booleanSerializer = idSerializer();
    function serializeNumber(n) {
        if (isFinite(n)) {
            return n;
        }
        else {
            return String(n);
        }
    }
    function deserializeNumber(json) {
        return Number(json);
    }
    var numberSerializer = {
        init: function (f) { },
        toJSON: serializeNumber,
        fromJSON: deserializeNumber
    };
    var dateSerializer = {
        init: function (f) { },
        toJSON: function (date) {
            var str = date.toISOString();
            if (date.unspecified) {
                str = str.substring(0, str.length - 1);
            }
            return str;
        },
        fromJSON: function (str) {
            var unspecified = str.charAt(str.length - 1).toLowerCase() != "z";
            var d = new Date(str);
            d.unspecified = unspecified;
            return d;
        }
    };
    var rawJsonSerializer = {
        init: function (f) { },
        toJSON: function (x) { return x; },
        fromJSON: function (x) { return x; }
    };
    function b64encode(bytes) {
        var s = "";
        for (var i = 0; i < bytes.length; i++) {
            s = s + String.fromCharCode(bytes[i]);
        }
        return btoa(s);
    }
    function b64decode(b64) {
        var input = atob(b64);
        var r = new Uint8Array(input.length);
        for (var i = 0; i < r.length; i++) {
            r[i] = input.charCodeAt(i);
        }
        return r;
    }
    var bytesSerializer = {
        init: function (f) { },
        toJSON: function (x) { return b64encode(x); },
        fromJSON: function (x) { return b64decode(x); }
    };
    var stringSerializer = idSerializer();
    var ArraySerializer = (function () {
        function ArraySerializer(element) {
            this.element = element;
        }
        ArraySerializer.prototype.init = function (factory) {
            this.inner = factory.getSerializer(this.element);
        };
        ArraySerializer.prototype.toJSON = function (value) {
            var _this = this;
            return value.map(function (x) { return _this.inner.toJSON(x); });
        };
        ArraySerializer.prototype.fromJSON = function (json) {
            var _this = this;
            return json.map(function (x) { return _this.inner.fromJSON(x); });
        };
        return ArraySerializer;
    })();
    var DictSerializer = (function () {
        function DictSerializer(element) {
            this.element = element;
        }
        DictSerializer.prototype.init = function (factory) {
            this.inner = factory.getSerializer(this.element);
        };
        DictSerializer.prototype.toJSON = function (dict) {
            var _this = this;
            var result = {};
            dict.forEach(function (key, value) {
                result[key] = _this.inner.toJSON(value);
            });
            return result;
        };
        DictSerializer.prototype.fromJSON = function (json) {
            var result = new Dict();
            for (var key in json) {
                result.setAt(key, this.inner.fromJSON(json[key]));
            }
            return result;
        };
        return DictSerializer;
    })();
    var OptionSerializer = (function () {
        function OptionSerializer(element) {
            this.element = element;
        }
        OptionSerializer.prototype.init = function (factory) {
            this.inner = factory.getSerializer(this.element);
        };
        OptionSerializer.prototype.toJSON = function (opt) {
            if (opt.isSome) {
                return [this.inner.toJSON(opt.value)];
            }
            else {
                return null;
            }
        };
        OptionSerializer.prototype.fromJSON = function (json) {
            if (json === null) {
                return Option.none();
            }
            else {
                return Option.some(this.inner.fromJSON(json[0]));
            }
        };
        return OptionSerializer;
    })();
    var TupleSerializer = (function () {
        function TupleSerializer(elements) {
            this.elements = elements;
        }
        TupleSerializer.prototype.length = function () {
            return this.elements.length;
        };
        TupleSerializer.prototype.init = function (factory) {
            this.inner = this.elements.map(function (x) { return factory.getSerializer(x); });
        };
        TupleSerializer.prototype.toJSON = function (tup) {
            var n = this.length();
            var res = new Array(n);
            for (var i = 0; i < n; i++) {
                res[i] = this.inner[i].toJSON(tup[i]);
            }
            return res;
        };
        TupleSerializer.prototype.fromJSON = function (json) {
            var n = this.length();
            var res = new Array(n);
            for (var i = 0; i < n; i++) {
                res[i] = this.inner[i].fromJSON(json[i]);
            }
            return res;
        };
        return TupleSerializer;
    })();
    function buildDataTypeSerializer(dt) {
        function arrayLike(t) {
            return new ArraySerializer(t);
        }
        function tref(x) {
            throw new Error("Invalid DataType");
        }
        return S.DataType.match(dt, {
            ArrayType: arrayLike,
            ListType: arrayLike,
            SequenceType: arrayLike,
            BooleanType: function () { return booleanSerializer; },
            BytesType: function () { return bytesSerializer; },
            DateTimeType: function () { return dateSerializer; },
            DoubleType: function () { return numberSerializer; },
            IntType: function () { return numberSerializer; },
            JsonType: function () { return rawJsonSerializer; },
            OptionType: function (t) { return new OptionSerializer(t); },
            StringDictType: function (t) { return new DictSerializer(t); },
            StringType: function () { return stringSerializer; },
            TupleType: function (ts) { return new TupleSerializer(ts); },
            TypeReference: tref
        });
    }
    var TypeRegistry = (function () {
        function TypeRegistry() {
            this.activators = new Dict();
        }
        TypeRegistry.prototype.registerActivators = function (activators) {
            var _this = this;
            activators.forEach(function (a) {
                _this.activators.setAt(a.typeId, a);
            });
        };
        TypeRegistry.prototype.fullCaseName = function (typeId, caseName) {
            var i = typeId.lastIndexOf('.');
            if (i === -1) {
                return caseName;
            }
            else {
                return typeId.substr(0, i) + '.' + caseName;
            }
        };
        TypeRegistry.prototype.createRecord = function (typeId, args) {
            return this.activators.at(typeId).createInstance(args);
        };
        TypeRegistry.prototype.createUnion = function (typeId, caseName, args) {
            return this.activators.at(this.fullCaseName(typeId, caseName)).createInstance(args);
        };
        return TypeRegistry;
    })();
    var EnumSerializer = (function () {
        function EnumSerializer() {
        }
        EnumSerializer.prototype.init = function (factory) { };
        EnumSerializer.prototype.toJSON = function (value) { return value; };
        EnumSerializer.prototype.fromJSON = function (json) { return json; };
        return EnumSerializer;
    })();
    var RecordSerializer = (function () {
        function RecordSerializer(record, typeRegistry) {
            this.record = record;
            this.typeRegistry = typeRegistry;
        }
        RecordSerializer.prototype.init = function (factory) {
            this.fields = this.record.RecordFields.map(function (f) {
                return {
                    name: f.FieldName,
                    ser: factory.getSerializer(f.FieldType)
                };
            });
        };
        RecordSerializer.prototype.toJSON = function (value) {
            var result = {};
            this.fields.forEach(function (fld) {
                result[fld.name] = fld.ser.toJSON(value[fld.name]);
            });
            return result;
        };
        RecordSerializer.prototype.fromJSON = function (json) {
            var len = this.fields.length;
            var args = new Array(len);
            for (var i = 0; i < len; i++) {
                var fld = this.fields[i];
                args[i] = fld.ser.fromJSON(json[fld.name]);
            }
            return this.typeRegistry.createRecord(this.record.RecordName, args);
        };
        return RecordSerializer;
    })();
    var FieldInfo = (function () {
        function FieldInfo() {
        }
        return FieldInfo;
    })();
    var CaseInfo = (function () {
        function CaseInfo() {
        }
        return CaseInfo;
    })();
    var UnionSerializer = (function () {
        function UnionSerializer(union, typeRegistry) {
            this.union = union;
            this.typeRegistry = typeRegistry;
        }
        UnionSerializer.prototype.init = function (factory) {
            this.cases = this.union.UnionCases.map(function (c) {
                return {
                    caseName: c.CaseName,
                    fields: c.CaseFields.map(function (f) {
                        return {
                            fieldName: f.FieldName,
                            fieldSerializer: factory.getSerializer(f.FieldType)
                        };
                    })
                };
            });
        };
        UnionSerializer.prototype.findCase = function (name) {
            for (var i = 0; i < this.cases.length; i++) {
                var c = this.cases[i];
                if (c.caseName === name) {
                    return c;
                }
            }
        };
        UnionSerializer.prototype.toJSON = function (value) {
            var tag = value.tag();
            var uCase = this.findCase(tag);
            var res = new Array(uCase.fields.length + 1);
            res[0] = tag;
            for (var i = 0; i < uCase.fields.length; i++) {
                var f = uCase.fields[i];
                var v = value[f.fieldName];
                res[i + 1] = f.fieldSerializer.toJSON(v);
            }
            return res;
        };
        UnionSerializer.prototype.fromJSON = function (json) {
            var c = this.findCase(json[0]);
            var args = new Array(json.length - 1);
            for (var i = 0; i < args.length; i++) {
                var fld = c.fields[i];
                args[i] = fld.fieldSerializer.fromJSON(json[i + 1]);
            }
            return this.typeRegistry.createUnion(this.union.UnionName, c.caseName, args);
        };
        return UnionSerializer;
    })();
    function typeReference(typeId) {
        return new S.TypeReference(typeId);
    }
    function tupleType(dataTypes) {
        return new S.TupleType(dataTypes);
    }
    var SerializerService = (function () {
        function SerializerService() {
            this.dict = new Dict();
            this.registry = new TypeRegistry();
        }
        SerializerService.prototype.add = function (dt, ser) {
            var key = dataTypeKey(dt);
            this.dict.setAt(key, ser);
        };
        SerializerService.prototype.getSerializer = function (dt) {
            var key = dataTypeKey(dt);
            return this.dict.at(key);
        };
        SerializerService.prototype.contains = function (dt) {
            var key = dataTypeKey(dt);
            return this.dict.containsKey(key);
        };
        SerializerService.prototype.init = function () {
            var _this = this;
            this.dict.forEach(function (k, ser) {
                ser.init(_this);
            });
        };
        SerializerService.prototype.registerActivators = function (activators) {
            this.registry.registerActivators(activators);
        };
        SerializerService.prototype.createVisitor = function () {
            var _this = this;
            var vis = defaultVisitor();
            var add = function (dt) {
                if (!_this.contains(dt)) {
                    _this.add(dt, buildDataTypeSerializer(dt));
                }
            };
            vis.visitDataType = function (dt) {
                if (!(dt instanceof S.TypeReference)) {
                    add(dt);
                }
            };
            vis.visitRecord = function (r) {
                var dt = typeReference(r.RecordName);
                _this.add(dt, new RecordSerializer(r, _this.registry));
            };
            vis.visitUnion = function (u) {
                var dt = typeReference(u.UnionName);
                _this.add(dt, new UnionSerializer(u, _this.registry));
            };
            vis.visitEnum = function (e) {
                var dt = typeReference(e.EnumName);
                console.log("visitEnum", e, dt);
                _this.add(dt, new EnumSerializer());
            };
            return vis;
        };
        SerializerService.prototype.registerTypes = function (types) {
            visitTypes(types, this.createVisitor());
            this.init();
        };
        SerializerService.prototype.registerServiceMethods = function (methods) {
            visitServiceMethods(methods, this.createVisitor());
            this.init();
        };
        return SerializerService;
    })();
    var Client = (function () {
        function Client(prefix) {
            if (!prefix) {
                this.prefix = "/gluon-api";
            }
            else {
                this.prefix = prefix;
            }
            this.httpClient = new JQueryClient();
        }
        return Client;
    })();
    Gluon.Client = Client;
    var JQueryClient = (function () {
        function JQueryClient() {
        }
        JQueryClient.prototype.httpGet = function (url, queryParams, parseJsonResponse) {
            return jQuery.ajax({
                "url": url,
                "type": "get",
                "data": queryParams
            }).then(function (x) { return parseJsonResponse(x); });
        };
        JQueryClient.prototype.httpCall = function (httpMethod, url, jsonRequest, parseJsonResponse) {
            var ajaxParams = { "url": url, "type": httpMethod };
            if (jsonRequest !== null) {
                ajaxParams.data = jsonRequest;
                ajaxParams.dataType = "json";
                ajaxParams.contentType = "application/json";
            }
            return jQuery.ajax(ajaxParams).then(function (x) { return parseJsonResponse(x); });
        };
        return JQueryClient;
    })();
    var Remoting;
    (function (Remoting) {
        function verbName(m) {
            return S.HttpMethod.match(m, {
                Get: function () { return "get"; },
                Delete: function () { return "delete"; },
                Post: function () { return "post"; },
                Put: function () { return "put"; }
            });
        }
        function verb(conv) {
            return S.CallingConvention.match(conv, {
                HttpCallingConvention: function (m, path) { return m; }
            });
        }
        function localPath(conv) {
            return S.CallingConvention.match(conv, {
                HttpCallingConvention: function (m, path) { return path; }
            });
        }
        function buildUrl(cli, m) {
            return cli.prefix + "/" + localPath(m.CallingConvention);
        }
        function buildQueryParams(cli, proxy, args) {
            var query = {};
            proxy.innerMethod.MethodParameters.forEach(function (p, i) {
                query[p.ParameterName] = JSON.stringify(proxy.parameterSerializers[i].toJSON(args[i]));
            });
            return query;
        }
        function buildJsonRequest(cli, proxy, args) {
            var data;
            if (proxy.arity == 0) {
                return null;
            }
            else if (proxy.arity == 1) {
                data = args[0];
            }
            else {
                data = args;
            }
            return JSON.stringify(proxy.jointParametersSerializer.toJSON(data));
        }
        function remoteCall(cli, proxy, args) {
            function parseJsonResponse(resp) {
                if (proxy.doesReturn) {
                    var out = proxy.returnTypeSerializer.fromJSON(resp);
                    return out;
                }
                else {
                    return resp;
                }
            }
            var url = buildUrl(cli, proxy.innerMethod);
            var httpMethod = verb(proxy.innerMethod.CallingConvention);
            if (httpMethod instanceof S.Get) {
                var queryParams = buildQueryParams(cli, proxy, args);
                return cli.httpClient.httpGet(url, queryParams, parseJsonResponse);
            }
            else {
                var jsonRequest = buildJsonRequest(cli, proxy, args);
                return cli.httpClient.httpCall(verbName(httpMethod), url, jsonRequest, parseJsonResponse);
            }
        }
        Remoting.remoteCall = remoteCall;
    })(Remoting || (Remoting = {}));
    var RemoteMethodProxy = (function () {
        function RemoteMethodProxy(factory, m) {
            this.innerMethod = m;
            this.arity = m.MethodParameters.length;
            switch (this.arity) {
                case 0:
                    break;
                case 1:
                    var s0 = factory.getSerializer(m.MethodParameters[0].ParameterType);
                    this.jointParametersSerializer = s0;
                    this.parameterSerializers = [s0];
                    break;
                default:
                    this.parameterSerializers = m.MethodParameters.map(function (p) {
                        return factory.getSerializer(p.ParameterType);
                    });
                    this.jointParametersSerializer = factory.getSerializer(tupleType(m.MethodParameters.map(function (p) {
                        return p.ParameterType;
                    })));
                    break;
            }
            if (m.MethodReturnType.isSome) {
                this.doesReturn = true;
                this.returnTypeSerializer = factory.getSerializer(m.MethodReturnType.value);
            }
            else {
                this.doesReturn = false;
            }
        }
        RemoteMethodProxy.prototype.call = function (cli, args) {
            return Remoting.remoteCall(cli, this, args);
        };
        return RemoteMethodProxy;
    })();
    var MethodBuilder = (function () {
        function MethodBuilder(factory) {
            this.factory = factory;
            this.table = new Dict();
        }
        MethodBuilder.prototype.registerService = function (service) {
            var _this = this;
            service.Methods.forEach(function (m) {
                var proxy = new RemoteMethodProxy(_this.factory, m);
                _this.table.setAt(m.MethodName, proxy);
            });
        };
        MethodBuilder.prototype.getProxy = function (name) {
            return this.table.at(name);
        };
        MethodBuilder.prototype.remoteMethod = function (name) {
            var _this = this;
            return function (client) {
                var proxy = _this.getProxy(name);
                function call() {
                    var args = arguments;
                    return proxy.call(client, args);
                }
                return call;
            };
        };
        return MethodBuilder;
    })();
    var RawSchemaJsonParser;
    (function (RawSchemaJsonParser) {
        function at(json, pos) {
            return json[pos + 1];
        }
        function rawCaseFields(json) {
            var j = json;
            return j.slice(1);
        }
        function tag(json) {
            return json[0];
        }
        function dataType(json) {
            switch (tag(json)) {
                case "ArrayType":
                    return new S.ArrayType(dataType(at(json, 0)));
                case "BooleanType":
                    return new S.BooleanType();
                case "BytesType":
                    return new S.BytesType();
                case "DateTimeType":
                    return new S.DateTimeType();
                case "DoubleType":
                    return new S.DoubleType();
                case "IntType":
                    return new S.IntType();
                case "JsonType":
                    return new S.JsonType();
                case "ListType":
                    return new S.ListType(dataType(at(json, 0)));
                case "OptionType":
                    return new S.OptionType(dataType(at(json, 0)));
                case "SequenceType":
                    return new S.SequenceType(dataType(at(json, 0)));
                case "StringDictType":
                    return new S.StringDictType(dataType(at(json, 0)));
                case "StringType":
                    return new S.StringType();
                case "TupleType":
                    return new S.TupleType(at(json, 0).map(dataType));
                case "TypeReference":
                    return new S.TypeReference(at(json, 0));
                default:
                    throw new Error("failed to parse a data type");
            }
        }
        function field(json) {
            return new S.Field(json.FieldName, dataType(json.FieldType));
        }
        function record(json) {
            return new S.Record(json.RecordName, json.RecordFields.map(field));
        }
        function unionCase(json) {
            return new S.UnionCase(json.CaseName, json.CaseFields.map(field));
        }
        function union(json) {
            return new S.Union(json.UnionName, json.UnionCases.map(unionCase));
        }
        function enumCase(json) {
            return new S.EnumCase(json.EnumCaseName, json.EnumCaseValue);
        }
        function parseEnum(json) {
            return new S.Enum(json.EnumName, json.EnumCases.map(enumCase));
        }
        function parseTypeDefinition(json) {
            switch (tag(json)) {
                case "DefineRecord": return new S.DefineRecord(record(at(json, 0)));
                case "DefineUnion": return new S.DefineUnion(union(at(json, 0)));
                case "DefineEnum": return new S.DefineEnum(parseEnum(at(json, 0)));
                default: throw new Error("error parsing type definition");
            }
        }
        RawSchemaJsonParser.parseTypeDefinition = parseTypeDefinition;
        function parameter(json) {
            return new S.Parameter(json.ParameterName, dataType(json.ParameterType));
        }
        function httpMethod(json) {
            switch (tag(json)) {
                case "Delete": return new S.Delete();
                case "Get": return new S.Get();
                case "Post": return new S.Post();
                case "Put": return new S.Put();
                default: throw new Error("error pasring http method");
            }
        }
        function callingConvention(json) {
            switch (tag(json)) {
                case "HttpCallingConvention": return new S.HttpCallingConvention(httpMethod(at(json, 0)), at(json, 1));
                default: throw new Error("error parsing calling convention");
            }
        }
        function opt(json, parse) {
            if (json === null) {
                return Option.none();
            }
            else {
                return Option.some(parse(json[0]));
            }
        }
        function method(json) {
            var cc = callingConvention(json.CallingConvention);
            var methodName = json.MethodName;
            var methodParameters = json.MethodParameters.map(parameter);
            var methodReturnType = opt(json.MethodReturnType, dataType);
            return new S.Method(cc, methodName, methodParameters, methodReturnType);
        }
        function parseServiceSchema(json) {
            return new S.Service(json.Methods.map(method), json.TypeDefinitions.map(parseTypeDefinition));
        }
        RawSchemaJsonParser.parseServiceSchema = parseServiceSchema;
    })(RawSchemaJsonParser || (RawSchemaJsonParser = {}));
    var Internals;
    (function (Internals) {
        var serializerService = new SerializerService();
        var methodBuilder = new MethodBuilder(serializerService);
        function toJSON(typeRef, value) {
            return serializerService.getSerializer(new S.TypeReference(typeRef)).toJSON(value);
        }
        Internals.toJSON = toJSON;
        function fromJSON(typeRef, json) {
            return serializerService.getSerializer(new S.TypeReference(typeRef)).fromJSON(json);
        }
        Internals.fromJSON = fromJSON;
        function registerActivators(raw) {
            var activators = [];
            function addActivator(typeId, func) {
                activators.push({
                    typeId: key,
                    createInstance: function (args) { return func.apply(null, args); }
                });
            }
            for (var key in raw) {
                addActivator(key, raw[key]);
            }
            serializerService.registerActivators(activators);
        }
        Internals.registerActivators = registerActivators;
        function registerTypeDefinitions(rawTypeDefJson) {
            var typeDefs = rawTypeDefJson.map(RawSchemaJsonParser.parseTypeDefinition);
            serializerService.registerTypes(typeDefs);
        }
        Internals.registerTypeDefinitions = registerTypeDefinitions;
        function registerService(rawServiceJson) {
            var service = RawSchemaJsonParser.parseServiceSchema(rawServiceJson);
            serializerService.registerTypes(service.TypeDefinitions);
            serializerService.registerServiceMethods(service.Methods);
            methodBuilder.registerService(service);
        }
        Internals.registerService = registerService;
        function remoteMethod(name) {
            return methodBuilder.remoteMethod(name);
        }
        Internals.remoteMethod = remoteMethod;
    })(Internals = Gluon.Internals || (Gluon.Internals = {}));
})(Gluon || (Gluon = {}));
Gluon.Internals.registerActivators({
    "Gluon.Schema.Delete": function () { return new Gluon.Schema.Delete(); },
    "Gluon.Schema.Get": function () { return new Gluon.Schema.Get(); },
    "Gluon.Schema.Post": function () { return new Gluon.Schema.Post(); },
    "Gluon.Schema.Put": function () { return new Gluon.Schema.Put(); },
    "Gluon.Schema.HttpCallingConvention": function (a, b) { return new Gluon.Schema.HttpCallingConvention(a, b); },
    "Gluon.Schema.ArrayType": function (a) { return new Gluon.Schema.ArrayType(a); },
    "Gluon.Schema.BooleanType": function () { return new Gluon.Schema.BooleanType(); },
    "Gluon.Schema.BytesType": function () { return new Gluon.Schema.BytesType(); },
    "Gluon.Schema.DateTimeType": function () { return new Gluon.Schema.DateTimeType(); },
    "Gluon.Schema.DoubleType": function () { return new Gluon.Schema.DoubleType(); },
    "Gluon.Schema.IntType": function () { return new Gluon.Schema.IntType(); },
    "Gluon.Schema.JsonType": function () { return new Gluon.Schema.JsonType(); },
    "Gluon.Schema.ListType": function (a) { return new Gluon.Schema.ListType(a); },
    "Gluon.Schema.OptionType": function (a) { return new Gluon.Schema.OptionType(a); },
    "Gluon.Schema.SequenceType": function (a) { return new Gluon.Schema.SequenceType(a); },
    "Gluon.Schema.StringDictType": function (a) { return new Gluon.Schema.StringDictType(a); },
    "Gluon.Schema.StringType": function () { return new Gluon.Schema.StringType(); },
    "Gluon.Schema.TupleType": function (a) { return new Gluon.Schema.TupleType(a); },
    "Gluon.Schema.TypeReference": function (a) { return new Gluon.Schema.TypeReference(a); },
    "Gluon.Schema.Parameter": function (a, b) { return new Gluon.Schema.Parameter(a, b); },
    "Gluon.Schema.Method": function (a, b, c, d) { return new Gluon.Schema.Method(a, b, c, d); },
    "Gluon.Schema.EnumCase": function (a, b) { return new Gluon.Schema.EnumCase(a, b); },
    "Gluon.Schema.Enum": function (a, b) { return new Gluon.Schema.Enum(a, b); },
    "Gluon.Schema.Field": function (a, b) { return new Gluon.Schema.Field(a, b); },
    "Gluon.Schema.Record": function (a, b) { return new Gluon.Schema.Record(a, b); },
    "Gluon.Schema.UnionCase": function (a, b) { return new Gluon.Schema.UnionCase(a, b); },
    "Gluon.Schema.Union": function (a, b) { return new Gluon.Schema.Union(a, b); },
    "Gluon.Schema.DefineEnum": function (a) { return new Gluon.Schema.DefineEnum(a); },
    "Gluon.Schema.DefineRecord": function (a) { return new Gluon.Schema.DefineRecord(a); },
    "Gluon.Schema.DefineUnion": function (a) { return new Gluon.Schema.DefineUnion(a); },
    "Gluon.Schema.Service": function (a, b) { return new Gluon.Schema.Service(a, b); }
});
Gluon.Internals.registerTypeDefinitions([["DefineUnion", { "UnionName": "Gluon.Schema.HttpMethod", "UnionCases": [{ "CaseName": "Delete", "CaseFields": [] }, { "CaseName": "Get", "CaseFields": [] }, { "CaseName": "Post", "CaseFields": [] }, { "CaseName": "Put", "CaseFields": [] }] }], ["DefineUnion", { "UnionName": "Gluon.Schema.CallingConvention", "UnionCases": [{ "CaseName": "HttpCallingConvention", "CaseFields": [{ "FieldName": "Item1", "FieldType": ["TypeReference", "Gluon.Schema.HttpMethod"] }, { "FieldName": "path", "FieldType": ["StringType"] }] }] }], ["DefineUnion", { "UnionName": "Gluon.Schema.DataType", "UnionCases": [{ "CaseName": "ArrayType", "CaseFields": [{ "FieldName": "Item", "FieldType": ["TypeReference", "Gluon.Schema.DataType"] }] }, { "CaseName": "BooleanType", "CaseFields": [] }, { "CaseName": "BytesType", "CaseFields": [] }, { "CaseName": "DateTimeType", "CaseFields": [] }, { "CaseName": "DoubleType", "CaseFields": [] }, { "CaseName": "IntType", "CaseFields": [] }, { "CaseName": "JsonType", "CaseFields": [] }, { "CaseName": "ListType", "CaseFields": [{ "FieldName": "Item", "FieldType": ["TypeReference", "Gluon.Schema.DataType"] }] }, { "CaseName": "OptionType", "CaseFields": [{ "FieldName": "Item", "FieldType": ["TypeReference", "Gluon.Schema.DataType"] }] }, { "CaseName": "SequenceType", "CaseFields": [{ "FieldName": "Item", "FieldType": ["TypeReference", "Gluon.Schema.DataType"] }] }, { "CaseName": "StringDictType", "CaseFields": [{ "FieldName": "Item", "FieldType": ["TypeReference", "Gluon.Schema.DataType"] }] }, { "CaseName": "StringType", "CaseFields": [] }, { "CaseName": "TupleType", "CaseFields": [{ "FieldName": "Item", "FieldType": ["ListType", ["TypeReference", "Gluon.Schema.DataType"]] }] }, { "CaseName": "TypeReference", "CaseFields": [{ "FieldName": "Item", "FieldType": ["StringType"] }] }] }], ["DefineRecord", { "RecordName": "Gluon.Schema.Parameter", "RecordFields": [{ "FieldName": "ParameterName", "FieldType": ["StringType"] }, { "FieldName": "ParameterType", "FieldType": ["TypeReference", "Gluon.Schema.DataType"] }] }], ["DefineRecord", { "RecordName": "Gluon.Schema.Method", "RecordFields": [{ "FieldName": "CallingConvention", "FieldType": ["TypeReference", "Gluon.Schema.CallingConvention"] }, { "FieldName": "MethodName", "FieldType": ["StringType"] }, { "FieldName": "MethodParameters", "FieldType": ["ListType", ["TypeReference", "Gluon.Schema.Parameter"]] }, { "FieldName": "MethodReturnType", "FieldType": ["OptionType", ["TypeReference", "Gluon.Schema.DataType"]] }] }], ["DefineRecord", { "RecordName": "Gluon.Schema.EnumCase", "RecordFields": [{ "FieldName": "EnumCaseName", "FieldType": ["StringType"] }, { "FieldName": "EnumCaseValue", "FieldType": ["IntType"] }] }], ["DefineRecord", { "RecordName": "Gluon.Schema.Enum", "RecordFields": [{ "FieldName": "EnumName", "FieldType": ["StringType"] }, { "FieldName": "EnumCases", "FieldType": ["ListType", ["TypeReference", "Gluon.Schema.EnumCase"]] }] }], ["DefineRecord", { "RecordName": "Gluon.Schema.Field", "RecordFields": [{ "FieldName": "FieldName", "FieldType": ["StringType"] }, { "FieldName": "FieldType", "FieldType": ["TypeReference", "Gluon.Schema.DataType"] }] }], ["DefineRecord", { "RecordName": "Gluon.Schema.Record", "RecordFields": [{ "FieldName": "RecordName", "FieldType": ["StringType"] }, { "FieldName": "RecordFields", "FieldType": ["ListType", ["TypeReference", "Gluon.Schema.Field"]] }] }], ["DefineRecord", { "RecordName": "Gluon.Schema.UnionCase", "RecordFields": [{ "FieldName": "CaseName", "FieldType": ["StringType"] }, { "FieldName": "CaseFields", "FieldType": ["ListType", ["TypeReference", "Gluon.Schema.Field"]] }] }], ["DefineRecord", { "RecordName": "Gluon.Schema.Union", "RecordFields": [{ "FieldName": "UnionName", "FieldType": ["StringType"] }, { "FieldName": "UnionCases", "FieldType": ["ListType", ["TypeReference", "Gluon.Schema.UnionCase"]] }] }], ["DefineUnion", { "UnionName": "Gluon.Schema.TypeDefinition", "UnionCases": [{ "CaseName": "DefineEnum", "CaseFields": [{ "FieldName": "Item", "FieldType": ["TypeReference", "Gluon.Schema.Enum"] }] }, { "CaseName": "DefineRecord", "CaseFields": [{ "FieldName": "Item", "FieldType": ["TypeReference", "Gluon.Schema.Record"] }] }, { "CaseName": "DefineUnion", "CaseFields": [{ "FieldName": "Item", "FieldType": ["TypeReference", "Gluon.Schema.Union"] }] }] }], ["DefineRecord", { "RecordName": "Gluon.Schema.Service", "RecordFields": [{ "FieldName": "Methods", "FieldType": ["ListType", ["TypeReference", "Gluon.Schema.Method"]] }, { "FieldName": "TypeDefinitions", "FieldType": ["ListType", ["TypeReference", "Gluon.Schema.TypeDefinition"]] }] }]]);
