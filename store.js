class store{ 

construcutor(){}

getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
}

update(state){
    database.ref('/').update({
        gameState: state
    })
}

start(){
    if(gameState === 0){
        name = new name();
        name.getCount();
        form = new Form();
        form.display();


    }
}

}