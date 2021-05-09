var pizza = ["Veggie Pizza","Deluxe Large Pizza","Olive Pizza","Panner Onion Pizza","Capsicum Pizza","Your Custom Pizza"];
function show(){
    var display = [];
    for (var i = 0;i < pizza.length;i++)
    {display.push("<h4>" + pizza[i] + "</h4> <br>");

    } 
    console.log (display);
var d = display.join(" ");
    
    
    document.getElementById("output").innerHTML = d;
}
function add_item(){
var p = document.getElementById("add_item").value;
    pizza.push(p);
    show();

}