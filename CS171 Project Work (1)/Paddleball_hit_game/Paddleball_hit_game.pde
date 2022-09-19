// Program to assist with entertainment.
//  E.olabode
// Last edit 17/12/2020
import ddf.minim.*;  //importing music into the game

Minim minim;              //using processing libray( Processing libray)
AudioPlayer groove;



float dax;       // declaring this variable names for the height and width of the game 

float day;

float bax;

float bay;

float baxs;

float bays;

float vex;

float vey;

float circleX;  //declaring for a obstacle ball to spin forward and backward in same direction

float Xspeed=7;  // setting the ball speed to 50 after reaching the far end.

int baddle1=0;

int baddle2=0;
//int p1 = 0;
//int p2 = 0;

boolean shoot=true;        //setting boolean values(lecture codes)
      
boolean shoot1=true;

boolean shoot2=true;

p1  play;  //declaring variable names for the 3 material needed 

ball b;

player2  p;

PImage paddle1;      //for the used of sprite the images needs to be declared first. 

PImage ball;

PImage paddle2;

PImage court;

void setup(){

  minim = new Minim(this);
  groove = minim.loadFile("pong music.mp3"); // applying your music file.mp3
  groove.loop();     
  frameRate(100); //increase the frameCount to determine the speed of the ball
  
  size(800,600,P3D);  //setting the size 800 because the background needs to be fitted.
    
 
 circleX =Xspeed;
 
  
  paddle1=loadImage("fancy-paddle-blue.png"); //inventing sprite into the code (https://opengameart.org)
  
  ball=loadImage("fancy-ball.png");
  
  paddle2=loadImage("fancy-paddle-green.png");
  
  court = loadImage("fancy-court.png");
  
  dax=30;
  
  day=height/2-50; //setting the height and the width to be subtracted and divided by 2
  
  bax=width/2;
  
  bay=height/2;
  
  baxs=-2;
  
  bays=1;
  
  vex=width-60;
  
  vey=height/2-50;
}
void draw(){   //display my draw block
 
  background(court);  //setting background to the sprite image

  fill(255,255,0);
  
  stroke(255);
  
  ellipse(circleX,height/2,32,32);  
  
  circleX = circleX + Xspeed;  //Setting the speed for the obstacle ball
  
  if (circleX > width){        // Using a statement to postion the obstacle ball and making sure it rotates left and right at same position.
  
    Xspeed = -15;             
}
if (circleX<0)

{

  Xspeed = 15;
}

  p1 play = new p1();
  
  player2 p = new player2();          //declaring the values for the player to view their count
  
  ball b = new ball();
  
  play.view();play.input();play.update();
  
  b.view();b.update();
  
  p.view();p.update();
  
  count();
}



void reset(){

  dax=30;
  
  day=height/2-50;      //Setting a reset counter when a ball goes out its range
  
  bax=width/2;
  
  bay=height/2;
  
  baxs=-2;
  
  bays=1;
  
  vex=width-60;
  
  vey=height/2-50;
  
  shoot=true;
  
  shoot1=true;
  
  shoot2=true;
}
void count(){             //creating a void count 

  textSize(22);
  
  text(""+baddle1,15,25);
  
  text(""+baddle2,500-25,20);
  
  
                                   //Setting the counter up so when a player scores a point it increses their value
  if (baddle1>=7){
  
    shoot=false;
    
    shoot1=false;
    
    shoot2=false;
    
    baxs=0;bays=0;
    
    text("Your the champion : Player2 \n Press Space key \n to start over ",400/2-40,300/2-10);   //A statement to determine the winner
    
    if (keyPressed){         //placing a keypressed function for the first paddle
    
      if (key==' '){
      
        reset();baddle1=0;baddle2=0;
      }
    }
  }
  if (baddle2>=7){            //placing a keypressed function for the second paddle
  
    shoot=false;
    
    shoot1=false;
    
    shoot2=false;
    
    baxs=0;bays=0;
    
    text("Your the champion : Player1 \n Press Space key \n to start over ",500/2-50,400/2-10);
    
    if (keyPressed){
    
      if (key==' '){
      
        reset();baddle1=0;baddle2=0;
      }
    }
  }
}

class p1

{

  void view(){         //declaring a view block and a update statement
  
    if (shoot){
    

      image(paddle1,dax,day);  // viewing the image of the paddle and setting the height
      
    }
  }
  void update(){
  
    if (day<0){
    
      day+=10;
    
  } else if (day+64>height){
  
    day-=10;
    
  }
  
}

  void input(){              // using a key pressed function to move the first paddle (https://processing.org/)
  
    if (keyPressed){
    
      if (key=='n')
      
       {day+=5;}
      
      if (key== 'm')
      
     {day-=5;}
         
   }
    }
  }


class ball

{

  void view(){
                                 //view the ball
    if (shoot1){
    
      image(ball,bax,bay);
    }
  }
  
  void update(){            //update statement
  
    bax = bax + baxs;
    
    bay = bay + bays;
    
    //Vertical
    
    if (bax>vex-1){
    
      if (bay< vey+75&&bay>vey-1){
      
        baxs=-baxs+1;
      } else {
      
        reset();
        
        baddle2++;
      }
    }  
    
    if (bax<dax+25){
    
      if (bay<day+75&&bay>day-1){
     
        baxs=-baxs+1;
      } else {
      
        reset();
        
        baddle1++;
      }
    }
    //horizontal
    
    if (bay+16>height){
    
      bays=-bays;
    } else if (bay<0){
      
      bays=-bays;
    }
  }
}
class player2
{
   
  void view(){           //viewing the second paddle
  
    if (shoot2){
    
      image(paddle2,vex,vey);
      //System.out.print(p2);

     }
   }
   
   void update(){            //Also using a keypressed function of up and down  (https://processing.org/)
                         
   
     if (keyPressed){
     
       if (keyCode==UP){
       
         vey-=5;
       } 
       else if (keyCode==DOWN){
       
         vey+=5;
       }
     }
     
     if (vey+80>height){
     
       vey-=10;
     
   } else if (vey<0){
   
     vey+=10;
     }
   }
   }
