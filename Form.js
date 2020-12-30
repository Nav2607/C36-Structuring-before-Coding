class Form {
    constructor(){

    }
    display(){
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(100,10);
        var input = createInput("Name:");
        input.position(100,100);
        var button = createButton("Start");
        button.position(100,200);
        var greating = createElement("h2")

    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount += 1;
        player.updateName(name);
        player.updateCount(playerCount);
        greating.html("Hello"+name)
        greating.position(200,200)
        
    })


    
    }
}