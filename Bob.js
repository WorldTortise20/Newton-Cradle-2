class Bob{
    constructor(x,y, radius){
        var options={
            restitution: 1.2,
            friction: -0.1,
            density: 3.1,
            isStatic: false,
            inertia: Infinity,
            //slop: 3
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.co = random(0,200),random(0,225),random(0,255);
        this.body = Bodies.circle(this.x,this.y,this.radius/2, options);
        World.add(world, this.body);
     }
   
     display(){
       var pos = this.body.position;
       push();
       translate(pos.x, pos.y);//helps with seeing the body
       stroke("red") //optional 
       strokeWeight(2); //optional 
       fill(this.co); //optional 
       ellipse(0,0, this.radius,this.radius); //helps with seeing body
       pop();
     }
   }
