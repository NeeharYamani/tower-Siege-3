class Hero{
    constructor(x,y,radius){
        var options={
            isStatic:false,
			restitution:1,
            friction:1,
			density:1.5
        }
        this.x = x;
        this.y = y;
        this.radius= radius
        
          this.body = Bodies.circle(this.x,this.y,this.radius/2,options)
          World.add(world,this.body)
           
         
    }
    fly(){
        this.slingshot.bodyA = null;
    }
        display(){
            var ballpos = this.body.position;
            push()
            translate(ballpos.x,ballpos.y);
            fill("yellow");
            ellipseMode(RADIUS)
            stroke("yellow")
            ellipse(0,0,this.radius,this.radius)
            pop();
        }
}
