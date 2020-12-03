class Ground{

    constructor(){
        var options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(600,570,1280,20,options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1280,20);
    }
}