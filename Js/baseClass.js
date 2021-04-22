class BaseClass{
    constructor(x, y, width, height,preload) {
        this.options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, this.options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/Asteroid.png");
        if(preload==true){
          World.add(world, this.body);
        }
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}