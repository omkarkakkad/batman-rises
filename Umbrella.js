class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("bat/Bestman-01.png");
        
        
        this.body = Bodies.circle(x,y,50,options);
        this.r = 50;
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);

        image(this.image,pos.x,pos.y+50,200,300);
    }
}