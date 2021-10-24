class Cannon
{
  constructor(a,b,width,height)
  {
   this.x=a
   this.y=b
   this.width=width
this.height=height
   this.angle=angle
   var options={
       isStatic:true
       
   }
   //this.body=Bodies.circle(a,b,width,height,options)
   this.cannonTop=loadImage('assets/canon.png')
   this.cannonBase=loadImage('assets/cannonBase.png')
   //World.add(world,this.body)
  }

  display()
  {
    
      push()
    //CannonTop
    imageMode(CENTER)
    //rectMode(CENTER)
    image(this.cannonTop,this.x,this.y,this.width,this.height)
     pop()
    //CannonBase
    image(this.cannonBase,70,20,200,200)
    noFill()
  }
}

