class CanonBall
{

    constructor(a,b)
    {
        this.x=a
        this.y=b
        this.radius=30

        var options={
            isStatic:false
            
        }
        this.body=Bodies.circle(a,b,30,options)
World.add(world,this.body)
this.cannonBallImg=loadImage("assets/cannonBall.png")
    }
    
display()
{
    var bodyPosition=this.body.Position
    push()
    imageMode(CENTER)
    translate(bodyPosition.x,bodyPosition.y)
    image(this.cannonBallImg,0,0,this.radius,this.radius)
pop()

}
}