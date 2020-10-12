class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 255;
  }
  display() {
   if(this.body.speed<3){
      super.display();
   } else{
     World.remove(world,this.body);
    push();
    this.visibility = this.visibility-5
    tint(255,this.visibility);
    pop();
   }

  }
  score(){
    if (this.visiblity < 255 && this.visiblity > -1005){
      score = score+5;
    }
  }
};
