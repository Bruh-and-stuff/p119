pastUttered = ""

function preload(){
    imClass = ml5.imageClassifier("DoodleNet")
}

function setup(){
    can = createCanvas(800, 800)
    can.center()
    background("white")

    can.mouseReleased(cC)
    synth = window.speechSynthesis
}

function draw(){
    strokeWeight(15)
    stroke(0)
    
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

//end of p5 predefined functions


function cC(){
    imClass.classify(can, firstplace)
}

function firstplace(error, results){
    if(error){
        console.error(error)
    }
    console.log(results)

    document.getElementById("name").innerHTML = "Name: " + results[0].label
    document.getElementById("accuracy").innerHTML = "Confidence: " + Math.round(results[0].confidence*100) + "%"

    if(results[0].label != pastUttered){
        pastUttered = results[0].label
        utterThis = new SpeechSynthesisUtterance(results[0].label)
        synth.speak(utterThis) 
    }
    
    
}

function chalkboarderaserbang(){
    console.log("Why are we here")
    background("white")
}