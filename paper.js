class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':2.3,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 30, 30, options);
      this.width = 40;
      this.height = 40;
      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      strokeWeight(5);
      stroke("red");
      fill("red");
      //rect(0, 0, this.width, this.height);
      pop();
    }
  };