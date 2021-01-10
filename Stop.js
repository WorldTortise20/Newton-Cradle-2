class rope {
    constructor(bodyA, pointB){ 
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 300,
           // stiffness: 1
        }
        this.pointB=pointB
        this.rope = Constraint.create(options); 
        World.add(world,this.rope);
    }
    display(){ 
        var pointA= this.rope.bodyA.position;
        var pB= this.pointB;
        push()
        strokeWeight(2);
        stroke("#fff");
        line (pointA.x,pointA.y, pB.x, pB.y);
        pop();
    }
}