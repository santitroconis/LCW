var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var size = 50; 
canvas.width = size * 13;
canvas.height = size * 10;
//Frog 
var fx = (canvas.width / 2 - (size/2)), fy = canvas.height - size;

document.onkeydown = (e) => {
  if(e.repeat){
    return;
  }
  if (e.keyCode === 38) {
    console.log("up arrow pressed")
    if(fy > 0){
      fy -= size;
    }   
  } else if (e.keyCode === 40) {
    console.log("down arrow pressed");
    if(fy+size < canvas.height){
      fy += size;
 
    }
  } else if (e.keyCode === 37) {
    console.log("left arrow pressed");
    if(fx > 0){
      if(fx < 50){fx -= fx;}
        else{fx -= size;}
    }
  } else if (e.keyCode === 39) {
    console.log("right arrow pressed");
    if(fx+size < canvas.width){
      if(fx+size > (canvas.width-size))  {fx += (canvas.width - (fx+size))}
        else{fx += size;}
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  }
};


//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

var lx1 = 0; var lx2 = canvas.width; var lx3 = 150; var lx4 = canvas.width-size*2;
var lx5 = 400; var lx6 = canvas.width;+size*4; var lx7 = 0;
var ly1 = size;   var ly2 = size*2; var ly3 = size*3; var ly4 = size*5;
var ly5 = size*6; var ly6 = size*7; var ly7 = size*8;

var lv1 = 10; var lv2 = 5; var lv3 = 5; var lv4 = 10;
var lv5 = 25; var lv6 = 20; var lv7 = 5;

function Game(){
  

  this.draw = function() {
    drawBackground();
    drawLog(lx1, ly1); // 1
    drawTurtle();      // 2
    drawLog(lx3, ly3); // 3
                       //SIDEWALK
    drawCar(lx4, ly4); // 4
    drawCar(lx5, ly5); // 5
    drawCar(lx6, ly6); // 6
    drawCar(lx7, ly7); // 7

    drawFrog();
  }

  this.update = function() {
    
    this.draw();
    
    lx1 += lv1;
    lx2 -= lv2;
    lx3 += lv3;
    lx4 -= lv4;
    lx5 += lv5;
    lx6 -= lv6;
    lx7 += lv7;

    //LEFT VALIDATIONS
    if(lx1 >= canvas.width){
      lx1 = -lx1;
    }
    if(lx3 >= canvas.width){
      lx3 = -lx3;
    }
    if(lx5 >= canvas.width){
      lx5 = -lx5;
    }
    if(lx7 >= canvas.width){
      lx7 = -lx7;
    }
    
    //RIGHT VALIDATIONS
    if(lx2+size*3 <= 0){
      lx2 = canvas.width+size;
    }
    if(lx4+size*3 <= 0){
      lx4 = canvas.width+size;
    }
    if(lx6+size*3 <= 0){
      lx6 = canvas.width+size;
    }


    // ---------------------------  COLLISION  ---------------------------
    //GRASS COLLISION - (WIN)
    if(fy === 0 && (fx >=0 && fx<=canvas.width)){
      win();
    }

    //WATER COLLISION - (WATER)
    if((fy>=size && fy<=size*3) && (fx>=0 && fx<=canvas.width)){
      //Move on log //LOG
      if(ly1 === fy && ((fx+(size/2) >= lx1) && fx-(size/2) <= lx1 +size*4 )) {
        if(fx+50 < canvas.width) {fx += lv1;}
      }
      else if(ly2 === fy && (fx+(size/2)+size >= lx2 && fx-(size/2) <= lx2)) {
        if(fx > 0) {fx -= lv2;}
      }
      else if(ly3 === fy && (fx+(size/2) >= lx3 && fx-(size/2) <= lx3 +size*4 )) {
        if(fx+50 < canvas.width) {fx += lv3;}
      }
      else{
        Lose();
      }
    }
    //CAR COLLISION (L4)
    if(ly4 === fy && ((lx4 <= fx+size) && (lx4+size*2 >= fx ))) {
      Lose();
    }
    if(lx4+size*3 === 2){
      lx4 = canvas.width;
    }
    //CAR COLLISION (L5)
    if(ly5 === fy && ((lx5 <= fx+size) && (lx5+size*2 >= fx ))) {
      Lose();
    }
    if(lx5+size*3 === 2){
      lx5 = canvas.width;
    }
    //CAR COLLISION (L6)
    if(ly6 === fy && ((lx6 <= fx+size) && (lx6+size*2 >= fx ))) {
      Lose();
    }
    if(lx6+size*3 === 2){
      lx6 = canvas.width;
    }
    //CAR COLLISION (L7)
    if(ly7 === fy && ((lx7 <= fx+size) && (lx7+size*2 >= fx ))) {
      Lose();
    }
    if(lx7+size*3 === 2){
      lx7 = canvas.width;
    }
  }
}



game = new Game();

function animate() {
  // //FRAMES
  // setTimeout(() => {
  //   animate()
  // }, 33);
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);
  
  game.update();
  
}
animate();












