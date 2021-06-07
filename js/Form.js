class Form{
    constructor(){

    }

    display(){
        var title = createElement("H1")
        title.html("Multiplayer Car Racing Game")
        title.position(130,0)

        var input = createInput("name")
        input.position(130,160)

        var button = createButton("play")
        button.position(250,200)

        var greeting = createElement("H2")
        button.mousePressed  (function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount+= 1
            player.update (name)
            player.updateCount(playerCount)

            greeting.html("Hello" + name)
            greeting.position(130,160)
        })
    }
}