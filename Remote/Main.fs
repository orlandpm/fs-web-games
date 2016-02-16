module Main

type WebPageItem = 
    | BigHeader of string
    | Header of string
    | Paragraph of string
    | Image of heightPixels:int * widthPixels:int * url:string
    | Action of label:string * action:(string->string)
    | Box of WebPageItem list

type WebPage = WebPageItem list

let greet name = "Hello " + name + "!"

let someText = """Clawed lobsters comprise a family (Nephropidae, sometimes also Homaridae) of large marine crustaceans. They have long bodies with muscular tails, and live in crevices or burrows on the sea floor. Three of their five pairs of legs have claws, including the first pair, which are usually much larger than the others. Highly prized as seafood, lobsters are economically important, and are often one of the most profitable commodities in coastal areas they populate.[2] Commercially important species include two species of Homarus from the northern Atlantic Ocean, and scampi – the Northern Hemisphere genus Nephrops and the Southern Hemisphere genus Metanephrops. Although several other groups of crustaceans have the word "lobster" in their names, the unqualified term "lobster" generally refers to the clawed lobsters of the family Nephropidae.[3] Clawed lobsters are not closely related to spiny lobsters or slipper lobsters, which have no claws (chelae), or to squat lobsters. The closest living relatives of clawed lobsters are the reef lobsters and the three families of freshwater crayfish."""

let pageItems = 
    [
        BigHeader("My Site")
        Header("All About Lobsters")
        Paragraph(someText)
        Image(300,400,"http://store.davidtours.net/wp-content/uploads/lobster.jpeg")
        Header("Activity")
        Box([Action("Your name:", greet)])
        Header("Some more stuff")
        Box([Box([Box([Paragraph("Inside the boxes!")])])])
    ]