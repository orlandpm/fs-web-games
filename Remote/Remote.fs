namespace Remote
open Gluon
open Main
open System.Collections.Generic

type TransmitWebItem = 
    | TBigHeader of string
    | THeader of string
    | TParagraph of string
    | TImage of heightPixels:int * widthPixels:int * url:string
    | TAction of label:string * id:int
    | TBox of TransmitWebItem list

module WebPageServer =

    let functionLookup = Dictionary<int,string->string>()

    let rand = System.Random()

    let rec transmit (wi:Main.WebPageItem) =
        match wi with
        | BigHeader s -> TBigHeader s
        | Header s -> THeader s
        | Paragraph s -> TParagraph s
        | Image (h,w,u) -> TImage (h,w,u)
        | Action (l,a) -> 
            let id = rand.Next(System.Int32.MinValue,System.Int32.MaxValue)
            functionLookup.Add(id, a)
            TAction (l,id)
        | Box xs -> TBox(List.map transmit xs)

    [<Remote>]
    let getWebPage() : TransmitWebItem list =
        Main.pageItems
        |> List.map transmit

    [<Remote>]
    let rpc(id:int, arg:string) = 
        functionLookup.[id](arg)
