class Form {
constructor(){

}

display(){
    var title = createElement('h2');
    title.html("Survey on helping migrant workers in COVID-19")
    title.postion(130,0);

    var input =createInput("Name");
    var button =creaButton('vote');
    var greeting = createElement('h3');

    input.position(130,160);
    button.position(250,200);

    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();

       nameCount+=1
        name.update(name)
        name.updateCount(nameCount);

        greeting.html("Hello " + name);
        greeting.position(130,160)



    }); 


}


}