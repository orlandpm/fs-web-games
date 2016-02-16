declare module Gluon.Schema {
    class Delete {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class Get {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class Post {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class Put {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    type HttpMethod = Delete | Get | Post | Put;
    class HttpCallingConvention {
        Item1: Gluon.Schema.HttpMethod;
        path: string;
        constructor(Item1: Gluon.Schema.HttpMethod, path: string);
        tag(): string;
        toJSON(): any;
    }
    type CallingConvention = HttpCallingConvention;
    class ArrayType {
        Item: Gluon.Schema.DataType;
        constructor(Item: Gluon.Schema.DataType);
        tag(): string;
        toJSON(): any;
    }
    class BooleanType {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class BytesType {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class DateTimeType {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class DoubleType {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class IntType {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class JsonType {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class ListType {
        Item: Gluon.Schema.DataType;
        constructor(Item: Gluon.Schema.DataType);
        tag(): string;
        toJSON(): any;
    }
    class OptionType {
        Item: Gluon.Schema.DataType;
        constructor(Item: Gluon.Schema.DataType);
        tag(): string;
        toJSON(): any;
    }
    class SequenceType {
        Item: Gluon.Schema.DataType;
        constructor(Item: Gluon.Schema.DataType);
        tag(): string;
        toJSON(): any;
    }
    class StringDictType {
        Item: Gluon.Schema.DataType;
        constructor(Item: Gluon.Schema.DataType);
        tag(): string;
        toJSON(): any;
    }
    class StringType {
        constructor();
        tag(): string;
        toJSON(): any;
    }
    class TupleType {
        Item: Gluon.Schema.DataType[];
        constructor(Item: Gluon.Schema.DataType[]);
        tag(): string;
        toJSON(): any;
    }
    class TypeReference {
        Item: string;
        constructor(Item: string);
        tag(): string;
        toJSON(): any;
    }
    type DataType = ArrayType | BooleanType | BytesType | DateTimeType | DoubleType | IntType | JsonType | ListType | OptionType | SequenceType | StringDictType | StringType | TupleType | TypeReference;
    class Parameter {
        ParameterName: string;
        ParameterType: Gluon.Schema.DataType;
        constructor(ParameterName: string, ParameterType: Gluon.Schema.DataType);
        static fromJSON(json: any): Parameter;
        tag(): string;
        toJSON(): any;
    }
    class Method {
        CallingConvention: Gluon.Schema.CallingConvention;
        MethodName: string;
        MethodParameters: Gluon.Schema.Parameter[];
        MethodReturnType: Gluon.Option<Gluon.Schema.DataType>;
        constructor(CallingConvention: Gluon.Schema.CallingConvention, MethodName: string, MethodParameters: Gluon.Schema.Parameter[], MethodReturnType: Gluon.Option<Gluon.Schema.DataType>);
        static fromJSON(json: any): Method;
        tag(): string;
        toJSON(): any;
    }
    class EnumCase {
        EnumCaseName: string;
        EnumCaseValue: number;
        constructor(EnumCaseName: string, EnumCaseValue: number);
        static fromJSON(json: any): EnumCase;
        tag(): string;
        toJSON(): any;
    }
    class Enum {
        EnumName: string;
        EnumCases: Gluon.Schema.EnumCase[];
        constructor(EnumName: string, EnumCases: Gluon.Schema.EnumCase[]);
        static fromJSON(json: any): Enum;
        tag(): string;
        toJSON(): any;
    }
    class Field {
        FieldName: string;
        FieldType: Gluon.Schema.DataType;
        constructor(FieldName: string, FieldType: Gluon.Schema.DataType);
        static fromJSON(json: any): Field;
        tag(): string;
        toJSON(): any;
    }
    class Record {
        RecordName: string;
        RecordFields: Gluon.Schema.Field[];
        constructor(RecordName: string, RecordFields: Gluon.Schema.Field[]);
        static fromJSON(json: any): Record;
        tag(): string;
        toJSON(): any;
    }
    class UnionCase {
        CaseName: string;
        CaseFields: Gluon.Schema.Field[];
        constructor(CaseName: string, CaseFields: Gluon.Schema.Field[]);
        static fromJSON(json: any): UnionCase;
        tag(): string;
        toJSON(): any;
    }
    class Union {
        UnionName: string;
        UnionCases: Gluon.Schema.UnionCase[];
        constructor(UnionName: string, UnionCases: Gluon.Schema.UnionCase[]);
        static fromJSON(json: any): Union;
        tag(): string;
        toJSON(): any;
    }
    class DefineEnum {
        Item: Gluon.Schema.Enum;
        constructor(Item: Gluon.Schema.Enum);
        tag(): string;
        toJSON(): any;
    }
    class DefineRecord {
        Item: Gluon.Schema.Record;
        constructor(Item: Gluon.Schema.Record);
        tag(): string;
        toJSON(): any;
    }
    class DefineUnion {
        Item: Gluon.Schema.Union;
        constructor(Item: Gluon.Schema.Union);
        tag(): string;
        toJSON(): any;
    }
    type TypeDefinition = DefineEnum | DefineRecord | DefineUnion;
    class Service {
        Methods: Gluon.Schema.Method[];
        TypeDefinitions: Gluon.Schema.TypeDefinition[];
        constructor(Methods: Gluon.Schema.Method[], TypeDefinitions: Gluon.Schema.TypeDefinition[]);
        static fromJSON(json: any): Service;
        tag(): string;
        toJSON(): any;
    }
}
declare module Gluon.Schema.HttpMethod {
    function fromJSON(json: any): HttpMethod;
    function match<T>(value: Gluon.Schema.HttpMethod, cont: {
        Delete: (() => T);
        Get: (() => T);
        Post: (() => T);
        Put: (() => T);
    }): T;
}
declare module Gluon.Schema.CallingConvention {
    function fromJSON(json: any): CallingConvention;
    function match<T>(value: Gluon.Schema.CallingConvention, cont: {
        HttpCallingConvention: ((Item1: Gluon.Schema.HttpMethod, path: string) => T);
    }): T;
}
declare module Gluon.Schema.DataType {
    function fromJSON(json: any): DataType;
    function match<T>(value: Gluon.Schema.DataType, cont: {
        ArrayType: ((Item: Gluon.Schema.DataType) => T);
        BooleanType: (() => T);
        BytesType: (() => T);
        DateTimeType: (() => T);
        DoubleType: (() => T);
        IntType: (() => T);
        JsonType: (() => T);
        ListType: ((Item: Gluon.Schema.DataType) => T);
        OptionType: ((Item: Gluon.Schema.DataType) => T);
        SequenceType: ((Item: Gluon.Schema.DataType) => T);
        StringDictType: ((Item: Gluon.Schema.DataType) => T);
        StringType: (() => T);
        TupleType: ((Item: Gluon.Schema.DataType[]) => T);
        TypeReference: ((Item: string) => T);
    }): T;
}
declare module Gluon.Schema.TypeDefinition {
    function fromJSON(json: any): TypeDefinition;
    function match<T>(value: Gluon.Schema.TypeDefinition, cont: {
        DefineEnum: ((Item: Gluon.Schema.Enum) => T);
        DefineRecord: ((Item: Gluon.Schema.Record) => T);
        DefineUnion: ((Item: Gluon.Schema.Union) => T);
    }): T;
}
declare module Gluon {
    class Option<T> {
        isSome: boolean;
        value: T;
        constructor(isSome: boolean, value: T);
        withDefault(defaultValue: T): T;
        toJSON(): any;
    }
    module Option {
        function some<T>(value: T): Option<T>;
        function none<T>(): Option<T>;
        function fromJSON<T>(json: any): Option<T>;
    }
    class Dict<T> {
        private data;
        private check(key);
        containsKey(key: string): boolean;
        forEach(visit: (key: string, element: T) => void): void;
        copy(): Dict<T>;
        at(key: string): T;
        tryFind(key: string): Option<T>;
        setAt(key: string, value: T): void;
        toJSON(): any;
    }
    interface IActivator {
        createInstance(args: any[]): any;
        typeId: string;
    }
    class Client {
        prefix: string;
        httpClient: IHttpClient;
        constructor(prefix?: string);
    }
    interface RemoteMethod<T> {
        (client: Client): T;
    }
    interface IHttpClient {
        httpGet(url: string, queryParams: any, parseJsonResponse: (json: any) => any): JQueryPromise<any>;
        httpCall(httpMethod: string, url: string, jsonRequest: string, parseJsonResponse: (json: any) => any): JQueryPromise<any>;
    }
    module Internals {
        function toJSON(typeRef: string, value: any): any;
        function fromJSON(typeRef: string, json: any): any;
        function registerActivators(raw: any): void;
        function registerTypeDefinitions(rawTypeDefJson: any[]): void;
        function registerService(rawServiceJson: any): void;
        function remoteMethod<T>(name: string): RemoteMethod<T>;
    }
}