//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function win(){

  c.fillStyle = 'Black';
  c.fillRect(150, 120, 350, 65);


  c.font = "50px arial";
  c.fillStyle = 'Yellow'
  c.fillText("COMPLETED",170, 170);
  setTimeout(() => {
    Lose();
  }, 2000);
}

function Lose(){
  fx = (canvas.width / 2 - (size/2));
  fy = canvas.height - size;

}


function drawBackground(){
//Grass (WIN) 
c.fillStyle = 'limegreen';
c.fillRect(0, 0, canvas.width, size);
//River
c.fillStyle = 'mediumturquoise';
c.fillRect(0, size, canvas.width, size*3);
//Sidewalk
c.fillStyle = 'grey';
c.fillRect(0, size*4, canvas.width, size);
//Road
c.fillStyle = 'black';
c.fillRect(0, size*5, canvas.width, size*4);
//Grass
c.fillStyle = 'limegreen';
c.fillRect(0, size*9, canvas.width, size);
}

function drawCar(x, y){
if(y === ly4 || y === ly6){c.fillStyle = 'blue';}else{c.fillStyle = 'red';}
  c.fillRect(x, y, size*2, size);
}

function drawLog(x, y){
  //-----------------------------  MOVEMENT  -----------------------------
  console.log("log");
  //-------------------------------  DRAW  -------------------------------
  c.fillStyle = 'sienna'
  c.fillRect(x, y, size*5, size);
}

function drawTurtle(){
  c.fillStyle = 'green'
  c.fillRect(lx2+1, ly2, size-2, size-2)
  c.fillRect(lx2+1 - size, ly2, size-2, size-2)
  c.fillStyle = 'chartreuse'
  c.fillRect(lx2+2 -size, ly2+1, size-4, size-4)
  c.fillRect(lx2+2, ly2+1, size-4, size-4)
}

function drawFrog(){

  c.fillStyle = 'green'
  //Body
  c.fillRect(10+fx, 8+fy, 30, 35);
  c.fillRect(15+fx, 1+fy, 20, 7.5);
  //Up legs
  c.fillRect(fx+1, 13+fy, 47, 5);
  //Down legs
  c.fillRect(fx+1, 38+fy, 47, 5);
  //Left up
  c.fillRect(fx+1, 8+fy, 6, 5);
  //Right up
  c.fillRect(42+fx, 8+fy, 6, 5);
  //Left down
  c.fillRect(fx+1, 43+fy, 6, 5);
  //Right down
  c.fillRect(42+fx, 43+fy, 6, 5);
  //Eyes
  c.fillStyle = 'green'
  c.fillRect(9+fx, 2+fy, 32, 6);
  c.fillStyle = 'white'
  c.fillRect(10+fx, 3+fy, 5, 5);
  c.fillRect(35+fx, 3+fy, 5, 5);
  c.fillStyle = 'black'
  c.fillRect(12+fx, 3+fy, 2, 2);
  c.fillRect(36+fx, 3+fy, 2, 2);
  c.fillRect(25+fx, 13+fy, 1, 25);  
}
  
