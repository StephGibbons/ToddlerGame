const circlepurple = document.getElementById('circlepurple');
const circleblue = document.getElementById('circleblue');
const circlered = document.getElementById('circlered');
const circleorange = document.getElementById('circleorange');
const circlegreen = document.getElementById('circlegreen');
const circleyellow = document.getElementById('circleyellow');

const purpleBlock = document.querySelector('.ColorPurple');
const blueBlock = document.querySelector('.ColorBlue');
const greenBlock = document.querySelector('.ColorGreen');
const yellowBlock = document.querySelector('.ColorYellow');
const orangeBlock = document.querySelector('.ColorOrange');
const redBlock = document.querySelector('.ColorRed');

var score = 0;

//const winningMessageTextElement = document.getElementById('winningMessageText');
//const winningMessageElement = document.getElementById('winningMessage')
//const restartButton = document.getElementById('restartButton')


//Circle Listeners

//purple
    circlepurple.addEventListener('dragstart', dragStart);
    circlepurple.addEventListener('dragend', dragEnd);
//blue
    circleblue.addEventListener('dragstart', dragStart);
    circleblue.addEventListener('dragend', dragEnd);
//green
    circlegreen.addEventListener('dragstart', dragStart);
    circlegreen.addEventListener('dragend', dragEnd);
//yellow
    circleyellow.addEventListener('dragstart', dragStart);
    circleyellow.addEventListener('dragend', dragEnd);
//orange
    circleorange.addEventListener('dragstart', dragStart);
    circleorange.addEventListener('dragend', dragEnd);
//red
    circlered.addEventListener('dragstart', dragStart);
    circlered.addEventListener('dragend', dragEnd);


//Colorblock Listeners

//purple
    purpleBlock.addEventListener('dragover', dragOver);
    purpleBlock.addEventListener('dragenter', dragEnter);
    purpleBlock.addEventListener('dragleave', dragLeave);
    purpleBlock.addEventListener('drop', dragDrop);
   
//blue
    blueBlock.addEventListener('dragover', dragOver);
    blueBlock.addEventListener('dragenter', dragEnter);
    blueBlock.addEventListener('dragleave', dragLeaveBlue);
    blueBlock.addEventListener('drop', dragDropBlue);
//green
    greenBlock.addEventListener('dragover', dragOver);
    greenBlock.addEventListener('dragenter', dragEnter);
    greenBlock.addEventListener('dragleave', dragLeaveGreen);
    greenBlock.addEventListener('drop', dragDropGreen);

//yellow
    yellowBlock.addEventListener('dragover', dragOver);
    yellowBlock.addEventListener('dragenter', dragEnter);
    yellowBlock.addEventListener('dragleave', dragLeaveYellow);
    yellowBlock.addEventListener('drop', dragDropYellow);
//orange
    orangeBlock.addEventListener('dragover', dragOver);
    orangeBlock.addEventListener('dragenter', dragEnter);
    orangeBlock.addEventListener('dragleave', dragLeaveOrange);
    orangeBlock.addEventListener('drop', dragDropOrange);
//red
    redBlock.addEventListener('dragover', dragOver);
    redBlock.addEventListener('dragenter', dragEnter);
    redBlock.addEventListener('dragleave', dragLeaveRed);
    redBlock.addEventListener('drop', dragDropRed); 





//Drag Functions
function dragStart(e){
    this.className += ' hold';
    setTimeout(()=>(this.className = 'invisible'),0);
    e.dataTransfer.setData("id", e.target.id);
    //winningMessageElement.classList.remove('show');
}

function dragEnd(){
    this.className = 'circle';
} 

function dragOver(e){
    e.preventDefault();
    this.classList.add('grow');
}

function dragEnter(e){
    e.preventDefault();

}

//colorspecificfunctions

//purple



function dragLeave(){
    this.className = 'ColorPurple';
}

function dragDrop(e){
    if(mouseOver = "purpleBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circlepurple"){
    this.className = 'ColorPurple';
    this.append(circlepurple);  
    score++;

    if (score===6){
        //winningMessageTextElement.innerText="Congratulations! You win!!";
       // winningMessageElement.classList.add('show');
        alert("You won the game, congratulations!");
       console.log(score);
        }

        }
    }  
}
//blue
function dragLeaveBlue(){
    this.className = 'ColorBlue';
}

function dragDropBlue(e){
    if(mouseOver = "blueBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circleblue"){
    this.className = 'ColorBlue';
    this.append(circleblue);
    score++; 
    
    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }

        }
    }
}

//green
function dragLeaveGreen(){
    this.className = 'ColorGreen';
}

function dragDropGreen(e){
    if(mouseOver = "greenBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circlegreen"){
    this.className = 'ColorGreen';
    this.append(circlegreen);  
    score++;

    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }

        }
    }
}

//yellow
function dragLeaveYellow(){
    this.className = 'ColorYellow';
}

function dragDropYellow(e){
    if(mouseOver = "yellowBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circleyellow"){
    this.className = 'ColorYellow';
    this.append(circleyellow);
    score++; 
    
    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }

        }
    }
}

//orange
function dragLeaveOrange(){
    this.className = 'ColorOrange';
}

function dragDropOrange(e){
    if(mouseOver = "orangeBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circleorange"){
    this.className = 'ColorOrange';
    this.append(circleorange);
    score++; 
    console.log(score); 

    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }

        }
    }
}

//red
function dragLeaveRed(){
    this.className = 'ColorRed';
}

function dragDropRed(e){
    if(mouseOver = "redBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circlered"){
    this.className = 'ColorRed';
    this.append(circlered); 
    score++; 
        }
    }
}


