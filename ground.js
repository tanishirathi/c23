class Ground {
constructor(x,y,width,height){
    var a={isStatic:true}
    this.body=Bodies.rectangle(x,y,width,height,a);
    this.width=width
    this.height=height
    World.add(world,this.body);

}
display(){
 var g= this.body.position
 rectMode(CENTER)
 rect(g.x,g.y,this.width,this.height);
}
}