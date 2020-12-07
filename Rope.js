  
class Rope{

    constructor(bodyA,pointB){
    
    var options={
    
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.4,
    length:400
    
    }
    
    this.pointB=pointB
    this.chain = Constraint.create(options)
    World.add(world,this.chain)
    
    }
    
    display(){
    
    var pointA=this.chain.bodyA.position
    var PointB=this.pointB
    
    line(pointA.x,pointA.y,PointB.x,PointB.y);
    
     }
    
    }