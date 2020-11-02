class Box{
constructor(x,y,width,height){
    var b ={ 
    restitution:1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,b)
    World.add(world,this.body)
  }
  display(){
    var p=this.body.position
    rectMode (CENTER)
    fill ("red")
    rect(p.x,p.y,this.width,this.height);

  }
}











