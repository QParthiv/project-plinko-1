class Ground {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(240, 775, 480, 20);
      this.width = width;
      this.heigth = height;
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };