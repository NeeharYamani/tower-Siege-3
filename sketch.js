const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1;
var score=0;

function preload() {
    getBackground();
   
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,480,400,20)

    ground2 = new Ground(1200,280,400,20)
	

    
    box2 = new Box(524,285,70,70);
    box3 = new Box(598,390,70,70);
    box4 = new Box(672,450,70,70);
    

    box6 = new Box(524,285,70,70);
    box7 = new Box(598,390,70,70);
    box8 = new Box(672,450,70,70);
    box9 = new Box(598,390,70,70);

    box10 = new Box(1060,100,70,70);
    box11 = new Box(1130,150,70,70);
    box12 = new Box(1200,200,70,70);
    box13 = new Box(1270,250,70,70);
    box14 = new Box(1341,200,70,70);
    box15 = new Box(1130,150,70,70);
    box16 = new Box(1200,200,70,70);
    box17 = new Box(1270,250,70,70);
    box18 = new Box(1200,200,70,70);

    hero = new Hero(220,400,30);

   slingshot = new Slingshot(hero.body, {x:200,y:180})

}

function draw(){
    background("maroon");
    Engine.update(engine);

    if(score==1280){
        textSize(150)
        fill("white")
        stroke("black")
        text("GAME OVER",300,405)
    }
    if(score==1280){
    textSize(45)
    fill("white")
    stroke("black")
    text("Refresh the page to Restart", 550,205)
    }

    
    textSize(35)
    fill("white")
    stroke("black");
    strokeWeight(10)
    text("Score:"+score, width-900,100);
   
    
    box2.display();
    ground.display();
    ground2.display();
    

    box3.display();
    box4.display();
   
    
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    hero.display();

    

    slingshot.display();

   
    box2.score();
    box3.score();
    box4.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();

    Engine.update(engine);

    stroke("white");
    strokeWeight(1);
    fill("white");
    text("Drag the Stone and Release it, to launch it towards the blocks",300,35);
        textSize(25);

        stroke("Blue");
    strokeWeight(7);
    fill("white");
    text("Press SPACE for a second chance ",600,605);
        textSize(45);
       
	
}
function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
    
}
function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(hero.body, {x: 220, y:400});
      slingshot.attach(hero.body);
    }
  }
  async function getBackground(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13)
    if(hour>=06 && hour<=19){
        background( "yellow")
    }
    else{
        background( "black")
    }
}
