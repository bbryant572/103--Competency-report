let hunger=100;
let happiness=20;
let energy=100;

function feed(){
    if(hunger>0){
        hunger=hunger-20;
    }
    if(happiness<100){
        happiness=happiness+20
    }
    console.log("Feed function");
    console.log(hunger);
    displayInfo();
}

function pet(){
    if(happiness<100){
        happiness=happiness+20
    }
    console.log("Happiness function");
    console.log(happiness);
    displayInfo();
}

function play(){
    console.log("Play function");
    happiness=happiness+5;
    energy=energy-10;
    console.log(energy);
    displayInfo();
}

function displayInfo(){
    document.getElementById("hungerPoints").innerHTML=hunger;
    document.getElementById("happinessPoints").innerHTML=happiness;
    document.getElementById("energyPoints").innerHTML=energy;
}
displayInfo();