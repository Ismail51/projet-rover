const prompt = require("prompt")

var travelLog = []
var grid = [
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ],
    ["", "", "", "", "", "", "", "", "", "" ]
];
var rover = {
    direction: "N",
    x: 0,
    y: 0,
}

function turnLeft(rover){
    rover.direction 
    if(rover.direction == "N"){
        rover.direction = "W"
    }
    else if(rover.direction == "W"){
        rover.direction = "S"
    }
    else if(rover.direction == "S"){
        rover.direction = "E"
    }
    else if(rover.direction == "E"){
        rover.direction = "N"
    }
}

function turnRight(rover){
    rover.direction 
    if(rover.direction == "N"){
        rover.direction = "E"
    }
    else if(rover.direction == "E"){
        rover.direction = "S"
    }
    else if(rover.direction == "S"){
        rover.direction = "W"
    }
    else if(rover.direction == "W"){
        rover.direction = "N"
    }
}
console.log(grid.length);
function moveForward(rover){
    if(rover.direction == "N" && grid.length){
        rover.y--
    }
    else if(rover.direction == "S" && grid.length){
        rover.y ++
    }
    else if (rover.direction == "E" && grid.length){
        rover.x ++
    }
    else if (rover.direction == "W" && grid.length){
        rover.x --
    }
}

function piloteRover(commandes){
    getEntrie()
    for(i=0; i < commandes.length; i++){
        console.log(commandes[i]) 
        if(commandes[i] =="l"){
            turnLeft(rover)
        }
        else if(commandes[i] =="r"){
            turnRight(rover)
        }
        else if(commandes[i]=="f"){
            moveForward(rover)
        }
        console.log(rover);
        travelLog.push("X:"+rover.x,"Y:"+rover.y)
    }
    console.log("---->",travelLog);
    grid[rover.y][rover.x] = rover.direction

    
    console.table(grid)
}
function getEntrie(){
    prompt.start()
    prompt.get("commandes",(err,result)=>{
    piloteRover(result.commandes)
    })

}
getEntrie()






