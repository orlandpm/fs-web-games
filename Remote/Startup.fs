namespace Remote

open Owin
open global.Owin
open Microsoft.Owin
open Gluon

type Startup() =
    member x.Configuration(app: IAppBuilder) =
        app.MapGluon() |> ignore

[<assembly: OwinStartup(typeof<Startup>)>]
do ()