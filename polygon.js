class Polygon extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }

    display(){
        polygon=Bodies.circle(50,200,20);
        World.add(world,polygon);
    }
  };
  